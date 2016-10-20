/**
 * Created by hxsd on 2016/8/4.
 */
angular.module("myapp").controller("tourCtrl",function($scope,$ionicSlideBoxDelegate){
    $scope.isShow=false;
    $scope.onSlideChange=function(){
        if($ionicSlideBoxDelegate.currentIndex()==$ionicSlideBoxDelegate.slidesCount()-1){
            $scope.isShow=true;
        }else{
            $scope.isShow=false;
        };
    };
});