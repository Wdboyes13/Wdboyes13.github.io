function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
}
if (isMobile()){
    window.location.href = "/mobile.html"
}