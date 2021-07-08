class Canon{
    constructor(x,y,width,height,angle){
        //assigning the values to the current object to the class
        this.x=x;
        this.y=y;
        this.width=width;this.height=height;
        this.angle=angle
    }
    display(){
       if(keyIsDown(RIGHT_ARROW)&&(this.angle<0.35)){
           this.angle+=0.02
           console.log(this.angle)
       }
       if(keyIsDown(LEFT_ARROW)&&(this.angle>-1.5)){
        this.angle-=0.02
        console.log(this.angle)
    }

        fill ("gray")
        push ()
       
    translate (this.x,this.y)
    rotate(this.angle)
    rect (0,0,this.width,this.height)
    pop ()

    arc (this.x-30,this.y+90,140,200,PI,TWO_PI)
   noFill()
    }
}