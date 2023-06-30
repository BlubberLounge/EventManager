/**
 * @author Maximilian Mewes
 *
 *
 */
import Acquaintance from "./acquaintance";

$(function()
{
    const acquaintance = new Acquaintance;

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
