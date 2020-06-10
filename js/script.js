// display image in modal and use its alt text as caption
var modal = document.getElementById("enlarge-img-modal");
var projectImg = document.getElementsByClassName("project-img");

// click on image to display enlarged image
var displayModal = function() {
	modal.style.display = "block";
	document.getElementById("modal-img").src = this.src;
	document.getElementById("caption").innerHTML = this.alt;
}

for (var i = 0; i < projectImg.length; i++) {
	projectImg[i].addEventListener('click', displayModal);
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}

/* close modal by clicking outside of it */
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}