function syouten4(){document.getElementById('goburin').src='img/gekiha.jpeg';}
function zangeki0(){document.getElementById('goburin').src='img/zangeki.jpg';
                  setTimeout("syouten4()",2000);}
function mahou0(){document.getElementById('goburin').src='img/honou.jpeg';
                  setTimeout("syouten4()",2000);}

function syouten40(){document.getElementById('doragon').src='img/gekiha.jpeg';}
function zangeki00(){document.getElementById('doragon').src='img/zangeki.jpg';
                  setTimeout("syouten40()",2000);}
function mahou00(){document.getElementById('doragon').src='img/honou.jpeg';
                  setTimeout("miss()",2000);}
function miss(){document.getElementById('doragon').src='img/doragon.jpg';
               alert("ドラゴンには効かなかった...");}

function miss1(){document.getElementById('maou').src='img/maou.png';
                  alert("魔王には効かなかった",1000);}
function syouten400(){document.getElementById('maou').src='img/gekiha.jpeg';
                     setTimeout("sinka()",2000);}
function sinka(){document.getElementById('maou').src='img/maou1.jpeg';
                alert("まだ魔王は終わっていなかった",1000)}
function zangeki000(){document.getElementById('maou').src='img/zangeki.jpg';
                  setTimeout("miss1()",2000);}
function mahou000(){document.getElementById('maou').src='img/honou.jpeg';
                  setTimeout("miss1()",2000);}
function waza(){document.getElementById('maou').src='img/bi-mu2.gif';
                  setTimeout("syouten400()",2000);}

function kakusei(){document.getElementById('yu-sya1').src='img/kakusei.png';
                 setTimeout("last01()",1000);}
function last01(){document.getElementById('yu-sya1').src='img/sinyu-sya.png';
                 alert("勇者は覚醒した！！")}

function maouken(){document.getElementById('last-maou1').src='img/zangeki.jpg';
                  setTimeout("maken()",2000);}
function maken(){document.getElementById('last-maou1').src='img/maou1.jpeg';
                alert("魔王にダメージを与えた！")}
function maoumahou(){document.getElementById('last-maou1').src='img/honou.jpeg';
                  setTimeout("maouhou()",2000);}
function maouhou(){document.getElementById('last-maou1').src='img/maou1.jpeg';
                alert("魔王にダメージを与えた！")}
function maouwaza(){document.getElementById('last-maou1').src='img/bi-mu2.gif';
                  setTimeout("maoubibi()",2000);}
function maoubibi(){document.getElementById('last-maou1').src='img/maou1.jpeg';
                alert("魔王に大ダメージを与えた！")}
function lastbaster(){document.getElementById('last-maou1').src='img/basuta-.jpg';
                  setTimeout("owari()",2000);}
function owari(){document.getElementById('last-maou1').src='img/daibakuhatu.jpg';
                setTimeout("saigo()",2000)}
function saigo(){document.getElementById('last-maou1').src='img/gekiha.jpeg';
                alert("魔王を倒した！！")}
