<section id="account-debug">
    <h3 class="text-center">
        <i class="fa-solid fa-bugs fa-flip-horizontal"></i>
            Development
        <i class="fa-solid fa-bugs"></i>
    </h3>
    <a href="#">
        <div class="row">
            <div class="col-1">
                <i class="fa-solid fa-circle-info"></i>
            </div>
            <div class="col">
                <span> System Information </span>
            </div>
        </div>
    </a>
    <hr />
    <a href="{{ route('l5-swagger.default.api') }}" target="_blank" rel="noopener noreferrer">
        <div class="row">
            <div class="col-1">
                <i class="fa-solid fa-book"></i>
            </div>
            <div class="col">
                <span> Api Documentation </span>
            </div>
        </div>
    </a>
    <hr />
    <a href="{{ route('debug.AuditLog') }}" target="_blank" rel="noopener noreferrer">
        <div class="row">
            <div class="col-1">
                <i class="fa-solid fa-list"></i>
            </div>
            <div class="col">
                <span> Audit-log </span>
            </div>
        </div>
    </a>
</section>
