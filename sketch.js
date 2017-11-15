//font non si carica, immagine non si carica
//altra interazione cliccando sul paese compare la countryflag 

//var myPics;
var myData = []; 
var people = [];

var names=[];
var countries=[];
var countryflags=[];
var careerdays=[];
var titles=[];
var bios=[];

var y = [];

function preload(){
  myData=loadJSON('assets/peopleinspace.json');
  //myPics=loadImage('assets/space.jpg');

}

function setup() {
   createCanvas(500,500);
   
   for(var i=0;i<myData.people.length;i++){
      names.push(myData.people[i].name); 
      countries.push(myData.people[i].country); 
      countryflags.push(myData.people[i].countryflag); 
      careerdays.push(myData.people[i].careerdays); 
      titles.push(myData.people[i].title); 
      bios.push(myData.people[i].bio); 
      y.push(i*200);
   }
   
   //imageMode(CENTER);
}

function draw() {
  background(0,0,50);
  
  stroke(0, 0, 80)
  strokeWeight(10)
  line(250,0,250,500);
  
  
  
  
  for(var i=0;i<myData.people.length;i++){
    var opacity = map(height-(y[i]*2-height/3-150),0,height*1.5,0,255);
    

 //image(myPics,width/2,height/2,myPics.width,myPics.height);
 
 textFont('Barlow Semi Condensed');
    noStroke();
    textAlign(CENTER)
    fill(255, 255, 153, opacity);
    textStyle(BOLD);
    textSize(28);
    text(names[i],250,y[i]+100);
    
    fill(204, 230, 255, opacity);
    textStyle(ITALIC);
    textSize(20);
    text('- ' + titles[i] + ' -',250,y[i]+125);
   
    fill(102, 153, 255, opacity)
    textStyle(NORMAL);
    textSize(18);
    text(countries[i],250,y[i]+150);
    
    fill(204, 230, 255, opacity);
    textSize(15);
    text(bios[i],width/2-225,y[i]+160, 450, 100);
    
    
    fill(255, 255, 153, opacity);
    rect(width/2 + 5, y[i]+225, careerdays[i], 20, 3)
    textAlign(RIGHT)
    textSize(15);
    text(careerdays[i] + ' careerdays', width/2 - 5, y[i]+240);
    
    

  }   

}

function mouseWheel(event) {
      for(var i=0;i<myData.people.length;i++){
     y[i]-=event.deltaY; 
  }   
}

