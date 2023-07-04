/**
 * @author Maximilian Mewes
 *
 *
 */

import Cropper from 'cropperjs';

$(function() {
    var cropper;
    var croppable = false;
    var URL = window.URL || window.webkitURL;
    const image = document.getElementById('image');

    var options = {
        aspectRatio: 1 / 1, // 1 = square
        preview: '.img-preview',
        viewMode: 1,
        ready: function (e) {
            croppable = true;
            // console.log(e.type);
        },
        cropstart: function (e) {
        //   console.log(e.type, e.detail.action);
        },
        cropend: function (e) {
        //   console.log(e.type, e.detail.action);
        },
      };
    var cropper = new Cropper(image, options);
    var originalImageURL = image.src;
    var uploadedImageType = 'image/jpeg';
    var uploadedImageName = 'cropped.jpg';
    var uploadedImageURL;

    $('#originalImage').change(e => {
        var files = e.currentTarget.files;
        var file;
        console.log(e.currentTarget.files);
        if (files && files.length) {
          file = files[0];

          console.log('uploaded image cahnged');
            if (/^image\/\w+/.test(file.type)) {
                uploadedImageType = file.type;
                uploadedImageName = file.name;

                if (uploadedImageURL) {
                    URL.revokeObjectURL(uploadedImageURL);
                }

                image.src = uploadedImageURL = URL.createObjectURL(file);

                console.log('uploaded image cahnged');
                if (cropper) {
                    cropper.destroy();
                }

                console.log('uploaded image cahnged');
                cropper = new Cropper(image, options);
                inputImage.value = null;
            } else {
                window.alert('Please choose an image file.');
            }
        }
    });

    $('#cropImage').click(e =>
    {
        if (!croppable)
            return;

        let canvas = cropper.getCroppedCanvas({ maxWidth: 4096, maxHeight: 4096 });
        $('#croppedImage').val(canvas.toDataURL());
    });
});
