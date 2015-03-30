/*
* This approach encapsulates all the functionality in a single
* function called 'sumNameValues'. This is the function that gets
* called when the 'onchange' event triggers. (See the <input> element
* in the html.)
*
* sumNameValues contains a pair of functions, 'main' and 'nameValue'.
*/
var sumNameValues = function(filePath) {
	
	/*
	* Creates a reader and attaches the 'onload' listener. This
	* listener does all the actual work.
	*/
	var main = function() {
		var reader = new FileReader();
		var output = ""; //placeholder for text output

		reader.onload = function (e) {
			var nameArray;
			var i, name;
			var total = 0;
			output = e.target.result;
			nameArray = output.split(',');
			for (i=0; i<nameArray.length; i++) 
				nameArray[i] = nameArray[i].substring(1, nameArray[i].length-1);
			nameArray.sort();
			for (i=0; i<nameArray.length; i++)
				total += nameValue(nameArray[i]) * (i + 1);
			console.log('The total is ' + total);
		};
	
		reader.readAsText(filePath.files[0]);
	};   

	/*
	* Sums the character values for a given name.
	*/
	var nameValue = function(name) {
		// sums the character values
		var charA = "A".charCodeAt(0);
		var i, total = 0;
		for (i=0; i<name.length; i++) {
			total += name.charCodeAt(i) - charA + 1;
		}
		return total;
	};
	
	/*
	* Invoke the main routine.
	*/
	main();
};
