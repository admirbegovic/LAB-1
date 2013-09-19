var textBlocks = new Array( 
'Velkommen til en mystisk verden av programmeringsspråk!', 
'Du har nå valgt Actionscript!', 
'Du har nå valgt Applescript!',
'Du har nå valgt Asp!',
'Du har nå valgt Basic!',
'Du har nå valgt C++!',
'Du har nå valgt Clojure!',
'Du har nå valgt COBOL!',
'Du har nå valgt Coldfusion!',
'Du har nå valgt Erlang!',
'Du har nå valgt Fortran!',
'Du har nå valgt Groovy!',
'Du har nå valgt Haskell!',
'Du har nå valgt Java!',
'Du har nå valgt Javascript!',
'Du har nå valgt Lisp!',
'Du har nå valgt Perl!',
'Du har nå valgt PHP!',
'Du har nå valgt Python!',
'Du har nå valgt Ruby!',
'Du har nå valgt Scala!',
'Du har nå valgt Scheme!');
function changeText(elemid) { 
var ind = document.getElementById(elemid).selectedIndex; 
document.getElementById("outputbox").innerHTML=textBlocks[ind]; /*Gjør at output boksen endrer tekst ved valg av et alternativ som du kan se ved linjene nedenfor. Så ved valg vil teksten endre seg til det programmeringsspråket brukeren har valgt*/
} 

window.alert('Hei, du vil kanskje legge merke til at noen ting ikke fungerer på nettsiden. Linkene kronologisk,Hierarkisk og søke motoren vil midlertidig ikke fungere. Takk for din tålmodighet!'); 
/*Alert varsel som skal gi et brukbart respons til brukeren om at de angitte linkene/søkefeltet midlertidig ikke fungerer*/
