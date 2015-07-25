angular.module('myApp', ['duScroll', 'ui.bootstrap']).
  controller('MyCtrl', function($scope, $document){
  Parse.initialize("TWTtRIX2bPIiZgXkgwDm3ImlZWFFAs3sYPPNPZYN", "iBEHzjlS1vZEhvDmN6Pl7MjjY2Nd0xoh1qeS6M8a");

  $scope.rsvpForm = {};
  $scope.submittedRsvp = false;
  $scope.savedRsvp = false;
  $scope.attendingOptions = [
    {label: "am attending", value: true},
    {label: "am not attending", value: false}
  ];
  $scope.contentUrl = 'https://s3.amazonaws.com/john-elisa-wedding-website-content/images/';

  $scope.myInterval = 5000;
  var slides = $scope.slides = [
    {image: $scope.contentUrl+'cari/splash10.jpg'},
    {image: $scope.contentUrl+'cari/splash9.jpg'},
    {image: $scope.contentUrl+'cari/splash8.jpg'},
    {image: $scope.contentUrl+'cari/splash7.jpg'},
    {image: $scope.contentUrl+'cari/splash6.jpg'},
    {image: $scope.contentUrl+'cari/splash5.jpg'},
    {image: $scope.contentUrl+'cari/splash4.jpg'},
    {image: $scope.contentUrl+'cari/splash3.jpg'},
    {image: $scope.contentUrl+'cari/splash2.jpg'},
  ];

  $scope.submitRsvpForm = function() {
    $scope.submittedRsvp = true;
    var Rsvp = Parse.Object.extend("Rsvp");
    var rsvp = new Rsvp();
    rsvp.save($scope.rsvpForm).then(function(object) {
      console.log("saved!");
      console.log($scope.rsvpForm);
    });
    rsvp.save($scope.rsvpForm, {
      success: function(rsvpResponse) {
        console.log('New object created with objectId: ' + rsvpResponse.id);
        $scope.savedRsvp = true;
        console.log('saved rsvp:');
        console.log($scope.savedRsvp);
      },
      error: function(rsvpResponse, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        console.log('Failed to create new object, with error code: ' + error.message);
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
