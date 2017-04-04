/*
Get and display all images 
I could not get this working.
I was trying to get all images in the directory and then cycle through them to create the thumbnails and lightbox code.
I had to repeat a lot of the same code in my index.html
*/
// $dirname = "/images/photos/thumbnails";
// $images = glob($dirname."*.jpg");

// foreach($images as $image) {
//     echo '<a class="gallery-thumbnails" href="images/photos/01.jpg" data-lightbox="gallery" data-title="Hay Bales <br />I love hay bales. Took this snap on a drive through the countryside past some straw fields."><img class="gallery-thumbnails" src="'.$image.'"></a>';
// };

/* All Images and Text */
// var imagesAndText = [
//     {imageOne: "images/photos/01.jpg",
//     imageOneThumbnail: "images/photos/thumbnails/01.jpg",
//     imageOneText: "Hay Bales <br />I love hay bales. Took this snap on a drive through the countryside past some straw fields."},
//     {imageTwo: "images/photos/02.jpg",
//     imageTwoThumbnail: "images/photos/thumbnails/02.jpg",
//     imageTwoText: "Lake <br />The lake was so calm today. We had a great view of the snow on the mountains from here."}
// ];

/* Search functionality */
//Get user input
var userInput = document.getElementById('search');
document.querySelector('form.form').addEventListener('keyup', function (e) {
    console.log(userInput.value);  // Testing to make sure input is collected correctly
    $('.gallery-image').each(function() { // Loop through all Gallery images/thumbnails
        console.log($(this).attr('data-title')); // Make sure attr is collected correctly
        if ($(this).attr('data-title').toLowerCase().indexOf(userInput.value.toLowerCase()) == -1) { // Check if current data-value == userInput
            $(this).hide(); // if it doesn't, hide
        } else {
            $(this).show(); // if it does, show
        }
    });
});

/* Lightbox */
lightbox.option({
    'showImageNumberLabel': false,
    'maxWidth': 600,
    'maxHeight': 375
});
