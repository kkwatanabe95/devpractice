
// Just for dev and debugging.
window.onclick = function (event) {
	console.log(event.target)
}



/*
Configuring buttons to change the column numbers of the images grid.
*/

let gridMode = localStorage.getItem('gridMode');
const imgGridContainer = document.getElementById('imgGridContainer')

// List of available column numbers for the grid. *(only edit this to reflect new/deleted buttons)*
const gridColumnOptions = [2, 3, 4, 5, 6, 10]
// Changing the number of columns of the grid according to the clicked button.
function enableGrid(columns) {
	imgGridContainer.style.gridTemplateColumns = 'repeat('+columns+', 1fr)';
	theme = localStorage.setItem('gridMode', columns);
};
// Making a click event for each grid column button.
for (let i = 0; i < gridColumnOptions.length; i++) {
	if (document.getElementById('grid'+gridColumnOptions[i])) {
		document.getElementById('grid'+gridColumnOptions[i]).onclick = function () {enableGrid(gridColumnOptions[i])};
	}
	
};
// Calling the function to reflect the remembered number of columns from the last use.

enableGrid(gridMode);


/*
Making the button container sticky when viewing images 
(only for the Home page. This is not needed if photos are only on a separate url)
*/ /*
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




/*
Only showing images with the selected content option.
Done by showing images with certain img alt attributes.

Perhaps this feature is not needed at all, or can be considered to be added at a later stage


var allImg = document.getElementsByClassName('imgGridItem');
var allShownImg = []
for (var i=0; i < allImg.length; ++i) {
	console.log(allImg[i])
	if (allImg[i].style.display == 'block') {
		allShownImg.push(allImg[i])
	}
}

var searchItem;

function showAll() {
	for (var i = 0, len = allImg.length; i < len; ++i) {
		allImg[i].style.display = 'block';
	}
	readyModalFresh()
}

function imgSearch() {
	for (var i = 0, len = allImg.length; i < len; ++i) {
		if (!allImg[i].alt.includes(searchItem)) {
			allImg[i].style.display = 'none';
		}
	}
	readyModalFresh()
}

document.querySelector('#searchAll').addEventListener("click", () => {showAll()});
document.querySelector('#searchTree').addEventListener("click", () => {searchItem = "tree"; imgSearch()});
document.querySelector('#searchSnow').addEventListener("click", () => {searchItem = "snow"; imgSearch()});
document.querySelector('#searchSun').addEventListener("click", () => {searchItem = "sun"; imgSearch()});

*/





/*
Lightbox and Modal view.

*/

const modalView = document.getElementById('modalView');
const modalContent = document.getElementById('modalContent');
const modalCloseButton = document.getElementById('closeModalButton');
const modalImg = document.getElementById('modalImg');
const modalLeftArrow = document.getElementById('modalLeftArrowBox');
const modalRightArrow = document.getElementById('modalRightArrowBox');
var allImg = document.getElementsByClassName('imgGridItem');
var currentImgIndex;



// Making the full screen img src the same as the src of the clicked image and opening the modal view.
function readyModalFresh() {
	for (let i = 0; i < allImg.length; i++) {
		allImg[i].id = i
	  	allImg[i].onclick = function(selectedImg) {
	  		openModal()
		    modalImg.src = selectedImg.target.src;	
		    currentImgIndex = selectedImg.target.id;
		}
	};
}

readyModalFresh()


var observer = new MutationObserver(function(mutations){
	mutations.forEach(function(mutation){
		if (mutation.target.style.display == 'block') {
			console.log('mutation to block');
			enableModalFunctions()
		}
	})
});
observer.observe(modalView, {attributes: true});



// Open modal view by making modalView visible.
function openModal() {
	modalView.style.display = 'block';
	console.log('open modal');
}

// Display the image that is one to the right in Modal View, until the last image.
function moveRight() {
	console.log('right');
	currentImgIndex++;
	if (currentImgIndex >= allImg.length) {
		currentImgIndex = 0
	};
	console.log (currentImgIndex);
	modalImg.src = document.getElementById(currentImgIndex).src;

};

// Display the image that is one to the left in Modal View, until the first image.
function moveLeft() {
	console.log('left');
	var lastIndex = allImg.length-1;
	currentImgIndex--;
	if (currentImgIndex < 0) {
		currentImgIndex = lastIndex
	};
	console.log (currentImgIndex);
	modalImg.src = document.getElementById(currentImgIndex).src;
};


// Shifts the image displayed in Modal View one before or after by pressing the Arrow Keys.
function modalKeyDownEvent(e) {
	e = e || window.event;
	if (e.keyCode == '39') {
		moveRight();
	} else if (e.keyCode == '37') {
		moveLeft();
	}
}

// Enable moving between the images in Modal View by pressing the left/right Arrow Keys.
function enableModalArrowKey () {
	document.addEventListener('keydown', modalKeyDownEvent)
};


// Enable moving between the images in Modal View using the Arrow Buttons on either side of the image.
function moveModalArrowButton () {
	modalLeftArrow.addEventListener('click', moveLeft)
	modalRightArrow.addEventListener('click', moveRight)
}

// Disable the arrowkey down detection when the Modal is closed.
function disableModalArrowKey () {
	document.removeEventListener ('keydown', modalKeyDownEvent) 
}

// Closing the Modal View by clicking anywhere besides the image or left/right Arrow Buttons (Close Button works as well.)
function closeModalClick () {
	document.onclick = function (event) {
		if (modalCloseButton.contains(event.target)) {
		modalView.style.display = 'none'
		disableModalArrowKey()
		console.log('close modal');	
		}
	}
}

// Enable all functions that are only for Modal View
function enableModalFunctions () {
	enableModalArrowKey();
	moveModalArrowButton();
	closeModalClick();
}










// NEXT STEP IS TO REMEMBER THE TOGGLED STATUS AND REFLECT THAT TO THE STYLING OF THE BUTTON 
// (diff colour for selected buttons, for example)
// The stylying of the buttons with icons can come last
// Another more important consideration is how to manage and organize the photes in an 
// effective way once it reaches the hundreds and thousands.
// I will definitely not need 10MB images, so it can be reduced for a start