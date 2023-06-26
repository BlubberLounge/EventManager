/**
 * @author Maximilian Mewes
 *
 *
 */

$(function()
{
    let btnFeedbackRatingList = $('.btn-feedback-rating');

    btnFeedbackRatingList.each((k, e) =>
    {
        $(e).click(event =>
        {
            let feedbackID = $(e).closest('div').data('bl-feedback-id');
            console.log(feedbackID);
            $.ajax({
                url: '/user/feedback/'+feedbackID,
                method: 'PUT',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                },
                data: {
                    status: $(e).data('bl-feedback-status'),
                },
                beforeSend: function() {
                },
                success: function(response) {
                    // console.log(response);
                    // most cheap
                    window.location.reload();
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // handle the error case
                    // console.log(errorThrown);
                    // TODO
                }
            });
        });
    });
});
