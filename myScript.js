const messages = [
    "Goodmorning My love❤️",
    "Busy day starting again😞",
    "But we will get through this",
    "Please take care of yourself for me😘",
    "Don't forget that I always think about you🫵",
    "My heart is filled by you💓",
    "I love you more than yesterday😘❤️❣️💟💓"
  ];
  
  const messageElement = document.getElementById('message');
  const audio = document.getElementById('audio');
  
  let index = 0;
  
  function displayMessages() {
    if (index < messages.length) {
      messageElement.textContent = messages[index];
      index++;
      setTimeout(displayMessages, 2000);
    } else {
      audio.play();
    }
  }
  
  
  // Start displaying messages when the page loads
  window.onload = displayMessages;
  
  
  