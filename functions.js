function snowing(images)
{
    document.write('<img src="images/'+images+'"  width="20px" class="snowflakes">');
}
function article1(image,header,header2,id){
 
  var tr=document.getElementById("topArticles");
  var td=document.createElement('td');
  var a=document.createElement('a');
  a.setAttribute('href',"#bigArticle");
  a.innerHTML='<div class="articleContainer1" id="'+id+'"><img src="images/'+image+'" width="250px" height="160px"><h3 class="articlesHeaders1">'+header+'</h3></div>';
  td.addEventListener("click",function()
  { document.getElementById("bigArticleTextContent").innerHTML="";
  
  
    var bigArticle=document.getElementById("bigArticleUpperPart")
    bigArticle.innerHTML="";
  var h1=document.createElement('h1');
  var h3=document.createElement('h3');
  var img=document.createElement('img');
  h1.innerHTML=header;
  
  h3.innerHTML=header2;
  img.setAttribute('width',"300px");
  img.setAttribute('src',"images/"+image);
        
    bigArticle.appendChild(h1);
    bigArticle.appendChild(img);
    bigArticle.appendChild(h3);
    sportsText[Object.keys(sportsText)[id]]()
    
  })
  td.appendChild(a);
  tr.appendChild(td);
  
  
  

}
function article2(image,header1,header2,id){
  var tr=document.getElementById("bottomArticles");
  var td=document.createElement('td');
  var a=document.createElement('a');
  a.setAttribute('href','#bigArticle');
  
  a.innerHTML='<div class="articleContainer2" id="'+id+'"><img src="images/'+image+'" width="250px" height="160px"><h1 class="articlesHeaders2">'+header1+'</h1><h3 class="articlesHeaders2">'+header2+'</h3></div>';
  a.addEventListener("click",function()
  { document.getElementById("bigArticleTextContent").innerHTML="";
  
  
    var bigArticle=document.getElementById("bigArticleUpperPart")
    bigArticle.innerHTML="";
  var h1=document.createElement('h1');
  var h3=document.createElement('h3');
  var img=document.createElement('img');
  h1.innerHTML=header1;
  
  h3.innerHTML=header2;
  img.setAttribute('width',"300px");
  img.setAttribute('src',"images/"+image);
        
    bigArticle.appendChild(h1);
    bigArticle.appendChild(img);
    bigArticle.appendChild(h3);
    sportsText[Object.keys(sportsText)[id]]();
  })
  td.appendChild(a);
  tr.appendChild(td);
  

}

function homeArticle(image,header1,header2,pageNumber){

  var tr1=document.getElementById("topArticles");
  var tr2=document.getElementById("grayHeader");
  var tr3=document.getElementById("secondHeader");
  var tr4=document.getElementById("readMore");
  var td1=document.createElement('td');
  var td2=document.createElement('td');
  var td3=document.createElement('td');
  var td4=document.createElement('td');
  var a=document.createElement('a');
  var h1=document.createElement('h1');
  var h3=document.createElement('h3');
  var img=document.createElement('img');
  h1.innerHTML=header1;
  h3.innerHTML=header2;
  img.setAttribute('width',"300px");
  img.setAttribute('src',"images/"+image);
  a.innerHTML="read more";
  
  td1.appendChild(img);
  tr1.appendChild(td1);
  td2.appendChild(h1);
  tr2.appendChild(td2);
  td3.appendChild(h3);
  tr3.appendChild(td3);
  td4.appendChild(a);
  tr4.appendChild(td4);

  
  var url;
  switch(pageNumber){
    case 1:{url="sports.html";break;}
    case 2:{url="health.html";break;}
    case 3:{url="technology.html";break;}
    default:url="#";

  }
  a.setAttribute('href',url);
}


function



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
