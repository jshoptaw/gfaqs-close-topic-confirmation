// ==UserScript==
// @name           GameFAQs Close Topic Confirmation
// @namespace      OTACON120
// @author         OTACON120
// @version        1.0
// @description    Adds confirmation to the "Close Topic" button on the GameFAQs Message Boards
// @updateURL      http://userscripts.org/scripts/source/114003.meta.js
// @downloadURL    http://userscripts.org/scripts/source/114003.user.js
// @website        http://otacon120.com/user-scripts/gamefaqs-related/close-topic-confirmation/
// @include        http://*.gamefaqs.com/boards/*/*/*
// @match          http://*.gamefaqs.com/boards/*/*/*
// ==/UserScript==

var i,
	formsTotal = document.forms;

for (i = 0; i < formsTotal.length; i++) {
	var closeButton = formsTotal[i].elements['YES'];
	
	if (formsTotal[i].action.indexOf('closetopic', formsTotal[i].action.length - 'closetopic'.length) !== -1) {
		closeButton.setAttribute('onClick', 'if(confirm(\'Are you sure you want to close this topic?\')) return true; return false;');
	}
}