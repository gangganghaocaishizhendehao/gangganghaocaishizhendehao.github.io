define([
    'jquery',
    'text!tpls/cateAdd.html',
    'common/api',
    'template'
], function($,cateAddTpls,api,template) {
    return function(){
        // console.log(111)
        api.get("category/top",{},function(res){
                console.log(res)
                res.result.unshift({'cg_id':0,'cg_name':'顶级分类'})
                // 编译模板 
                var cateAdd=template.render(cateAddTpls,res);
              
                $("#modalAddCategory").remove();
                $cateAdd= $(cateAdd);
                console.log(121)
               $cateAdd.on('submit','form',function(){
                        console.log(122)
                        var Dataform=$(this).serialize();
                        api.post("category/add",Dataform,function(res){
                            $cateAdd.modal('hide');
                             $(".left .list-group .course-category").trigger("click");

                        })
                        return false;

                })
                  $cateAdd.appendTo('body').modal();

        })

    }
    
});