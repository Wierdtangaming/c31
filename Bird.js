class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
     
    this.trajectary = [];
    
  }

  display() {
    super.display();
    if (this.body.velocity.x > 5 && this.body.position.x > 220) {
    var pos = [this.body.position.x,this.body.position.y];
    this.trajectary.push(pos);

    }
    for (var i = 0 ; i < this.trajectary.length;i++) {
      image(this.smokeimage,this.trajectary[i][0],this.trajectary[i][1]); 
     } 
  }

  trajectary_del() {

    this.trajectary = [];
  }
}
