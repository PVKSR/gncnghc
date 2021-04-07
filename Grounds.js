 class Grounds{
     constructor(x,y,width,height){
         var options={
             isStatic:true
         }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
display(){

    var positions = this.body.position;
rectMode(CENTER);
fill("LightBlue")
rect(positions.x,positions.y,this.width,this.height);
}
}