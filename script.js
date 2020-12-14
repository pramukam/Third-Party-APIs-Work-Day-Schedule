var SetTIme =  $('#currentDay')

SetTIme.text(moment().format("dddd, MMMM Do YYYY"));


var currentHour = moment().hours()


var text09 = $('#09');
var text10 = $('#10');
var text11 = $('#11');
var text12 = $('#12');
var text01 = $('#13');
var text02 = $('#14');
var text03 = $('#15');
var text04 = $('#16');
var text05 = $('#17');

var nineAM = localStorage.getItem('9.00 AM');
text09.text(nineAM);

var tenAM = localStorage.getItem('10.00 AM');
text10.text(tenAM);

var elvAM = localStorage.getItem('11.00 AM');
text11.text(elvAM);

var twlAM = localStorage.getItem('12.00 AM');
text12.text(twlAM);

var oneAM = localStorage.getItem('01.00 PM');
text01.text(oneAM);

var twoAM = localStorage.getItem('2.00 PM');
text02.text(twoAM);

var threeAM = localStorage.getItem('3.00 PM');
text03.text(threeAM);

var fourAM = localStorage.getItem('4.00 PM');
text04.text(fourAM);

var fiveAM = localStorage.getItem('5.00 PM');
text05.text(fiveAM);

$('button').click(function () {
var userInput = $(this).prev().val().trim() 
console.log(userInput)

var timeSlot = $(this).siblings(".col-3").text().trim();
console.log(timeSlot)

localStorage.setItem(timeSlot,userInput);

})

var currentHour = moment().hours()

$(".col-8").each(function () {
    var timeTest = parseInt($(this).attr("id"));
    currentHour  = parseInt(currentHour);
    console.log(timeTest);
    console.log(currentHour );
//      console.log(this);
    if (currentHour  > timeTest) {
        $(this).addClass("past");
    } else if (currentHour < timeTest) {
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
    }
});

setTimeout(function(){
    location = ''
  },1000*60*60)

