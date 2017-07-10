!function() {
  "use strict";
  
  function _iterate(items, func) {
    Array.prototype.forEach.call(items, func);
  }

  function _processPost(post) {
    _iterate(post.getElementsByTagName("img"), _processImage);
  }

  function _processImage(image) {
    var alt = image.alt;
        
    if (alt == '') {
      return;
    }
      
    var container = image.parentNode;
    var containerIsLink = container.tagName == "A";

    if (image.title == '' && (!containerIsLink || container.title == '')) {
      image.title = alt;
    }
      
    if (containerIsLink) {
      image = container;
      container = image.parentNode;
    }
    
    var figure = document.createElement("figure");
    var figcaption = document.createElement("figcaption");
    
    container.replaceChild(figure, image);
    
    figure.appendChild(image);
    figure.appendChild(figcaption);
    
    figcaption.appendChild(document.createTextNode(alt));
  }

  _iterate(document.getElementsByClassName("post-content"), _processPost);
}();