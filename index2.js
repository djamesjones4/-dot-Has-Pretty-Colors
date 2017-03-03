$(document).ready(function() {
    //append div function

    // make dropzone dropable
    // $('#palette-dropzone').attr('ondrop', 'drop(event)');
    // $('#palette-dropzone').attr('ondragover', 'allowDrop(event)')
    var selectColorData = []; // incase I need to push paletteDiv to global variable
    // Local storage
// let palletes = [];
//
// palettes.push()
function drag(event){}
    var createPalContainer = function createPaletteDiv(data, palCount, divContainer) {
        let paletteDiv = $('<div>').addClass("palette-div").attr('id', `pal${palCount}`)
        paletteDiv.css('width', '250px')
        paletteDiv.css('height', '50px')
        paletteDiv.css('margin', '10px')
        paletteDiv.attr('draggable', true)
        paletteDiv.attr('ondragstart', "event.dataTransfer.setData('text/plain',null)")
        paletteDiv.appendTo(divContainer)
        if (data !== undefined) {
            for (i = 0; i < data.colors.length; i++) {

                let colorDiv = $('<div>').addClass('color-div' [i]).appendTo(paletteDiv)
                let hexValue = data.colors[i]
                // console.log(hexValue)
                // give each colorDiv a unique classname (index[c,o,l,o,r] + palette title + hexValue)
                colorDiv.addClass(`${data.title} ` + `${hexValue}`)
                // add background color of hexValue to colorDiv
                colorDiv.css('background-color', '#' + hexValue);
                colorDiv.css('width', '50px');
                colorDiv.css('height', '50px');
                colorDiv.css('display', 'inline-block')
                // console.log(paletteDiv);
            }
        }
    } // end create palette function



    // event listener for button
    $('#search-color-selector-btn').click(function() {
        console.log('you clicked');
        //user input value minus '#'
        let userSearch = $('#color-selector').val().slice(1);
        console.log('user input', userSearch);
        //set up variable to contain data
        $.ajax({
            url: `http://www.colourlovers.com/api/palettes`,
            dataType: 'jsonp',
            data: {
                format: 'json',
                numResults: 4,
                hex: userSearch,
            },
            jsonp: 'jsonCallback',
            success: function(data) {
                console.log("first object in data set", data[0]);
                //create divContainer
                var divContainer = $('<div>').addClass('palette-container')
                divContainer.appendTo('#color-selector-box')
                divContainer.addClass('dropzone')
                //append container for each palette
                for (var i = 0; i < data.length; i++) {
                    createPalContainer(data[i], i, divContainer)

                }

                // drag and drop funtions start

                var dragged;

                  /* events fired on the draggable target */
                  document.addEventListener("drag", function( event ) {

                  }, false);

                  document.addEventListener("dragstart", function( event ) {
                      // store a ref. on the dragged elem
                      dragged = event.target;
                      // make it half transparent
                      event.target.style.opacity = .5;
                  }, false);

                  document.addEventListener("dragend", function( event ) {
                      // reset the transparency
                      event.target.style.opacity = "";
                  }, false);

                  /* events fired on the drop targets */
                  document.addEventListener("dragover", function( event ) {
                      // prevent default to allow drop
                      event.preventDefault();
                  }, false);

                  document.addEventListener("dragenter", function( event ) {
                      // highlight potential drop target when the draggable element enters it
                      if ( event.target.className == "dropzone" ) {
                          event.target.style.background = "purple";
                      }

                  }, false);

                  document.addEventListener("dragleave", function( event ) {
                      // reset background of potential drop target when the draggable element leaves it
                      if ( event.target.className == "dropzone" ) {
                          event.target.style.background = "";
                      }

                  }, false);

                  document.addEventListener("drop", function( event ) {
                      // prevent default action (open as link for some elements)
                      event.preventDefault();
                      // move dragged elem to the selected drop target
                      if ( event.target.className == "dropzone" ) {
                          event.target.style.background = "";
                          // dragged.parentNode.removeChild( dragged );
                          event.target.appendChild( dragged );
                      }

                  }, false);

                  // end drag and drop funciton

            } //success block close

        });


    }) // event listener close


    //event listener for search by color name
    // $('#search-color-btn').click(function() {
    //     let userSearchTwo = $('#search-color-text').val()
    //     console.log('user search 2:', userSearchTwo);
    //
    //
    //
    //     //event listener2 (#search-color-btn) close
    // })





    // document ready close
});
