/**
 * Created by minazebarjadan on 15-08-25.
 */

var myApp = angular.module('myApp', [])
    .directive('onFinishRender', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit('ngRepeatFinished');
                    });
                }
            }
        }
    });

myApp.controller('MyController', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://jsonplaceholder.typicode.com/users').success(function (data) {
        $scope.users = data;
    }).then(function(){

    });

    $scope.setClass = function (index) {
        $scope.selectedClass = $scope.users[index];
    };

    //$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
    //    $(".showmap-btn").click(function (){
    //        $('#street-hf').val($(this).data("street"));
    //        $('#long-hf').val($(this).data("long"));
    //        $('#lat-hf').val($(this).data("lat"));
    //
    //
    //        var script = document.createElement('script');
    //        script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    //        document.body.appendChild(script);
    //    });


        //$(".name-style").click(function(){
        //    var modalid = $(this).data("reveal-id");
        //    var index = $(this).data("index");
        //
        //    $('#mapname-hf').val("map_canvas" + index);
        //    $('#street-hf').val($("#" + modalid).children(".street").html());
        //    $('#long-hf').val($("#" + modalid).children(".long").html());
        //    $('#lat-hf').val($("#" + modalid).children(".lat").html());
        //
        //    //initialize();
        //
        //    var script = document.createElement('script');
        //    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
        //    document.body.appendChild(script);
        //
        //    //initialize(street, long, lat);
        //});
        //you also get the actual event object
        //do stuff, execute functions -- whatever...
    //});

}]);
