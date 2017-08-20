define([
    'jquery',
    'text!tpls/teacherEdit.html',
    'template'
], function($, teacherEditTpl,template) {
    return function(id,callback){
            $.ajax({
                url:"/api/teacher/edit",
                type:'get',
                data:{tc_id:id},
                success:function(res){

                    if(res.code!=200) throw new Error(res.msg)
                    var teacherEdit=template.render(teacherEditTpl,res.result)
                    $(teacherEdit).appendTo('body')

                }




                
            }).appendTo('body').modal();





    }
    
});