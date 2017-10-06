!function() {
  "use strict";
  
  function _iterate(items, func) {
    Array.prototype.forEach.call(items, func);
  }

  function _processPost(post) {
    _iterate(post.getElementsByTagName("img"), _processImage);
    _iterate(post.getElementsByTagName("time"), _processTime);
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

  function _processTime(time) {
    var datetime = new Date(time.getAttribute("datetime"));

    var container = time.parentNode;

    var link = document.createElement("a");

    link.href = "https://www.timeanddate.com/worldclock/fixedtime.html?iso=" + datetime.toISOString();
    link.title = datetime.toLocaleString();

    container.replaceChild(link, time);

    link.appendChild(time);
  }

  _iterate(document.getElementsByClassName("post-content"), _processPost);
}();