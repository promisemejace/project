/**
 * Created by hxsd on 2016/8/4.
 */
var myapp=angular.module("myapp",["ionic"]);
myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText("");
    $stateProvider.state("tour",{url:"/tour",templateUrl:"views/tour/tour.html",controller:"tourCtrl"});
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"views/tabs/tabs.html",
        controller:"tabsCtrl"
    });
    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{"tabs-home":{templateUrl:"views/home/home.html",controller:"homeCtrl"}}
    });
    $stateProvider.state("tabs.detail",{
        url:"/detail",
        views:{"tabs-home":{templateUrl:"views/detail/detail.html",controller:"detailCtrl"}}
    });
    $stateProvider.state("tabs.about",{
        url:"/about",
        views:{"tabs-about":{templateUrl:"views/about/about.html",controller:"aboutCtrl"}}
    });
    $stateProvider.state("setting",{
        url:"/setting",
       templateUrl:"views/setting/setting.html"
    });
    $stateProvider.state("myCollect",{
        url:"/myCollect",
        templateUrl:"views/myCollect/myCollect.html"
        //controller:"myCollectCtrl"
    });
    $stateProvider.state("myFocus",{
        url:"/myFocus",
        templateUrl:"views/myFocus/myFocus.html"
    });
    $urlRouterProvider.otherwise("/tour");


    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
});