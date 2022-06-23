const navbarIcon = document.querySelector(".navbar-brand");
const sidebar = document.querySelector("#sidebar-area");
const navbarOverflow = document.querySelector(".navbar-overflow");



navbarIcon.addEventListener("click",function(){
    if(sidebar.classList.contains("sidebar-close")){
        sidebar.classList.remove = "sidebar-close";
        sidebar.classList = "sidebar-open";
        navbarOverflow.classList.remove = "overlay-close";
        navbarOverflow.classList = "overlay-open";
        
    }else{
        sidebar.classList = "sidebar-close";
        sidebar.classList.remove = "sidebar-open";
        navbarOverflow.classList.remove= "overlay-open";
        navbarOverflow.classList= "overlay-close";
    }  
})

navbarOverflow.addEventListener("click",function(){
    if(sidebar.classList.contains("sidebar-close")){
        sidebar.classList.remove = "sidebar-close";
        sidebar.classList = "sidebar-open";
        navbarOverflow.classList.remove = "overlay-close";
        navbarOverflow.classList = "overlay-open";
        
    }else{
        sidebar.classList = "sidebar-close";
        sidebar.classList.remove = "sidebar-open";
        navbarOverflow.classList.remove= "overlay-open";
        navbarOverflow.classList= "overlay-close";
    }  
})
