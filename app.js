var darkmode= document.getElementById("darkmode");
var filter= document.getElementById("filter");
var isDark = false;

darkmode.onclick=function(){
    document.body.classList.toggle("dark-theme");
    filter.classList.toggle("show");
    isDark = !isDark;
    if(isDark){
        darkmode.innerHTML="Dark Mode";
        // var fill=document.getElementsByClassName("filter1");
        // fill.classList.remove("hidden");
        // fill.classList.add("filter");
        
    }else{
        darkmode.innerHTML="Light Mode";
        
    }
}
