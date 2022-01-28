var app = angular.module('myApp', []);
app.controller('ctrl', function ($scope, $interval) {
    $scope.score = 0;
    $scope.time = 9;
    $scope.no = ["hello", "world", "typing", "is", "going", "to", "start", "When", "you", "are", "learning", "to", "type", "there", "are", "some", "distinct", "stages", "that", "you", "will", "experience", "and", "can", "be", "recognized", "by", "how", "fast", "you", "type"];
    $scope.random = Math.floor((Math.random() * 28) + 1);
    $interval(function () {
        $scope.time--;
        if ($scope.time == 0) {
            $scope.random = Math.floor((Math.random() * 28) + 1);
            $scope.time = 9;
            $scope.score--;
        }
    }, 1000);
    $scope.keys = function () {
        if (event.keyCode === 13) {
            event.preventDefault();
            if ($scope.enterinput == $scope.no[$scope.random]) {
                $scope.score++;
                $scope.enterinput = "";
                $scope.random = Math.floor((Math.random() * 28) + 1);
                $scope.time = 9;
            }
        }
    }
});