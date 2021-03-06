/**
 * Created by hxsd on 2016/8/4.
 */
angular.module("myapp").controller("aboutCtrl",function($scope,$http){
    $scope.products=[
        {
            "content": "男票啪啪啪时究竟有多累！",
            "hashId": "4D1347C9EB851AF1345459F4D9078B57",
            "unixtime": 1470461589,
            "updatetime": "2016-08-06 13:33:09",
            "url": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/joke/201608/06/4D1347C9EB851AF1345459F4D9078B57.jpg"
        },
        {
            "content": "中国诡实录《香港茶餐厅灵异事件》",
            "hashId": "2A24D1391518A0F68B010DD9144CD939",
            "unixtime": 1470461589,
            "updatetime": "2016-08-06 13:33:09",
            "url": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/joke/201608/06/2A24D1391518A0F68B010DD9144CD939.jpg"
        },
        {
            "content": "这些傻事一定是当时脑抽了才干的出来，就说你有没有中？",
            "hashId": "47604A279961CF9678D8D8468DE45557",
            "unixtime": 1470461589,
            "updatetime": "2016-08-06 13:33:09",
            "url": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/joke/201608/06/47604A279961CF9678D8D8468DE45557.jpg"
        },
        {
            "content": "我一直怀疑，医学界是不是有他们专用的文字",
            "hashId": "6672A71B565B4CAEBF8D192DCB183FE7",
            "unixtime": 1470461589,
            "updatetime": "2016-08-06 13:33:09",
            "url": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/joke/201608/06/6672A71B565B4CAEBF8D192DCB183FE7.jpg"
        },
        {
            "content": "前两天地铁上的一幕，太可怕了。你可以在地铁安静的看厕所读物，但不要真的把地铁当成厕所好吗？周围人都在这个封闭车厢里面，如何淡定…",
            "hashId": "C8F20502A3421A60F7E6D5D97031A4AE",
            "unixtime": 1470461589,
            "updatetime": "2016-08-06 13:33:09",
            "url": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/joke/201608/06/C8F20502A3421A60F7E6D5D97031A4AE.jpg"
        },
        {
            "content": "女子吞下1米多长气球 火爆网络",
            "hashId": "49F911A9F612303260395EB5A4378FA4",
            "unixtime": 1470461589,
            "updatetime": "2016-08-06 13:33:09",
            "url": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/joke/201608/06/49F911A9F612303260395EB5A4378FA4.jpg"
        },
        {
            "content": "你会的那点儿姿势，凑成俄罗斯方块都超不过50分，信吗",
            "hashId": "BF001AEA440D555A0CB6A1ABD075EC71",
            "unixtime": 1470461589,
            "updatetime": "2016-08-06 13:33:09",
            "url": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/joke/201608/06/BF001AEA440D555A0CB6A1ABD075EC71.jpg"
        },
        {
            "content": "卧槽，这特效我最多给两毛五，多五分都不行~",
            "hashId": "16FC6CCAD6D9F49F6E872F9A18D8545C",
            "unixtime": 1470461589,
            "updatetime": "2016-08-06 13:33:09",
            "url": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/joke/201608/06/16FC6CCAD6D9F49F6E872F9A18D8545C.gif"
        },
        {
            "content": "哥们真会挑地方",
            "hashId": "A1C2343D1CC921270ABD9A6E076E40FE",
            "unixtime": 1470461589,
            "updatetime": "2016-08-06 13:33:09",
            "url": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/joke/201608/06/A1C2343D1CC921270ABD9A6E076E40FE.jpg"
        },
        {
            "content": "我跟你讲！带上面具的我，我自己都怕！！",
            "hashId": "33840FBFFEBC7AE51E4E7E8A0BE24F5B",
            "unixtime": 1470461589,
            "updatetime": "2016-08-06 13:33:09",
            "url": "http://juheimg.oss-cn-hangzhou.aliyuncs.com/joke/201608/06/33840FBFFEBC7AE51E4E7E8A0BE24F5B.gif"
        }
    ];
    $scope.refresh=function(){
        $http.get("json/newPicData.json")
            .success(function(data){
                $scope.products=data;
            })
            .finally(function(){
                $scope.$broadcast("scroll.refreshComplete");
            });
    };
    $scope.loadMore=function(){
        $http.get("json/newPicData.json")
            .success(function(data){
                Array.prototype.push.apply($scope.products,data);
            })
            .finally(function(){
                $scope.$broadcast("scroll.infiniteScrollComplete");
            });
    };
});