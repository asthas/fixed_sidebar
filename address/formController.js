/*Controller for single adress field
angular.module('app')
    .controller('formController',function($state) {

      var vm = this;
      vm.master = {};

      vm.update = function(user) {

        vm.master = angular.copy(user); 
        console.log(vm, user);
      };

      vm.reset = function() {
        vm.user = angular.copy(vm.master);
      };

      vm.reset();
    });
  */

  angular.module('app')
    .controller('formController', function() {
      var vm = this;

      vm.choices = [{id: 'choice1'}, {id: 'choice2'}];

      vm.addNewChoice = function() {
        var newItemNo = vm.choices.length + 1;
        vm.choices.push({'id': 'choice' + newItemNo});

      }

      vm.removeChoice = function() {
        var lastItem = vm.choices.length - 1;
        vm.choices.splice(lastItem);
      }
    })