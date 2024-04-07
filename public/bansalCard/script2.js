
  // Define arrays of messages for each friend
  var messages = {
    krrish: ['Maza aarha website par fraud insaan?, meri hatho ki mail hai ye , sambhal ke rakhiyo', 'If you\'re hot , sorry that statement is wrong , theres no if','10 rupay ki pepsi, meri bansal secccccyy','istg ,you\'re unbilieavably awesomeee','bansal , teri jaisi ladki flirt karne ke liye nhi bani , but mai konsa bunny hu ','tujhe dekha toh ye jana sanam ','you matter , aight , see the code if you dont believe its fuckin big','you know what you are ? cute, thats right','sur se lekar paer tujhe happy wala birthday meri jaan',`bet you thought, this was the only gift you were getting:https://open.spotify.com/playlist/2A3hulMd1oJNOvLk3oeE55?si=X9A2Nk4dTtSXUjcX0LRZJg&pi=a-IZ-S_5SkTJeg"`,],
    
    vij: ['9 years ive known you and you\'re still the most beautiful soul ive ever met','ALWAYS THE SILLIEST DUO IN THE ROOM W COUNTLESS INSIDE JOKES HEHE','i think it wasnt love that kept us bonded for years but it was def my greed for ritu aunty’s breath taking mind blasting khaana(specially grilled sandwiches).','bitching about the whole wold then saying saanu ki is our fav part time hobby','tere liye bande bulwa dungi by god if anyone ever tries to hurt my pasandida aurat ever','tere emo era se leke tera lover era sab dekha hai maine and istg i love you for making me experience what a real female friendship is.','from being a girl w just the same name to being the first one to know about every detail of my life, ive been in awe of you ever since.','from being a girl w just the same name to being the first one to know about every detail of my life, ive been in awe of you ever since.','agar itni smoothly kisi ladke ke saath flirt karliya na jitna tere saath karti hu by god 5-6 bande hote mere abhi tak.','youve always been there for me no matter what and i will always feel like home w you.','the first of birthdays when we arent there w each other but im sending you loads of hugs and kisses all the way from 7 samundar paar. i miss you sm.','and wo sab toh theek hai lekin MATERIAL TOH KHAALE MAATE hehe.','i love you sm bkl always keep smiling and apun idharich hai so tension nai lene ka re'],
    
    shreya:['Happy birthday magnificent human! Wishing you endless laughter and joy', 'No distance can ever break the bond we share as friends. :)', 'I hope to see u this year bishhhh( Teri sau 😁)', 'Remember the time we broke the tennis table during our play rehersals,Bansal, and I mean it, will you break more tables with me?💀', 'May your day be as bright and joyful as your future, and as wild and crazyas your,last Google search history!', 'This is the last year of your teenage....have a crazyy yearr','love you <3'],
    
    tanmay:['Happy birthday bansu','live long and prosper'],
    
    neer:['love you','Happy Birthday','you deserve all the happiness in the world' ],
    
    suhani:['Happy Birhtday','15 years & to ♾️!!','Gonna do all sorts of dumb stuff and come back to you always!! 💕','Tere pass koi option bhi nhi hai mujhe jhelne ke alawa, so nvm, love youu!! 🧿'],
    
    tejas:['Perfect example of cherry on life', 'Pta nhi kya ache karam kare the jo tu milli', 'When life gives you birthday cake, smash it on your face', 'Another year of giving life advised to random people', 'Still mother is mothering'],
    
    hasdeep:['Lame jokes ko quantity inc hoti rheti so yeah be ready 😉😉','You signed up for that so yesss I\'ll irritate u ache se but ek had tak hi taaki zyada tang bhi na ho jaaye ammmi 🫶🫶','Thank you for supporting me each and everytime I came up to you with a problem ✨✨','Cheers to our frndship being 7 to 8 yrs old and more such beautiful years to come ✨✨','Loved to have a frnd like u who legit cares like a mother and always give genuine advicesss ✨💫']
};
  
  // Define pointers for each friend
  var pointers = {
    krrish: 0,
    vij: 0,
    shreya:0,
    tanmay:0,     
    neer:0,
    suhani:0,
    tejas:0,
    hasdeep:0
  };

var currentMessage = null; // Variable to store reference to the current message element

var topPosition = 10; // Initial top position for the first message

// Add click event listeners to each card
document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
      var id = this.id; // Get the id of the clicked card
      
      // Get the message for the current friend using the pointer
      var message = messages[id][pointers[id]];
      
      // Create a message element
      var messageElement = document.createElement('p');
      messageElement.textContent = message;
      messageElement.className = 'message'; // Add a class for styling
      
      // Append the message element to the body
      document.body.appendChild(messageElement);
      
      // Position the message element randomly on the screen
      positionMessage(messageElement);
      
      // Set a timeout to remove the message element after 5 seconds
      setTimeout(function() {
        messageElement.remove();
      }, 5000);
      
      // Increment the pointer for the current friend and wrap around if necessary
      pointers[id] = (pointers[id] + 1) % messages[id].length;
    });
  });
  
 // Function to position the message element randomly on the screen
function positionMessage(messageElement) {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var messageWidth = messageElement.offsetWidth;
    var messageHeight = messageElement.offsetHeight;
    
    // Randomly select left or right side for positioning
    var randomSide = Math.random() < 0.5 ? 'left' : 'right';
    
    // Calculate random positions within the screen bounds
    var randomTop = Math.random() * (screenHeight - messageHeight);
    
    // Set the position of the message element
    messageElement.style.position = 'fixed';
    messageElement.style[randomSide] = '0';
    messageElement.style.top = randomTop + 'px';
  }