'use strict'

Provider = require 'appirio-tech-ng-ui-components/components/Provider/Provider'
ManageSteps = require '../react-components/components/ManageSteps/ManageSteps'

directive = (reactDirective) ->
  reactDirective Provider(ManageSteps)

directive.$inject = ['reactDirective']

angular.module('app').directive 'manageSteps', directive
