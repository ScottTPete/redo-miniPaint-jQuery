$(document).ready(function() { //loads jquery when ready
	
	var color = 'white';
	
	var colors = 'white green red blue yellow';
	//selector can access html elements. 
	$('.box').on('click', function() { //click is an event listener
		$(this).addClass(color);       //color is a var that is specified on click. gives the specific box you click on the css class that equals the val of color
	});
	
	$('.box').on('dblclick', function() { //listens for two clicks inisde of div with class 'box'
		$(this).removeClass(colors);      //specifies to remove all classes matching a color from our colors var from whatever box is clicked on.
	});	        						  //jQuery can remove multiple classes by seperating each class be a space.  									  
										  //that's why the colors var works despite looking strange				                      
	
	$('#reset').on('click', function() { //when html element with id of reset is clicked
		$('.box').removeClass(colors);   //remove all classes that match a color in the colors var on all html elements with class of box 
	});
	
	//When html element with id__ is clicked, run this function that changes the color variables value;
	///////////////////////////////////
	$('#red').on('click', function() {
		color = 'red';
		console.log(color); //just a test to see updated val of color
	});

	$('#blue').on('click', function() {
		color = 'blue';
	});

	$('#green').on('click', function() {
		color = 'green';
	});

	$('#yellow').on('click', function() {
		color = 'yellow';
	});

	$('#white').on('click', function() {
		color = 'white';
	});
	/////////////////////////////////////
	
	
	
	
	
	
	
	
});