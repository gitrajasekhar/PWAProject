
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/src/sw.js')
      .then(function() {
        console.log('Service worker registered!');
      });
      
  }