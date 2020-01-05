function snowing(images)
{
    document.write('<img src="images/'+images+'"  width="20px" class="snowflakes">');
}
function article1(image,header1,header2,id,pageNumber,numri){
 
  var tbody=document.getElementById("tablebody1");
  if(numri==1){
  var tr=document.createElement("tr");
  tr.setAttribute('id',"bottomArticles1");tbody.appendChild(tr);}
  if(numri>1){tr=document.getElementById("bottomArticles1")}
  if(numri==4){var tr=document.createElement("tr");
  tr.setAttribute('id',"secondBottomArticles1");tbody.appendChild(tr);}
  if(numri>4){tr=document.getElementById("secondBottomArticles1")}
  if(numri==7){var tr=document.createElement("tr");
  tr.setAttribute('id',"thirdBottomArticles1");tbody.appendChild(tr);}
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
    bigArticle.appendChild(img);  
    bigArticle.appendChild(h1);
    bigArticle.appendChild(h3);
    if(pageNumber==1){
      sportsText[Object.keys(sportsText)[id]]()}
      else if(pageNumber==2){
        healthText[Object.keys(healthText)[id]]()
      }
      else{
        techText[Object.keys(techText)[id]]()
      } 
  })
  td.appendChild(a);
  tr.appendChild(td);

}
var nrArticles=0;
function article2(image,header1,header2,id,pageNumber,numri){
  nrArticles++;
 
  var tbody=document.getElementById("tablebody");
  
 if(nrArticles==1){var tr=document.createElement("tr");
 tr.setAttribute('id',"bottomArticles"); tbody.appendChild(tr)}
  if(nrArticles==4){
  
    var tr=document.createElement("tr");
    tr.setAttribute('id',"secondBottomArticles");
  tbody.appendChild(tr);}
  else if(nrArticles==7){var tr=document.createElement("tr");
  tr.setAttribute('id',"thirdBottomArticles");
  tbody.appendChild(tr);}
  if(nrArticles<4){var tr=document.getElementById("bottomArticles")}
  else if(nrArticles>=4 && nrArticles<7){tr=document.getElementById("secondBottomArticles")}
  else if(nrArticles>=7){tr=document.getElementById("thirdBottomArticles")}
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
    bigArticle.append(img);  
    bigArticle.appendChild(h1);
    bigArticle.appendChild(h3);
    if(pageNumber==1){
      sportsText[Object.keys(sportsText)[id]]()}
      else if(pageNumber==2){
        healthText[Object.keys(healthText)[id]]()
      }
      else{
        techText[Object.keys(techText)[id]]()
      }
  })
  td.appendChild(a);
  tr.appendChild(td);
  

}
var nr=0
function homeArticle(image,header1,header2,pageNumber){
var button=document.getElementById("dddd");
nr++
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

var numri=0;
function searchInput(){
  var value=document.getElementById("searchInput").value;
  
  if(numri!=0){
    numri=0;
    document.getElementById("tablebody1").innerHTML="";
    document.getElementById("bigArticleTextContent").innerHTML=""; 
    document.getElementById("bigArticleUpperPart").innerHTML="";
    
  }
      
  for(var a=0;a<sportsHeaders.length;a++){
    if(sportsHeaders[a].search(value)!=-1){
      numri++;
      article1(sportsImages[a],sportsHeaders[a],sportsHeaders2[a],a,1,numri)
    }
  }
  for(var b=0;b<techHeaders.length;b++){
    if(techHeaders[b].search(value)!=-1){
      numri++;
      article1(techImages[b],techHeaders[b],techHeaders2[b],b,1,numri)
    }
  }
  for(var c=0;c<healthHeaders.length;c++){
    if(healthHeaders[c].search(value)!=-1){
      numri++;
      article1(healthImages[c],healthHeaders[c],healthHeaders2[c],c,1,numri)
    }
  }
}



function getLocation(){
  
  
  function getLoc(position)
{ var snow=document.getElementById("geolocation");
console.log(position)
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