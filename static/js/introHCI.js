'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */

	function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("If you press me right now everyone is going to die");
		$('#testjs').addClass("btn btn-danger btn-lg");
		$(".jumbotron p").toggleClass("active");

	});


	function projectClick() {
		var containingProject = $(this).closest(".project");
		var description = $(containingProject).find(".project-description");

		console.log(description.length);
		if (description.length == 0){
			containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
		}
		else{
			description.fadeOut();
		}
	};

	$('.project').click(projectClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}