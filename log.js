class Log{
    constructor(x,y,width,height){
        var Log_options = {
            isStatic : true
        }
        this.image = loadImage("dustbin.png");
        this.body = Bodies.rectangle(x,y,width,height,Log_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        fill("yellow");
       // image(this.image,pos.x,pos.y,this.width,this.height)
        rect(pos.x,pos.y,this.width,this.height);
        image(this.image,950,600,250,200);
    }
    };