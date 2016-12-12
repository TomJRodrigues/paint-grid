// Global variables
var containerWidth = 600;


$(document).ready(function(){
	seedContainer();
	$('#set').click(function(){
		addBlocks();
	});
	paintBlocks();
});


// Factored functions
function paintBlocks() {
	$(document).on('mouseenter', '.block', function() {
		$(this).css('background-color', 'grey');
	});
};

function trailBlocks() {
};

function colorBlocks() {
	var hue = 120;
	var saturation = 100;
	var lightness = 25;
	$(document).on('mouseenter', '.block', function() {
		$(this).css('background-color', 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%');
	});
};

function seedContainer() {
	for (i=0; i < 16; i++) {
			for (k=0; k < 16; k++) {
				$('#container').append('<div class="block">' + i + '</div');
			}
		}
		$('#container div').css({'width': containerWidth/16, 'height': containerWidth/16});
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
														 'height': containerWidth/blocksPerSide});
};


// TODO
// Set option for trail-effect vs paint-effect
// Set options for greyscale vs colorscale
// Add erase function
