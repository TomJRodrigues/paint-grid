// Global variables
var containerWidth = 600;
var blockColor = 'black';

$(document).ready(function(){
	seedContainer();
	$('#set').click(function(){
		addBlocks();
	});
	greyBlocks();
});


// Factored functions
function greyBlocks() {
	$(document).on('mouseenter', '.block', function() {
		var currentOpacity = +$(this).css('opacity');
		if (currentOpacity < 1) {
			currentOpacity += 0.1;
			$(this).css({'opacity': currentOpacity});
		};
	});
};

function colorBlocks() {
	var hue = 120;
	var saturation = 100;
	var lightness = 25;
	$(document).on('mouseenter', '.block', function() {
		$(this).css('background-color', 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%');
	});
};

// change colorblocks so that it starts on red and just increases hue to hit the rainbow and then
// cycles back to red ad infinitum

function seedContainer() {
	for (i=0; i < 17; i++) {
			for (k=0; k < 17; k++) {
				$('#container').append('<div class="block">' + i + '</div');
			}
		}
		$('#container div').css({'width': containerWidth/17, 'height': containerWidth/17, 
														 'background-color': blockColor, 'opacity': 0.0});
};

function addBlocks() {
	var blocksPerSide = $('input[name=blocksPerSide]').val();
		$('#container').empty();
		for (i=0; i < blocksPerSide; i++) {
			for (k=0; k < blocksPerSide; k++) {
				$('#container').append('<div class="block">' + i + '</div');
			}
		}
		$('#container div').css({'width': containerWidth/blocksPerSide, 
														 'height': containerWidth/blocksPerSide,
														 'background-color': blockColor, 'opacity': 0.0});
};


// TODO
// Set option for trail-effect vs paint-effect
// Set options for greyscale vs colorscale
// Add erase function
// Add increasing grey->black in 10 hovers support
