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


const button = document.getElementById("notifications");
button.addEventListener("click", () => {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      randomNotification();
    }
  });
});

function randomNotification() {
    const notifTitle = "asdasdsad";
    const notifBody = `Created by me.`;
    const options = {
      body: notifBody,
    };
    new Notification(notifTitle, options);
    setTimeout(randomNotification, 30000);
  }



// function sendNotification (data) {
//     if (data == undefined || !data) { return false }
//     var title = (data.title === undefined) ? 'Notification' : data.title
//     var clickCallback = data.clickCallback
//     var message = (data.message === undefined) ? 'null' : data.message
//     var icon = (data.icon === undefined) ? 'https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/megaphone-64.png' : data.icon
//     var sendNotification = function (){
//         var notification = new Notification(title, {
//             icon: icon,
//             body: message
//         })
//         if (clickCallback !== undefined) {
//             notification.onclick = function () {
//                 clickCallback()
//                 notification.close()
//             }
//         }
//     }

//     if (!window.Notification) {
//         return false
//     } else {
//         if (Notification.permission === 'default') {
//             Notification.requestPermission(function (p) {
//                 if (p !== 'denied') {
//                     sendNotification()
//                 }
//             })
//         } else {
//             sendNotification()
//         }
//     }
// }
// sendNotification({
//   title: 'New Notification',
//   message: 'Your message goes here',
//   icon:'https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/megaphone-64.png',
//   clickCallback: function () {
//     alert('do something when clicked on notification');
//   }
// });
