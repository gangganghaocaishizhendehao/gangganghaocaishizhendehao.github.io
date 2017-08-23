define(['jquery','text!tpls/teacherList.html',"template",'teacher/show','teacher/add','teacher/edit'
], function($, teacherListTpl,template,teacherShow,teacherAdd,teacherEdit) {
    return function fn(){
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
                    }).on('click','.btn-edit',function(){
                         var tc_id=$(this).parent().attr('tc_id');
                        teacherEdit(tc_id,function(){
                            fn();
                        })
                    }).on('click','.btn-status',function(){
                        var $btnStatus=$(this);
                        $.ajax({
                            url:"/api/teacher/handle",
                            type:'post',
                            data:{
                                tc_id:$(this).parent().attr('tc_id'),
                                tc_status:$(this).parent().attr('tc_status')
                            },
                            success:function(res){
                                if(res.code!=200) throw new Error (res.msg
                                );
                                var tc_status=res.result.tc_status;
                                $btnStatus.parent().siblings('.td-status').text(tc_status==0?'启用':"注销");
                                $btnStatus.text(tc_status==0?'注销':"启用");
                                $btnStatus.parent().attr('tc_status',tc_status)



                            }



                        })
                    })



                $('#body_innerContent').html($teacherList);

            }

        })


    }
    
});