class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 10
        }

        this.pointB = pointB;

        this.poly = Constraint.create(options)
        World.add(world, this.poly)


    }


    display(){
        if(this.poly.bodyA){
            // pointA = this.poly.bodyA.position;
            // pointB = this.pointB
            // storkeWeight(4);
            line(this.poly.bodyA.position.x,this.poly.bodyA.position.y,this.pointB.x, this.pointB.y);

        }
    }

    
    fly(){
        this.poly.bodyA = null;
    }
}
