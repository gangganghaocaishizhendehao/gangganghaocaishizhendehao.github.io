require.config({
  baseUrl:'js',
  paths:{
    jquery:'lib/jquery-2.1.4',
    bootstrap:'../assets/bootstrap/js/bootstrap',
    // 读取html文件
    text:'lib/text',
    // 配置模板
    template:'lib/template-web',
    dataTime:'../assets/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker',
    datalang:'../assets/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN'
},
  shim:{
    bootstrap:{
      deps:['jquery']
    },
    datalang:{
      deps:['dataTime']
    }
    

  }

})

require(['jquery','teacher/list','course/add','category/catelist','course/courseList','bootstrap'],function($,teacherList,course,catelist,courseList){
            var resultData3=sessionStorage.getItem('resultData2')
            var resultData4=JSON.parse(resultData3)
            if(!resultData4){
              location.href='login.html';
            }
            var username=resultData4.tc_name;
            var userimg=resultData4.tc_avatar;

            $('.left img').attr('src',userimg);
            $('.left h4').text(username)


            
            $('.left .list-group').on('click','.list-group-item',function(){
            
             if($(this).hasClass('teacher-manager')){
                // 教师管理
                console.log(1)
                 teacherList();

             }else if($(this).hasClass('course-manager')){
                  console.log(2)
                  courseList();

             }else if($(this).hasClass('course-category')){
                 catelist();

               
             }else if($(this).hasClass('chart')){
               console.log(4)
             }else if($(this).hasClass('add-course')){
               course();
             }

})
    $(".left .list-group .teacher-manager").trigger("click");
})