class rock {
    constructor(x,y){
        var options = {
            isstatic:true
        };
        this.r=30
        this.bodies=Bodies.circle(x, y, this.r, options)
        this.loadImage("rock.png")
        this.trajectory = [];
        World.add(world, this.body);
    }
    remove(index){
        Matter.Body.setVelocity(this.body,{x:0,y:0})
        setTimeout(()=>{
          Matter.World.remove(world,this.body)
          delete rocks[index]
        },1000)
    }
    shoot() {
        var newAngle = slingshot.angle - 28;
       newAngle = newAngle *(3.14/180)
       var velocity = p5.Vector.fromAngle(newAngle);
       velocity.mult(0.5);
       Matter.Body.setStatic(this.body, false);
       Matter.Body.setVelocity(this.body, {
         x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
    
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        pop();
    
        if (this.body.velocity.x > 0 && pos.x > 10) {
          var position = [pos.x, pos.y];
          this.trajectory.push(position);
        }
    
        for (var i = 0; i < this.trajectory.length; i++) {
          image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
        }
      }
    }
 