/*
8b    d8 88    db    8b    d8 88      dP"Yb  88        db        8888b.  888888 Yb    dP     888888 888888    db    8b    d8
88b  d88 88   dPYb   88b  d88 88     dP   Yb 88       dPYb        8I  Yb 88__    Yb  dP        88   88__     dPYb   88b  d88
88YbdP88 88  dP__Yb  88YbdP88 88     Yb   dP 88  .o  dP__Yb       8I  dY 88""     YbdP         88   88""    dP__Yb  88YbdP88
88 YY 88 88 dP""""Yb 88 YY 88 88      YbodP  88ood8 dP""""Yb     8888Y"  888888    YP          88   888888 dP""""Yb 88 YY 88
*/

var SapientUtil = (function () {
  var pub = {
    dContent: {},
    dProp: {},
    dLibrary: {},
    dModule: {}
  };

  pub.init = function () {
    pub.isRetina = pub.checkRetina();
  }

  pub.loadFonts = function (list, callback) {
    list.map(function (element) {
      //LOAD FONTS
      var prefix = "https://fonts.googleapis.com/css?family=";
      var headTag = document.getElementsByTagName('head')[0];
      var font = prefix + element + "&random=" + getRandom(10, 10000);
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = font;
      headTag.appendChild(link);
      //Random Number Range
      function getRandom(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
      }
    });

    // console.log("FONTS LOADED");
    callback();
  }


  pub.addEvent = function (elem, event, fn) {
    elem.style.cursor = "pointer";
    //
    if (elem.addEventListener) {
      elem.addEventListener(event, fn, false);
    } else {
      elem.attachEvent("on" + event, fn);
    }
  }

  pub.removeEvent = function (elem, event, fn) {

    elem.style.cursor = "default";
    //
    if (elem.removeEventListener) {
      elem.removeEventListener(event, fn, false);
    } else {
      elem.detachEvent("on" + event, fn);
    }
  }

  pub.setButtonDimensions = function (btn, elem, padding) {
    // these are relative to the viewport, i.e. the window
    var viewportOffset = elem.getBoundingClientRect();
    btn.style.top = (viewportOffset.top - padding) + "px";
    btn.style.left = (viewportOffset.left - padding) + "px";
    btn.style.width = (viewportOffset.width + (padding + (padding / 2))) + "px";
    btn.style.height = (viewportOffset.height + (padding + (padding / 2))) + "px";
  }

  pub.getCSSValue = function (elem, val) {
    return parseInt(window.getComputedStyle(document.querySelector(elem)).getPropertyValue(val));
  }

  pub.getTagCollection = function (tag) {
    var collection = document.getElementsByTagName(tag);
    var temp = Array.prototype.slice.call(collection, 0);

    return temp;
  }

  //BINDS ASSET TO SCOPE
  pub.bindAssets = function (scope, assets) {

    // var elements = new Array();
    var elems = assets.map(function (asset) {
      scope[asset] = document.getElementById(asset)
      return scope[asset]
    });

    return elems; //return elements
  }

  pub.applyDynamicProperties = function (data) {
    var rawData = "[" + data + "]";
    var arrData = JSON.parse(rawData);
    //
    arrData.forEach(function (element, index) {
      var asset = document.getElementById(element.t);
      if (asset != null) {
        var css = asset.style.cssText;
        css += element.c;
        asset.style.cssText = css;
      } else {
        console.log("ELEMENT ID CANNOT BE FOUND!, Please check naming");
      }
    });
  }

  pub.checkRetina = function () {
    var retinaEnabled = pub.dProp.retina;
    if (pub.highPixelRatio == true && retinaEnabled == true) {
      return true
    }
    return false;
  }

  //! SELF EXECUTING
  pub.highPixelRatio = function () {
    var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';
    if (window.devicePixelRatio > 1) {
      return true;
    }
    if (window.matchMedia && window.matchMedia(mediaQuery).matches) {
      return true;
    }
    return false;
  }();


  pub.compileAssetLibrary = function (assets, callback) {
    
    assets.map(function(asset){
      loadImage(asset);
    })

    // console.log("Images Loaded")
    callback();

    // return library
  }

  function loadImage(image) {
    var img = new Image();

    img.onload = function() {
      img.alt = image.d;
      //Retina Display Check
      if (pub.isRetina) {
        img.width = img.width / 2;
        img.height = img.height / 2;
      } else {
        img.width = img.width;
        img.height = img.height;
      };
      //
      var elm = document.getElementById(image.t);
      if (elm) {
        elm.appendChild(img);
      }
    }

    img.onerror = function() {
      var elm = document.getElementById(image.t);
      if (elm) {
        elm.style.cssText = "background-color:pink;border:1px dashed green;width:10px;height:10px;";
      }
      console.log("ERROR: " + img.src + " could not be loaded!!! Please check pink highlight.");
    }

    var suffix = '_2x';
    var label = image.c;

    if (pub.isRetina) {
        label = label + suffix;
    }
    
    img.src = pub.dContent[label].Url;
  }

  pub.getTXTContent = function () {
    var arrContent = [];

    for (var item in SapientUtil.dContent) {
      if (item.indexOf("txt_") != -1) {
        arrContent.push(item);
      }
    }
    return arrContent;
  }

  pub.getFontCharacters = function () {
    var string = "";
    var specialChars = "";
    var asciiChars = "";
    var arrExceptions = SapientUtil.dLibrary.fontExceptions;
    var arrContent = SapientUtil.dLibrary.fontContent;

    var length = arrContent.length;
    for (var i = 0; i < length; i++) {
      var text = SapientUtil.dContent[arrContent[i]];
      string += text.replace(/<(?:.|\n)*?>/gm, '');
    }

    String.prototype.checkForAsciiChars = function () {
      return this.replace(/[^A-Za-z0-9\[\] ]/g, function (a) {
        var letter = "";
        //console.log("letter " + a + ": " + letter)
        if (arrExceptions.indexOf(a) != -1) {
          asciiChars += "%" + a.charCodeAt(0);
        } else {
          if (specialChars.indexOf(a) == -1) {
            specialChars += a;
          }
        }
        return letter;
      })
    };
    

    result = "";
    for (var l = 0; l < string.length; l++) {
      var c = string[l].checkForAsciiChars();
      if (result.indexOf(c) == -1 && c != " ") {
        result += c
      }
    }
    //console.log("paste this after font name: &text=" + result + specialChars);
    result += specialChars
    result += asciiChars
    return result;
  }

  pub.loadJSON = function (src, options){
    var callback_name = options.callbackName || 'callback',
      on_success = options.onSuccess || function(){},
      on_timeout = options.onTimeout || function(){},
      timeout = options.timeout || 3; // sec

    var timeout_trigger = window.setTimeout(function(){
      window[callback_name] = function(){};
      on_timeout();
    }, timeout * 1000);

    window[callback_name] = function(data){
      window.clearTimeout(timeout_trigger);
      on_success(data);
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = src;

    document.getElementsByTagName('head')[0].appendChild(script);
  }

  pub.getUrlVars = function () {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
  }

  return pub;
}());
