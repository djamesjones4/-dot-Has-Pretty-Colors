$(document).ready(function() {
console.log();
// event listener for button
$('#search-color').click(function() {
  console.log('you clicked');
  //user input value
let userSearch = $('#color-selector').val().slice(1);
console.log(userSearch);
$.ajax({
method: 'GET',

url: `http://www.colourlovers.com/api/palettes/OR/${userSearch}/?format=json`
,

dataType: 'jsonp',
success: function(data){
// what to do if data is retrieved successfully
console.log(data);
let collection= $('.collection-ul')
console.log(collection);



  //data close
}




  //ajax close
});



// event listener close
})


  // document ready close
});
