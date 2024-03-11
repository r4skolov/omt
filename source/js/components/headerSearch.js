const headerSearch = () => {
	const search = document.querySelector('.form--search');
	const searchBtn = document.querySelector('.search-btn');
	const searchBtnClose = document.querySelector('.form__close');
	const searchInput = document.querySelector('[data-search="input"]');
	const searchButton = document.querySelector('[data-search="button"]');

	searchBtn.addEventListener('click', () => {
		search.classList.add('active');
	});

	searchBtnClose.addEventListener('click', () => {
		search.classList.remove('active');
	});

	searchInput.addEventListener('input', () => {
		if (searchInput.value !== "") {
			searchButton.classList.remove('disabled');
		} else {
			searchButton.classList.add('disabled');
		}
	});
};

export default headerSearch;
