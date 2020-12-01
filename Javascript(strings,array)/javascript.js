//Ex1 : La ce index intalnim cuvantul 'trece', dar cuvantul 'javascript'? Scrieti si metodele folosite.
var str = "Daca te simti bine, nu te ingrijora, trece!";
var pos = str.indexOf("javascript");
console.log(pos);
//Raspuns:trece = 37, javascript = -1  , metoda indexOf

//Ex2.0: Returnati stringul Kiwi folosind metoda slice() cu indexi pozitivi si apoi negativi.
// Ex 2.1: Returnati toate/ fructele incepand de la 'Lemon'.
var fruits = "Apple, Lemon, Plum, Kiwi";
var nextFruit = fruits.slice(20,24);
var nextFruit1 = fruits.slice(-4); 
console.log(nextFruit1);

// Ex 3: Returnati stringul 'Plum' folosind metoda substr()
var moreFruits = "Apple, Lemon, Plum, Kiwi";
var extract = moreFruits.substr(14,4);
console.log(extract);

// Ex 4: Inlocuiti 'Mia Kalifa' cu numele vostru folosind o metoda pe stringuri
// bonus: Inlocuiti "Sasha" cu numele vostru in tot stringul de mai jos.
var replaceName = "Eu sunt Mia Kalifa, doctor docent in matematica";
var resultName = replaceName.replace("Mia Kalifa", "John");
console.log(resultName);

var bonusName = "Sasha este o persoana de nota 10, Sasha invata javascript(mai nou)"
var replaceNam = bonusName.replaceAll("Sasha", "John");
console.log(replaceNam);

// Ex5: Vreau ca toate literele sa fie intai cu caractere mici si apoi cu caractere mari
var text = "24 de orE intr-o zi, 24 de beRi intr-o lAda. Vreo coincidenta?"
var resultText = text.toUpperCase();
console.log(resultText);
var resultTextD = text.toLowerCase();
console.log(resultTextD);

// Ex6: Vreau sa am la final un singur string cu toate celalte stringuri (indentati calumea, cu spatii unde e nevoie)
var text1 = "Când ai un";
var text2 = "ciocan";
var text3 = "in mana toate lucrurile ti se par";
var text4 = "cuie";
var prop = text1 + " " + text2 + " " + text3 + " " + text4;
console.log(prop);

// Ex7: Vreau sa stiu intai ce litera se afla pentru indexul 6, apoi ce unicode are aceasta litera, si apoi vreau sa o accesez cu 'property access'
var word = "Mamaliga";
var resultWord = word.charAt(6);
console.log(resultWord);
var resultChar = word.charCodeAt(6);
console.log(resultChar);
var resultProp = word[6];
console.log(resultProp);

// Ex8: Vreau sa am o noua variabla care sa cotina un array format din toate stringurile de mai jos care sunt despartite de '|'
var cars = "Toyota|Mazda|Tesla|Hyundai|Dacia";
var resultArr = cars.split("");
console.log(resultArr);

//Big BONUS 
// Se dau variabilele de mai jos, vreau sa ajung la rezultatul "NU EXISTA INTREBARI PROASTE" fara sa modific valorile celor 2 variabile;
var firstWord = 'Nu exista';
var secondWord = 'raspunsuri proaste';
var result2 = firstWord.concat(" ", secondWord.replace("raspunsuri", "intrebari")).toUpperCase();

//TEMA1
//1.Scrieti o functie care verifica daca un input este sau nu de tip string.
function myFunctie (value12) {
    return typeof value12 === "string";}
    console.log(myFunctie("w3resource"));
    console.log(myFunctie([1, 2, 4, 0]));

//2.Scrieti o functie care verifica daca un string este gol sau nu.
function checkBlank (val123) {
    return val123 === "";}
    console.log(checkBlank(""));
    console.log(checkBlank("123"));

//3.Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:
function transformArray (valoarea1) {
    return valoarea1.split(",");
}
console.log(transformArray("Robin Singh"));// ???

//4. Scrieti o functie care transforma un string in forma abreviata:
function abrevName (nameOf) {
    var splitName = nameOf.trim().split(" ");
    if (splitName.length > 1) {
        return(splitName[0] + " " + splitName[1].charAt(0)+ ".");}
    return splitName[0];
    };

console.log(abrevName("Robin Singh"));

//5Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):

function capitalizeFirstLetter(string) {
 return string.charAt(0).toUpperCase() + string.slice(1);}

console.log(capitalizeFirstLetter("js string exercises"));



//6 Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:
function truncate_string(elimStr) {
    return elimStr.substr(0,4);
}
console.log(truncate_string("Robin Singh",4));
"Robi"
// 7.Scrieti o functie care specifica daca o caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau nu
function isUpperCaseAt(isUpOr) {
    return isUpOr.indexOf().toUpperCase;
}

console.log(isUpperCaseAt('Js STRING EXERCISES', 1));

//8 Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:
function insert (firstString, secondString){
return firstString + secondString.substring()};

console.log(insert('We are doing some exercises.','JavaScript ',18));
"We are doing some exercises."
"JavaScript We are doing some exercises."
"We are doing some JavaScript exercises."

//9Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:
function remove_first_occurrence(str1, searchstr)       {
    var index = str1.indexOf(searchstr);
    if (index === -1) {
        return str1;
    }
    return str1.slice(0, index) + str1.slice(index + searchstr.length);
}
   

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
"The quick brown fox jumps over lazy dog"

//10Scrieti o functie care compara doua string-uri case-insensitive:

function compare_strings (firstStr, secondStr){
return firstStr.toUpperCase() === secondStr.toUpperCase()};
console.log(compare_strings('abcd', 'AbcD'));
//11.Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:
function unCapitalizeFirstLetter(string22) {
    return string22.charAt(0).toLowerCase() + string22.slice(1);}
   
   console.log(unCapitalizeFirstLetter("Js string exercises"));







//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.

var myArray = ["House", 5, "Dog", "30", 30];
var resultArray = myArray.length
console.log(resultArray);

//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur
var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];
var combineAr = array1.concat(array2);
console.log(combineAr);

//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()
var miaArray = ["lipton", "second", 2 , 4];
var miaArray2 = "johhn"
var resultArrr = Array.isArray(miaArray2);
console.log(resultArrr);

//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala
var numbers = ['one', 'two', 'three', 'four', 'five'];
var resultFinal = numbers.join(" and ")
console.log(resultFinal);



//Ex5: Adaugati 2 elemente noi in arrayul de mai jos
var cars = ['Tesla', 'Dacia'];
cars.push("Renault","Subaru");
console.log(cars);

//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.
cars.pop();
console.log(cars);
//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului
cars.unshift("Dogde");
console.log(cars);
//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array
cars.reverse();
console.log(cars);
//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();
cars.splice(3, 2, "Dacia1310", "VW");
console.log(cars);
//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
var arrayNumbers = [1, 5, 20 ,30, 100];

//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat
var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"]
function fruitsFunction(fruitsParam){
// fruitsParam returneze ordonat ^^ sort()
}
fruitsFunction(fruitsArray1)

// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name

var car1 = {
    name: "Tesla",
    wheels: 4

}
car.name = "Mercedes"
delete car1.name
console.log(car1);

//Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"

//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.

//Ex4 
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
myHouse = { 
    rooms: 3,
    zone: "Bucium",
    animals: 1
  }
  
  // Ex5 
  // Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
  // Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
  // transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
  
  
  //Ex6
  // Avem obiectul : 
  myObject = {
  name: "John",
  surname: "Applegate",
  }
  //Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
  
  
  //Ex7 
  //Faceti o functie constructor
  // Cu functia constructor creati 3 obiecte cu valori diferite
  // Pentru toate valorile din acele obiecte transformatile in litere mari.
