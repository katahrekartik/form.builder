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
        var html = '<li class="placeholder-inner-content" id="fullname-component component"><h6>Name</h6><div class="firstname" style="display:inline-block"><input type="text" style="height:30px; width:150px;"></input><p>Firtname</p></div><div class="lastname" style="display:inline-block;margin-left:20px;"><input type="text" style="height:30px; width:150px;"></input><p>Lastname</p></div></li>';
        $('#form-container').append(html);
        scrollwindow();
    })

    $('#phone').click(function() {
        var html = '<li class="placeholder-inner-content" id="phone-component component"><h6>Phone</h6><div class="areacode" style="display:inline-block"><input type="text" style="height:30px; width:150px;"></input><p>Area Code</p></div><div class="phone-number" style="display:inline-block;margin-left:20px;"><input type="text" style="height:30px; width:150px;"></input><p>Phone Number</p></div></li>';
        $('#form-container').append(html);
        scrollwindow();
    })

    $('#email').click(function() {
        var html = '<li class="placeholder-inner-content" id="email-component component"><h6>Email</h6><div class="email"><input type="text" style="height:30px; width:150px;"></input><p>example@domain.com</p></div></li>';
        $('#form-container').append(html);
        scrollwindow();
    })


    $('#address').click(function() {
        var html = '<li class="placeholder-inner-content" id="address-component component"><h6>Address</h6><div class="street-address"><input type="text" style="height:30px; width:320px;"></input><p>Street Address</p></div><div class="city" style="display:inline-block"><input type="text" style="height:30px; width:150px;"></input><p>City</p></div><div class="state" style="display:inline-block;margin-left:20px;"><input type="text" style="height:30px; width:150px;"></input><p>State</p></div><div class="zip-code"><input type="text" style="height:30px; width:320px;"></input><p>Postal/Zip code</p></div></li>';
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