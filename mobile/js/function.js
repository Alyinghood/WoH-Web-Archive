function hideadd(){
  setTimeout('scrollTo(0,1)', 100);
};

function cssload(css){
  var cs = document.createElement('link');
  cs.rel = 'stylesheet';
  cs.href = css;
  cs.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(cs);
};

function boxShow(id){
	var page = document.getElementsByTagName('body')[0].getAttribute('id');
  var obj = document.getElementById(id);
  if((page == 'index') && (id == 'sitenav')){
    var navs = obj.getElementsByTagName('li');
    var time = 0;
    for(i=0; i < navs.length; i++){
      obj = navs[i];
      menuShow(obj,time);
      time = time + 300;
    }
  } else {
    obj.className = 'show';
  };
}

function menuShow(obj,speed){
  setTimeout(function(){
    obj.className = 'show';
  }, speed);
}

function addLink(){
  var element = document.createElement('div');
  var site = document.createElement('a');
  element.id = 'pcsite'; 
  // site.setAttribute('href','http://www.typemoon.com/products/mahoyo/index.html');
  site.setAttribute('href','../desktop/index.html');
  site.setAttribute('class','btn');
  site.innerHTML = 'PC版で見る'; 
  element.appendChild(site);
  var elmParent = document.getElementById('footer');
  elmParent.appendChild(element); 
}

function wallpaper(img,url,txt){
  var element;
  var wallpaper = document.createElement('img');
  wallpaper.setAttribute('src',img);
  wallpaper.setAttribute('class','wallpaper');
  var wallLink = document.createElement('a');
  wallLink.setAttribute('href',url);
  wallLink.setAttribute('class','btn');
  wallLink.innerHTML = txt; 
  var elmParent = document.getElementById('main');
  var elmNext = document.getElementById('categorynav');
  elmParent.insertBefore(wallpaper,elmNext);
  elmParent.insertBefore(wallLink,elmNext);
}

function addOnloadEvent(fnc){
  if ( typeof window.addEventListener != 'undefined' )
    window.addEventListener( 'load', fnc, false );
  else if ( typeof window.attachEvent != 'undefined' ) {
    window.attachEvent( 'onload', fnc );
  }
  else {
    if ( window.onload != null ) {
      var oldOnload = window.onload;
      window.onload = function ( e ) {
        oldOnload( e );
        window[fnc]();
      };
    }
    else
      window.onload = fnc;
  }
}

$.preloadImages = function(e){
	for(var i = 0; i<arguments.length; i++){
		if(e instanceof Array){
			$('<img>').attr('src', arguments[0][i]);
		} else {
			$('<img>').attr('src', arguments[i]);
		};
	}
};

var viewStatus;
$('a').bind('click',function(e){
	if(viewStatus == 1){
		e.preventDefault();
	};
});

window.onload = function(){
	if ((navigator.userAgent.indexOf('iPhone') <= 0) && (navigator.userAgent.indexOf('iPad') <= 0) && (navigator.userAgent.indexOf('iPod') <= 0)) {
		addLink();
	}
  hideadd();
  cssload('./css/anime.css');
}
