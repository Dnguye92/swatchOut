//Create functions for menu button
let menuButton = document.getElementById('menuButton');
let closeButton = document.getElementById('closeButton');
let sideNav = document.getElementById('sideNav');
let swatches = [
	{
		
	}
]

menuButton.addEventListener('click', () => {
	sideNav.style.width = '25em';
});
closeButton.addEventListener('click', () => {
	sideNav.style.width = '0';
});

