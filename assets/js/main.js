// 區域錨點的視覺提示；內容與連結在未啟用 JavaScript 時仍可使用。
const regionLinks = document.querySelectorAll('.region-nav a');
function updateRegion() {
  regionLinks.forEach(link => {
    if (link.hash === window.location.hash) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('hashchange', updateRegion);
updateRegion();
