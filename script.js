//Open fields panel 
function openfieldsPanel() {
    $(".formfields-panel").animate({
        width: '300px',
    }, 100);
    $(".toggle-button").animate({
        width: '0px',
        padding: '0px',

    }, 100)
}


//Close fields panel
function closefieldsPanel() {
    $(".formfields-panel").animate({
        width: '0px',
    }, 100);
    $(".toggle-button").animate({
        width: '140px',
        padding: '20px 15px 8px 20px',

    }, 100)
}

//Close property Section
function closepropertiesSection() {
    $(".properties-section").animate({
        width: '0',
        marginLeft: '450px'
    }, 500);
}

//Scroll window to the lastly added component
function scrollwindow() {
    var offset = $('#form-container').find('li').last().offset().top;
    $('html, body').animate({
        scrollTop: offset
    }, 1000)
}

//Function return the id for dyanalically assigning to the newly added for  component
function checkListcount() {
    let length = $('#form-container').find('li').length;
    return length + 1;
}


//Returns a header component 
function createHeaderComponent(id) {
    return '<li class="header" id="' + id + '" ><div class="header-content"><p contenteditable="true" id="component-heading">Heading</p><p contenteditable="true" id="component-subheading">Type a subheader</p></div></li>';

}

//Returns a full name component 
function createFullnameComponent(id) {
    return '<li class="fullname"  id="' + id + '" ><div class="alignment-block-text"><h6 id="question-text">Name</h6></div><div class="alignment-block-input"><div class="firstname" style="display:inline-block"><input type="text" style=""></input><p id="firstname">Firstname</p></div><div class="lastname" style="display:inline-block;margin-left:20px;"><input type="text" style=""></input><p id="lastname">Lastname</p></div></div></li>';

}

//Returns a Email component 
function createEmailComponent(id) {
    return '<li class="email" id="' + id + '"><div class="alignment-block-text"><h6 id="email-question-text">Email</h6></div><div class="alignment-block-input"><div class="email"><input type="text" style=""></input><p id="component-emailsubLabel">example@domain.com</p></div></div></li>';


}

//Returns a Phone component 
function createPhoneComponent(id) {
    return '<li class="phone"  id="' + id + '"><div class="alignment-block-text"><h6 id="phone-question-text">Phone</h6></div><div class="alignment-block-input"><div class="areacode" style="display:inline-block"><input type="text" style=""></input><p id="areacode">Area Code</p></div><div class="phone-number" style="display:inline-block;margin-left:20px;"><input type="text" style=""></input><p id="number">Phone Number</p></div></div></li>';


}

//Returns a Address component 
function createAddressComponent(id) {
    return '<li class="address" id="' + id + '"><h6 id="address-question-text">Address</h6><div class="street-address"><input type="text" style="height:30px; width:320px;"></input><p>Street Address</p></div><div class="city" style="display:inline-block"><input type="text" style=""></input><p>City</p></div><div class="state" style="display:inline-block;margin-left:20px;"><input type="text" style=""></input><p>State</p></div><div class="zip-code"><input type="text" style="height:30px; width:320px;"></input><p>Postal/Zip code</p></div></li>';


}


//Returns properties list when header properties clicked
function createHeaderProperties(componentHeading, componentsubHeading) {

    $('#properties-container').find('li').remove();
    $('.properties-header').find('span').remove();
    $('.properties-header').find('h3').prepend("<span>Header </span>");
    var headingText = '<li><div><h3>Heading Text</h3><input id="heading-text" type="text"  value="' + componentHeading + '"></input></div></li>';
    var subheadingText = '<li><div><h3>Subheading Text</h3><input type="text" id="subheading"  value="' + componentsubHeading + '"></input></div></li>';
    var headingSize = '<li><div><h3>Heading size</h3><button id="defaultHeading">Default</button><button id="headingLarge">Large</button><button id="headingSmall">Small</button></div></li>'
    var textAlignment = '<li><div><h3>Text Alignment</h3><button id="defaultAlignment">Left</button><button id="centerAlignment">Center</button><button id="rightAlignment">Right</button></div></li>'
    var duplicate = '<li><div><h3>Duplicate</h3><button id="duplicateHeader"><i class="fa fa-copy"></i>Duplicate</button></li>'
    return headingText + subheadingText + headingSize + textAlignment + duplicate;
}


//Returns properties list when Full name properties clicked
function createFullnameProperties(questionText, firstname, lastname) {
    $('#properties-container').find('li').remove();
    $('.properties-header').find('span').remove();
    $('.properties-header').find('h3').prepend("<span>Full Name </span>");
    var headingText = '<li><div><h3>Question Text</h3><input id="heading-text" value="' + questionText + '"  type="text"></input></div></li>';
    var sublabels = '<li><div><h3>Sub Labels</h3><div>Firstname<input id="sublabelFirst" type="text" value="' + firstname + '"></input></div><div>Lastname<input type="text" id="sublabelSecond" value="' + lastname + '"></input></div></div></li>';
    var labelAlignment = '<li><div><h3>Text Alignment</h3><button id="default">Top</button><button id="propertiesLeftAlign">Left</button></div></li>'
    var duplicate = '<li><div><h3>Duplicate</h3><button  id="duplicateFullname"><i class="fa fa-copy"></i>Duplicate</button></li>'
    return headingText + sublabels + labelAlignment + duplicate;
}

//Returns properties list when Email properties clicked
function createEmailProperties(emailquestionText, emailsubLabel) {
    $('#properties-container').find('li').remove();
    $('.properties-header').find('span').remove();
    $('.properties-header').find('h3').prepend("<span>Email </span>");
    var emailheadingText = '<li><div><h3>Question Text</h3><input id="email-heading-text" value="' + emailquestionText + '"  type="text"></input></div></li>';
    var emailsublabel = '<li><div><h3>Sub Label</h3><input id="emailsublabel" value="' + emailsubLabel + '"  type="text"></input></div></li>';
    var emaillabelAlignment = '<li><div><h3>Text Alignment</h3><button id="default">Top</button><button id="propertiesLeftAlign">Left</button></div></li>'
    var duplicate = '<li><div><h3>Duplicate</h3><button  id="duplicateEmail"><i class="fa fa-copy"></i>Duplicate</button></li>'
    return emailheadingText + emailsublabel + emaillabelAlignment + duplicate;
}

//Returns properties list when Address properties clicked
function createAddressProperties(addressquestionText) {
    $('#properties-container').find('li').remove();
    $('.properties-header').find('span').remove();
    $('.properties-header').find('h3').prepend("<span>Address </span>");
    var addressheadingText = '<li><div><h3>Question Text</h3><input id="address-heading-text" value="' + addressquestionText + '"  type="text"></input></div></li>';
    var duplicate = '<li><div><h3>Duplicate</h3><button  id="duplicateAddress"><i class="fa fa-copy"></i>Duplicate</button></li>'
    return addressheadingText + duplicate;
}

//Returns properties list when Phone properties clicked
function createPhoneProperties(phonequestionText, areacode, number) {
    $('#properties-container').find('li').remove();
    $('.properties-header').find('span').remove();
    $('.properties-header').find('h3').prepend("<span>Phone </span>");
    var phoneheadingText = '<li><div><h3>Question Text</h3><input id="phone-heading-text" value="' + phonequestionText + '"  type="text"></input></div></li>';
    var phonesublabels = '<li><div><h3>Sub Labels</h3><div>Area code<input id="phonesublabelFirst" type="text" value="' + areacode + '"></input></div><div>Number<input type="text" id="phonesublabelSecond" value="' + number + '"></input></div></div></li>';
    var labelAlignment = '<li><div><h3>Text Alignment</h3><button id="default">Top</button><button id="propertiesLeftAlign">Left</button></div></li>'
    var duplicate = '<li><div><h3>Duplicate</h3><button  id="duplicatePhone"><i class="fa fa-copy"></i>Duplicate</button></li>'
    return phoneheadingText + phonesublabels + labelAlignment + duplicate;
}

//Remove placeholder if form components list are being added
function checkComponentCount() {
    var listlength = $('#form-container').find('li').length;
    if (listlength > 0) {
        $('.placeholder-inner-content').css('display', 'none')
    } else {
        $('.placeholder-inner-content').css('display', 'block')
    }
}



$(document).ready(function() {
    //Open field panel
    $('#open-button').click(function() {
        openfieldsPanel()
    });
    // Close field panel
    $('#close-button').click(function() {
        closefieldsPanel();
    });
    //Close properties seciton
    $('#close-properties').click(function() {
        closepropertiesSection();
    });



    //When header is clicked create header component 
    $('#header').click(function() {
        let id = checkListcount();
        let html = createHeaderComponent(id);
        $('#form-container').append(html);
        checkComponentCount();
        scrollwindow();

    })

    //When header is clicked create Fullname component 
    $('#fullname').click(function() {
        let id = checkListcount();
        let html = createFullnameComponent(id);
        $('#form-container').append(html);
        checkComponentCount();
        scrollwindow();
    })

    //When header is clicked create Phone component 
    $('#phone').click(function() {
        let id = checkListcount();
        let html = createPhoneComponent(id);
        $('#form-container').append(html);
        checkComponentCount();
        scrollwindow();
    })

    //When header is clicked create Email component 
    $('#email').click(function() {
        let id = checkListcount();
        let html = createEmailComponent(id);

        $('#form-container').append(html);
        checkComponentCount();
        scrollwindow();
    })

    //When header is clicked create Address component 
    $('#address').click(function() {
        let id = checkListcount();
        let html = createAddressComponent(id);

        $('#form-container').append(html);
        checkComponentCount();
        scrollwindow();
    })


    //Apply border and display operations sections on selected element and remove from other elements
    $('#form-container').on('click', 'li', function() {
        $(this).siblings('li').css('border', 'none');
        //Allow operations section (delete and properties buttons) only on one component
        var lengthOfLi = $(this).find('.operations').length;
        if (lengthOfLi < 1) {
            $(this).css('border', '1px solid #0C84E4');
            $(this).append('<div class="operations" style="font-size:35px;float:right"><i class="fa fa-cog properties" style="color:black;padding-right:10px"></i><i class="fa fa-trash-o remove-component" style="color:red"></i></div>')
                // if width of a properties section is not 0 click the properties button
            if ($('.properties-section').width() != 0) {
                $(this).find('.properties').click();
            }

        }
        //Remove operations section from non clicked component
        $(this).siblings('li').find('.operations').remove();

    });



    //Remove component from the form contianer
    $('#form-container').on('click', '.remove-component', function() {
        $(this).parents('li').remove();
        checkComponentCount();
        $(".properties-section").animate({
            width: '0',
            marginLeft: '450px'
        }, 500);

    });


    //When properties button of a specific component is clicked create a properties section
    $('#form-container').on('click', '.properties', function() {
        //Take the li object in a variable
        var currentComponent = $(this).parents('li');
        //Store component ID
        var componentID = currentComponent.attr('id');
        //Assign corrosponding component id to the properties section 
        $('.properties-container').attr('id', componentID);
        //Store class of a component
        var componentClass = $(this).parents('li').attr('class');
        //Open properties section
        $(".properties-section").animate({
            width: '500px',
            marginLeft: '0'
        }, 500);
        //return content according to the component
        switch (componentClass) {
            case 'header':
                let componentHeading = currentComponent.find('#component-heading').html();
                let componentsubHeading = currentComponent.find('#component-subheading').html();
                let headerinnerHTML = createHeaderProperties(componentHeading, componentsubHeading);
                $('#properties-container').append(headerinnerHTML);
                $('#properties-contianer').find('#default').css({ 'background-color': '#0293e2' });
                //When input text is changed reflect the changes in the component
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
                let fullnameInnerHTML = createFullnameProperties(questionText, firstname, lastname);
                $('#properties-container').append(fullnameInnerHTML);
                $('#properties-contianer').find('#default').css({ 'background-color': '#0293e2' });
                //When input text is changed reflect the changes in the component
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
                let emailInnerHTML = createEmailProperties(emailquestionText, emailsubLabel);
                $('#properties-container').append(emailInnerHTML);
                $('#properties-contianer').find('#default').css({ 'background-color': '#0293e2' });
                //When input text is changed reflect the changes in the component
                $('#email-heading-text').keyup(function() {
                    currentComponent.find('#email-question-text').html($('#email-heading-text').val());
                })
                $('#emailsublabel').keyup(function() {
                    currentComponent.find('#component-emailsubLabel').html($('#emailsublabel').val());
                })
                break;

            case 'address':
                let addressquestionText = currentComponent.find('#address-question-text').html();
                let addressInnerHTML = createAddressProperties(addressquestionText);
                $('#properties-container').append(addressInnerHTML);
                //When input text is changed reflect the changes in the component
                $('#address-heading-text').keyup(function() {
                    currentComponent.find('#address-question-text').html($('#address-heading-text').val());
                })
                break;

            case 'phone':
                let phonequestionText = currentComponent.find('#phone-question-text').html();
                let areacode = currentComponent.find('#areacode').html();
                let number = currentComponent.find('#number').html();
                let phoneInnerHTML = createPhoneProperties(phonequestionText, areacode, number);
                $('#properties-container').append(phoneInnerHTML);
                $('#properties-contianer').find('#default').css({ 'background-color': '#0293e2' });
                //When input text is changed reflect the changes in the component
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


    //Change font size of a component
    $('#properties-container').on('click', '#headingLarge', function() {
        let id = '#' + $(this).parents('.properties-container').attr('id');
        $('#form-container').find(id).find('#component-heading').css('font-size', '40px');
    })
    $('#properties-container').on('click', '#headingSmall', function() {
        let id = '#' + $(this).parents('.properties-container').attr('id');
        $('#form-container').find(id).find('#component-heading').css('font-size', '15px');

    })
    $('#properties-container').on('click', '#defaultHeading', function() {
        let id = '#' + $(this).parents('.properties-container').attr('id');
        $('#form-container').find(id).find('#component-heading').css('font-size', '25px');

    })


    //Change the alignment of text elements
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

    //change the alignment of div element
    $('#properties-container').on('click', '#propertiesLeftAlign', function() {
        let id = '#' + $(this).parents('.properties-container').attr('id');
        $('#form-container').find(id).find('.alignment-block-text').css({ 'display': 'inline-block', 'padding': '0px 100px 0px 0px' });
        $('#form-container').find(id).find('.alignment-block-input').css('display', 'inline-block');
        $('#form-container').find(id).find('.alignment-block-text').find('h6').css({ 'position': 'relative', 'top': '-40px' });
    })

    $('#properties-container').on('click', '#default', function() {
        let id = '#' + $(this).parents('.properties-container').attr('id');
        $('#form-container').find(id).find('.alignment-block-text').css({ 'display': 'block', 'padding': '0px 0px 0px 0px' });
        $('#form-container').find(id).find('.alignment-block-text').find('h6').css({ 'position': 'relative', 'top': '0px' });
        $('#form-container').find(id).find('.alignment-block-input').css('display', 'block');

    })


    //Create duplicate component when duplicate is clicked
    $('#properties-container').on('click', '#duplicateHeader', function() {
        let id = checkListcount();
        $('#form-container').append(createHeaderComponent(id));
        scrollwindow();
    });
    $('#properties-container').on('click', '#duplicateFullname', function() {

        let id = checkListcount();
        $('#form-container').append(createFullnameComponent(id));
        scrollwindow();
    });
    $('#properties-container').on('click', '#duplicateEmail', function() {
        let id = checkListcount();
        $('#form-container').append(createEmailComponent(id));
        scrollwindow();
    });
    $('#properties-container').on('click', '#duplicatePhone', function() {
        let id = checkListcount();
        $('#form-container').append(createPhoneComponent(id));
        scrollwindow();
    });
    $('#properties-container').on('click', '#duplicateAddress', function() {
        let id = checkListcount();
        $('#form-container').append(createAddressComponent(id));
        scrollwindow();
    });

})