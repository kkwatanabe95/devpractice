let theme = localStorage.getItem('theme');
const defaultButton = document.querySelector('#default');
const forestButton = document.querySelector('#forest');
const sunsetButton = document.querySelector('#sunset');

const enableDefaultTheme = () => {
	document.body.classList.remove('forestTheme');
	document.body.classList.remove('sunsetTheme');

	theme = localStorage.setItem('theme', 'default')
};

const enableForestTheme = () => {
	document.body.classList.remove('sunsetTheme');
	document.body.classList.add('forestTheme');

	theme = localStorage.setItem('theme', 'forest')
};

const enableSunsetTheme = () => {
	document.body.classList.remove('forestTheme');
	document.body.classList.add('sunsetTheme');

	theme = localStorage.setItem('theme', 'sunset')
};


if (theme === 'forest') {enableForestTheme()};
if (theme === 'sunset') {enableSunsetTheme()};

defaultButton.addEventListener("click", () => {enableDefaultTheme()});
forestButton.addEventListener("click", () => {enableForestTheme()});
sunsetButton.addEventListener("click", () => {enableSunsetTheme()});


/*

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

// check if dark mode is enabled
// if it is enabled, turn it off
// if it is disabled, turn it on (with a single button)


const enableDarkMode = () => {
	// 1. add the class darkmode to the body
	document.body.classList.add('darkmode');
	// 2. update darkMode in the localStorage
	localStorage.setItem('darkMode', 'enabled');

};

const disableDarkMode = () => {
	// 1. add the class darkmode to the body
	document.body.classList.remove('darkmode');
	// 2. update darkMode in the localStorage
	localStorage.setItem('darkMode', null);

};

if (darkMode === 'enabled') {
	enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {

	darkMode = localStorage.getItem('darkMode');
	if (darkMode !== 'enabled') {
		enableDarkMode();
	} else {
		disableDarkMode();
	}

})

*/