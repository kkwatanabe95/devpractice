// Configuring buttons to change the column numbers of the images grid

let gridMode = localStorage.getItem('gridMode');

var imgGridContainer = document.getElementById('imgGridContainer')

const grid1Button = document.querySelector('#grid1');
const grid2Button = document.querySelector('#grid2');
const grid3Button = document.querySelector('#grid3');

const enableGrid1 = () => {
	imgGridContainer.style.gridTemplateColumns = 'repeat(1, 1fr)'
	theme = localStorage.setItem('gridMode', 'grid1')
};

const enableGrid2 = () => {
	imgGridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'
	theme = localStorage.setItem('gridMode', 'grid2')
};

const enableGrid3 = () => {
	imgGridContainer.style.gridTemplateColumns = 'repeat(3, 1fr)'
	theme = localStorage.setItem('gridMode', 'grid3')
};

if (gridMode === 'grid1') {enableGrid1()};
if (gridMode === 'grid2') {enableGrid2()};
if (gridMode === 'grid3') {enableGrid3()};

grid1Button.addEventListener("click", () => {enableGrid1()});
grid2Button.addEventListener("click", () => {enableGrid2()});
grid3Button.addEventListener("click", () => {enableGrid3()});


// Making the button container sticky when viewing images

window.onscroll = function() {stickToGrid()};

var stickyButtonBox = document.getElementById('stickyButtonBox');
var sticky = imgGridContainer.offsetTop;		
// The offsetTop for the gridContainer is needed, because the offsetTop value is not absolute but relative to the parent container.
// console.log(sticky)

function stickToGrid() {
	if (window.pageYOffset >= sticky) {
		stickyButtonBox.classList.add('sticky');
	} else {
		stickyButtonBox.classList.remove('sticky');
	}
}

// Only showing images with certain img alt attributes

const allImg = document.getElementsByTagName("img");
var searchItem;

function showAll() {
	for (var i = 0, len = allImg.length; i < len; ++i) {
		allImg[i].style.display = 'block';
	}
}

function imgSearch() {
	for (var i = 0, len = allImg.length; i < len; ++i) {
// By negating the includes with '!', it saves a looot of coding.
// I feel like I have begun start the learning process of Javascript now.
		if (!allImg[i].alt.includes(searchItem)) {
			allImg[i].style.display = 'none';
		}
	}
}

document.querySelector('#searchAll').addEventListener("click", () => {showAll()});
document.querySelector('#searchTree').addEventListener("click", () => {searchItem = "tree"; imgSearch()});
document.querySelector('#searchSnow').addEventListener("click", () => {searchItem = "snow"; imgSearch()});
document.querySelector('#searchSun').addEventListener("click", () => {searchItem = "sun"; imgSearch()});


// NEXT STEP IS TO REMEMBER THE TOGGLED STATUS AND REFLECT THAT TO THE STYLING OF THE BUTTON (diff colour for selected buttons, for example)
// The stylying of the buttons with icons can come last
// Another more important consideration is how to manage and organize the photes in an effective way once it reaches the hundreds and thousands.
// I will definitely not need 10MB images, so it can be reduced for a start