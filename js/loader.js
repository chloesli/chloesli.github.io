console.log("ran");
function onReady(callback) {
    var loaderInt = window.setInterval(function() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(loaderInt);
        callback.call(this);
        }
    }, 1500);
}
  
function setVisible(selector, visible) {
document.querySelector(selector).style.display = visible ? 'block' : 'none';
}
  
  onReady(function() {
    setVisible('#fullpage', true);
    setVisible('#loader', false);
  });