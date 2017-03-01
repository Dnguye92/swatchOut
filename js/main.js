//Create functions for menu button
let menuButton = document.getElementById('menuButton');
let sideNav = document.getElementById('sideNav');
menuButton.addEventListener('click', () => {
	if(sideNav.style.width = '0') {
		sideNav.style.width = '25em';
		menuButton.textContent = 'X';
	} else if(sideNav.style.width = '25em') {
		sideNav.style.width = '0';
		menuButton.textContent = 'Menu';
	}
})
