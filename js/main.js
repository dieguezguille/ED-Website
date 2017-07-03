var estudioApp = angular.module("estudioApp", ["ngRoute"]);

estudioApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/main.html",
            controller: ""
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
            controller: ""
        });
});

estudioApp.controller('ServicesController', ['$scope', function ($scope) {

    $scope.addEventListeners = function () {
        var servicios = document.getElementsByClassName("servicio");
        var elementos = document.getElementsByClassName("elemento");

        for (i = 0; i < servicios.length; i++) {

            // Creating a closure & passing value of i which is received in argument x
            (function (x) {
                var isOpen = false;
                // adding the click event to the the element 
                servicios[x].addEventListener('click', function () {
                    elementos[x].classList.toggle("in");
                });
            }(i)); // passing the value of i
        }
    };

    $scope.setActiveClass = function(){
        var currentLink = document.getElementById("servicios");
        // Cambiar la clase del link del menu a active y desactivar la de los demas
    };

    $scope.$on('$viewContentLoaded', function () {
        //Agregar los event listeners cuando carga el contenido
        $scope.addEventListeners();
        $scope.setActiveClass();
    });

}]);