/**
 * Created by hxsd on 2016/8/4.
 */
angular.module("myapp").controller("homeCtrl",function($scope,$http,$rootScope,$ionicPopup){
    //var url="http://japi.juhe.cn/joke/img/list.from?key=3635264154b29386c1a86147d8b77795&page=2&pagesize=10&sort=asc&time=1418745237";
    $scope.products=[
        {
            "likes":128,
            "content": "被热情的主人强行背着攀岩的喵，一脸懵逼……世界那么大关我鸟事，想在家安安静静混口猫粮咋就那么难呢…",
            "hashId": "6BEA13580924C8DBFED9AFA6B4FEC1B3",
            "unixtime": 1470461589,
            "updatetime": "2016-08-06 13:33:09",
            "url": "images/data01.jpg"
        },
        {
            "likes":128,
            "content": "望周知",
            "hashId": "49F2D410FFEF0DB8D62B66B136447BBD",
            "unixtime": 1470407592,
            "updatetime": "2016-08-05 22:33:12",
            "url": "images/data02.jpg"
        },
        {
            "likes":128,
            "content": "当你一个人下车碰到老虎的时候，必须正面面对老虎，保持视线接触，冷静判断情况，然后再把老虎摔倒制服。",
            "hashId": "DD994C4AD24C0B80338FB8F58D8D2270",
            "unixtime": 1470407592,
            "updatetime": "2016-08-05 22:33:12",
            "url": "images/data03.gif"
        },
        {
            "likes":128,
            "content": "干脆面偷偷从动物园笼子里跑粗来，被发现後举手投降了。。。干脆面：“卧槽！被发现了！”",
            "hashId": "DA769D076F706CF8EB319B9811E9B051",
            "unixtime": 1470407592,
            "updatetime": "2016-08-05 22:33:12",
            "url": "images/data04.gif"
        },
        {
            "likes":128,
            "content": "怕怕的",
            "hashId": "16DDB0B621277220D97BCE09CEF85AAB",
            "unixtime": 1470407592,
            "updatetime": "2016-08-05 22:33:12",
            "url": "images/data05.gif"
        },
        {
            "likes":128,
            "content": "让你见识下台风",
            "hashId": "6F586E5633107F3F83573B91E53DA690",
            "unixtime": 1470407592,
            "updatetime": "2016-08-05 22:33:12",
            "url": "images/data06.gif"
        },
        {
            "likes":128,
            "content": "真特么聪明",
            "hashId": "6B7D8EADB84D63EBEB0990E16A559ED4",
            "unixtime": 1470407592,
            "updatetime": "2016-08-05 22:33:12",
            "url": "images/data07.gif"
        },
        {
            "likes":128,
            "content": "我爱你那么深，你却把我做成表情包！",
            "hashId": "BCAFFEA972F850BBB917BCD7D8566B34",
            "unixtime": 1470389612,
            "updatetime": "2016-08-05 17:33:32",
            "url": "images/data08.gif"
        },
        {
            "likes":128,
            "content": "一句话证明自己是老司机？",
            "hashId": "D7C2EF1BAFBA7B86B15C12AF37BEB049",
            "unixtime": 1470389612,
            "updatetime": "2016-08-05 17:33:32",
            "url": "images/data09.jpg"
        }

    ];

    $scope.articles = [];
    $scope.friends=[];
    $scope.fav=[];
    $scope.login=$rootScope.userLogin;
    $http.get("json/picdata.json").success(function(data){
        $scope.articles=data;
        for(i in $scope.articles){
            $scope.articles[i].liked=false;
        }
        console.log( $scope.articles.likes)
    }).finally(function(){
    });
    $scope.data = {
        showFlag: false,
        reorderFlag: false
    };

    $scope.like=function(item){
        if(!item.liked){
            item.likes++;
            item.liked=!item.liked;
            var likePopup =$ionicPopup.alert({
                title: '成功点赞',
                template: '您已成功点赞'
            });
            likePopup.then(function(res){
            });
        } else {
            item.likes--;
            item.liked=!item.liked;
            var likePopup =$ionicPopup.alert({
                title: '成功取消赞',
                template: '您已取消赞'
            });
            likePopup.then(function(res){
            });
        }
    };
    $scope.addAttention=function(item){
        if($scope.login.in) {
            if ($scope.friends[0] == undefined) {
                $scope.friends.push(item);
                var addPopup =$ionicPopup.alert({
                    title: '添加成功',
                    template: '已添加关注'+item.author+",可在我的关注中查看"
                });
                addPopup.then(function(res){
                });
            } else {
                var flag = false;
                for (i in $scope.friends) {
                    if ($scope.friends[i].author == item.author) {
                        flag = true;
                    }
                }
                if (!flag) {
                    $scope.friends.push(item);
                    var addPopup =$ionicPopup.alert({
                        title: '添加成功',
                        template: '已添加关注'+item.author+",可在我的关注中查看"
                    });
                    addPopup.then(function(res){
                    });
                } else {
                    var addPopup =$ionicPopup.alert({
                        title: '添加失败',
                        template: '您已关注过'+item.author+"啦"
                    });
                    addPopup.then(function(res){
                    });
                }
            }
        } else {
            var loginPopup =$ionicPopup.alert({
                title: '还未登录',
                template: '请右滑拉出登录菜单，登录后就能关注啦'
            });
            loginPopup.then(function(res){
            });
        }
        $rootScope.friends=$scope.friends;
    };
    $scope.addFav=function(item){
        if($scope.login.in) {
            if ($scope.fav[0] == undefined) {
                $scope.fav.push(item);
                var addPopup =$ionicPopup.alert({
                    title: '添加成功',
                    template: '已添加收藏，可在我的收藏夹中查看'
                });
                addPopup.then(function(res){
                });
            } else {
                var flag = false;
                for (i in $scope.fav) {
                    if ($scope.fav[i].unixtime == item.unixtime) {
                        flag = true;
                    }
                }
                if (!flag) {
                    $scope.fav.push(item);
                    var addPopup =$ionicPopup.alert({
                        title: '添加成功',
                        template: '已添加收藏，可在我的收藏夹中查看'
                    });
                    addPopup.then(function(res){
                    });
                } else {
                    var addPopup =$ionicPopup.alert({
                        title: '添加失败',
                        template: '您已收藏过此条啦，可在我的收藏夹中查看'
                    });
                    addPopup.then(function(res){
                    });
                }
            }
        } else {
            var loginPopup =$ionicPopup.alert({
                title: '还未登录',
                template: '请右滑拉出登录菜单，登录后就能添加收藏啦'
            });
            loginPopup.then(function(res){
            });
        }
        $rootScope.fav=$scope.fav;

    };
    $scope.refresh=function(){
        $http.get("json/picdata.json")
            .success(function(data){
                $scope.products=data;
            })
            .finally(function(){
                $scope.$broadcast("scroll.refreshComplete");
            });
    };
    $scope.loadMore=function(){
        $http.get("json/picdata.json")
            .success(function(data){
                Array.prototype.push.apply($scope.products,data);
            })
            .finally(function(){
                $scope.$broadcast("scroll.infiniteScrollComplete");
            });
    };

});