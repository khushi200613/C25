class Ball {
    constructor(x, y) {
      var options = {
        isStatic: true,
        restitution:1,
        friction:1,
        density:1,
      };
      this.image = loadImage("assets/cannonball.png");
      this.radius = 40;
      
      this.body = Bodies.circle(x, y, this.radius, options);
     this.trajectory=[]
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push ()
      translate (pos.x,pos.y)
      rotate (angle)
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius,this.radius);
     pop ()
     if(this.body.velocity.x>0&&this.body.position.x>300){
       var position=[this.body.position.x,this.body.position.y]
       this.trajectory.push(position)
     }
     for(var i=0;i<this.trajectory.length;i++)
     {
      image(this.image, this.trajectory[i][0], this.trajectory[i][1],5,5);
     }
    }
     shoot(){
         var velocity=p5.Vector.fromAngle(canon.angle)
         console.log(velocity)
         //mult=multiply
         velocity.mult(10)
         Matter.Body.setStatic(this.body,false)
         Matter .Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})

     }

    











  }
  