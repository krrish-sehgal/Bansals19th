document.addEventListener("DOMContentLoaded", function() {
    const card = document.getElementById("card");
    const openButton = document.getElementById("openButton");
    const closeButton = document.getElementById("closeButton");
  
    openButton.addEventListener("click", function() {
      card.classList.add("open");
    });
  
    closeButton.addEventListener("click", function() {
      card.classList.remove("open");
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const messageContainer = document.querySelector(".message-container");
  
    // Example messages
    const messages = [
      "Happy Birthday!",
      "Wishing you all the best on your special day!",
      "May all your dreams come true!"
    ];
  
    // Populate messages
    messages.forEach(message => {
      const div = document.createElement("div");
      div.classList.add("message");
      div.textContent = message;
      messageContainer.appendChild(div);
    });
  });
  