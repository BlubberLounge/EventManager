/**
 * @author Maximilian Mewes
 *
 *
 */

const AcquaintanceStaus = {
    PENDING: 'pending',
    ACCEPTED: 'accepted',
    DENIED:'denied',
};

/**
 *
 *
 */
class Acquaintance
{
	constructor()
    {
        this.apiBaseURL = '/api/v1';
        this.endpoint_updateByReceiverOrTransmitter = this.apiBaseURL+'/acquaintance/byReceiverOrTransmitter';
        this.factory = new AcquaintanceElementFactory;
        this.init();
    }

    init()
    {
        //
    }

    updateByReceiverOrTransmitter(id, status)
    {
        $.ajax({
            url: this.endpoint_updateByReceiverOrTransmitter+'/'+id,
            method: 'PUT',
            data: {
                status: AcquaintanceStaus[status.toUpperCase()],
            },
            beforeSend: function() {
            },
            success: function(response) {
                // console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // handle the error case
                // console.log(errorThrown);
            }
        });
    }
}

class AcquaintanceElementFactory
{
    constructor()
    {
    }

    createTemplateRow(id)
    {
        //
    }
}

// EXPORT
module.exports = Acquaintance;
