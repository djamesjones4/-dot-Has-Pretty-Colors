$(document).ready(function() {
    // function to dynamically display palettes from API data
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

    // create array of arrays to save to local storage on save palettes click event
    $('#save-palettes').click(function() {

        if (JSON.parse(localStorage.getItem("palettes")) === null) {
            let savedPalettes = [];
            $('#palette-dropzone').children().each(function() {
                let palette = []
                $(this).children().each(function() {
                    let rgbColor = this.style.backgroundColor
                    palette.push(rgbColor)
                })
                savedPalettes.push(palette)
            })
            console.log('savedPalettes for storage:', savedPalettes);
            console.log("type of savedPalettes:", typeof savedPalettes);
            localStorage.setItem("palettes", JSON.stringify(savedPalettes))
            let storagePal = JSON.parse(localStorage.getItem("palettes"))
            console.log('Palettes out of storage', storagePal);
            $('#palette-dropzone').empty()
        } else {
            let oldStorage = JSON.parse(localStorage.getItem("palettes"))
            $('#palette-dropzone').children().each(function() {
                let palette = []
                $(this).children().each(function() {
                    let rgbColor = this.style.backgroundColor
                    palette.push(rgbColor)
                })
                oldStorage.push(palette)
            })
            console.log('appended oldStorage ready to store:', oldStorage);
            console.log("type of appended oldStorage:", typeof oldStorage);
            localStorage.setItem("palettes", JSON.stringify(oldStorage))
            let storagePal = JSON.parse(localStorage.getItem("palettes"))
            console.log('Palettes out of storage again', storagePal);
            $('#palette-dropzone').empty()
        }
    })


    // event listener for search selection button
    $('#search-color-selector-btn').click(function() {
        //set up variable for user input
        //user input value minus '#'. Input is a hex value from color picker
        let userSearch = $('#color-selector').val().slice(1);
        console.log('userSearch:', userSearch);
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
                $('#paletteCont').empty()
                // create container for API data to populate with palettes
                var divContainer = $('#paletteCont')
                divContainer.addClass('palette-container')

                // Create and append container for each palette
                for (var i = 0; i < data.length; i++) {
                    createPalContainer(data[i], i, divContainer)
                }

                // drag and drop funtions starts below. Must be inside ajax call for synchronicity.
                var dragged;
                /* events fired on the draggable target */
                document.addEventListener("drag", function(event) {}, false);

                document.addEventListener("dragstart", function(event) {
                    // store a ref. on the dragged elem
                    dragged = event.target;
                    // make it half transparent
                    event.target.style.opacity = .5;
                }, false);

                document.addEventListener("dragend", function(event) {
                    // reset the transparency
                    event.target.style.opacity = "";
                }, false);
                /* events fired on the drop targets */
                document.addEventListener("dragover", function(event) {
                    // prevent default to allow drop
                    event.preventDefault();
                }, false);

                document.addEventListener("dragenter", function(event) {
                    // highlight potential drop target when the draggable element enters it
                    if (event.target.className == "dropzone") {

                        event.target.style.background = "#666666";
                    }

                }, false);

                document.addEventListener("dragleave", function(event) {
                    // reset background of potential drop target when the draggable element leaves it
                    if (event.target.className == "dropzone") {

                        event.target.style.background = "#444444";
                    }

                }, false);

                document.addEventListener("drop", function(event) {
                    // prevent default action (open as link for some elements)
                    event.preventDefault();
                    // move dragged elem to the selected drop target
                    if (event.target.className == "dropzone") {
                        event.target.style.background = "";
                        // dragged.parentNode.removeChild( dragged );
                        event.target.appendChild(dragged);
                    }

                }, false);

                // end drag and drop funciton

            } //success block close

        }); // ajax close


    }) // search event listener close








    // document ready close
});
