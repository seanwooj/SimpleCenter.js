	/*---------------------------------------
A pretty shitty jQuery centering script!
Author : seanWooj
Version : 1
Be sure to set html height to 100% for cross browser compatibility!
This is pretty unstable.
---------------------------------------*/

function center(container, centerPiece) {
	//assign the height of the container to var heightContainer.
	var heightContainer = $(container).height();
	//assign the width of the container to var widthContainer.
	var widthContainer = $(container).width();
	//assign the width of the object to be centered to widthCenterPiece.
	var widthCenterPiece = $(centerPiece).width();
	//assign the height of the object to be centered to heightCenterPiece.
	var heightCenterPiece = $(centerPiece).height();
	//uncomment to debug
	//console.log(heightContainer);
	//console.log(widthContainer);
	//console.log(heightCenterPiece);
	//console.log(widthCenterPiece);
	
	//How much distance to offset the centered object
	var offsetLeft = widthContainer/2 - widthCenterPiece/2;
	var offsetTop = heightContainer/2 - heightCenterPiece/2;
	
	//apply the css styles using the offset variables
	$(centerPiece).css({'margin-top': offsetTop, 'margin-left': offsetLeft});
	
	//console.log(offsetTop);
	
	$(window).resize(function(){
			center(container,centerPiece);
	});
}

/*
Copy this into the bottom of your HTML document and replace 'container' and 'centerPiece' with the container in your document
and centerPiece with the div that you'd like to center within the HTML doc.

<script type="text/javascript">
	$(document).ready(function(){
		center(container,centerPiece);
		});		
	$(window).resize(function(){
		center(container,centerPiece);
	});
</script>
*/