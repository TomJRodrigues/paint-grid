$(document).ready(function(){
	$('#set').click(function(){
		addBlocks();
	});
});

function addBlocks() {
	var blocksPerSide = $('input[name=blocksPerSide]').val();
		$('#container').empty();
		for (i=0; i < blocksPerSide; i++) {
			for (k=0; k < blocksPerSide; k++) {
				$('#container').append('<div>' + i + '</div');
			}
		}
		$('#container div').css({'width': 600/blocksPerSide, 'height': 600/blocksPerSide});
};

// TODO
// Add .empty function to the #set buttton so it will reset each time user clicks. remove reset button
// Add 16 blocks to the doc.ready function
// Do mouse-enter and mouse-leave to change them black, later change to custom rules
// Re-factor javascript to just load a few different functions
