var num = 2;
var divEm = function() {


	while (1==1)
	{
    	var all = true;
    		for (i = 1; i < 21; i++){
        		all = true;
        		if ( num % i != 0 ){
            		all = false;
            		return;
        		};
    	};

    if (all) {
        console.log(num);
        return;
    };

    num++;
	};

};

divEm();