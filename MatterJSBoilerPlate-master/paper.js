class paper{
    constructor(x,y){

      this.pap = Bodies.circle(x,y,80,{isStatic:true,density:0.5});
      World.add(world,this.pap);
    }
    display(){
        push();
        translate(this.pap.position.x,this.pap.position.y);
        ellipse(0,0,80);
        pop();
    }
}