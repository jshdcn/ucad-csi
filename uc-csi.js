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

if (navigator.userAgent.indexOf("UCBrowser") != -1){
document.write("<style type='text/css'>.ucad-hidden{display:none;}</style>");
}
