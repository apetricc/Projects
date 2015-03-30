var num = 2;

/*232792560 */

var divideEm = function(limit) {

   for(i=2; i<21; i++) {
   
		while(num%i!=0) {
		    console.log("false");
		    num++;
		    i++;
			
		};  
		
		
   };
   
   		console.log("The special number is: " + num);	
		return true;
   
		

};


  divideEm(20);
	
