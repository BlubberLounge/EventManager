<div class="row mb-3">
    <div class="col-1 d-flex justify-center">
        <i class="{{ $deviceTypeIcon }} device-browser-icon"></i>
    </div>
    <div class="col ms-3">
        <div class="row">
            <span>
                <i class="{{ $familyIcon }}" style="font-size: .8rem"></i>
                <i class="{{ $platformIcon }}" style="font-size: .8rem"></i>
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
