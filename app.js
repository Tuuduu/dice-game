 //Тоглогчийн ээлжийн хадгалах хувсагч

var activePlayer = 1;

 //Оноог хадгалах хувсагч

 var scores = [0, 0];

 //Тоглогчын ээлжиндээ цуглаж байгаа оноог хадгалах хувсагч 

 var roundScore = 0;

 //Шоо аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө.

 var dice = Math.floor(Math.random()*6) + 1;

 //<div class="player-score" id="score-0">43</div>
 //Тоглоомын эхлэх бэлтгэл
 document.querySelector('#score-0').textContent = 0;
 document.querySelector('#score-1').textContent = 0;
 document.querySelector('#current-0').textContent = 0;
 document.querySelector('#current-1').textContent = 0;

document.querySelector('.dice').style.display = 'none';

 console.log('Dice: ' + dice);
