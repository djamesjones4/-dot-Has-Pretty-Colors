$(document).ready(function() {
// event listener for button
$('#search-color-selector-btn').click(function() {
  console.log('you clicked');
  //user input value minus '#'
let userSearch = $('#color-selector').val().slice(1);
console.log('user input', userSearch);
//set up variable to contain data
let selectColorData= []
$.ajax({
      url: `http://www.colourlovers.com/api/palettes`,
      dataType:'jsonp',
      data: {
            format: 'json',
            numResults: 50,
            hex: userSearch,
        },
      jsonp: 'jsonCallback',
      success: function(data){
        console.log(data);

      }
  });


// event listener close
})
$('#search-color-btn').click(function(){
let userSearchTwo= $('#search-color-text').val()
console.log(userSearchTwo);



  //event listener2 (#search-color-btn) close
})





  // document ready close
});
