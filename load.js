redirectToAnotherPage = function() {
  
    setTimeout(function() {
    window.location.href = './src/pages/homepage.html';
        // Set a flag to indicate that redirection has occurred
      }, 3000); // 3000 milliseconds = 3 seconds
  };
  
// Call the redirect function when the page loads
window.onload = redirectToAnotherPage;