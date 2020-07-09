var fcanvas=document.getElementById("can1");;
var fimage=null;
var redimage=null;
var blueimage=null;
var greenimage=null;
var rainbowimage=null;
var grayimage=null;
function upload(){
  var fileinput=document.getElementById("finput");
  fimage=new SimpleImage(fileinput);
  redimage=new SimpleImage(fileinput);
    blueimage=new SimpleImage(fileinput);
    greenimage=new SimpleImage(fileinput);
    rainbowimage=new SimpleImage(fileinput);
  grayimage= new SimpleImage(fileinput);
  fimage.drawTo(fcanvas);
}
function red(){
 for(var pixel of redimage.values()){
  
     pixel.setRed(255);  
 } 
  redimage.drawTo(fcanvas);
}
function blue(){
 for(var pixel of blueimage.values()){
  
     pixel.setBlue(255);  
 } 
  blueimage.drawTo(fcanvas);
}
function green(){
 for(var pixel of greenimage.values()){
  
     pixel.setGreen(255);  
 } 
  greenimage.drawTo(fcanvas);
}
function rainbow(){
  var height = rainbowimage.getHeight();
  for(var pixel of rainbowimage.values()){
    var y = pixel.getY();
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (y < height / 7) {
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 2 / 7) {
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 3 / 7) {
      //yellow
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 4 / 7) {
      //green
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 5 / 7) {
      //blue
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    } else if (y < height * 6 / 7) {
      //indigo
      if (avg < 128) {
        pixel.setRed(.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    } else {
      //violet
      if (avg < 128) {
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      } else {
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(0.4*avg+153);
      }
    }
}
rainbowimage.drawTo(fcanvas);

  }
function grayscale(){
  for (var p of grayimage.values()) {
    var avg = (p.getGreen() + p.getRed() + p.getBlue()) / 3;
    p.setRed(avg);
    p.setBlue(avg);
    p.setGreen(avg);
    //debug(avg);
}
grayimage.drawTo(fcanvas);
}
function clearcanvas()
{
  
  
    fimage.drawTo(fcanvas);
    blueimage = new SimpleImage(fimage);
    redimage = new SimpleImage(fimage);
    greenimage = new SimpleImage(fimage);
    rainbowimage = new SimpleImage(fimage);
  grayimage=new SimpleImage(fimage);
  
}



