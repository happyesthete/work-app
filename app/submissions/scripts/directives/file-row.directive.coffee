'use strict'

directive = ->
  restrict   : 'E'
  template   : require('../../views/file-row.directive.jade')()
  controller : 'FileRowController as vm'
  scope      :
    files      : '='
    limit      : '@'
    viewAllUrl : '@'

angular.module('submissions').directive 'fileRow', directive
