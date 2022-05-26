 //Тоглогчийн ээлжийн хадгалах хувсагч

var activePlayer = 1;

 //Оноог хадгалах хувсагч

 var scores = [0, 0];

 //Тоглогчын ээлжиндээ цуглаж байгаа оноог хадгалах хувсагч 

 var roundScore = 0;



 //Тоглоомын эхлэх бэлтгэл
 document.getElementById('score-0').textContent = 0;
 document.getElementById('score-1').textContent = 0;

 document.getElementById('current-0').textContent = 0;
 document.getElementById('current-1').textContent = 0;
 
 var diceDom = document.querySelector('.dice');
diceDom.style.display = 'none';


// Anonymous function Шоо шидэх
 //Шоо аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө.
document.querySelector('.btn-roll').addEventListener("click", function(){
    var diceNumber = Math.floor(Math.random()*6) + 1;

    diceDom.style.display = "block";
    document.querySelector(".dice").src = "dice-" + diceNumber + ".png";

});
