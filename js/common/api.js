define([
    'jquery',
], function($) {
   var obj={
        ajax:function(url,type,data,callback){
            $.ajax({
                url:'/api/'+url,
                type:type,
                data:data,
                success:function(res){
                    if(res.code!=200) throw new Error(res.msg);

                    callback&&callback(res);
                },
                error:function(res){
                    throw new Error(res);
                }
            })
        }
   }
    'post,get'.split(',').forEach(function(v){
        obj[v]=function(url,data,callback){
            this.ajax(url,v,data,callback);
        }
    }) 
    return obj;




});