var interval = setInterval(function() {
  var divs = document.getElementsByTagName('div');
  for (var i = 0, l = divs.length; i < l; i++) {
    var div = divs[i];
    if (parseInt(div.style.zIndex) > 100) {
      div.style.display = "none";
      clearInterval(interval);
      break;
    }
  }
}, 100);
