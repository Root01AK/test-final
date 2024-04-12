document.getElementById('zoom-in').addEventListener('click', function() {
    zoom(0.1); // Increase scale by 10%
  });
  
  document.getElementById('zoom-out').addEventListener('click', function() {
    zoom(-0.1); // Decrease scale by 10%
  });
  
  function zoom(factor) {
    var zoomContainer = document.getElementById('zoom-container');
    var currentScale = parseFloat(window.getComputedStyle(zoomContainer).getPropertyValue('transform').split(',')[3]) || 1;
    var newScale = currentScale + factor;
    zoomContainer.style.transform = 'scale(' + newScale + ')';
  }
  