/**
 * @author Maximilian Mewes
 *
 *
 */

$(function()
{
    const popoverTriggerList = $('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, {
        html: true,
        title: function() {
            let date = moment(popoverTriggerEl.getAttribute('data-bl-date'));
            return 'Status ändern vom ' + date.format('DD.MM.YYYY');
        },
        content: function () {
            let type = popoverTriggerEl.classList.contains("check")
                ? 'available'
                : popoverTriggerEl.classList.contains("unkown")
                    ? 'maybe'
                    : popoverTriggerEl.classList.contains("x")
                        ? 'noTime' : null;

            let container = document.createElement("form");
            container.setAttribute('style', 'display: flex;');

            let baseInput = document.createElement("input");
            baseInput.type = "radio";
            baseInput.classList.add('btn-check');
            baseInput.name = "baseBtn";
            baseInput.id = "baseBtn";
            baseInput.autocomplete = 'off';

            let baseLabel = document.createElement("label");
            baseLabel.classList.add('btn', 'timetable-btn');
            baseLabel.for = "baseBtn";
            baseLabel.innerHTML = 'baseLabel';

            // Button Available
            let btnAvailable = baseInput.cloneNode(true);
            btnAvailable.name = "btn";
            btnAvailable.id = "btnAvailable";
            btnAvailable.checked = type == "available";
            let labelAvailable = baseLabel.cloneNode(true);
            labelAvailable.classList.add('btn-success');
            labelAvailable.innerHTML = '<i class="fa-solid fa-check"></i>';
            labelAvailable.setAttribute('for', "btnAvailable");

            container.appendChild(btnAvailable);
            container.appendChild(labelAvailable);


            // Button Maybe
            let btnMaybe = baseInput.cloneNode(true);
            btnMaybe.name = "btn";
            btnMaybe.id = "btnMaybe";
            btnMaybe.checked = type == "maybe";
            let labelMaybe = baseLabel.cloneNode(true);
            labelMaybe.classList.add('btn-warning');
            labelMaybe.innerHTML = '<i class="fa-solid fa-question"></i>';
            labelMaybe.setAttribute('for', "btnMaybe");

            container.appendChild(btnMaybe);
            container.appendChild(labelMaybe);


            // Button Maybe
            let btnNoTime = baseInput.cloneNode(true);
            btnNoTime.name = "btn";
            btnNoTime.id = "btnNoTime";
            btnNoTime.checked = type == "noTime";
            let labelNoTime = baseLabel.cloneNode(true);
            labelNoTime.classList.add('btn-danger');
            labelNoTime.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            labelNoTime.setAttribute('for', "btnNoTime");

            container.appendChild(btnNoTime);
            container.appendChild(labelNoTime);

            return container;
        }
      }));

    // Make sure only one popover is active at one time
    // [...popoverTriggerList].map(popoverTriggerEl => $(popoverTriggerEl).on('click', function (e)
    //     {
    //         $('.timetable-popover').not(this).popover('hide');
    //     }));

    //  Source:: https://stackoverflow.com/questions/11703093/how-to-dismiss-a-twitter-bootstrap-popover-by-clicking-outside
    $('body').on('click', function (e) {
    //     //did not click a popover toggle, or icon in popover toggle, or popover
    //     if ($(e.target).data('toggle') !== 'popover'
    //         && $(e.target).parents('[data-bs-toggle="popover"]').length === 0
    //         && $(e.target).parents('.popover.in').length === 0) {
    //         $('[data-bs-toggle="popover"]').popover('hide');
    //     }
        $('[data-bs-toggle="popover"]').each(function () {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });
});


