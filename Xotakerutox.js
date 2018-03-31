class Xotakerutox extends GlxavorEak {
    constructor(x, y,ser) {
        super(x, y);
        this.energy = 50;
        this.directions = [];
        this.multiply = 0;
        this.ser = ser;
        // this.index = 2;
    }

    stanalNorKordinatner() {
        super.stanalNorKordinatner();
    }
    sharjvel() {
        if (exanak=="garun"){
            this.multiply +=2;
        }
        else if(exanak=="amar"){
            this.multiply +=3;
        }
        else if(exanak=="ashun"){
            this.multiply +=2;
        }
        else{
            this.multiply ++;
        }
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norvandak = random(datarkvandakner);
        if (this.multiply >= 10 &&norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 3;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.multiply=0;
            if(exanak=="dzmer"){
                this.multiply --;
            }
        }
    }
    eatxot() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(1);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 3;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy - 2;
            for (var c in grassArr) {
                if (grassArr[c].x == this.x && grassArr[c].y == this.y) {
                    grassArr.splice(c, 1);
                    break;
                }
            }
        }
    }
    eat() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(2);
        var norvandak = random(datarkvandakner);
        var datarkvandakner1 = this.yntrelVandak(0);
        var norvandak1 = random(datarkvandakner1);
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 3;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy += 3;
            for (var c in xotakerner) {
                if (xotakerner[c].x == this.x && xotakerner[c].y == this.y) {
                    xotakerner.splice(c, 1);
                    break;
                }
            }
        }
        else if (norvandak1) {
            this.sharjvel();
        }
        else {
            this.eatxot()
        }
    }

    bazmanal() {
        this.energy = 20;
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var norXotakerutox = new Xotakerutox(norVandak[0], norVandak[1]);
            xotakernerutoxner.push(norXotakerutox);
            matrix[norVandak[1]][norVandak[0]] = 3;
        }
        if(norVandak){
        for(var i in xotakernerutoxner){
            if(norVandak[0]==xotakernerutoxner[i].x && norVandak[1]==xotakernerutoxner[i].y ){
                var ser2=xotakernerutoxner[i].ser;
            }
        }
        if ( ser2 != this.ser) {
           var norXotakerutox = new Xotakerutox(norVandak[0], norVandak[1],Math.floor(random(0, 2)));
            xotakernerutoxner.push(norXotakerutox);
            matrix[norVandak[1]][norVandak[0]] = 3;
        }
    }
    }
    mahanal(i) {
        matrix[this.y][this.x] = 0;
        xotakernerutoxner.splice(i, 1);
    }

}