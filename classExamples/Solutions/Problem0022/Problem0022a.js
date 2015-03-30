	/**
 * read text input
 */
var readText = function(filePath) {
	var reader = new FileReader();
	var output = ""; //placeholder for text output

	var nameValue = function(name) {
		// sums the character values
		var charA = "A".charCodeAt(0);
		var i, total = 0;
		for (i=0; i<name.length; i++) {
			total += name.charCodeAt(i) - charA + 1;
		}
		return total;
	};
	
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

