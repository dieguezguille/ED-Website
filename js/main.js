var estudioApp = angular.module("estudioApp", ["ngRoute"]);

estudioApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/main.html",
            controller: "",
        })
        .when("/bio", {
            templateUrl: "pages/bio.html",
            controller: ""
        })
        .when("/services", {
            templateUrl: "pages/services.html",
            controller: "ServicesController"
        })
        .when("/contact", {
            templateUrl: "pages/contact.html",
            controller: ""
        })
        .otherwise({
            templateUrl: "pages/404.html",
        });
});

estudioApp.controller('ServicesController', ['$scope', function ($scope) {
    //$scope.$route = $route; Doesn't work dont know why of if its even needed!!!!!!!!!!!
    $scope.addEventListeners = function () {
        var servicios = document.getElementsByClassName("servicio");
        var elementos = document.getElementsByClassName("elemento");

        for (i = 0; i < servicios.length; i++) {

            // Creating a closure & passing value of i which is received in argument x
            (function (x) {
                // adding the click event to the the element 
                servicios[x].addEventListener('click', function () {
                    elementos[x].classList.toggle("in");
                });
            }(i)); // passing the value of i
        }
    };
    //Cuando carga el contenido de la vista...
    $scope.$on('$viewContentLoaded', function () {
        //...Llamar a la funcion que carga los events listeners
        $scope.addEventListeners();
    });
}]);

//Let jQuery manage active class for nav elements
$(document).ready(function () {
    $('.nav li:first').addClass('active');
    $('.nav li').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

});

//Contact Form logic
$(document).ready(function () {
    $('#contact_form').bootstrapValidator({
            // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                first_name: {
                    validators: {
                        stringLength: {
                            min: 2,
                        },
                        notEmpty: {
                            message: 'Please supply your first name'
                        }
                    }
                },
                last_name: {
                    validators: {
                        stringLength: {
                            min: 2,
                        },
                        notEmpty: {
                            message: 'Please supply your last name'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Please supply your email address'
                        },
                        emailAddress: {
                            message: 'Please supply a valid email address'
                        }
                    }
                },
                phone: {
                    validators: {
                        notEmpty: {
                            message: 'Please supply your phone number'
                        },
                        phone: {
                            country: 'US',
                            message: 'Please supply a vaild phone number with area code'
                        }
                    }
                },
                address: {
                    validators: {
                        stringLength: {
                            min: 8,
                        },
                        notEmpty: {
                            message: 'Please supply your street address'
                        }
                    }
                },
                city: {
                    validators: {
                        stringLength: {
                            min: 4,
                        },
                        notEmpty: {
                            message: 'Please supply your city'
                        }
                    }
                },
                state: {
                    validators: {
                        notEmpty: {
                            message: 'Please select your state'
                        }
                    }
                },
                zip: {
                    validators: {
                        notEmpty: {
                            message: 'Please supply your zip code'
                        },
                        zipCode: {
                            country: 'US',
                            message: 'Please supply a vaild zip code'
                        }
                    }
                },
                comment: {
                    validators: {
                        stringLength: {
                            min: 10,
                            max: 200,
                            message: 'Please enter at least 10 characters and no more than 200'
                        },
                        notEmpty: {
                            message: 'Please supply a description of your project'
                        }
                    }
                }
            }
        })
        .on('success.form.bv', function (e) {
            $('#success_message').slideDown({
                opacity: "show"
            }, "slow") // Do something ...
            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function (result) {
                console.log(result);
            }, 'json');
        });
});