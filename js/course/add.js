define([
    "jquery",
    'text!tpls/courseAdd.html',
    'common/api',
    "course/courseList"
], function($,courseAddTpls,api,courseList) {
    return function(){
        var $courseAdd=$(courseAddTpls).on('submit','form',function(e){
            e.preventDefault();

            // 获取页面数据
            var formData=$(this).serialize();
            api.post("course/create",formData,function(){
                // 隐藏模态框
                $courseAdd.modal('hide');
                // 刷新课程列表
                courseList()
            })
        }).appendTo('body').modal();



    }
    
});