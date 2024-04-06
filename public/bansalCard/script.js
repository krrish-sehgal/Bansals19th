var clickCount = 0;
var maxClicks = 15;
var images = ["bansalCard/images/front-card.png", "bansalCard/images/back-card.png"];

document.getElementById('clickableImage').addEventListener('click', function() {
  clickCount++;

  if (clickCount >= maxClicks) {
    // Redirect to a new page after 15 clicks
    window.location.href = '/messages';
  } else {
    // Toggle between normal and enlarged size
    this.classList.toggle('enlargedSize');
    this.classList.toggle('normalSize');
    
    // Alternate between front-card and back-card images
    var currentIndex = clickCount % 2;
    this.src = images[currentIndex];
  }
});

document.getElementById('clickableImage').addEventListener('mousedown', function(event) {
  // Prevent text selection and image dragging on double-click
  if (event.detail > 1) {
    event.preventDefault();
  }
});
