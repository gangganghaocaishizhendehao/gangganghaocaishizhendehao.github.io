define([
    'jquery',
    'text!tpls/catelist.html',
    "template",
    'category/cateAdd',
    'category/cateEdit'
], function($,catelisttpl,template,cateAdd,cateEdit) {
    return function categoryListFn(){
        $.ajax({
            url:"/api/category",
            type:'get',
            success:function(res){
                if(res.code!=200) throw Error (res.msg);

                var catelist=template.render(catelisttpl,res)

                var $catelist=$(catelist)

                $catelist.on('click','.btn-add',function(){
                        cateAdd();
                }).on('click','.btn-primary',function(){
                    var id=$(this).parent().attr('cg_id');
                    console.log(id)
                        cateEdit(id,function(){
                            categoryListFn()
                        });
                })
                 $('#body_innerContent').html($catelist);
            }


        })

       
    }
    
});