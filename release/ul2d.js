/*
 UL2DTree JavaScript Library
 Copyright © Shamasis Bhattacharya under MIT licensing terms.
 <http://www.shamasis.net/>

 @version ul2d/1.1.0-release.1
*/
var ul2d={g:function(a,c){return(c||document).getElementById(a)},a:function(a,c){return c.getAttribute(a)},t:function(a,c){return(c||document).getElementsByTagName(a)},t0:function(a,c){nl=ul2d.t(a,c);return nl.length?nl[0].parentNode==c?nl[0]:null:null},dtreePath:"dtree/",ln:0,parse:function(a,c){var e;try{e=ul2d.g(a)}catch(d){}if("object"==typeof e){var b=new dTree(a+"_d","dtree"),f;for(f in b.icon)b.icon[f]=ul2d.dtreePath+b.icon[f];b.config.inOrder=!0;b.add(ul2d.ln,-1,c);ul2d._parseul(e,b,0);e.style.display=
"none";return b}},_parseul:function(a,c,e){a=a.childNodes;for(var d=0;d<a.length;d++)"li"==a[d].nodeName.toLowerCase()&&ul2d._parseli(a[d],c,e)},_parseli:function(a,c,e){ul2d.ln++;var d=ul2d.t0("a",a),b=["","",""];d?(b[0]=d.innerHTML,b[1]=""+d,b[2]=ul2d.a("title",d)||ul2d.a("title",a)):(b[0]=a.childNodes[0].nodeValue.toString(),b[1]=null,b[2]=ul2d.a("title",a));c.add(ul2d.ln,e,b[0],b[1],b[2]);(a=ul2d.t0("ul",a))&&ul2d._parseul(a,c,ul2d.ln)}};