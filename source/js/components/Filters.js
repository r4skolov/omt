const filters = () => {
	const toggle   = document.querySelector('.ios-switch');
	const filter   = document.querySelector('.market-filter');
	const applyBtn = document.querySelector('[data-filter="apply"]');
	const filters  = document.querySelectorAll('.accordion--filter');
	if (applyBtn) {
		applyBtn.addEventListener('click', () => {
			filters.forEach((e) => {
				e.classList.remove('open');
			});
		});

		toggle.addEventListener('click', () => {
			filter.classList.toggle('active');
		});
	}
};

export default filters;
