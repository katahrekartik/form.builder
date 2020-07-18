function openfieldsPanel() {
    $(".formfields-panel").animate({
        width: '300px',
    }, 100);
    $(".toggle-button").animate({
        width: '0px',
        padding: '0px',

    }, 100)
}

function closefieldsPanel() {
    $(".formfields-panel").animate({
        width: '0px',
    }, 100);
    $(".toggle-button").animate({
        width: '140px',
        padding: '20px 15px 8px 20px',

    }, 100)
}

function scrollwindow() {
    var offset = $('#form-container').find('li').last().offset().top;
    $('html, body').animate({
        scrollTop: offset
    }, 1000)
}

$(document).ready(function() {


    $('#open-button').click(function() {
        openfieldsPanel()
    });

    $('#close-button').click(function() {
        closefieldsPanel();
    });



    $('#header').click(function() {
        var html = '<li class="placeholder-inner-content" id="header-component component"><div><p contenteditable="true" style="color:black;font-size:25px">Heading</p><p contenteditable="true">Type a subheader</p></div></li>';
        $('#form-container').append(html);
        scrollwindow();

    })


    $('#fullname').click(function() {
        var html = '<li class="placeholder-inner-content" id="header-component component">This is new item</li>';
        $('#form-container').append(html);
        scrollwindow();


    })

    //Apply border and display operations sections on selected element and remove from other elements
    $('#form-container').on('click', 'li', function() {
        $(this).css('border', '1px solid #0C84E4');
        $(this).siblings('li').css('border', 'none');
        //Allow operations section (delete and properties buttons) only on one component
        var lengthOfLi = $(this).find('.operations').length;
        if (lengthOfLi < 1) {
            $(this).append('<div class="operations" style="font-size:25px;float:right"><i class="fa fa-cog properties" style="color:black"></i><i class="fa fa-trash-o remove-component";color:red"></i></div>')

        }
        $(this).siblings('li').find('.operations').remove();

    });



    //Remove component
    $('#form-container').on('click', '.remove-component', function() {
        $(this).parents('li').remove();
    });


})