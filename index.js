$(document).ready(function() {

// event listener for button
$('.btn').click(function() {
  console.log('you clicked');
  //user input value
let userSearch = $('#search-text').val();
$.ajax({
method: 'GET',

url: `http://www.colourlovers.com/api/palettes/${userSearch}/?format=json`
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
