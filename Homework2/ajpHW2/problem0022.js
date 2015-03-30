//Andrew Petriccione
function readText(filePath) {
            
            var reader = new FileReader();
            
                reader.onload = function() {
                  var text = reader.result;
                  var nameArray = text.split(",");

                    for(i = 0; i < nameArray.length; i++) {
                        nameArray[i]=nameArray[i].substring(1,nameArray[i].length-1);
                    }

                    nameArray.sort();
                    var nameTotal=0;

  		                    for(i = 0; i < nameArray.length; i++) {
        		                var thisScore=0;
                		            for(j=0; j < nameArray[i].length; j++) {
                        		        thisScore+=nameArray[i].charCodeAt(j)-64;
                            		}

                        	nameTotal+=thisScore*(i+1);
                    	    }

                    console.log(nameArray);
                    console.log(nameTotal);

                };

    reader.readAsText(filePath.files[0]);
}