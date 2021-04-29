const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19;
var box20,box21,box22;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1280, 570);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(570, 600, 1200, 20);

  hero = new Hero(300,800,250);
  rope = new Rope(hero.body, { x: 300, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(680, 100, 70, 70);
  box2 = new Box(680, 200, 70, 70);
  box3 = new Box(680, 300, 70, 70);
  box4 = new Box(680, 400, 70, 70);
  box5 = new Box(760, 100, 70, 70);
  box6 = new Box(760, 200, 70, 70);
  box7 = new Box(760, 300, 70, 70);
  box8 = new Box(760, 400, 70, 70);
  box9 = new Box(760, 500, 70, 70);
  box10 = new Box(840, 10, 70, 70);
  box11 = new Box(840, 90, 70, 70);
  box12 = new Box(840, 170, 70, 70);
  box13 = new Box(840, 250, 70, 70);
  box14 = new Box(840, 330, 70, 70);
  box15 = new Box(840, 410, 70, 70);
  box16 = new Box(840, 490, 70, 70);
  box17 = new Box(600, 90, 70, 70);
  box18 = new Box(600, 170, 70, 70);
  box19 = new Box(600, 250, 70, 70);
  box20 = new Box(600, 330, 70, 70);
  box21 = new Box(600, 410, 70, 70);
  box22 = new Box(600, 490, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()

  hero.display();
  rope.display();
  monster.display();

  mouseDragged();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{ x: mouseX, y: mouseY})
}