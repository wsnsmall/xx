"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//子弹Bullet
var Bullet = function () {
	//属性ele
	function Bullet(ele, id) {
		_classCallCheck(this, Bullet);

		//	this.ele = document.createElement("div");
		//	this.id = parseInt(Math.random()*100000000);
		var _ref = [document.createElement("div"), parseInt(Math.random() * 100000000)];
		this.ele = _ref[0];
		this.id = _ref[1];
	}
	//方法init


	_createClass(Bullet, [{
		key: "init",
		value: function init() {

			//添加
			gameEngine.allBullet[this.id] = this;
			//console.log( gameEngine.allBullet );

			gameEngine.ele.appendChild(this.ele);
			this.ele.className = "bullet";
			this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth / 2 - this.ele.offsetWidth / 2 + "px";
			this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
			return this;
		}

		//		let init = this.init( ()=>{
		//		
		//		//添加
		//		gameEngine.allBullet[this.id] = this;
		//		console.log( gameEngine.allBullet );
		//		
		//		gameEngine.ele.appendChild(this.ele);
		//		this.ele.className = "bullet";
		//		this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2 - this.ele.offsetWidth/2 + "px";
		//		this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
		//		return this;
		//	})

		//方法move

	}, {
		key: "move",
		value: function move() {
			var that = this;
			this.timer = setInterval(function () {
				var y = that.ele.offsetTop - 10;
				if (y < -18) {
					clearInterval(that.timer); //停止移动
					gameEngine.ele.removeChild(that.ele); //移除子弹

					//删除
					delete gameEngine.allBullet[that.id];
				} else {
					that.ele.style.top = y + "px"; //移动
				}
			}, 50);
		}

		//爆炸

	}, {
		key: "boom",
		value: function boom() {
			clearInterval(this.timer); //停止移动

			this.ele.className = "bullet-die";

			var that = this;
			var dieImgs = ["images2/die1.png", "images2/die2.png"];
			var i = 0;
			var dieTimer = setInterval(function () {
				if (i >= 1) {
					clearInterval(dieTimer); //停止爆炸
					gameEngine.ele.removeChild(that.ele); //移除子弹
				} else {
					that.ele.style.background = "url(" + dieImgs[++i] + ") no-repeat";
				}
			}, 100);
		}
	}]);

	return Bullet;
}();