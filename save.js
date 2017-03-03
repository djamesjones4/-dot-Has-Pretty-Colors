$(document).ready(function(){
  var createPalContainer = function createPaletteDiv(data, palCount, divContainer) {
      let paletteDiv = $('<div>').addClass("palette-div").attr('id', `pal${palCount}`)
      paletteDiv.css('width', '250px')
      paletteDiv.css('height', '50px')
      paletteDiv.css('margin', '10px')
      // paletteDiv.attr('draggable', true)
      // paletteDiv.attr('ondragstart', "event.dataTransfer.setData('text/plain',null)")
      paletteDiv.appendTo(divContainer)
      if (data !== undefined) {

          for (let i = 0; i < data.length; i++) {

              let colorDiv = $('<div>').addClass('color-div' [i]).appendTo(paletteDiv)
              let rgbValue = data[i]
              console.log("Creating color", rgbValue , "for palette", palCount);

              console.log(rgbValue);
              // give each colorDiv a unique classname (index[c,o,l,o,r] + palette title + hexValue)
              // colorDiv.addClass(`${data.title} ` + `${hexValue}`)
              // add background color of hexValue to colorDiv
              colorDiv.css('background-color', 'rgbValue');
              colorDiv.css('width', '50px');
              colorDiv.css('height', '50px');
              colorDiv.css('display', 'inline-block')
              console.log(paletteDiv);
          }
      }
  } // end create palette fu
let savedPalettes = JSON.parse(localStorage.getItem('palettes'))
console.log(savedPalettes);

let divContainer = $('#paletteCont')
//iterate through saved palettes
for(let i=0; i<savedPalettes.length; i++){
  console.log("Creating palette", i);
  createPalContainer(savedPalettes[i], i, divContainer)

}



// $('.palettecontainer').click(function(){
//   console.log('you clicked');
//
// if($(event.target.id) !== "pal-cont-1"){
//   console.log('you clicked');
//   console.log(event.target);
// var colorToUse = $(event.target).css('background-color')
// }
// console.log("target color:", colorToUse);
// console.log($('nav')[0]);
// $('nav').css('background-color', `${colorToUse}`)
//
// })
//
// $('.palettecontainer2').click(function(){
//   console.log('you clicked');
//
// if($(event.target.id) !== "pal-cont-1"){
//   console.log('you clicked');
//   console.log(event.target);
// var colorToUse = $(event.target).css('background-color')
// }
// console.log("target color:", colorToUse);
// console.log($('nav')[0]);
// $('body').css('background-color', `${colorToUse}`)
//
// })
//
// $('.palettecontainer3').click(function(){
//   console.log('you clicked');
//
// if($(event.target.id) !== "pal-cont-1"){
//   console.log('you clicked');
//   console.log(event.target);
// var colorToUse = $(event.target).css('background-color')
// }
// console.log("target color:", colorToUse);
// console.log($('nav')[0]);
// $('.text-color').css('color', `${colorToUse}`)
//
// })







})
