// Import Bulma Collapsible
import bulmaCollapsible from '@creativebulma/bulma-collapsible';
import "./burger_menu.js";


function ready(handler) {
	if (/complete|loaded|interactive/.test(document.readyState) && document.body) {
		handler();
	} else {
		document.addEventListener('DOMContentLoaded', handler, false);
	}
}

ready(function () {

	bulmaCollapsible.attach();
})