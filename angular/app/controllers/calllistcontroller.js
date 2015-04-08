function CallListController ($scope, $http) {


   $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
   $scope.addCall_error = "";


  $http.get('calls/calls.json').success(function(data) {
    $scope.calls = data;
  });


 $scope.addCall = function ( new_call) {
 	if (!new_call.name)
 	{
 		$scope.addCall_error = "Missing Candidate Name";
 	}
 	else if (!new_call.skill)
 	{
 		$scope.addCall_error = "Missing Candidate Skill";
 	}
 	else if (!new_call.salary)
 	{
 		$scope.addCall_error = "Missing Candidate Salary";

 	}
 	else if (!new_call.location)
 	{
 		$scope.addCall_error = "Missing Candidate Location";
 	}

 	else {
 		$scope.calls.push (new_call);
 		$scope.adding_call = {};
 		$scope.addCall_error = "";
 	};
 };


$scope.addCall = function (new_call) {
$scope.calls.push (new_call);
$scope.adding_call = {};

};
};


callListApp.controller("CallListController", CallListController);









