<?php

namespace App\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Support\Collection;

use App\Models\UserSettingsMetadata;


class AddMetadata implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     *
     */
    public function apply(Builder $builder, Model $model): void
    {
        // We will apply a JOIN clause after executing the query in the database.
        // This adds the metadata to the Model regardless of the columns being
        // queried, or it will replace the "select all" statement smartly.
        $builder->beforeQuery(static function (QueryBuilder $builder) use ($model): void {

            $builder->join('user_settings_metadata', 'user_settings.user_settings_metadata_id', 'user_settings_metadata.id');

            if (empty($builder->columns)) {
                $builder->select(array_merge([$model->qualifyColumn('*')], static::getColumns()));
            } else {
                $builder->columns = (new Collection($builder->columns))
                    ->map([$model, 'qualifyColumn'])
                    ->toArray();

                $builder->addSelect(static::getColumns());
            }
        });
    }

    /**
     * Returns the columns to add to the query.
     *
     */
    protected static function getColumns(): array
    {
        $model = new UserSettingsMetadata();

        foreach ($columns = ['name', 'default', 'category'] as $key => $column)
            $columns[$key] = "{$model->qualifyColumn($column)} as $column";

        return $columns;
    }
}
