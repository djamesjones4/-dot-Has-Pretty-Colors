$(document).ready(function() {
    //append div function

    function createPaletteDiv(data) {
        let paletteDiv = $('<div>').addClass("palette-div")
        paletteDiv.css('width', '250px')
        paletteDiv.css('height', '50px')
        paletteDiv.appendTo('#color-selector-box')
        for (i = 0; i < data.colors.length; i++) {

            let colorDiv = $('<div>').addClass('color-div' [i]).appendTo(paletteDiv)
            // create div with background color for hex value data.colors[i]
            let hexValue = data.colors[i]
            console.log(hexValue)
            colorDiv.addClass(`${hexValue}`)
            colorDiv.css('background-color', '#' + hexValue);
            colorDiv.css('width', '50px');
            colorDiv.css('height', '50px');
            colorDiv.css('display', 'inline-block')
            console.log(paletteDiv);

            // let colorDiv = $('<div>').addClass('color-div'[i]).appendTo(paletteDiv)

        }
    }

    // event listener for button
    $('#search-color-selector-btn').click(function() {
        console.log('you clicked');
        //user input value minus '#'
        let userSearch = $('#color-selector').val().slice(1);
        console.log('user input', userSearch);
        //set up variable to contain data
        let selectColorData = [];
        $.ajax({
            url: `http://www.colourlovers.com/api/palettes`,
            dataType: 'jsonp',
            data: {
                format: 'json',
                numResults: 50,
                hex: userSearch,
            },
            jsonp: 'jsonCallback',
            success: function(data) {
                console.log(data[0]);
                //append container for each palette
                for (var i = 0; i < data.length; i++) {
                    createPaletteDiv(data[i])
                    break
                }

                // console.log("div children:", $('#color-selector-box').children());




            } //success block close

        });


    }) // event listener close


    //event listener for search by color name
    $('#search-color-btn').click(function() {
        let userSearchTwo = $('#search-color-text').val()
        console.log('user search 2:', userSearchTwo);



        //event listener2 (#search-color-btn) close
    })





    // document ready close
});
