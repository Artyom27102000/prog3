var socket = io.connect();
var grassArr = [];
var c = 0;
var side = 20;
var mull = 0, lx = 9;
var gic = 0;
var carrentwheater;
var matrix = [
	// [1, 2, 1, 5, 4],
	// [1, 0, 0, 0, 0],
	// [0, 1, 0, 1, 3],
	// [0, 0, 1, 0, 0]
	// [1, 1, 0, 1, 0],
	// [1, 1, 0, 0, 0],
	// [1, 0, 1, 0, 1],
	// [1, 0, 2, 0, 0],
	// [0, 1, 0, 1, 3],
	// [0, 0, 1, 0, 0],
	// [1, 1, 0, 1, 0],
	// [1, 1, 0, 0, 0],
	// [1, 1, 0, 0, 2]
];
var exi;
var ex = 0;
var exanakit = ["garun", "amar", "ashun", "dzmer"];
var dziapxer = [];
var amenakerner = [];
var xotakerner = [];
var xotakernerutoxner = [];
var pau = 1;
var arag = 15;
var exanak = prompt("nermuceq xaxi exanak@(garun,amar,ashun,dzmer)");
while (exanak != "amar" && exanak != "dzmer" && exanak != "ashun" && exanak != "garun") {
	var exanak = prompt("chisht nermuceq xaxi exanak@(garun,amar,ashun,dzmer)");
}
for (var i in exanakit) {
	if (exanak == exanakit[i]) {
		exi = i;
		break;
	}

}
var shamanak = prompt("nermuceq xaxi shamanak@ (5-1100 varkyanneri sahmanum)");
while (shamanak > 1101 || shamanak <= 5 || isNaN(shamanak)) {
	var shamanak = prompt("nermuceq xaxi shamanak@ (5-1100 varkyanneri sahmanum)");
}
function setup() {
	fillmatrix(30, 30);
	frameRate(15);
	createCanvas(matrix[0].length * side + 200, matrix.length * side + 150);
	background('lightblue');
	for (var y = 0; y < matrix.length; ++y) {
		for (var x = 0; x < matrix[y].length; ++x) {
			if (matrix[y][x] == 1) {
				var gr = new Grass(x, y);
				grassArr.push(gr);
			}
			else if (matrix[y][x] == 2) {
				xotakerner.push(new Xotaker(x, y, Math.floor(random(0, 2))));
			}
			else if (matrix[y][x] == 3) {
				xotakernerutoxner.push(new Xotakerutox(x, y));
			}
			else if (matrix[y][x] == 4) {
				amenakerner.push(new Amenaker(x, y));
			}
			else if (matrix[y][x] == 5) {
				dziapxer.push(new Dziapix(x, y));
			}
		}
	}
}

// console.log("       skzbum    ");
// console.log("xoti qanak=" + grassArr.length);
// console.log("dexineri qanak=" + xotakerner.length);
// console.log("karmirneri qanak=" + xotakernerutoxner.length);
// console.log("severi qanak=" + amenakerner.length);
// console.log("kapuytneri qanak=" + dziapxer.length);
socket.emit("send obj", obj);
function pause() {
	if (pau == 0) {
		pau++;
	}
	else {
		pau--;
	}
}
function krakel() {
	for (var y = 0; y < matrix[0].length; y++) {
		if (matrix[y][lx] == 1) {
			for (var c in grassArr) {
				if (grassArr[c].x == lx && grassArr[c].y == y) {
					grassArr.splice(c, 1);
					break;
				}
			}
		}
		else if (matrix[y][lx] == 2) {
			for (var c in xotakerner) {
				if (xotakerner[c].x == lx && xotakerner[c].y == y) {
					xotakerner.splice(c, 1);
					break;
				}
			}
		}
		else if (matrix[y][lx] == 3) {
			for (var c in xotakernerutoxner) {
				if (xotakernerutoxner[c].x == lx && xotakernerutoxner[c].y == y) {
					xotakernerutoxner.splice(c, 1);
					break;
				}
			}
		}
		else if (matrix[y][lx] == 4) {
			for (var c in amenakerner) {
				if (amenakerner[c].x == lx && amenakerner[c].y == y) {
					amenakerner.splice(c, 1);
					break;
				}
			}
		}
		else if (matrix[y][lx] == 5) {
			for (var c in dziapxer) {
				if (dziapxer[c].x == lx && dziapxer[c].y == y) {
					dziapxer.splice(c, 1);
					break;
				}
			}
		}
		matrix[y][lx] = 100;
	}
}
function aj() {
	if (lx != 29) {
		lx++;
	}
}
function dzax() {
	if (lx != 0) {
		lx--;
	}
}
function keyPressed() {
	if (keyCode == RIGHT_ARROW) {
		aj();
	}
	else if (keyCode == LEFT_ARROW) {
		dzax();
	}
	else if (keyCode == 38) {
		go();
	}
	else if (keyCode == 40) {
		stop();
	}
	else if (keyCode == 32) {
		krakel();
	}
	else if (keyCode == 80) {
		pause();
	}
}
function stop() {
	if (arag > 1) {
		arag--;
	}
}
function go() {
	if (arag <= 59) {
		arag++;
	}
}
// function preload() {
//    alert("Window is loaded");
// }
var kadr = 0;
var obj;
function draw() {
	noStroke();
	obj = {
		"xoti qanak": grassArr.length,
		"dexineri qanak": xotakerner.length,
		"karmirneri qanak": xotakernerutoxner.length,
		"severi qanak": amenakerner.length,
		"kapuytneri qanak": dziapxer.length
	};
	if (pau == 0) {
		frameRate(30);
		fill('rgba(32,32,32,0.5)');
		rect(10, 50, 550, 400, 20);
		fill('red');
		textSize(100);
		text("Pause", 150, 280);
	}
	else {
		kadr++;
		if (kadr == 60) {
			socket.emit("send obj", obj);
			kadr = 0;
		}
		frameRate(arag);
		ex++
		if (ex == 25) {
			if (++exi == 4) {
				exi = 0;
			}
			exanak = exanakit[exi];
			ex = 0;
		}
		for (var y = 0; y < matrix.length; y++) {
			for (var x = 0; x < matrix[y].length; x++) {
				if (matrix[y][x] == 1) {
					if (exanak == "amar") {
						fill("green");
					}
					else if (exanak == "garun") {
						fill("#00FF00");
					}
					else if (exanak == "dzmer") {
						fill("#A9F5D0");
					}
					else {
						fill("#F3E2A9");
					}
					rect(x * side, y * side, side, side);
				}
				else if (matrix[y][x] == 0) {
					fill("#acacac");
					rect(x * side, y * side, side, side);
				}
				else if (matrix[y][x] == 2) {
					fill("yellow");
					rect(x * side, y * side, side, side);
				}
				else if (matrix[y][x] == 3) {
					fill("red");
					rect(x * side, y * side, side, side);
				}
				else if (matrix[y][x] == 4) {
					fill("black");
					rect(x * side, y * side, side, side);
				}
				else if (matrix[y][x] == 5) {
					fill("blue");
					rect(x * side, y * side, side, side);
				}
				else if (matrix[y][x] == 100) {
					gic++;
					fill('#acacac');
					rect(x * side, y * side, side, side);
					fill("red");
					rect(x * side + 6.87, y * side, 6.87, 20);
					if (gic >= 1) {
						carrentwheater = exanak;
						matrix[y][x] = -1;
						gic = 0;
					}
				}
				else if (matrix[y][x] == -1) {
					if (carrentwheater == exanak) {
						fill("#acacac");
						rect(x * side, y * side, side, side);
					}
					else {
						matrix[y][x] = 0;
					}
				}
			}
		}
		fill("lightblue");
		// noStroke();
		rect(620, 10, 200, 150);
		if (shamanak <= 25) {
			fill("red");
		}
		else {
			fill("black");
		}
		textSize(60);
		text(shamanak, 650, 60);
		fill("lightblue");
		rect(610, 130, 180, 150);
		if (exanak == "amar") {
			fill("green");
		}
		else if (exanak == "garun") {
			fill("#00FF00");
		}
		else if (exanak == "dzmer") {
			fill("#A9F5D0");
		}
		else {
			fill("#F3E2A9");
		}

		textSize(60);
		text(exanak, 620, 250);
		fill("lightblue");
		rect(0, y * side + 25, 650, 100);
		fill("green");
		rect(lx * side + 5, y * side + 25, 10, 35);
		rect(lx * side - 20, y * side + 50, 60, 50);

		for (var i in grassArr) {
			grassArr[i].bazmanal();
		}
		for (var i in xotakerner) {
			xotakerner[i].eat();
		}
		for (var i in xotakerner) {
			if (xotakerner[i].energy >= 7 && xotakerner.length <= 100) {
				xotakerner[i].bazmanal();
			}
			else if (xotakerner[i].energy <= 0) {
				xotakerner[i].mahanal(i);
			}
		}
		for (var i in xotakernerutoxner) {
			xotakernerutoxner[i].eat();

		}
		for (var i in xotakernerutoxner) {
			if (xotakernerutoxner[i].energy >= 60) {
				xotakernerutoxner[i].bazmanal();
			}
			else if (xotakernerutoxner[i].energy <= 0) {
				xotakernerutoxner[i].mahanal(i);
			}
		}
		if (exanak != "dzmer") {
			for (var i in amenakerner) {
				amenakerner[i].eat();
			}
		}

		for (var i in dziapxer) {
			dziapxer[i].sharjvel();
			// console.log(dziapxer.length);
		}
		for (var i in dziapxer) {
			dziapxer[i].jardel();
			// console.log(dziapxer.length);
		}
		shamanak--;
		if (shamanak <= -1) {
			noLoop();
			fill('rgba(32,32,32,0.5)');
			rect(10, 50, 550, 400, 20);
			fill('red');
			textSize(100);
			text("Game Over", 30, 280);
			// var xot1 = grassArr.length / 3.5;
			// var xotaker1 = xotakerner.length / 2;
			// var xotakernerutoxner1 = xotakernerutoxner.length;
			// console.log("       verjum    ");
			// console.log("xoti qanak=" + grassArr.length);
			// console.log("dexineri qanak=" + xotakerner.length);
			// console.log("karmirneri qanak=" + xotakernerutoxner.length);
			// console.log("severi qanak=" + amenakerner.length);
			// console.log("kapuytneri qanak=" + dziapxer.length);
			// console.log("       haxtox@");
			// if (xot1 > xotakernerutoxner1 && xot1 > xotaker1) {
			// 	text(grassArr.length, 130, 350);
			// }
			// else if (xotaker1 > xot1 && xotaker1 > xotakernerutoxner1) {
			// 	text(xotakerner.length, 130, 350);
			// }
			// else if (xotakernerutoxner1 > xot1 && xotakernerutoxner1 > xotaker1) {
			// 	text(xotakernerutoxner.length, 130, 350);
			// }
			// else {
			// 	text("voch voq chaxtec", 130, 330);
			// }
		}



		// 	var obj = {
		//    "tesak": "Vardan",
		//    "qanak": "Hovsepyan",
		// 	}
		// 	if(frameCount % 60 == 0){
		// 		socket.emit('send coords', obj);
		// 	}
	}
}


function fillmatrix(n, m) {
	var p = 0;
	var d = 0;
	var k = 0;
	var j = 0;
	for (var y = 0; y < n; y++) {
		var a = Math.floor(random(50, 60));
		var b = Math.floor(random(15, 20));
		var c = Math.floor(random(6, 10));
		var l = Math.floor(random(1, 5))
		matrix.push([]);
		for (var x = 0; x < m; x++) {
			if (((j <= a && y < 15) || (j <= b && y >= 15)) && k <= 2 && d <= 1 && p <= Math.floor(random(0, 2))) {
				matrix[y][x] = Math.floor(random(0, 6));
			}
			else if (((j <= a && y < 15) || (j <= b && y >= 15)) && k <= c && d <= l) {
				matrix[y][x] = Math.floor(random(0, 5));
			}
			else if (((j <= a && y < 15) || (j <= b && y >= 15)) && k <= c) {
				matrix[y][x] = Math.floor(random(0, 4));
			}
			else if ((j <= a && y < 15) || j <= b && y >= 15) {
				matrix[y][x] = Math.floor(random(0, 3));
			}
			else {
				matrix[y][x] = Math.floor(random(0, 2));
			}
			if (matrix[y][x] == 2) {
				j++;
			}
			else if (matrix[y][x] == 3) {
				k++;
			}
			else if (matrix[y][x] == 4) {
				d++;
			}
			else if (matrix[y][x] == 5) {
				p++;
			}
		}
	}
}


