const images = document.querySelectorAll('.enlargeable');
console.log(images)
images.forEach(image => {

    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)'; // Enlarge by 10%
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)'; // Restore to original size
    });
});

let firstSlideContainer = 
document.getElementsByClassName("slide--content")[0];

let secondSlideContainer = 
document.getElementsByClassName("slide--content--one")[0];

let secondCanvas = 
document.getElementsByClassName("second--canvas")[0];

secondSlideContainer.setAttribute("style","display:none");
secondCanvas.setAttribute("style","display:none");

let thirdCanvas = 
document.getElementsByClassName("third--canvas")[0];

thirdCanvas.setAttribute("style","display:none");



let containerToggleOne = setTimeout(function(){
	firstSlideContainer.setAttribute("style","display:none");
	secondSlideContainer.setAttribute("style","display:block");
},2500);


let removeFirstSlide = setTimeout(function(){
	document.getElementsByClassName("first--slide")[0].setAttribute("style","display:none;")
	secondCanvas.setAttribute("style","display:block");
},6500);

let removeSecondCanvas = setTimeout(function(){
	secondCanvas.setAttribute("style","display:none");
	thirdCanvas.setAttribute("style","display:block")
},9800)

document.addEventListener('click', function(event) {
	// Create a sparkle element
	var sparkle = document.createElement('div');
	sparkle.classList.add('sparkle');
  
	// Position the sparkle at the click coordinates
	sparkle.style.top = event.clientY + 'px';
	sparkle.style.left = event.clientX + 'px';
  
	  // Apply the changeColor animation to the sparkle
	  sparkle.style.animation = 'sparkleAnim 1s linear infinite alternate, changeColor 4s linear infinite';

	// Append the sparkle to the body
	document.body.appendChild(sparkle);
  
	// Remove the sparkle element after the animation completes
	sparkle.addEventListener('animationend', function() {
	  sparkle.remove();
	});
  });
  
  