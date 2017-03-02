$(document).ready(function() {
    //append div function
    // make dropzone dropable
    $('#palette-dropzone').attr('ondrop', 'drop(event)');
    $('#palette-dropzone').attr('ondragover', 'allowDrop(event)')
    var selectColorData = []; // incase I need to push paletteDiv to global variable

    var createPalContainer = function createPaletteDiv(data, palCount, divContainer) {
        let paletteDiv = $('<div>').addClass("palette-div").attr('id', `pal${palCount}`)
        paletteDiv.css('width', '250px')
        paletteDiv.css('height', '50px')
        paletteDiv.css('margin', '10px')
        paletteDiv.attr('draggable', true)
        paletteDiv.attr('ondragstart', "drag(event)")
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
    }

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
                //append container for each palette
                for (var i = 0; i < data.length; i++) {

                    createPalContainer(data[i], i, divContainer)

                }

                // console.log("div children:", $('#color-selector-box').children());
                // drag/drop event script
                // function allowDrop(ev) {
                //     ev.preventDefault();
                // }
                //
                // function drag(ev) {
                //     ev.dataTransfer.setData("text", ev.target.id);
                //     console.log('drag');
                // }
                //
                // function drop(ev) {
                //     ev.preventDefault();
                //     var data = ev.dataTransfer.getData("text");
                //     ev.target.appendChild(document.getElementById(data));
                // }
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
