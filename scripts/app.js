'use strict';

angular.module('myApp', ['duScroll', 'ui.bootstrap', 'ng-backstretch']).
  controller('MyCtrl', function($scope, $document, $timeout){
  Parse.initialize("TWTtRIX2bPIiZgXkgwDm3ImlZWFFAs3sYPPNPZYN", "iBEHzjlS1vZEhvDmN6Pl7MjjY2Nd0xoh1qeS6M8a");

  $scope.rsvpForm = {};
  $scope.submittedRsvp = false;
  $scope.savedRsvp = false;
  $scope.attendingOptions = [
    {label: "am attending", value: true},
    {label: "am not attending", value: false}
  ];
  $scope.contentUrl = 'https://s3.amazonaws.com/john-elisa-wedding-website-content/images/';

  var slides = $scope.slides = [
    $scope.contentUrl+'focus32.jpg',
    $scope.contentUrl+'focus22.jpg',
    $scope.contentUrl+'focus8.jpg',
    // $scope.contentUrl+'focus13.jpg',
    $scope.contentUrl+'focus21.jpg',
    // $scope.contentUrl+'focus47.jpg',
    // $scope.contentUrl+'focus43.jpg',
  ];

  $scope.submitRsvpForm = function() {
    $scope.submittedRsvp = true;
    var Rsvp = Parse.Object.extend("Rsvp");
    var rsvp = new Rsvp();
    // rsvp.save($scope.rsvpForm).then(function(object) {
    //   console.log("saved!");
    //   console.log($scope.rsvpForm);
    // });
    rsvp.save($scope.rsvpForm, {
      success: function(rsvpResponse) {
        $scope.savedRsvp = true;
        $scope.saving = false;
        console.log('New object created with objectId: ' + rsvpResponse.id);
        console.log('saved rsvp:');
        console.log($scope.savedRsvp);
      },
      error: function(rsvpResponse, error) {
        console.log('Failed to create new object, with error code: ' + error.message);
        $scope.errorRsvp = true;
      }
    });
  };

  $scope.toTheTop = function() {
    $document.scrollTopAnimated(0).then(function() {
      console && console.log('You just scrolled to the top!');
    });
  }
  var section2 = angular.element(document.getElementById('section-2'));
  $scope.toSection2 = function() {
    $document.scrollToElementAnimated(section2);
  }
  var sectionTop = angular.element(document.getElementById('section-top'));
  $document.scrollToElementAnimated(sectionTop);
}
            ).value('duScrollOffset', 30);
