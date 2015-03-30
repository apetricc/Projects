 

 function readText(filePath) {
        var reader = new FileReader();
        reader.onload = function () {
        var text = reader.result; 
        var nameArray = text.split(",");
				
				for(i = 0; i < nameArray.length; i++) {
					nameArray[i] = nameArray[i].substring(1,nameArray.length-1);	
				};

				nameArray.sort();
				var nameTotal = 0;

				for(i = 0; i < nameArray.length; i++) {
					var currentScore = 0;
						for(j = 0; j < nameArray.length; j++) {
							currentScore += nameArray[i].charCodeAt(j) - 64;
						}
						nameTotal += (currentScore * (i + 1));
				}
				console.log(nameArray);
				console.log(nameTotal);


			//console.log(nameArray);

        //var splitText = "So at least it's doing something";
        // console.lot(So at least it's doing something);

         };
         reader.readAsText(filePath.files[0]);
}