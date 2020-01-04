

var CopaLojes;
    
function startGame() {
    CopaLojes = new vizatimi(20, 20, "red",0,0);
    Loja.start();
}

var Loja = {
    canvas : document.getElementById("game1"),
    start : function() {
        this.canvas.width = 450;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        
        this.interval = setInterval(Perditesoje, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


function vizatimi(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.dX = 0;
    this.dY = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        c = Loja.context;

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
        this.x += this.dX;
        this.y += this.dY;        
    }   
}

function Perditesoje() {
    Loja.clear();
    CopaLojes.newPos();    
    CopaLojes.update();
}

function levizLarte() {
    if( CopaLojes.y<0){
        CopaLojes.dY -= 0; 
    }else CopaLojes.dY -= 1;

    if(CopaLojes.x>15 && CopaLojes.x<60 && CopaLojes.y>207 &&CopaLojes.y<212)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("up1")
    }

    if(CopaLojes.x>60 && CopaLojes.x<120 && CopaLojes.y<65)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("up2")
    }
    if(CopaLojes.x>100 && CopaLojes.x<180 && CopaLojes.y<122&& CopaLojes.y>117)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("up3")
    }
    
    if(CopaLojes.x>15 && CopaLojes.x<70 && CopaLojes.y>147 &&CopaLojes.y<157)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("up5")
    }
    if(CopaLojes.x>160 && CopaLojes.x<410-20 && CopaLojes.y>237 &&CopaLojes.y<243)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("up6")
    }
    if(CopaLojes.x>220 && CopaLojes.x<370 && CopaLojes.y>180 &&CopaLojes.y<185)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("up7")
    }
    if(CopaLojes.x>280 && CopaLojes.x<440 && CopaLojes.y>117 &&CopaLojes.y<123)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("up8")
    }
    if(CopaLojes.x>270 && CopaLojes.x<370 && CopaLojes.y>60 &&CopaLojes.y<65)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("up9")
    }

}

function levizPoshte() {
    if(CopaLojes.y > 250 ){
        CopaLojes.dY -= 0; 
    }else CopaLojes.dY += 1;

    if(CopaLojes.x>15 && CopaLojes.x <90 &&CopaLojes.y>176-20&&CopaLojes.y<190)
         {   CopaLojes.dX = 0;
            CopaLojes.dY = 0;
            console.log("down1")
         }
    if(CopaLojes.x>58 && CopaLojes.x <90 &&CopaLojes.y>120-23 &&CopaLojes.y <150)
         {   CopaLojes.dX = 0;
            CopaLojes.dY = 0;
            console.log("down2")
         }
    if(CopaLojes.x>100 && CopaLojes.x <150 &&CopaLojes.y>155 &&CopaLojes.y <270)
         {   CopaLojes.dX = 0;
            CopaLojes.dY = 0;
            console.log("down3")
         }
    if(CopaLojes.x>10 && CopaLojes.x <150 &&CopaLojes.y>7&&CopaLojes.y<33)
         {   CopaLojes.dX = 0;
            CopaLojes.dY = 0;
            console.log("down4")
         }
    if(CopaLojes.x>150 && CopaLojes.x <190 &&CopaLojes.y>66&&CopaLojes.y<92)
         {   CopaLojes.dX = 0;
            CopaLojes.dY = 0;
            console.log("down5")
         }
    if(CopaLojes.x>210 && CopaLojes.x <370 &&CopaLojes.y>185&&CopaLojes.y<190)
         {   CopaLojes.dX = 0;
            CopaLojes.dY = 0;
            console.log("down6")
         }
    if(CopaLojes.x>217 && CopaLojes.x <250 &&CopaLojes.y>37&&CopaLojes.y<40)
         {   CopaLojes.dX = 0;
            CopaLojes.dY = 0;
            console.log("down7")
         }
    if(CopaLojes.x>247 && CopaLojes.x <420 &&CopaLojes.y>7&&CopaLojes.y<10)
         {   CopaLojes.dX = 0;
            CopaLojes.dY = 0;
            console.log("down8")
         }
    if(CopaLojes.x>277 && CopaLojes.x <370 &&CopaLojes.y>67&&CopaLojes.y<88)
         {   CopaLojes.dX = 0;
            CopaLojes.dY = 0;
            console.log("down9")
         }
    if(CopaLojes.x>272 && CopaLojes.x <420 &&CopaLojes.y>127&&CopaLojes.y<130)
         {   CopaLojes.dX = 0;
            CopaLojes.dY = 0;
            console.log("down10")
         }

}

function levizMajtas() {

    if( CopaLojes.x<0){
        CopaLojes.dX -= 0; 
    }else CopaLojes.dX -= 1;


    if(CopaLojes.x<=90 && CopaLojes.x >60 &&CopaLojes.y>160&&CopaLojes.y<270)
         {   CopaLojes.dX = 0;
            CopaLojes.dY = 0;
            console.log("left1")
         }

    if(CopaLojes.x<64 && CopaLojes.y>60 &&CopaLojes.y<120-20)
         {   CopaLojes.dX = 0;
            CopaLojes.dY = 0;
            console.log("left2")
         }
    if(CopaLojes.x>150 &&CopaLojes.x<155 &&CopaLojes.y>160 &&CopaLojes.y<270-20)
         {   CopaLojes.dX = 0;
            CopaLojes.dY = 0;
            console.log("left3")
         }
    if(CopaLojes.x>147 &&CopaLojes.x<153 &&CopaLojes.y>10 &&CopaLojes.y<70)
         {   CopaLojes.dX = 0;
            CopaLojes.dY = 0;
            console.log("left4")
         }
     if(CopaLojes.x>210 && CopaLojes.x <214 &&CopaLojes.y>70&&CopaLojes.y<190)
         {   CopaLojes.dX = 0;
            CopaLojes.dY = 0;
            console.log("left5")
         }
    if(CopaLojes.x>417 && CopaLojes.x <425 &&CopaLojes.y>10&&CopaLojes.y<123)
         {   CopaLojes.dX = 0;
            CopaLojes.dY = 0;
            console.log("left6")
         }
    if(CopaLojes.x>265 && CopaLojes.x <275 &&CopaLojes.y>60&&CopaLojes.y<130)
         {   CopaLojes.dX = 0;
            CopaLojes.dY = 0;
            console.log("left7")
         }
     if(CopaLojes.x>421 && CopaLojes.x <430 &&CopaLojes.y>130&&CopaLojes.y<220)
         {   CopaLojes.dX = 0;
            CopaLojes.dY = 0;
            console.log("left8")
         }

}

function levizDjathtas() {
    if(CopaLojes.x > 430 ){
        CopaLojes.dX -= 0; 
    }else CopaLojes.dX += 1;

    if(CopaLojes.x>8 && CopaLojes.x<35 && CopaLojes.y>10 && CopaLojes.y<120)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("right2")
    }

    if(CopaLojes.x>30-22 && CopaLojes.x<50 &&CopaLojes.y>160 && CopaLojes.y<210)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("right3")
    }

    if(CopaLojes.x>120-24 && CopaLojes.x<120 &&CopaLojes.y>165 && CopaLojes.y<270)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("right4")
    }
     if(CopaLojes.x>=60-20 &&CopaLojes.x<90&&CopaLojes.y>210 && CopaLojes.y<270)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("right5")
    }
    if(CopaLojes.x>98 && CopaLojes.x<117&&CopaLojes.y>60 && CopaLojes.y<100)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("right6")
    }

     if(CopaLojes.x>155 && CopaLojes.x<175 && CopaLojes.y>120 && CopaLojes.y<230)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("right7")
    }
    if(CopaLojes.x>365 && CopaLojes.x<387 && CopaLojes.y>178 && CopaLojes.y<193)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("right8")
    }
     if(CopaLojes.x>216 && CopaLojes.x<240 && CopaLojes.y>40 && CopaLojes.y<180)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("right9")
    }
     if(CopaLojes.x>247 && CopaLojes.x<250 && CopaLojes.y>10 && CopaLojes.y<40)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("right10")
    }

    if(CopaLojes.x>277 && CopaLojes.x<320 && CopaLojes.y>70 && CopaLojes.y<110)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("right11")
    }
    if(CopaLojes.x>365 && CopaLojes.x<373 && CopaLojes.y>60 && CopaLojes.y<73)
      {  CopaLojes.dX = 0;
        CopaLojes.dY = 0;
        console.log("right12")
    }
    
}

function levizjeRe() {
    CopaLojes.dX = 0; 
    CopaLojes.dY = 0; 
}

function fitore(){
    if(CopaLojes.x>420 && CopaLojes.x<450 &&CopaLojes.y>240 && CopaLojes.y<270){
        alert(sessionStorage.getItem("name")+" won")
        CopaLojes.dX = 0; 
        CopaLojes.dY = 0;
    }
}
