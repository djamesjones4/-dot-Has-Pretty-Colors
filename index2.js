$(document).ready(function() {
// event listener for button
$('#search-color-selector-btn').click(function() {
  console.log('you clicked');
  //user input value
let userSearch = $('#color-selector').val().slice(1);
console.log(userSearch);

$.ajax({
      url: 'http://www.colourlovers.com/api/palettes/random',
      dataType:'jsonp',
      data: {
          format: 'json'
      },
      jsonp: 'jsonCallback',
      success: function(data){
        console.log(data);
        
      }
  });

// var ajaxCall=$.ajax({
// method: 'GET',
// url: 'http://www.colourlovers.com/api/palettes/random/?format=jsonp',
// dataType: 'jsonp',
// jsonpCallback: function callback(data) {
//   console.log('data', data);
// }
// })
//
// ajaxCall.done(function(data){
// console.log('data');
//
// })
//
// ajaxCall.fail(function(error){
// console.log('error', error);
//
// })
// $.ajax({
// method: 'GET',
//
// // url: `http://www.colourlovers.com/api/palettes/OR/${userSearch}/?format=json`,
// //I took out ?format=json from the end of your link
// url: 'http://www.colourlovers.com/api/palettes/random/?format=json',
// dataType: 'jsonp',
// success: function(data){
// // what to do if data is retrieved successfully
// console.log('data');
//
//
//
//   //data close
// }
//
//
//
//
//   //ajax close
// });



// event listener close
})
$('#search-color-btn').click(function(){
let userSearchTwo= $('#search-color-text').val()
console.log(userSearchTwo);



  //event listener2 (#search-color-btn) close
})





  // document ready close
});
