/*global form:true */
(function () {
  'use strict';

  angular
    .module('app.submit-work')
    .controller('SubmitCompetitorsController', SubmitCompetitorsController);

  SubmitCompetitorsController.$inject = ['$scope', 'logger', 'SubmitWorkService'];

  function SubmitCompetitorsController($scope, logger, SubmitWorkService) {
    var vm     = this;
    vm.title   = 'Competitors';
    vm.appName = '';
    vm.work    = SubmitWorkService.work;
    vm.add;
    vm.submit;

    vm.add = function() {
      if (!(vm.appName.trim().length === 0)) {
        vm.work.competitorApps.push(vm.appName);
        vm.appName = '';
        vm.placeholder = ' ';
      }
    }

    vm.submit = function () {
      if ($scope.competitorForm.$valid) {
        SubmitWorkService.setNextState();
      }
    };

    $scope.$watch('competitorForm', function(competitorForm) {
      if (competitorForm) {
        SubmitWorkService.findState('competitors').form = competitorForm;
      }
    });
  }
})();
