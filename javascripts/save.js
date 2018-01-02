$(document).ready(function() {

    var createPalContainer = function createPaletteDiv(data, palCount, divContainer) {
        let paletteDiv = $('<div>').addClass("palette-div").attr('id', `pal${palCount}`)

        paletteDiv.css('width', '250px')
        paletteDiv.css('height', '50px')
        paletteDiv.css('margin', '10px')
        // paletteDiv.attr('draggable', true)
        // paletteDiv.attr('ondragstart', "event.dataTransfer.setData('text/plain',null)")

        if (data !== undefined) {

            for (let i = 0; i < data.length; i++) {

                let colorDiv = $('<div>').addClass('color-div' [i])
                let rgbValue = data[i]
                // let rgbaValue = data[i].slice(0,3) + "a" + data[i].slice(3, (data[i].length -1)) + ", 1" + ")"
                // console.log("Creating color", rgbValue, "for palette", palCount);

                // console.log(rgbValue);
                // give each colorDiv a unique classname (index[c,o,l,o,r] + palette title + hexValue)
                // colorDiv.addClass(`${data.title} ` + `${hexValue}`)
                // add background color of hexValue to colorDiv
                colorDiv.css('background-color', rgbValue);
                colorDiv.css('width', '50px');
                colorDiv.css('height', '50px');
                colorDiv.css('display', 'inline-block')
                colorDiv.appendTo(paletteDiv)
                // console.log(paletteDiv);
                // console.log(rgbValue, colorDiv.css('background-color'));
            }

        }
        paletteDiv.appendTo(divContainer)

        paletteDiv.attr('class', 'back-color').appendTo($('.backgroundColor'))
        paletteDiv.clone().attr('class', 'nav-color').appendTo($('.navColor'))
        paletteDiv.clone().attr('class', 'color-text').appendTo($('.textColor'))

    } // end create palette function

    // get saved palettes from local storage
    let savedPalettes = JSON.parse(localStorage.getItem('palettes'))
    console.log('savedPalettes', savedPalettes);

    let divContainer = $('#paletteCont')
    // iterate through saved palettes
    for (let i = 0; i < savedPalettes.length; i++) {
        // console.log("Creating palette", i);

        // create DOM container for palette
        createPalContainer(savedPalettes[i], i, divContainer)

        // create on click event listener for each item in each palette
        $('.back-color').click(function() {
            // console.log('you clicked');

            if ($(event.target.id) !== "noClick1" && $(event.target.id) !== 'pal0') {
                // console.log('you clicked');
                // console.log(event.target);
                var colorToUse = $(event.target).css('background-color')
            }
            // console.log("target color:", colorToUse);
            // console.log($('nav')[0]);

            // change background color to clicked color
            $('body').css('background-color', `${colorToUse}`)
        })

        // set on-click event listener for nav color
        $('.nav-color').click(function() {
            console.log('you clicked');

            if ($(event.target.id) !== "noClick" && $(event.target.id) !== 'pal1') {
                // console.log('you clicked');
                // console.log(event.target);
                var colorToUse = $(event.target).css('background-color')
            }
            // console.log("target color:", colorToUse);
            // console.log($('nav')[0]);
            // change nav color to clicked color
            $('nav').css('background-color', `${colorToUse}`)
        })
        // set event listener for text color palettes
        $('.color-text').click(function() {
            // console.log('you clicked');

            if ($(event.target.id) !== "noClick" && $(event.target.id) !== 'pal2') {
                // console.log('you clicked');
                // console.log(event.target);
                var colorToUse = $(event.target).css('background-color')
            }
            // console.log("target color:", colorToUse);
            // console.log($('nav')[0]);

            // change text color to selected color
            $('.text-color').css('color', `${colorToUse}`)

        })

    }
})
