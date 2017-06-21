// Application module
var crudApp = angular.module('crudApp', ['ngRoute']);

// configure routes (neccessary for SPA effect and switch controllers and templates)
crudApp.config(function($routeProvider) {
    $routeProvider

        // route for the main page
        .when('/admin', {
            templateUrl : 'pages/admin.html',
            controller : 'adminController'
        })

        // route for the main page
        .when('/', {
            templateUrl : 'pages/customer.html',
            controller : 'customerController'
        });
});

crudApp.controller("adminController",['$scope','$http', function($scope,$http){

// Function to get employee details from the database
getInfo();
function getInfo(){
// Sending request to EmpDetails.php files 
$http.post('databaseFiles/custDetails.php').success(function(data){
// Stored the returned data into scope 
$scope.details = data;
});
}
// Setting default value of gender 
$scope.custInfo = {'department' : 'management'};
// Enabling show_form variable to enable Add employee button
$scope.show_form = true;
// Function to add toggle behaviour to form
$scope.formToggle =function(){
$('#custForm').slideToggle();
$('#editForm').css('display', 'none');
}
$scope.insertInfo = function(info){
$http.post('databaseFiles/insertDetails.php',{"name":info.name,"email":info.email,"telephone":info.telephone,"time":info.time,"location":info.location,"size":info.size,"submittedTime":info.submittedTime}).success(function(data){
if (data == true) {
getInfo();
$('#custForm').css('display', 'none');
}
});
}
$scope.deleteInfo = function(info){
$http.post('databaseFiles/deleteDetails.php',{"del_id":info.cust_id}).success(function(data){
if (data == true) {
getInfo();
}
});
}
$scope.currentUser = {};
$scope.editInfo = function(info){
$scope.currentUser = info;
$('#custForm').slideUp();
$('#editForm').slideToggle();
}
$scope.UpdateInfo = function(info){
$http.post('databaseFiles/updateDetails.php',{"id":info.cust_id,"name":info.cust_name,"email":info.cust_email,"telephone":info.cust_telephone,"time":info.cust_time,"location":info.cust_location,"size":info.cust_size}).success(function(data){
$scope.show_form = true;
if (data == true) {
getInfo();
}
});
}
$scope.updateMsg = function(cust_id){
$('#editForm').css('display', 'none');
}

}]);


crudApp.controller("customerController",['$scope','$http', function($scope,$http){

// Function to get employee details from the database
getInfo();
function getInfo(){
// Sending request to EmpDetails.php files 
$http.post('databaseFiles/custDetails.php').success(function(data){
// Stored the returned data into scope 
$scope.details = data;
});
}
// Setting default value of gender 
$scope.custInfo = {'department' : 'management'};
// Enabling show_form variable to enable Add employee button
$scope.show_form = true;
// Function to add toggle behaviour to form
$scope.formToggle =function(){
$('#custForm').slideToggle();
$('#editForm').css('display', 'none');
}
$scope.insertInfo = function(info){
$http.post('databaseFiles/insertDetails.php',{"name":info.name,"email":info.email,"telephone":info.telephone,"time":info.time,"location":info.location,"size":info.size}).success(function(data){
if (data == true) {
getInfo();
$('#custForm').css('display', 'none');
}
});
}
$scope.deleteInfo = function(info){
$http.post('databaseFiles/deleteDetails.php',{"del_id":info.cust_id}).success(function(data){
if (data == true) {
getInfo();
}
});
}
$scope.currentUser = {};
$scope.editInfo = function(info){
$scope.currentUser = info;
$('#custForm').slideUp();
$('#editForm').slideToggle();
}
$scope.UpdateInfo = function(info){
$http.post('databaseFiles/updateDetails.php',{"id":info.cust_id,"name":info.cust_name,"email":info.cust_email,"telephone":info.cust_telephone,"time":info.cust_time,"location":info.cust_location,"size":info.cust_size}).success(function(data){
$scope.show_form = true;
if (data == true) {
getInfo();
}
});
}
$scope.updateMsg = function(cust_id){
$('#editForm').css('display', 'none');
}

/*
// Date & Time
var hour = new Date();
hour = hour.getHours();

var minutes = new Date();
minutes = minutes.getMinutes();

//time = time.toLocaleString('en-US', { hour: 'numeric', hour12: true });
if (hour < 11 || hour >= 14 ){
document.getElementById('closed').style.display = "inline-block";
}
*/


}]);


