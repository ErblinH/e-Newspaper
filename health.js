window.addEventListener("load",function(){
    document.getElementById("submitButton").addEventListener("click",searchInput);
    for(var i=0;i<healthHeaders.length;i++)
{
    article2(healthImages[i],healthHeaders[i],healthHeaders2[i],i,2,0);
}

})