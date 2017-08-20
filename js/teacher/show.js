define([
    'jquery',
    'text!tpls/teacherShow.html',
    'template'
], function($, teacherShowtpl,template) {
    return function(id){
        console.log('show')
        $.ajax({
            url:"/api/teacher/view",
            type:'get',
            data:{tc_id:id},
            success:function(res){
                if(res.code!=200) return console.log(res.msg);


                    console.log(res.result)
                // 数据成功获取 把数据渲染到模态框
                var teacherShow=template.render(teacherShowtpl,res.result);

                var $teacherShow=$(teacherShow);

                $('#modalShowTeacher').remove();

                $teacherShow.appendTo('body').modal();



            }



        })
    }
});

