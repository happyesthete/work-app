/*global form:true */
(function () {
  'use strict';

  angular
    .module('app.submit-work')
    .controller('SubmitElevatorPitchController', SubmitElevatorPitchController);

  SubmitElevatorPitchController.$inject = ['logger', '$state', 'SubmitWorkService'];
  /* @ngInject */
  function SubmitElevatorPitchController(logger, $state, SubmitWorkService) {
    var vm = this;
    vm.title = 'Elevator Pitch';
    vm.work = {};
    vm.next = SubmitWorkService.next('about-competitors');

    activate();

    function activate() {
      logger.info('Activated Elevator Pitch View');
      vm.work = SubmitWorkService.getCurrent();
    }

  }
})();
