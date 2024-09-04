    const texts = [
        'faster',
        'with ease',
        'efficiently'
    ];
    let currentIndex = 0;

    function changeText(newText) {
        const changeElement = document.getElementById('change');
        
        // Apply the scroll-down animation to the current text
        changeElement.classList.remove('scroll-up');
        changeElement.classList.add('scroll-down');

        // Wait for the scroll-down animation to complete before changing the text
        setTimeout(() => {
            changeElement.textContent = newText;
            
            // Apply the scroll-up animation to the new text
            changeElement.classList.remove('scroll-down');
            changeElement.classList.add('scroll-up');
        }, 800); // Match the duration of the scroll-down animation
    }

    function startScrolling() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            changeText(texts[currentIndex]);
        }, 2000);
    }

    // Start the text scrolling when the page loads
    document.addEventListener('DOMContentLoaded', startScrolling);


function ham() {
    const ul = document.querySelector('.ul');

    const blur = document.querySelector('.blur');


    const btn = document.querySelector('.side-btn');

    if (ul.style.display === "none" || ul.style.display === "" || btn.style.backgroundColor === "none") {

        ul.style.display = "block";
        blur.style.filter = "blur(5px)";
       btn.style.backgroundColor = "#6F5EDA";
    } else {
        ul.style.display = "none";
        blur.style.filter = "blur(0px)";
         btn.style.backgroundColor = "none";
    }
}

function removeBlurAndHideSide() {
    const ul = document.querySelector('.ul');
    const blur = document.querySelector('.blur');

    ul.style.display = "none";  // Hide the side menu
    blur.style.filter = "blur(0px)";  // Remove the blur effect

}

// Attach the removeBlurAndHideSide function to each link
document.querySelectorAll('.ul li a').forEach(link => {
    link.addEventListener('click', removeBlurAndHideSide);
});


document.addEventListener('DOMContentLoaded', function() {
            var video = document.getElementById('video');
            var canvas = document.getElementById('thumbnail');
            var ctx = canvas.getContext('2d');
            var thumbnailImg = document.getElementById('thumbnailImg');
            
            // Capture the thumbnail once the video metadata is loaded
            video.addEventListener('loadedmetadata', function() {
                // Set the canvas dimensions to match the video
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;

                // Seek the video to 1 second (or any other time to capture the frame)
                video.currentTime = 1;
            });

            // Once the video seeks to the specified time, capture the frame
            video.addEventListener('seeked', function() {
                // Draw the video frame on the canvas
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                // Convert the canvas to an image
                const dataURL = canvas.toDataURL();

                // Set the image source to the data URL
                thumbnailImg.src = dataURL;

                // Display the thumbnail and hide the video
                video.style.display = 'none';
                thumbnailImg.style.display = 'block';
            });

            // Add a click event listener to the thumbnail image
            thumbnailImg.addEventListener('click', function() {
                // Hide the thumbnail and show the video
                thumbnailImg.style.display = 'none';
                video.style.display = 'block';

                // Play the video
                video.play();
            });
        });



document.addEventListener('DOMContentLoaded', function() {
            var video = document.getElementById('vide');
            var canvas = document.getElementById('thumbnai');
            var ctx = canvas.getContext('2d');
            var thumbnailImg = document.getElementById('thumbnailIm');
            
            // Capture the thumbnail once the video metadata is loaded
            video.addEventListener('loadedmetadata', function() {
                // Set the canvas dimensions to match the video
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;

                // Seek the video to 1 second (or any other time to capture the frame)
                video.currentTime = 1;
            });

            // Once the video seeks to the specified time, capture the frame
            video.addEventListener('seeked', function() {
                // Draw the video frame on the canvas
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                // Convert the canvas to an image
                const dataURL = canvas.toDataURL();

                // Set the image source to the data URL
                thumbnailImg.src = dataURL;

                // Display the thumbnail and hide the video
                video.style.display = 'none';
                thumbnailImg.style.display = 'block';
            });

            // Add a click event listener to the thumbnail image
            thumbnailImg.addEventListener('click', function() {
                // Hide the thumbnail and show the video
                thumbnailImg.style.display = 'none';
                video.style.display = 'block';

                // Play the video
                video.play();
            });
        });

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', function() {
    const header = document.getElementById('header');

    const section = document.getElementById('scroll');


    if (window.scrollY > 50) {
header.style.backgroundColor='#fefefe';
header.style.position='fixed';
header.style.zIndex='1000';
header.style.width='100%';

header.style.boxShadow='1px 1px 30px 1px gray';


    } else if (window.scrollY < 50) {
  header.style.backgroundColor='none';      
        
    } else {
     header.style.backgroundColor='#30371B';
    }
});