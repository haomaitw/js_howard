var inputElement
var txts = []
var colors = "fbf8cc-fde4cf-ffcfd2-f1c0e8-cfbaf0-a3c4f3-90dbf4-8eecf5-98f5e1-b9fbc0".split("-").map(a=>"#"+a)
function setup() {
 createCanvas(windowWidth, windowHeight);
 background(0);
 
 inputElement =createInput("")
 inputElement.position(50,50)
 //inputElement.style("font-size",'40px')
 //inputElement.style("color",'red')
 inputElement.input(userInput);
}

function userInput(){
 
 txts.push({
  text:this.value(),
  x:width/2,
  y:50,
  vx: random(-1,1),
  vy: 1,
  color:random(colors)
 })
 this.value('')//清空
  //print(txts)
}

function draw() {
 background(0)
 fill(255)
 textSize(50)
 for(var i=0;i<txts.length;i++){
  let txt = txts[i]
  fill(txt.color)
  text(txt.text,txt.x,txt.y)
  
  txt.x=txt.x+txt.vx//左右
  txt.y=txt.y+txt.vy//向下
  txt.vy=txt.vy+0.1//向下越來越快
  txt.vx=txt.vx*0.995//摩擦力
  txt.vy=txt.vy*0.995//摩擦力
   
   if(txt.y>height){
   txt.vy=-abs(txt.vy)//abs絕對值
   }
   
 }
}