var start=document.getElementById("start");
var reset=document.getElementById("reset");
var stop=document.getElementById("Stop");
var hour =document.getElementById("hour");
var min =document.getElementById("min");
var sec =document.getElementById("sec");
var clear;
var myhour=0;
var mymin=0;
var mysec=0;
var T=true;
function Sec(){
         if(T===true){
              if(mysec ==59)
            {
                mysec=0;
                Min();
            }
            else{
                mysec +=1;
                if(mysec<10){ 
                    sec.innerHTML="<b>0"+mysec+"</b>";}
                else{
                    sec.innerHTML="<b>"+mysec+"</b>"; 
                }
                     
                }  
            }
         }
function Min(){
    if(mymin ==59)
    {
        mymin=0;
        Hour();
    }
    else{
        mymin++;
        if(mymin<10){
            min.innerHTML="<b>0"+mymin +" :</b>";
        }
        else{
        min.innerHTML="<b> "+mymin+":</b>"; 
   }  
        
    }
}
function Hour(){
    myhour++;
    if(myhour<10){
        hour.innerHTML="<b>0"+myhour +" :</b>";
    }
    else{
        hour.innerHTML="<b>"+myhour+" :</b>"; 
}  
    
}

start.addEventListener("click",()=>{   console.log("hello start");
    T=true;
    clear= setInterval(Sec,1000);
    start.classList.add("hidden");
    start.classList.remove("active");
    stop.classList.add("active");
 
    stop.addEventListener("click",()=>{
        T=false;
        clearInterval(clear);
        console.log(T);
        start.classList.add("active");
        stop.classList.add("hidden"); stop.classList.remove("active");
    })
    
   
});

reset.addEventListener("click",()=>{
     T=false;
     clearInterval(clear);
     hour.innerHTML="<b>00:</b>";
     min.innerHTML="<b>00:</b>";
     sec.innerHTML="<b>00</b>";
     start.classList.add("active");
     stop.classList.add("hidden");
     stop.classList.remove("active");
     myhour=0;
     mymin=0;
     mysec=0;
});
