class Amenaker extends GlxavorEak {
    constructor(x, y) {
        super(x,y);
        this.multiply = 0;
        this.directions = [];
    }
    stanalNorKordinatner() {
        super.stanalNorKordinatner();
    }
    yntrelVandak() {
        this.stanalNorKordinatner();
        for (; true;) {
            var found = random(this.directions);
            if (found[0] >= 0 && found[0] < matrix[0].length && found[1] >= 0 && found[1] < matrix.length) {
                return found;
            }
        }
    }
    eat() {
        this.multiply++;
        var norvandak = this.yntrelVandak();
        if (norvandak && this.multiply >= 2 && matrix[norvandak[1]][norvandak[0]] != -1) {
            matrix[norvandak[1]][norvandak[0]] = 4;
            matrix[this.y][this.x] = 0;
            this.x = norvandak[0];
            this.y = norvandak[1];

            if (matrix[norvandak[1]][norvandak[0]] == 1) {
                for (var c in grassArr) {
                    if (grassArr[c].x == this.x && grassArr[c].y == this.y) {
                        // console.log("start",grassArr.length);
                        grassArr.splice(c, 1);
                        // console.log("end",grassArr.length);
                        break;
                    }
                }
            }
            else if (matrix[norvandak[1]][norvandak[0]] == 2) {
                for (var c in xotakerner) {
                    if (xotakerner[c].x == this.x && xotakerner[c].y == this.y) {
                        xotakerner.splice(c, 1);
                        break;
                    }
                }
            }
            else if (matrix[norvandak[1]][norvandak[0]] == 3) {
                for (var c in xotakernerutoxner) {
                    if (xotakernerutoxner[c].x == this.x && xotakernerutoxner[c].y == this.y) {
                        xotakernerutoxner.splice(c, 1);
                        break;
                    }
                }
            }
            else if (matrix[norvandak[1]][norvandak[0]] == 5) {
                // console.log("a");
                for (var c in dziapxer) {
                    // console.log(dziapxer[c].x , this.x,dziapxer[c].y , this.y);
                    //if (dziapxer[c].x == this.x && dziapxer[c].y == this.y) {
                    dziapxer.splice(c, 1);
                    // console.log("c");
                    //   break;
                    // }
                }
            }
 
        }
    }
}