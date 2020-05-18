var i, j , k, z;
var circles = [];
var n=20;
var dia=80;
var r1 = [];
var r2 = [];
var temp;
var cxpo = 400;
var cypo = 600;
var cLock = false;
var cOver = false;
var xOffset, yOffset;

var dxpo = 450;
var dypo= 50;
var dLock = false;
var dOver = false;
var song;
var song2;

var winH=8000;

var xpo, ypo;

function windowResized(){
  //console.log('resized');
  resizeCanvas(windowWidth, winH);  
}
  
      
function setup() {

 // createCanvas(500, 700);
    canvas = createCanvas(windowWidth, winH);
    canvas.position(0,0);
  canvas.style('z-index','-1'); //sit in the back
  
  // create arrays that give random postion of circles
  for(var ii=0; ii<n; ii++){
    r1[ii]=random(0+dia*2, windowWidth-dia*2);
    r2[ii]=random(0+dia*2, windowWidth-dia*2);
  }
  
  for(var jj=0; jj<n; jj++){
    for( var kk=jj+1; kk<n; kk++){
      if( dist(r1[jj],r2[jj], r1[kk], r2[kk]) <= dia ){
        r1[kk]=random(0+dia*2, winH-dia*2);
        r2[kk]=random(0+dia*2, winH-dia*2);
      }
    }
  }
       
  
  
  for(i=0; i<n; i++){
  circles.push(new cir(r1[i], r2[i], dia, random(255),random(255),random(255)));
  }
}

function draw() {
  stroke(255);

  background('#FFCC99');

  xpo=mouseX;
  ypo=mouseY;


  drawC();


  
  for(j=0; j<n; j++){
    fill(circles[j].f1, circles[j].f2, circles[j].f3, 50);
    circle(circles[j].xPo+circles[j].speedx,circles[j].yPo+circles[j].speedy, circles[j].d);
  }//draw all the circles

  
// //handle collision
//   for(l=0; l<n; l++) {
//     for(m = l+1; m<n; m++){
//           if(  
//             dist(circles[l].xPo,circles[l].yPo, circles[m].xPo, circles[m].yPo)  
//             <=(circles[l].d/2+circles[m].d/2)
//                   ){    
//             circles[l].speedx*=-1;
//             circles[l].speedy*=-1;
//             circles[m].speedx*=-1;
//             circles[m].speedy*=-1;
            
//             temp=circles[m].f1;
//             circles[m].f1=circles[l].f1;
//             circles[l].f1=temp;
            
            
//           }          

        
//     }
//   }
  
  
for(k=0; k<n; k++){
    circles[k].move();
  }
  
  rect(mouseX,mouseY, 30, 30);
  
}

class cir{
  constructor(x,y,z, f1,f2,f3){
    this.xPo=x;
    this.yPo=y;
    this.d=z;
    if(random(0,20)>=10){
      this.speedx= 2;
    }else{
      this.speedx=-2;
    }
    if(random(0,20)%2>=10){
    this.speedy= 2;
    }else{
      this.speedy=-2;
    }
        this.f1=f1;
        this.f2=f2;
        this.f3=f3;
  }

  move(){
    this.xPo+=this.speedx;
    this.yPo+=this.speedy;

    if(this.xPo<=0+dia/2 || this.xPo>=windowWidth-dia/2){
      this.speedx*=-1;
    }
    
    // if(this.yPo>50 && this.yPo<dypo){
    //   if(this.yPo<=50 || this.yPo>=dypo){
    //    this.speedy*=-1;
    //   }
    // }
    // if(this.yPo>dypo && this.yPo <500){
    //   if(this.yPo<=dypo || this.yPo>=500){
    //     this.speedy*=-1;
    //   }
    // }
//       if(this.yPo<=){
        
      
    if( this.yPo<=0+dia/2 || this.yPo>=winH-dia/2){
     this.speedy*=-1;
    }
  }
}

function drawC(){
  circle(xpo,ypo, 30);
}

function draw1(){
   ellipse(xpo, ypo-50, 20, 40);
}

function draw3(){
   ellipse(xpo+50, ypo, 40, 20);
}

function draw5(){
   ellipse(xpo, ypo+50, 20, 40);
}

function draw7(){
   ellipse(xpo-50, ypo, 40, 20);
}

function draw2(){
  push();
  translate(xpo,ypo);
  rotate(45);
  ellipse(0, -50, 20, 40);
  pop();
}


function draw4(){
  push();
  translate(xpo,ypo);
  rotate(45);
  ellipse(50,0,40,20);
  pop();
}
function draw6(){
  push();
  translate(xpo,ypo);
  rotate(45);
  ellipse(0, 50, 20, 40);
  pop();
}
function draw8(){
  push();
  translate(xpo,ypo);
  rotate(45);
  ellipse(-50,0,40,20);
  pop();
}



  