// ==UserScript==
// @name        EbayClean
// @description Clean ebay item URL
// @license     BSD 3-Clause
// @author      Duckle29
// @namespace   https://github.com/Duckle29
// @include     /^https?:\/\/(www\.)?ebay\.com\/itm/.*/
// @run-at      document-start
// @icon        https://avatars3.githubusercontent.com/u/2756925?v=3&s=200
// @homepageURL https://github.com/Duckle29/AliClean
// @downloadURL https://raw.githubusercontent.com/Duckle29/EbayClean/master/EbayClean.user.js
// @updateURL   https://raw.githubusercontent.com/Duckle29/EbayClean/master/EbayClean.user.js
// @version     1.0
// @history     1.0 Initial version
// ==/UserScript==

(function() {
    'use strict';
    
    var groups = document.URL.match(/^(https?:\/\/(?:www\.)?ebay.com\/itm)(?:\/[0-9a-zA-Z\-]+)(\/\d+)/);
    
    if (groups.length === 3 && groups[1]+groups[2] != document.URL)
    {
      history.replaceState(null, '', groups[1]+groups[2]);
    }
})();
