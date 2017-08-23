define([
    "jquery",
    'text!tpls/cateEdit.html',
    'template',
    'common/api'
], function($, cateEditTpls,template,api) {
    return function(id,callback){
        api.get("category/top",{},function(res){
            console.log(res)
           api.get("category/edit",{cg_id:id},function(editRes){
               console.log(editRes)
            res.obj=editRes.result;
            // 预置顶级分类的数据
            res.result.unshift({cg_id:0,cg_name:'顶级分类'});
            // 编译模板,获取到真实的内同
            var cateEdit=template.render(cateEditTpls,res);

            // 删除重复的项目拟态框
             $("#modalEditCategory").remove();
            //  把真实内容放到页面中,并弹出模态框
            var $cateEdit=$(cateEdit).on('submit','form',function(){
                var formData=$(this).serialize();
                api.post("category/modify",formData,function(res){
                    $cateEdit.modal('hide');
                    callback();

                })
                return false;

            })

            .appendTo('body').modal();



           })
        })
    }
});