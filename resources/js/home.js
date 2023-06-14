/**
 * @author Maximilian Mewes
 *
 *
 */

import Timetable from "./timetable";

$(function()
{
    const timetable = new Timetable('timetableTable');

    const popoverTriggerList = $('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, {
        html: true,
        title: function() {
            let date = moment(popoverTriggerEl.getAttribute('data-bl-date'));
            return 'Status ändern vom ' + date.format('DD.MM.YYYY');
        },
        content: function () {
            return timetable.getActions(popoverTriggerEl);
        }
      }));

    // Make sure only one popover is active at one time
    //  Source:: https://stackoverflow.com/questions/11703093/how-to-dismiss-a-twitter-bootstrap-popover-by-clicking-outside
    $('body').on('click', function (e) {
        $('[data-bs-toggle="popover"]').each(function () {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });
});


