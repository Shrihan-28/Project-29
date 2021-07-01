class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 10
        }

        this.polygon = loadImage("polygon.png");
        this.pointB = pointB;

        this.poly = Constraint.create(options)
        World.add(world, this.poly)


    }


    display(){
        if(this.poly.bodyA){
            // pointA = this.poly.bodyA.position;
            // pointB = this.pointB;
            image(this.polygon,200,200)
            // storkeWeight(4);
            line(this.poly.bodyA.position.x,this.poly.bodyA.position.y,this.pointB.x, this.pointB.y);

        }
    }

    
    fly(){
        this.poly.bodyA = null;
    }
}