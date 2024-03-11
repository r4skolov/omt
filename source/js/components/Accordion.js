const accordion = () => {
	const accordions = document.querySelectorAll('.accordion');

	accordions.forEach((el) => {
		el.addEventListener('click', (e) => {
			const self    = e.target.closest('.accordion');
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');

			if (self.classList.contains('open')) {
				self.classList.remove('open');
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
			} else {
				self.classList.add('open');
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
			}

			e.stopPropagation();
		});

		el.querySelector('.accordion__content').addEventListener('click', (e) => {
			e.stopPropagation();
		});
	});
};

export default accordion;
