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