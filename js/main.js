var app = angular.module("estudioApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/main.html"
    })
    .when("/bio", {
        templateUrl : "pages/bio.html"
    })
    .when("/services", {
        templateUrl : "pages/services.html"
    })
    .when("/contact", {
        templateUrl : "pages/contact.html"
    });
});