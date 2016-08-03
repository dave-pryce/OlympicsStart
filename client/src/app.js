import angular from 'angular'
angular.module('olympics',[])
.controller('sportsController', function($http){
  //this.sports = ["WeightLifting", "Cycling","Running"]
  $http.get('/sports').then((response) => {
    this.sports = response.data;
  });
})
