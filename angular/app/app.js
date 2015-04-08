var callListApp = angular.module("callListApp", ["ngRoute"]);

callListApp.config(function($routeProvider){
	$routeProvider
	.when("/calls", {
		templateUrl: "calllist.html",
		controller: "CallListController"
	})
	.otherwise ({ 
	redirectTo: "/calls"
	});
});