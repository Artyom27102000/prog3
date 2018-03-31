class Xotaker extends GlxavorEak {
    constructor(x, y,ser) {
        super(x, y);
        this.energy = 4;
        this.directions = [];
        this.ser = ser;
    }

    stanalNorKordinatner() {
        super.stanalNorKordinatner();
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 2;
            this.x = norvandak[0];
            this.y = norvandak[1];
        }
    }
    eat() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(1);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 2;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy++;
            for (var c in grassArr) {
                if (grassArr[c].x == this.x && grassArr[c].y == this.y) {
                    grassArr.splice(c, 1);
                    break;
                }
            }
        }
        else {
            this.sharjvel();
        }
    }

    bazmanal() {
        if (exanak=="dzmer"){
            this.energy = 2;
        }
        else if(exanak=="ashun" || exanak=="garun"){
            this.energy = 3;
        }
        else{
               this.energy = 4;
        }
        var norVandak = random(this.yntrelVandak(2));
        if(norVandak){
        for(var i in xotakerner){
            if(norVandak[0]==xotakerner[i].x && norVandak[1]==xotakerner[i].y ){
                var ser2=xotakerner[i].ser;
            }
        }
        if ( ser2 != this.ser) {
            var norXotaker = new Xotaker(norVandak[0], norVandak[1],Math.floor(random(0, 2)));
            xotakerner.push(norXotaker);
            matrix[norVandak[1]][norVandak[0]] = 2;
        }
        else if(xotakerner.length <= 15){
            var norXotaker = new Xotaker(norVandak[0], norVandak[1],Math.floor(random(0, 2)));
            xotakerner.push(norXotaker);
            matrix[norVandak[1]][norVandak[0]] = 2;
        }
    }}
    mahanal(i) {
        matrix[this.y][this.x] = 0;
        xotakerner.splice(i, 1);
    }

}


