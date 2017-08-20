define([
    'jquery',
    'text!tpls/teacherAdd.html',
    'dataTime',
    'datalang'
], function($, teacherAddTpl) {
    return function(){
        // 初始化
        $('#modalAddTeacher').remove();
        // 使用事件委托给模板中的表单绑定提交事件
        var $teacherAddtpl=$(teacherAddTpl).on('submit','form',function(){
        //    表单自动提交
            var formData=$(this).serialize();

            $.ajax({
                url:"/api/teacher/add",
                type:'post',
                data:formData,
                success:function(res){
                    // 在返回值中判断是否不等于200判断是否请求成功
                    if(res.code!=200) throw new Error(res.msg);

                    // 隐藏模态框
                    $teacherAddtpl.modal('hide');
                    // 模拟点击事件
                    $('.left .list-group .teacher-manager').trigger('click')
                }

                


            })
            return false;


        }).appendTo('body').modal();
                //在模态框已经加载到页面中之后再去渲染日期控件
        $teacherAddtpl.find(".date-join").datetimepicker({
            format: 'yyyy-mm-dd',
            language: "zh-CN",
            weekStart: "1",       //从周几开始
            autoclose: true,        //选定一个日期之后就自动隐藏日期控件
            minView: "month", //如果是月，最小能够精确到哪一天，如果是天，最小能够精确到哪一个小时
            todayBtn: true,
            todayHighlight: true
        });


    }
    
});