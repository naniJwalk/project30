class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
    display(){
    if(this.body.speed<3) {
      super.display();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility=this.Visibility-20;
        tint(255,this.Visibility);
        image(this.image,this.body.position.x,this.body.position.y,50,50)
        pop();
      }
    }
  };
  
  