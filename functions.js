function snowing(images)
{
    document.write('<img src="images/'+images+'"  width="20px" class="snowflakes">');
}



function getLocation(){
  
  
  function getLoc(position)
{ var snow=document.getElementById("geolocation");
   var latitude=position.coords.latitude;
   console.log(latitude);
   var month=new Date().getMonth();
   console.log(month);
   if(latitude>0 && (month>2 && month<9))
   {
    snow.innerHTML="";
    
   }
   else if(latitude<0 && (month<3 || month>8)){
    snow.innerHTML="";
   }
  else{}
   
}
  function errorMess(error)
{
  
}

  navigator.geolocation.getCurrentPosition(
    getLoc
     ,
    errorMess

);

}