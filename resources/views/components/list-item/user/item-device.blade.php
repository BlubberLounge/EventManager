<div class="row mb-3">
    <div class="col-1">
        <i class="{{ $familyIcon }} device-browser-icon"></i>
    </div>
    <div class="col ms-3">
        <div class="row">
            <span>
                <i class="{{ $platformIcon }}" style="font-size: .8rem"></i>
                <i class="{{ $deviceTypeIcon }}" style="font-size: .8rem"></i>
                {{ $displayName }}
            </span>
        </div>
        <div class="row">
            <span class="text-muted">
                Letzte aktivität: {{ $lastActivity }}
            </span>
        </div>
    </div>
</div>
<hr />
