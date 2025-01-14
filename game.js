function syouten4(){document.getElementById('goburin').src='img/gekiha.jpeg';}
function zangeki(){document.getElementById('goburin').src='img/zangeki.jpg';
                  setTimeout("syouten4()",2000);}
function mahou(){document.getElementById('goburin').src='img/honou.jpeg';
                  setTimeout("syouten4()",2000);}

function syouten4(){document.getElementById('doragon').src='img/gekiha.jpeg';}
function zangeki(){document.getElementById('doragon').src='img/zangeki.jpg';
                  setTimeout("syouten4()",2000);}
function mahou1(){document.getElementById('doragon').src='img/honou.jpeg';
                  setTimeout("miss()",2000);}
function miss(){document.getElementById('doragon').src='img/doragon.jpg';
               alert("敵には効かなかった...");}

function zangeki1(){}
function mahou1(){}
function waza(){}

function bombom(){document.getElementById('bakudan').src='img/bom.jpg';
                 setTimeout("bombom25()",3000);}
