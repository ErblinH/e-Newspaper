function art(){
    var b="sss"
    var sion=document.getElementById("aaaa");
    var a=document.createElement('div');
    var as=document.createElement('a');
    as.innerHTML="read more"
   
    a.innerHTML=b;
    as.addEventListener('click',function(e){nrArtikullit=1;})

    as.setAttribute('href',"file:///C:/Users/LED%20COM/Desktop/p/PWWW19-20_Gr8/politics.html")
    as.addEventListener('click',function(e){document.getElementById("aaaa").innerHTML=""})
    sion.appendChild(a);
    sion.appendChild(as);

  }
  window.addEventListener('load',art);