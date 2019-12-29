

window.addEventListener("load",function(){
    for(var i=0;i<3;i++)
{
    article1(sportsImages[i],sportsHeaders[i],sportsHeaders2[i],i);
}
for(var k=3;k<sportsImages.length;k++)
{
    article2(sportsImages[k],sportsHeaders[k],sportsHeaders2[k],k);
}
})