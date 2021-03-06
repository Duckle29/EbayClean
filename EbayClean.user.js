// ==UserScript==
// @name        EbayClean
// @description Clean ebay item URL
// @license     BSD 3-Clause
// @author      Duckle29
// @namespace   https://github.com/Duckle29
// @include     /^https?:\/\/(www\.)?ebay\.(?:com|co\.uk|de)\/itm/.*/
// @run-at      document-start
// @icon        https://avatars3.githubusercontent.com/u/2756925?v=3&s=200
// @homepageURL https://github.com/Duckle29/EbayClean
// @downloadURL https://raw.githubusercontent.com/Duckle29/EbayClean/master/EbayClean.user.js
// @updateURL   https://raw.githubusercontent.com/Duckle29/EbayClean/master/EbayClean.user.js
// @version     1.4
// @history     1.4 Fixed .de regex in both places -_-
// @history     1.3 Fixed .de regex
// @history     1.2 Fixed homepage URL
// @history     1.1 Added support for .co.uk and .de
// @history     1.0 Initial version
// ==/UserScript==

(function() {
    'use strict';    
    var groups = document.URL.match(/^(https?:\/\/(?:www\.)?ebay\.(?:com|co\.uk|de)\/itm)(?:\/[0-9a-zA-Z\-]+)(\/\d+)/);
    
    if (groups.length === 3 && groups[1]+groups[2] != document.URL)
    {
      history.replaceState(null, '', groups[1]+groups[2]);
    }
})();
