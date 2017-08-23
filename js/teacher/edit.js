define([
    'jquery',
    'text!tpls/teacherEdit.html',
    'template'
], function($, teacherEditTpl,template) {
    return function (id,callback){
        // console.log(edit)
            $.ajax({
                url:"/api/teacher/edit",
                type:'get',
                data:{tc_id:id},
                success:function(res){
                    if(res.code!=200) throw new Error(res.msg)
                    var teacherEdit=template.render(teacherEditTpl,res.result)
                   $("#modalEditTeacher").remove();
                   var $teacherEdit=$(teacherEdit).on('submit','form',function(){
                    // 获取表单数据
                    var formData=$(this).serialize();

                    $.ajax({
                        url:"/api/teacher/update",
                        type:'post',
                        data:formData,
                        success:function(res){
                            if(res.code!=200) throw new Error(res.msg);
                            $teacherEdit.modal('hide');
                            callback();
                        }
                    })
                    return false;
                   }).appendTo('body').modal();
                }
        })
    }
    
});