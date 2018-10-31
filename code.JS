var starter = document.getElementById("starter"),
    time = document.getElementById("time"),
    menu = document.getElementById("menu"),

    background = document.getElementById("background"),

    good = document.getElementById("good"),
    bad = document.getElementById("bad"),
    wound = document.getElementById("wound"),


    diss = document.getElementById("diss"),

    one = document.getElementById("one"),
    two = document.getElementById("two"),
    three = document.getElementById("three"),
    four = document.getElementById("four"),

    allDisses = ["zero", "one", "two", "three", "four", "five", "six", "seven"],
    allAnswers = ["zero", "one", "two", "three", "four", "five", "six", "seven"],



    rOne,
    rTwo,
    rThree,
    rFour;



function startfunction() {

    var t = 1000,
        h = 1,
        s = 0;


}

function answer() {

    var rOne = Math.floor((Math.random() * 7) + 1),
        rTwo = Math.floor((Math.random() * 7) + 1),
        rThree = Math.floor((Math.random() * 7) + 1),
        rFour = Math.floor((Math.random() * 7) + 1);



    var allAnswers[rOne] = document.getElementById("one").innerHTML;
    var allAnswers[rTwo] = document.getElementById("two").innerHTML;
    var allAnswers[rThree] = document.getElementById("three").innerHTML;
    var allAnswers[rFour] = document.getElementById("four").innerHTML;

    var allDisses[rOne] = document.getElementById("diss").innerHTML;






}

function check() {

}

function openM() {

}

function closeM() {

}

function toggleMusic() {

}

function toggleSounds() {

}

function gameOver() {

}
