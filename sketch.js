//Create variables here
var dog, happyDog, database, foodS, foodStock, house;
var firebase

function preload()
{
  //load images here
  Image1 = loadImage("images/dogimg2.png")
  Image2 = loadImage("images/dogimg3.jpg")
  Image3 = loadImage("images/House.jpg")
}

function setup() {
  database = firebase.database()
  createCanvas(500, 500);
  dog = createSprite(300,300,5,5)
  house = createSprite(150,250,5,5)
  Image1.resize(150,150)
  dog.addImage(Image1);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock,showerror);
  house.addImage(Image3);
  Image3.resize(150,150)
  Image2.resize(150,150)
}

function draw() {  
  background("white");
  if(keyWentDown(UP_ARROW)){
  if(foodS<=0){
    foodS = 0;
  }
  else{
    foodS = foodS-1
  }
    
  writeStock(foodS);
  dog.addImage(Image2);
  }    
  //add styles here
  textSize(15)
  fill("black")
  stroke(51)
  text("Note: press UP_ARROW key to feed the dog milk",70,100)
  textSize(25)
  text("Food Remaining: " + foodS,150,450)
  drawSprites();
}

function writeStock(x){
  
  
  database.ref('/').set({
    Food:x })
}

function readStock(data){
  foodS = data.val();
}

function showerror(){
console.log("error")
}