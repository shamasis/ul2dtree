/**!
 * @license UL2DTree JavaScript Library
 * Copyright © Shamasis Bhattacharya under MIT licensing terms.
 * <http://www.shamasis.net/>
 * 
 * @version ul2d/1.1.0-release.1
 */

// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// ==/ClosureCompiler==

var ul2d = { }

ul2d.g = function(id, ob) { return (ob || document).getElementById(id); };
ul2d.a = function(id, ob) { return ob.getAttribute(id); };
ul2d.t = function(tg, ob) { return (ob || document).getElementsByTagName(tg); };
ul2d.t0 = function(tg, ob) { nl=ul2d.t(tg, ob); return (nl.length) ? (nl[0].parentNode==ob) ? nl[0] : null : null; };

ul2d.dtreePath = "dtree/";
ul2d.ln = 0;
ul2d.parse = function(id, root)
{
	var ob;
	try	{ ob = ul2d.g(id); } catch (e) { }
	if(typeof ob != 'object') return;
	
	var d = new dTree(id+'_d', 'dtree');
	for (var icon in d.icon) {
		d.icon[icon] = ul2d.dtreePath + d.icon[icon];
	}
	d.config.inOrder = true;
	d.add(ul2d.ln, -1, root);
	ul2d._parseul(ob, d, 0);

	ob.style.display='none';
	// append to dom
	return d;
};

ul2d._parseul = function(ul, d, id)
{
	var nl=ul.childNodes;
	for(var i=0;i<nl.length;i++)
		if(nl[i].nodeName.toLowerCase()!='li') continue;
		else ul2d._parseli(nl[i], d, id);
};

ul2d._parseli = function(li, d, id)
{ 
	ul2d.ln++;
	var na=ul2d.t0('a', li);
	var pm=['', '', ''];
	if(na) { pm[0]=na.innerHTML; pm[1]=''+na;pm[2]=ul2d.a('title',na)||ul2d.a('title',li); }
	else   { pm[0]=li.childNodes[0].nodeValue.toString(), pm[1]=null;pm[2]=ul2d.a('title',li);}
	d.add(ul2d.ln, id, pm[0], pm[1], pm[2]);
	
	var ul=ul2d.t0('ul', li);
	if(ul) ul2d._parseul(ul, d, ul2d.ln);
};