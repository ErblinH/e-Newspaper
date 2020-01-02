

var myGamePiece;
    
function startGame() {
    myGamePiece = new component(20, 20, "red",0,0);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.getElementById("blini"),
    start : function() {
        this.canvas.width = 450;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        c = myGameArea.context;

        c.fillStyle = "lightblue";
        c.beginPath();
        c.fillRect(420,240,30,30);

        var gradient = c.createLinearGradient(0,0,200,0)
        gradient.addColorStop(0,"blue");
        gradient.addColorStop(1,"white");
        c.fillStyle = "blue"
        c.fillRect(this.x, this.y, this.width, this.height);c.fillStyle = "blue";
       var poly = [90,150 ,30,150 ,30,30 ,150,30, 150,90, 210,90, 210,210 ,390,210 ,390,180 ,240,180, 
        240,60, 270,60, 270,150,420,150,420,240,180,240,180,120 ,120,120, 120,60, 60,60, 60,120,90,120];

        c.beginPath();
        c.moveTo(poly[0], poly[1]); 
        for(var i = 0; i<poly.length; i +=2){
            c.lineTo(poly[i],poly[i+1])
        }
        c.fill();

        //var p = [90,120, 60,120, 60,60, 120,60 ,120,120 ,180,120 ,180,240 ,420,240 ,420,150, 270,150,270,60];
        

        var p = [270,60, 270,30, 420,30 ,420,120 ,300,120 ,300,90 ,390,90 ,390,60 ,270,60];
        c.beginPath();
        c.moveTo(p[0], p[1]); 
        for(var i = 0; i<p.length; i +=2){
            c.lineTo(p[i],p[i+1])
        }
        c.fill();

        c.fillRect(120,180,30,120)

        var p2 = [30,180, 90,180, 90,270, 60,270, 60,210, 30,210];
        c.beginPath();
        c.moveTo(p2[0], p2[1]); 
        for(var i = 0; i<p2.length; i +=2){
            c.lineTo(p2[i],p2[i+1])
        }
        c.closePath()
        c.fill();
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }   
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();    
    myGamePiece.update();
}

function moveup() {
    if( myGamePiece.y<0){
        myGamePiece.speedY -= 0; 
    }else myGamePiece.speedY -= 1;

    if(myGamePiece.x>15 && myGamePiece.x<60 && myGamePiece.y>207 &&myGamePiece.y<212)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("up1")
    }

    if(myGamePiece.x>60 && myGamePiece.x<120 && myGamePiece.y<65)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("up2")
    }
    if(myGamePiece.x>100 && myGamePiece.x<180 && myGamePiece.y<122&& myGamePiece.y>117)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("up3")
    }
    
    if(myGamePiece.x>15 && myGamePiece.x<70 && myGamePiece.y>147 &&myGamePiece.y<157)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("up5")
    }
    if(myGamePiece.x>160 && myGamePiece.x<410-20 && myGamePiece.y>237 &&myGamePiece.y<243)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("up6")
    }
    if(myGamePiece.x>220 && myGamePiece.x<370 && myGamePiece.y>180 &&myGamePiece.y<185)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("up7")
    }
    if(myGamePiece.x>280 && myGamePiece.x<440 && myGamePiece.y>117 &&myGamePiece.y<123)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("up8")
    }
    if(myGamePiece.x>270 && myGamePiece.x<370 && myGamePiece.y>60 &&myGamePiece.y<65)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("up9")
    }

}

function movedown() {
    if(myGamePiece.y > 250 ){
        myGamePiece.speedY -= 0; 
    }else myGamePiece.speedY += 1;

    if(myGamePiece.x>15 && myGamePiece.x <90 &&myGamePiece.y>176-20&&myGamePiece.y<190)
         {   myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            console.log("down1")
         }
    if(myGamePiece.x>58 && myGamePiece.x <90 &&myGamePiece.y>120-23 &&myGamePiece.y <150)
         {   myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            console.log("down2")
         }
    if(myGamePiece.x>100 && myGamePiece.x <150 &&myGamePiece.y>155 &&myGamePiece.y <270)
         {   myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            console.log("down3")
         }
    if(myGamePiece.x>10 && myGamePiece.x <150 &&myGamePiece.y>7&&myGamePiece.y<33)
         {   myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            console.log("down4")
         }
    if(myGamePiece.x>150 && myGamePiece.x <190 &&myGamePiece.y>66&&myGamePiece.y<92)
         {   myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            console.log("down5")
         }
    if(myGamePiece.x>210 && myGamePiece.x <370 &&myGamePiece.y>185&&myGamePiece.y<190)
         {   myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            console.log("down6")
         }
    if(myGamePiece.x>217 && myGamePiece.x <250 &&myGamePiece.y>37&&myGamePiece.y<40)
         {   myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            console.log("down7")
         }
    if(myGamePiece.x>247 && myGamePiece.x <420 &&myGamePiece.y>7&&myGamePiece.y<10)
         {   myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            console.log("down8")
         }
    if(myGamePiece.x>277 && myGamePiece.x <370 &&myGamePiece.y>67&&myGamePiece.y<88)
         {   myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            console.log("down9")
         }
    if(myGamePiece.x>272 && myGamePiece.x <420 &&myGamePiece.y>127&&myGamePiece.y<130)
         {   myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            console.log("down10")
         }

}

function moveleft() {

    if( myGamePiece.x<0){
        myGamePiece.speedX -= 0; 
    }else myGamePiece.speedX -= 1;


    if(myGamePiece.x<=90 && myGamePiece.x >60 &&myGamePiece.y>160&&myGamePiece.y<270)
         {   myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            console.log("left1")
         }

    if(myGamePiece.x<64 && myGamePiece.y>60 &&myGamePiece.y<120-20)
         {   myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            console.log("left2")
         }
    if(myGamePiece.x>150 &&myGamePiece.x<155 &&myGamePiece.y>160 &&myGamePiece.y<270-20)
         {   myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            console.log("left3")
         }
    if(myGamePiece.x>147 &&myGamePiece.x<153 &&myGamePiece.y>10 &&myGamePiece.y<70)
         {   myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            console.log("left4")
         }
     if(myGamePiece.x>210 && myGamePiece.x <214 &&myGamePiece.y>70&&myGamePiece.y<190)
         {   myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            console.log("left5")
         }
    if(myGamePiece.x>417 && myGamePiece.x <425 &&myGamePiece.y>10&&myGamePiece.y<123)
         {   myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            console.log("left6")
         }
    if(myGamePiece.x>265 && myGamePiece.x <275 &&myGamePiece.y>60&&myGamePiece.y<130)
         {   myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            console.log("left7")
         }
     if(myGamePiece.x>421 && myGamePiece.x <430 &&myGamePiece.y>130&&myGamePiece.y<220)
         {   myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            console.log("left8")
         }

}

function moveright() {
    if(myGamePiece.x > 430 ){
        myGamePiece.speedX -= 0; 
    }else myGamePiece.speedX += 1;

    if(myGamePiece.x>8 && myGamePiece.x<35 && myGamePiece.y>10 && myGamePiece.y<120)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("right2")
    }

    if(myGamePiece.x>30-22 && myGamePiece.x<50 &&myGamePiece.y>160 && myGamePiece.y<210)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("right3")
    }

    if(myGamePiece.x>120-24 && myGamePiece.x<120 &&myGamePiece.y>165 && myGamePiece.y<270)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("right4")
    }
     if(myGamePiece.x>=60-20 &&myGamePiece.x<90&&myGamePiece.y>210 && myGamePiece.y<270)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("right5")
    }
    if(myGamePiece.x>98 && myGamePiece.x<117&&myGamePiece.y>60 && myGamePiece.y<100)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("right6")
    }

     if(myGamePiece.x>155 && myGamePiece.x<175 && myGamePiece.y>120 && myGamePiece.y<230)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("right7")
    }
    if(myGamePiece.x>365 && myGamePiece.x<387 && myGamePiece.y>178 && myGamePiece.y<193)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("right8")
    }
     if(myGamePiece.x>216 && myGamePiece.x<240 && myGamePiece.y>40 && myGamePiece.y<180)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("right9")
    }
     if(myGamePiece.x>247 && myGamePiece.x<250 && myGamePiece.y>10 && myGamePiece.y<40)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("right10")
    }

    if(myGamePiece.x>277 && myGamePiece.x<320 && myGamePiece.y>70 && myGamePiece.y<110)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("right11")
    }
    if(myGamePiece.x>365 && myGamePiece.x<373 && myGamePiece.y>60 && myGamePiece.y<73)
      {  myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
        console.log("right12")
    }
    
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}

function victory(){
    if(myGamePiece.x>420 && myGamePiece.x<450 &&myGamePiece.y>240 && myGamePiece.y<270){
        alert(sessionStorage.getItem("name")+" won")
        myGamePiece.speedX = 0; 
        myGamePiece.speedY = 0;
    }
}
