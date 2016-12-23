// Global variables
var containerWidth = 600;

// Start
$(document).ready(function(){
	seedContainer();
	$('#setNumber').click(function(){
		addBlocks();
		$(document).off(solidBlocks());
		trailBlocks();
	});
	$('#setColor').click(function(){
		addBlocks();
		$(document).off(solidBlocks());
		trailBlocks();
	});
	$('#setSolid').click(function(){
		addBlocks();
		$(document).off(trailBlocks());
		solidBlocks();
	});
	$('#setErase').click(function(){
		$(document).off(solidBlocks());
		$(document).off(trailBlocks());
		eraseBlocks();
	});
	trailBlocks();
});


// Factored functions
function trailBlocks() {
	$(document).on('mouseenter', '.block', function() {
		var currentOpacity = +$(this).css('opacity');
		if (currentOpacity < 1) {
			currentOpacity += 0.1;
			$(this).css({'opacity': currentOpacity});
		};
	});
};

function solidBlocks() {
	$(document).on('mouseenter', '.block', function() {
		$(this).css({'opacity': 1.0});
	});
};

function eraseBlocks() {
	$(document).on('mouseenter', '.block', function() {
		$(this).css({'opacity': 0.0});
	});
};

function seedContainer() {
	for (i=0; i < 17; i++) {
			for (k=0; k < 17; k++) {
				$('#container').append('<div class="block"></div');
			}
		}
		$('#container div').css({'width': containerWidth/17, 'height': containerWidth/17, 
														 'background-color': 'black', 'opacity': 0.0});
};

function addBlocks() {
	var blocksPerSide = $('input[name=blocksPerSide]').val();
	var blockColor = $('input[name=blockColor]').val();
		$('#container').empty();
		for (i=0; i < blocksPerSide; i++) {
			for (k=0; k < blocksPerSide; k++) {
				$('#container').append('<div class="block"></div');
			}
		}
		$('#container div').css({'width': containerWidth/blocksPerSide, 
														 'height': containerWidth/blocksPerSide,
														 'background-color': blockColor, 'opacity': 0.0});
};
