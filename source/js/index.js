import DropPanel    from './components/DropPanel';
import MainMenu     from './components/MainMenu';
import accordion    from './components/Accordion';
import filters      from './components/Filters';
import burger       from './components/Burger';
import headerSearch from './components/headerSearch';

// Init
function init() {
	new DropPanel();
	accordion();
	filters();
	burger();
	headerSearch();
	const appHeight = () => {
		const doc = document.documentElement;
		doc.style.setProperty('--app-height', `${window.innerHeight}px`);
	};
	window.addEventListener('resize', appHeight);
	appHeight();
}

(function () {
	init();
}());
