class slingshot {
    constructor(x, y, width, height, angle){
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.angle=angle
        this.slingshot_image = loadImage("slingshot.png");
        this.slingshot_base = loadImage("stick.png");
    }
    display() {
        if(keyIsDown(RIGHT_ARROW) && this.angle<70){
            this.angle+=1;
        }
        if(keyIsDown(LEFT_ARROW)&& this.angle>-30){
            this.angle-=1;
        }
        push()
        translate(this.x,this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.slingshot_image,0 ,0, this.width, this.height);
        pop();
        image(this.slingshot_base, 70, 20,200,200);
        noFill();
    }

}
