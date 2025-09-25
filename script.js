window.addEventListener('load', function () {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.classList.add('loaded');
  setTimeout(function () {
    loadingScreen.style.display = 'none';
  }, 1000);
});
window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    // Page was loaded from cache (user clicked back button)
    document.getElementById('loading-screen').style.display = 'none';
  }
});
