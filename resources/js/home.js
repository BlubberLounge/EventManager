/**
 * @author Maximilian Mewes
 *
 *
 */

import Timetable from "./timetable";
import Acquaintance from "./acquaintance";

$(function()
{
    const timetable = new Timetable('timetableTable');
    const acquaintance = new Acquaintance;

    const popoverTriggerList = $('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, {
        html: true,
        title: function() {
            let date = moment(popoverTriggerEl.getAttribute('data-bl-timetable-date'));
            return 'Status ändern vom ' + date.format('DD.MM.YYYY');
        },
        content: function () {
            return timetable.getActions(popoverTriggerEl);
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

    $('#acquaintances-accepted .btn-add-to-timetable').each((k, e) =>
    {
        var e = $(e); // convert to JQuery object
        e.on('click', (event) =>
        {
            let isActive = parseInt(e.attr('data-bl-acquaintance-active'));
            let id = e.attr('data-bl-acquaintance-id');

            if(isActive) {
                timetable.removeRow(id, $('[data-bl-timetable-user-id="'+id+'"]'));
                e.attr('data-bl-acquaintance-active', '0');

            } else {
                let rowIndex = e.closest('.row').index()
                timetable.addRow(id, rowIndex);
                e.attr('data-bl-acquaintance-active', '1');

            }
        });
    });

    $('.btn-acquaintance-accept').each((k, e) =>
    {
        var e = $(e); // convert to JQuery object
        e.on('click', (event) =>
        {
            acquaintance.updateByReceiverOrTransmitter(e.closest('div.row').attr('data-bl-acquaintance-id'), 'accepted');
        });
    });

    $('.btn-acquaintance-decline').each((k, e) =>
    {
        var e = $(e); // convert to JQuery object
        e.on('click', (event) =>
        {
            acquaintance.updateByReceiverOrTransmitter(e.closest('div.row').attr('data-bl-acquaintance-id'), 'denied');
        });
    });
});
