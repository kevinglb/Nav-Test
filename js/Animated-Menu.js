(function(){

    var list = Array.prototype.slice.call(document.querySelectorAll('.dropdown'));
    var dropdown_list = Array.prototype.slice.call(document.querySelectorAll('.dropdown-menu'));
    
    function toggleDropDownMenu(ele,obj){
        var li = obj.nextSibling.nextSibling;
        dropdown_list.forEach(function(item){

            if(item === li){
                if(li.classList.contains('open')){
                    li.classList.remove('open');
                }
                else{
                    li.classList.add('open');
                }

            }
            else{
                if(item.classList.contains('open')){
                    item.classList.remove('open');
                }
            }
        })
        //console.log(li);
    }

    list.forEach(function(ele){
        var button = ele.querySelector('a[data-toggle="dropdown"]');
        button.addEventListener('click',function(e){
                toggleDropDownMenu(e,this);},false);
    });

    
}())