$(document).ready(function() {
    //append div function
    function createPaletteDiv(data) {
        let paletteDiv = $('<div>').addClass("palette-div")
        paletteDiv.appendTo('#color-selector-box')

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
