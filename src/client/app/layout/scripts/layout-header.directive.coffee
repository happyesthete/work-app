'use strict';

# TODO: use controller pattern
# TODO: unit tests
# TODO: turn this into its own component

dir = (UserService, ThreadsAPIService) ->
  link = (scope, element, attrs) ->
    currentUser = ->
      UserService.user

    onUserChange = (user) ->
      if user
        scope.showNotification = true

        getNotificationCount user?.id
      else
        scope.showNotification = false

    getNotificationCount = (id) ->
      queryParams =
        subscriberId: id

      resource = ThreadsAPIService.query queryParams

      resource.$promise.then (response) ->
        scope.unreadCount = response.unreadCount

    scope.$watch currentUser, onUserChange

  restrict: 'A'
  link: link

dir.$inject = ['UserService', 'ThreadsAPIService']

angular.module('app.layout').directive 'layoutHeader', dir

