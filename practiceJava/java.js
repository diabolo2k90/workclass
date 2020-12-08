
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"
function protectEmail(mailSafe) {
    var arg, split, ex1, ex2;
    split = mailSafe.split("a");
    ex1 = split[0];
    arg = ex1.length / 2;
    ex1 = ex1.substring(0, (ex1.length - arg));
    ex2 = split[1];
    return ex1 + "...@" + ex2



};
console.log(protectEmail("johhride@mail.com"));

//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"
function firstLetter(myString) {
    var myArray = myString.toLowercase().split(" ");
    for (var i = 0; i < myArray.length; i++) {
        myArray[i] = myArray[i].charAt(0).toUppercase() + myArray[i].substring(1);
    }
    console.log(myArray.join(" "));
}
firstLetter("i am superman");

//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"
function splitString(stringCut){
    var stringVr = stringCut.split("");
    for(var i=0; i < stringVr.length; i++){
        if(stringVr[i] === stringVr[i].toUpperCase()){
            stringVr[i] === stringVr[i].toLowerCase()
                
            
                
            
        }else {
            stringVr[i] = stringVr[i].toUpperCase();
        }
    }
    var resultSring = stringVr.join("");
}
splitString("xxXyYzZZ");
    


//console.log(splitString(xxXyYzZZ));

//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante
 var isPalindrome = function (string) {
    if (string === string.split('').reverse().join('')) {
        alert(string + ' is palindrome.');
    }
    else {
        alert(string + ' is not palindrome.');
    }
}
console.log(isPalindrome("andrei")); 

//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care 
//contine ca si elemente cele mai mari numere din fiecare array
function allowArray(arraySs, arraySm, arraySz){
  var bignumber = 0;
    for(var i = 0; i < arraySs.length; i++){
        if(arraySs[i] > bignumber){
            bignumber = arraySs[i];
        }
    }
    var bignumber1 = 0;
    for(var i = 0; i < arraySm; i++){
        if(arraySm[i] > bignumber1){
            bignumber1 = arraySm[i];
        }
    }
    return bignumber1
    var bignumber2 = 0;
    for(var i = 0; i < arraySz; i++){
        if(arraySz[i] > bignumber2){
            bignumber2 = arraySz[i]
        }
    }
    return bignumber2
};



//Ex7
// Implementati o functie care face reverse la un string
function revereString(string10){
    return string10.split("").reverse().join("");
}
revereString("hello"); 

//Ex8 
// Implementati o functie care calculeaza factorialul unui numar
function factorial(numbeer){
    if (numbeer < 0)
    return -1;
    else if (numbeer === 0)
    return 1;
    else {
        return(numbeer * factorial(numbeer - 1));
    }

    }
;
factorial(7);

//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma
function twoArg(argument1, argument2){
    checkStrr = argument1.split();
    if(checkStrr.substr(-1) == argument2){
        return true;
    }
    else{
        return false;}
}

//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care 
//trece testul specificat

//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea 
//string
function checkLetter(stringLet1, stringLet2){
    if(stringLet1.substring(0) === stringLet2.substring(0)){
        return true;
    
    } else {
        return false;
    }

}
checkLetter("jesus", "jeses");

// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana 
//cand intalneste elementul cu valoarea specificata


// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN
function elimVal(ArrayShort){
var arrayShort = [2, 13, '', undefined, false, 2, undefined, null, , 3, NaN ];
var filterr = arrayShort.filter(Boolean);
};


// Ex 14
// Scrieti o functie care repeta un string de n ori specificate
function repetString(stringV, orTimes){
    if(orTimes > 0)
    return stringV.repeat(orTimes);
    else
    return "";
    
}
repetString("john", 5);