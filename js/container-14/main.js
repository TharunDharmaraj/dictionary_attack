(function($) {

    var form1 = $("#crack-password-form");
    var form2 = $("#crack-username-form");
    var form3 = $("#insert-form");
    form1.validate({
        errorPlacement: function errorPlacement(error, element) {
            element.before(error);
        },
        rules: {
            first_name: {
                required: true,
            }
        },
        messages: {
            first_name: {
                required: "Please enter your user name"
            }
        },
        onfocusout: function(element) {
            $(element).valid();
        },
        highlight: function(element, errorClass, validClass) {
            $(element).parent().parent().find('.form-group').addClass('form-error');
            $(element).removeClass('valid');
            $(element).addClass('error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parent().parent().find('.form-group').removeClass('form-error');
            $(element).removeClass('error');
            $(element).addClass('valid');
        }
    });
    form1.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        labels: {
            previous: 'Previous',
            next: 'Next',
            finish: 'Finish',
            current: ''
        },
        titleTemplate: '<h3 class="title">#title#</h3>',
        onInit: function(event, currentIndex) {
            // Suppress (skip) "Warning" step if the user is old enough.
            if (currentIndex === 0) {
                form1.find('.actions').addClass('test');
            }
        },
        onStepChanging: function(event, currentIndex, newIndex) {
            form1.validate().settings.ignore = ":disabled,:hidden";
            return form1.valid();
        },
        onFinishing: function(event, currentIndex) {
            form1.validate().settings.ignore = ":disabled";
            return form1.valid();
        },
        onFinished: function(event, currentIndex) {
            alert('Sumited');
        },
        onStepChanged: function(event, currentIndex, priorIndex) {


        }
    });
    form2.validate({
        errorPlacement: function errorPlacement(error, element) {
            element.before(error);
        },
        rules: {
            first_name: {
                required: true,
            },
            last_name: {
                required: true,
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            first_name: {
                required: "Please enter your first name"
            },
            last_name: {
                required: "Please enter your  password"
            },
            email: {
                required: "Please enter your first name",
                email: "Please enter a valid email address!"
            }
        },
        onfocusout: function(element) {
            $(element).valid();
        },
        highlight: function(element, errorClass, validClass) {
            $(element).parent().parent().find('.form-group').addClass('form-error');
            $(element).removeClass('valid');
            $(element).addClass('error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parent().parent().find('.form-group').removeClass('form-error');
            $(element).removeClass('error');
            $(element).addClass('valid');
        }
    });
    form2.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        labels: {
            previous: 'Previous',
            next: 'Next',
            finish: 'Finish',
            current: ''
        },
        titleTemplate: '<h3 class="title">#title#</h3>',
        onInit: function(event, currentIndex) {
            // Suppress (skip) "Warning" step if the user is old enough.
            if (currentIndex === 0) {
                form2.find('.actions').addClass('test');
            }
        },
        onStepChanging: function(event, currentIndex, newIndex) {
            form2.validate().settings.ignore = ":disabled,:hidden";
            return form2.valid();
        },
        onFinishing: function(event, currentIndex) {
            form2.validate().settings.ignore = ":disabled";
            return form2.valid();
        },
        onFinished: function(event, currentIndex) {
            alert('Sumited');
        },
        onStepChanged: function(event, currentIndex, priorIndex) {


        }
    });
    form3.validate({
        errorPlacement: function errorPlacement(error, element) {
            element.before(error);
        },
        rules: {
            first_name: {
                required: true,
            },
            last_name: {
                required: true,
            },
        },
        messages: {
            first_name: {
                required: "Please enter your Username"
            },
            last_name: {
                required: "Please enter your 3 letter password"
            }
        },
        onfocusout: function(element) {
            $(element).valid();
        },
        highlight: function(element, errorClass, validClass) {
            $(element).parent().parent().find('.form-group').addClass('form-error');
            $(element).removeClass('valid');
            $(element).addClass('error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parent().parent().find('.form-group').removeClass('form-error');
            $(element).removeClass('error');
            $(element).addClass('valid');
        }
    });
    form3.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        labels: {
            previous: 'Previous',
            next: 'Next',
            finish: 'Finish',
            current: ''
        },
        titleTemplate: '<h3 class="title">#title#</h3>',
        onInit: function(event, currentIndex) {
            // Suppress (skip) "Warning" step if the user is old enough.
            if (currentIndex === 0) {
                form3.find('.actions').addClass('test');
            }
        },
        onStepChanging: function(event, currentIndex, newIndex) {
            form3.validate().settings.ignore = ":disabled,:hidden";
            return form3.valid();
        },
        onFinishing: function(event, currentIndex) {
            form3.validate().settings.ignore = ":disabled";
            return form3.valid();
        },
        onFinished: function(event, currentIndex) {
            alert('Sumited');
        },
        onStepChanged: function(event, currentIndex, priorIndex) {


        }
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "",
        email: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });

})(jQuery);

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('.your_picture_image')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}