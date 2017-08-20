define([
    'jquery',
    'text!tpls/catelist.html',
    "template"
], function($,catelisttpl,template) {
    return function(){
        $.ajax({
            url:"/api/category",
            type:'get',
            success:function(res){
                if(res.code!=200) throw Error (res.msg);

                var catelist=template.render(catelisttpl,res)

                 $('#body_innerContent').html(catelist);
            }


        })

       
    }
    
});