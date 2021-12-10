// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

d3.selectAll("img").on("click", function() {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
	console.log("hi");
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

console.log("hi huyen")
