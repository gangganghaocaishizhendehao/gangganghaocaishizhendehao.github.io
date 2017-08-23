define([
    'jquery',
    'text!tpls/courseList.html',
    'template',
    'common/api'

], function($,courseListTpls,template,api) {
    return function(){
        api.get('course',{},function(res){
            var courseList=template.render(courseListTpls,res);
            $courseList=$(courseList)
               $('#body_innerContent').html($courseList);
        })
    }
    
});