/*
Configuring buttons to change the column numbers of the images grid.
*/

let gridMode = localStorage.getItem('gridMode');
const imgGridContainer = document.getElementById('imgGridContainer')
const columnsButton = document.getElementsByClassName('gridColumnsButton')
// List of available column numbers for the grid. *(edit this only to reflect new/deleted buttons)*
const gridColumnOptions = [2, 3, 4, 5, 6, 10]
// Changing the number of columns of the grid according to the clicked button.
function enableGrid(columns) {
	imgGridContainer.style.gridTemplateColumns = 'repeat('+columns+', 1fr)';
	theme = localStorage.setItem('gridMode', columns);
};
// Making a click event for each grid column button.
for (let i = 0; i < gridColumnOptions.length; i++) {
	document.getElementById('grid'+gridColumnOptions[i]).onclick = function () {enableGrid(gridColumnOptions[i])};
};
// Calling the function to reflect the remembered number of columns from the last use.
enableGrid(gridMode);


/*
Making the button container sticky when viewing images 
(only for the Home page. This is not needed if photos are only on a separate url)
*/
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


/*
Only showing images with the selected content option.
Done by showing images with certain img alt attributes.
*/

var allImg = document.getElementsByClassName('imgGridItem');
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


/*
Clicked image will enlarge to fullscreen, with a short caption.
Maybe also add arrows to move between pages.
*/

const modalView = document.getElementById('modalView');
const closeView = document.getElementById('modalBackground');
const closeButton = document.getElementById('closeButton');
var modalImg = document.getElementById('modalImg');

for (var i = 0; i < allImg.length; i++) {
  	allImg[i].onclick = function(selectedImg) {
	    modalImg.src = selectedImg.target.src;
	    console.log('open');
		modalView.style.display = 'block';
 	};
};

closeButton.onclick = function() {
	console.log('close');
	modalView.style.display = 'none';
};

closeView.onclick = function() {
	console.log('close');
	modalView.style.display = 'none';
};









// NEXT STEP IS TO REMEMBER THE TOGGLED STATUS AND REFLECT THAT TO THE STYLING OF THE BUTTON (diff colour for selected buttons, for example)
// The stylying of the buttons with icons can come last
// Another more important consideration is how to manage and organize the photes in an effective way once it reaches the hundreds and thousands.
// I will definitely not need 10MB images, so it can be reduced for a start