'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$("#everythingIsDead").hide();
})

/*
 * Function that is called when the document is ready.
 */

	function initializePage() {
	$("#testjs").click(function(e) {
		var button = $('#testjs');

		if (button.hasClass("btn-danger")){
			if (button.hasClass("aboutToBeDestroyed")){
				destroy();
			}
			button.text("Seriously!");
			button.addClass("aboutToBeDestroyed");
		}else{
			button.text("If you press me right now everyone is going to die");
			button.addClass("btn-danger");
			button.removeClass("btn-primary");
		}

		$('.jumbotron h1').text("Javascript is connected");
		$(".jumbotron p").toggleClass("active");

	});


	function destroy(){
		$(".container").hide();
		$("#everythingIsDead").fadeIn();
	}

	function projectClick(e) {
		e.preventDefault();
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