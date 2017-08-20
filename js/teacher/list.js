define(['jquery','text!tpls/teacherList.html',"template",'teacher/show','teacher/add','teacher/edit'
], function($, teacherListTpl,template,teacherShow,teacherAdd,teacherEdit) {
    return function(){
        console.log(123)
        $.ajax({
            url:'/api/teacher',
            type:'get',
            success:function(res){
                // console.log(res.result);

                var teacherList=template.render(teacherListTpl,res);
                    console.log('teacherList')
                    var $teacherList=$(teacherList).on('click','.btn-show',
                    function(){
                            console.log('list')
                            var tc_id=$(this).parent().attr('tc_id');
                            teacherShow(tc_id);
                           
                    }).on('click','.btn-add',function(){
                        teacherAdd();
                    }).on('click','btn-edit',function(){
                         var tc_id=$(this).parent().attr('tc_id');
                        teacherEdit(tc_id,function(){
                            fn();
                        })
                    }).on('click','btn-status')



                $('#body_innerContent').html($teacherList);

            }

        })


    }
    
});