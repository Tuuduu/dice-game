 //Тоглогчийн ээлжийн хадгалах хувсагч

var activePlayer = 0;

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

document.querySelector('.btn-roll').addEventListener("click", function(){
     //Шоо аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө.
    var diceNumber = Math.floor(Math.random()*6) + 1;
    // Шооны зургийг вэб дээр гаргаж ирнэ.
    diceDom.style.display = "block";
    // Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
    document.querySelector(".dice").src = "dice-" + diceNumber + ".png";

    // Буусан тоо нь 1 ээс ялгаатай бол идэвтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
    if(diceNumber !== 1){
        // 1 ялгаатай тоо буулаа. Буусан тоог тоглогч дээр нэмнэ.
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }
    else{
        // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
        // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
        switchToNextPlayer();
    }

});

// Hold товчны EVENT
document.querySelector('.btn-hold').addEventListener('click', function(){
    // Уг тоглогчийн цуглуулсан оноог глобаль оноон дээр нь нэмж өгнө.
    // if(activePlayer === 0){
    //     scores[0] = scores[0] + roundScore;
    // }
    // else{
    //     scores[1] = scores[1] + roundScore;
    // }
    scores[activePlayer]= scores[activePlayer] + roundScore;

        // Дэлгэц дээрх оноог өөрчилнө
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    //Уг тоглогчийг хожсон эсхийг шалгах.
    if(scores[activePlayer] >= 100){
        //Ялагч гэсэн
        document.getElementById('name-' + activePlayer).textContent = 'WINNER';
    }
    else{
        switchToNextPlayer();
    }


    // Тоглогчийн ээлжийг солино.


});
// Энэ фүнкц нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлдэг.
function switchToNextPlayer(){
            // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
            // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;
    // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // Улаан цэгийг шилжүүлэх
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // Шоо зургыг түр алга болгоно.
    diceDom.style.display = 'none';
}

// Шинээр тоглоомыг эхлүүлэх
document.querySelector('.btn-new').addEventListener('click', function(){
    alert('daragdlaa');
})