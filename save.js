$(document).ready(function(){

$('.palettecontainer').click(function(){
  console.log('you clicked');

if($(event.target.id) !== "pal-cont-1"){
  console.log('you clicked');
  console.log(event.target);
var colorToUse = $(event.target).css('background-color')
}
console.log("target color:", colorToUse);
console.log($('nav')[0]);
$('nav').css('background-color', `${colorToUse}`)

})

$('.palettecontainer2').click(function(){
  console.log('you clicked');

if($(event.target.id) !== "pal-cont-1"){
  console.log('you clicked');
  console.log(event.target);
var colorToUse = $(event.target).css('background-color')
}
console.log("target color:", colorToUse);
console.log($('nav')[0]);
$('body').css('background-color', `${colorToUse}`)

})

$('.palettecontainer3').click(function(){
  console.log('you clicked');

if($(event.target.id) !== "pal-cont-1"){
  console.log('you clicked');
  console.log(event.target);
var colorToUse = $(event.target).css('background-color')
}
console.log("target color:", colorToUse);
console.log($('nav')[0]);
$('.text-color').css('color', `${colorToUse}`)

})







})
