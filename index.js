// Your code here
class Polygon {
    constructor(side){
    this.side= side ;
    this.count = this.side.length
    };
    get countSides(){
    return this.count
    };
    get perimeter (){
    return this.side.reduce((a,b)=>{
    return a+b ;
    });
    };
};

class Triangle extends Polygon {
    get isValid(){
    let side1 =this.side[0]
    let side2 =this.side[1]
    let side3 =this.side[2]
    if(this.count===3 && side1+side2>side3 && side2+side3>side1 && side1+side3>side2){
    return true ;
    }
    else return false ;
    };
};

class square extends Polygon{
    get isValid(){
        let side1 =this.side[0]
    let side2 =this.side[1]
    let side3 =this.side[2]
    let side4 =this.side[3]
    if (this.count===4 && side1 ===side2 && side2=== side3 && side3=== side4){
    return true ;
    }
    else return false ;
    }
    get area() {
        return this.side[0] ** 2;
    };
};
