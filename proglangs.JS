var textBlocks = new Array( 
'Ingen programmeringsspråk er valgt. Velg et programmgeringsspråk', 
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
document.getElementById("outputbox").innerHTML=textBlocks[ind]; 
} 
