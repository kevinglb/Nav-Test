(function(){
    function detectScrollTop(){
        console.log(document.scrollTop);
        var header = document.getElementById("nav");
        var scrollTop = getSize('scrollTop');
        
        if (scrollTop == 0) {
            nav.classList.remove('shrink');
        } 
        else if(scrollTop > 0){
            nav.classList.add('shrink');
        } 
    }

    function getSize(method){
        return document.body[method] || document.documentElement[method];
    }
    window.addEventListener('scroll',detectScrollTop,false);
    
}())