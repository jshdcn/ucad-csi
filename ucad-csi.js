// Copyright 2013 UC Mobile Ltd. All Rights Reserved.

/* This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.

 * You may obtain a copy of the license at
 * http://www.gnu.org/licenses/
 */


/**
 * @author
 * Pablo Han, handong@ucweb.com
 *
 * @fileoverview
 * This library is designed to distinguish UC Browser and non-UC Browser
 * for different displaying.
 */

var language = window.navigator.language;
if(!language){language = window.navigator.browserLanguage;}
language = language.toLowerCase().substring(0,2);

var width = document.documentElement.clientWidth;
if(!width){width = document.body.clientWidth;}
if(!width){width = window.screen.width;}
if(width>120){width = 120;}

var height = document.documentElement.clientHeight;
if(!height){height = document.body.clientHeight;}
if(!height){height = window.screen.height;}
if(height>20){height = 20;}

var promotion = "Download UC Browser";

var lnglist = "fa,fr,vi,ru,es,pt";

if (lnglist.indexOf(language)==-1)
{language="en";}
document.write(language);

if (navigator.userAgent.indexOf("UCBrowser") != -1)
{document.write("");}
else {document.write("<a href='http://down3.ucweb.com/ucbrowser/en/?bid=444&amp;pub=guojz%40cityboy002'><img src='http://uctest6.ucweb.com:8024/images/"+language+"/"+width+"x"+height+"/橙色科技感120x20.png' width='"+width+"' height='"+height+"' alt='"+promotion+"'/></a>");}