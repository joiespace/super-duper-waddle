window.onload = function(){

    window.onscroll=function(){
        if(window.scrollY>0){
            
            $("#nav").addClass('active');

        }
        else{
            $("#nav").removeClass('active')
        }
    }

    $(".navbar-nav a").click(function(){
        $(".navbar-toggler").click()
    })
    
}