/**
 * Created by petriccione on 2/8/15.
 */
var i;
var letter;
var count = 0;
/*
 alternate approach: parse all the letters from all the names,
 put each letter into an array slot, also make an array for the letters
 then go through the array of letters and assign them the location of the letter
 from the letter array.
 then add them up.



 */


var myFunction = function (list) {
    for (i = 0; i <= list.length; i++) {
        switch (letter) {
            case 'a':
                letter = 1;
                break;
            case 'b':
                letter = 2;
                break;
            case 'c':
                letter = 3;
                break;
            case 'd':
                letter = 4;
                break;
            case 'e':
                letter = 5;
                break;
            case 'f':
                letter = 6;
                break;
            case 'g':
                letter = 7;

            case 'h':
                letter = 8;
                break;
            case 'i':
                letter = 9;
                break;
            case 'j':
                letter = 10;
                break;
            case 'k':
                letter = 11;
                break;
            case 'l':
                letter = 12;
                break;
            case 'm':
                letter = 13;
                break;
            case 'n':
                letter = 14;
                break;
            case 'o':
                letter = 15;
                break;
            case 'p':
                letter = 16;
                break;
            case 'q':
                letter = 17;
                break;
            case 'r':
                letter = 18;
                break;
            case 's':
                letter = 19;
                break;
            case 't':
                letter = 20;
                break;
            case 'u':
                letter = 21;
                break;
            case 'v':
                letter = 22;
                break;
            case 'w':
                letter = 23;
                break;
            case 'x':
                letter = 24;
                break;
            case 'y':
                letter = 25;
                break;
            case 'z':
                letter = 26;
                break;


        }

        count += letter;
    }
    console.log("IT's working!");
}



myFunction(A);

