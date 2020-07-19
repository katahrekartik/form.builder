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

function closepropertiesSection() {
    $(".properties-section").animate({
        width: '0px',
    }, 100);
}

function scrollwindow() {
    var offset = $('#form-container').find('li').last().offset().top;
    $('html, body').animate({
        scrollTop: offset
    }, 1000)
}

function checkListcount() {
    let length = $('#form-container').find('li').length;
    return length + 1;
}

function createHeaderComponent(id) {
    return '<li class="header" id="' + id + '"><div class="header-content"><p contenteditable="true" id="component-heading" >Heading</p><p contenteditable="true" id="component-subheading">Type a subheader</p></div></li>';

}


$(document).ready(function() {

    $('#open-button').click(function() {
        openfieldsPanel()
    });

    $('#close-button').click(function() {
        closefieldsPanel();
    });

    $('#close-properties').click(function() {
        closepropertiesSection();
    });




    $('#header').click(function() {
        let id = checkListcount();
        let html = createHeaderComponent(id);
        $('#form-container').append(html);
        scrollwindow();

    })


    $('#fullname').click(function() {
        let id = checkListcount();
        var html = '<li class="fullname"  id="' + id + '"><h6 id="question-text">Name</h6><div class="firstname" style="display:inline-block"><input type="text" style="height:30px; width:150px;"></input><p id="firstname">Firstname</p></div><div class="lastname" style="display:inline-block;margin-left:20px;"><input type="text" style="height:30px; width:150px;"></input><p id="lastname">Lastname</p></div></li>';
        $('#form-container').append(html);
        scrollwindow();
    })

    $('#phone').click(function() {
        let id = checkListcount();
        var html = '<li class="phone"  id="' + id + '"><h6 id="phone-question-text">Phone</h6><div class="areacode" style="display:inline-block"><input type="text" style="height:30px; width:150px;"></input><p id="areacode">Area Code</p></div><div class="phone-number" style="display:inline-block;margin-left:20px;"><input type="text" style="height:30px; width:150px;"></input><p id="number">Phone Number</p></div></li>';
        $('#form-container').append(html);
        scrollwindow();
    })

    $('#email').click(function() {
        let id = checkListcount();
        var html = '<li class="email" id="' + id + '"><h6 id="email-question-text">Email</h6><div class="email"><input type="text" style="height:30px; width:150px;"></input><p id="component-emailsubLabel">example@domain.com</p></div></li>';
        $('#form-container').append(html);
        scrollwindow();
    })


    $('#address').click(function() {
        let id = checkListcount();
        var html = '<li class="address" id="' + id + '"><h6 id="address-question-text">Address</h6><div class="street-address"><input type="text" style="height:30px; width:320px;"></input><p>Street Address</p></div><div class="city" style="display:inline-block"><input type="text" style="height:30px; width:150px;"></input><p>City</p></div><div class="state" style="display:inline-block;margin-left:20px;"><input type="text" style="height:30px; width:150px;"></input><p>State</p></div><div class="zip-code"><input type="text" style="height:30px; width:320px;"></input><p>Postal/Zip code</p></div></li>';
        $('#form-container').append(html);
        scrollwindow();
    })


    //Apply border and display operations sections on selected element and remove from other elements
    $('#form-container').on('click', 'li', function() {
        $(this).siblings('li').css('border', 'none');
        //Allow operations section (delete and properties buttons) only on one component
        var lengthOfLi = $(this).find('.operations').length;
        if (lengthOfLi < 1) {
            $(this).css('border', '1px solid #0C84E4');
            $(this).append('<div class="operations" style="font-size:25px;float:right"><i class="fa fa-cog properties" style="color:black"></i><i class="fa fa-trash-o remove-component";color:red"></i></div>')
                // if width of a properties section is not 0 click the properties button
            if ($('.properties-section').width() != 0) {
                $(this).find('.properties').click();
            }

        }

        $(this).siblings('li').find('.operations').remove();

    });



    //Remove component
    $('#form-container').on('click', '.remove-component', function() {
        $(this).parents('li').remove();
    });

    // function when properties of a component clicked

    $('#form-container').on('click', '.properties', function() {
        var currentComponent = $(this).parents('li');
        var componentID = currentComponent.attr('id');
        $('.properties-container').attr('id', componentID);
        var componentClass = $(this).parents('li').attr('class');
        $(".properties-section").animate({
            width: '100%',
            marginLeft: '0'
        }, 100);
        switch (componentClass) {
            case 'header':

                let componentHeading = currentComponent.find('#component-heading').html();
                let componentsubHeading = currentComponent.find('#component-subheading').html();
                $('#properties-container').find('li').remove();
                $('.properties-header').find('span').remove();
                $('.properties-header').find('h3').prepend("<span>Header </span>");
                var headingText = '<li><div><h3>Heading Text</h3><input id="heading-text" type="text"  value="' + componentHeading + '"></input></div></li>';
                var subheadingText = '<li><div><h3>Subheading Text</h3><input type="text" id="subheading"  value="' + componentsubHeading + '"></input></div></li>';
                var headingSize = '<li><div><h3>Heading size</h3><button id="defaultHeading">Default</button><button id="headingLarge">Large</button><button id="headingSmall">Small</button></div></li>'
                var textAlignment = '<li><div><h3>Text Alignment</h3><button id="defaultAlignment">Left</button><button id="centerAlignment">Center</button><button id="rightAlignment">Right</button></div></li>'

                var duplicate = '<li><div><h3>Duplicate</h3><button id="duplicateHeader"><i class="fa fa-copy"></i>Duplicate</button></li>'



                $('#properties-container').append(headingText + subheadingText + headingSize + textAlignment + duplicate);

                $('#properties-contianer').find('#default').css({ 'background-color': '#0293e2' });

                $('#heading-text').keyup(function() {
                    currentComponent.find('#component-heading').html($('#heading-text').val());

                })
                $('#subheading').keyup(function() {
                    currentComponent.find('#component-subheading').html($('#subheading').val());

                })






                break;

            case 'fullname':
                let questionText = currentComponent.find('#question-text').html();
                let firstname = currentComponent.find('#firstname').html();
                let lastname = currentComponent.find('#lastname').html();
                $('#properties-container').find('li').remove();
                $('.properties-header').find('span').remove();
                $('.properties-header').find('h3').prepend("<span>Full Name </span>");
                var headingText = '<li><div><h3>Question Text</h3><input id="heading-text" value="' + questionText + '"  type="text"></input></div></li>';
                // $('#properties-container').find('#heading-text').val(currentComponent.find('#question-text').html());
                var sublabels = '<li><div><h3>Sub Labels</h3><div>Firstname<input id="sublabelFirst" type="text" value="' + firstname + '"></input></div><div>Lastname<input type="text" id="sublabelSecond" value="' + lastname + '"></input></div></div></li>';
                var labelAssignment = '<li><div><h3>Text Alignment</h3><button id="default">Top</button><button>Left</button><button>Right</button></div></li>'
                var duplicate = '<li><div><h3>Duplicate</h3><button><i class="fa fa-copy"></i>Duplicate</button></li>'
                $('#properties-container').append(headingText + sublabels + labelAssignment + duplicate);
                $('#properties-contianer').find('#default').css({ 'background-color': '#0293e2' });

                $('#heading-text').keyup(function() {
                    currentComponent.find('#question-text').html($('#heading-text').val());

                })
                $('#sublabelFirst').keyup(function() {
                    currentComponent.find('#firstname').html($('#sublabelFirst').val());

                })
                $('#sublabelSecond').keyup(function() {
                    currentComponent.find('#lastname').html($('#sublabelSecond').val());

                })
                break;


            case 'email':
                let emailquestionText = currentComponent.find('#email-question-text').html();
                let emailsubLabel = currentComponent.find('#component-emailsubLabel').html();
                $('#properties-container').find('li').remove();
                $('.properties-header').find('span').remove();
                $('.properties-header').find('h3').prepend("<span>Email </span>");
                var emailheadingText = '<li><div><h3>Question Text</h3><input id="email-heading-text" value="' + emailquestionText + '"  type="text"></input></div></li>';
                var emailsublabel = '<li><div><h3>Sub Label</h3><input id="emailsublabel" value="' + emailsubLabel + '"  type="text"></input></div></li>';
                var emaillabelAssignment = '<li><div><h3>Text Alignment</h3><button id="default">Top</button><button>Left</button><button>Right</button></div></li>'
                var duplicate = '<li><div><h3>Duplicate</h3><button><i class="fa fa-copy"></i>Duplicate</button></li>'
                $('#properties-container').append(emailheadingText + emaillabelAssignment + emailsublabel + duplicate);
                $('#properties-contianer').find('#default').css({ 'background-color': '#0293e2' });

                $('#email-heading-text').keyup(function() {
                    currentComponent.find('#email-question-text').html($('#email-heading-text').val());

                })
                $('#emailsublabel').keyup(function() {
                    currentComponent.find('#component-emailsubLabel').html($('#emailsublabel').val());

                })

                break;


            case 'address':
                let addressquestionText = currentComponent.find('#address-question-text').html();
                $('#properties-container').find('li').remove();
                $('.properties-header').find('span').remove();
                $('.properties-header').find('h3').prepend("<span>Address </span>");
                var addressheadingText = '<li><div><h3>Question Text</h3><input id="address-heading-text" value="' + addressquestionText + '"  type="text"></input></div></li>';
                var duplicate = '<li><div><h3>Duplicate</h3><button><i class="fa fa-copy"></i>Duplicate</button></li>'
                $('#properties-container').append(addressheadingText + duplicate);

                $('#address-heading-text').keyup(function() {
                    currentComponent.find('#address-question-text').html($('#address-heading-text').val());

                })


                break;


            case 'phone':
                let phonequestionText = currentComponent.find('#phone-question-text').html();
                let areacode = currentComponent.find('#areacode').html();
                let number = currentComponent.find('#number').html();
                alert(areacode);
                $('#properties-container').find('li').remove();
                $('.properties-header').find('span').remove();
                $('.properties-header').find('h3').prepend("<span>Phone </span>");
                var phoneheadingText = '<li><div><h3>Question Text</h3><input id="phone-heading-text" value="' + phonequestionText + '"  type="text"></input></div></li>';
                // $('#properties-container').find('#heading-text').val(currentComponent.find('#question-text').html());
                var phonesublabels = '<li><div><h3>Sub Labels</h3><div>Area code<input id="phonesublabelFirst" type="text" value="' + areacode + '"></input></div><div>Number<input type="text" id="phonesublabelSecond" value="' + number + '"></input></div></div></li>';
                var labelAssignment = '<li><div><h3>Text Alignment</h3><button id="default">Top</button><button>Left</button><button>Right</button></div></li>'
                var duplicate = '<li><div><h3>Duplicate</h3><button><i class="fa fa-copy"></i>Duplicate</button></li>'
                $('#properties-container').append(phoneheadingText + phonesublabels + labelAssignment + duplicate);
                $('#properties-contianer').find('#default').css({ 'background-color': '#0293e2' });

                $('#phone-heading-text').keyup(function() {
                    currentComponent.find('#phone-question-text').html($('#phone-heading-text').val());

                })
                $('#phonesublabelFirst').keyup(function() {
                    currentComponent.find('#areacode').html($('#phonesublabelFirst').val());

                })
                $('#phonesublabelSecond').keyup(function() {
                    currentComponent.find('#number').html($('#phonesublabelSecond').val());

                })
                break;


            default:
                console.log("default");

        }
    })

    $('#properties-container').on('click', '#headingLarge', function() {
        let id = '#' + $(this).parents('.properties-container').attr('id');
        $('#form-container').find(id).css('font-size', '40px');
    })
    $('#properties-container').on('click', '#headingSmall', function() {
        let id = '#' + $(this).parents('.properties-container').attr('id');
        $('#form-container').find(id).css('font-size', '15px');

    })
    $('#properties-container').on('click', '#defaultHeading', function() {
        let id = '#' + $(this).parents('.properties-container').attr('id');
        $('#form-container').find(id).css('font-size', '20px');

    })


    $('#properties-container').on('click', '#defaultAlignment', function() {
        let id = '#' + $(this).parents('.properties-container').attr('id');
        $('#form-container').find(id).css('text-align', 'left');
    })
    $('#properties-container').on('click', '#centerAlignment', function() {
        let id = '#' + $(this).parents('.properties-container').attr('id');
        $('#form-container').find(id).css('text-align', 'center');
    })
    $('#properties-container').on('click', '#rightAlignment', function() {
        let id = '#' + $(this).parents('.properties-container').attr('id');
        $('#form-container').find(id).css('text-align', 'right');

    })


    $('#properties-container').on('click', '#duplicateHeader', function() {
        let id = checkListcount();
        $('#form-container').append(createHeaderComponent(id));
    });








})