/*global form:true, Auth0Lock:true */
(function () {
  'use strict';

  angular.module('app.auth')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$rootScope', '$location', '$state', 'AuthService', 'logger', 'auth0callbackUrl'];

  /* @ngInject */
  function LoginController($rootScope, $location, $state, AuthService, logger, auth0callbackUrl) {
    var vm = this;
    vm.title = 'Login';
    vm.username  = '';
    vm.password = '';
    vm.error = false;

    vm.submit = submit;

    function submit() {
      vm.error = false;
      var loginOptions = {
        username: vm.username,
        password: vm.password,
        error: loginFailure,
        success: loginSuccess
      };
      AuthService.login(loginOptions);
    }

    activate();

    function activate() {
      logger.log('Activated Login View');
    }

    function loginFailure(error) {
      console.log(error);
      vm.error = true;
      logger.error(error);
    }

    function loginSuccess() {
      vm.error = false;

      // Redirect to a url sent in
      var urlToken = $location.search();

      if (urlToken.retUrl) {
        $location.path(urlToken.retUrl).replace();
      }
      else if(urlToken.retState) {
        $state.go(urlToken.retState, {}, {reload: true});
      } else if ($rootScope.preAuthState) {
        // Look for a last state.  Redirect if it exists
        $state.go($rootScope.preAuthState);
      } else {
        // if all else fails go to the home screen
        $state.go('home');
      }
    }
  }
})();
