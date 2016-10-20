/**
 * Created by hxsd on 2016/8/5.
 */
angular.module("myapp").controller("tabsCtrl",function($scope){
    $scope.refresh=function(){
        $http.get("data.json")
            .success(function(data){
                $scope.products=data;
            })
            .finally(function(){
                $scope.$broadcast("scroll.refreshComplete");
            });
    };
});