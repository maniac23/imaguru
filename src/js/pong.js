//  ;(function($){

//  кроссбраузерный AnimationFrame
	var animationFrame = (function(){
		return requestAnimationFrame ||
		webkitRequestAnimationFrame  ||
		mozRequestAnimationFrame     ||
		oRequestAnimationFrame       ||
		msRequestAnimationFrame      ||
		function(callback){
			setTimeout(callback, 1000/60);
		};
	}());
// 
	var getRandom = function(min, max) {
		return Math.round(Math.random() * (max - min) + min);;
	};

	var probably = function(prob) {
		prob = prob || .5;
		return Math.random() < prob;
	};

/*  ============= MODEL =============*/

	var Model = {

		fieldWidth : 2000,
		fieldHeight : 1000,

		startTime: 30,
		currentTime: null,
		score: 0,

		scores: {
			left: 4,
			right: 4,
		},


		ball : {},

		leftPlatform : {},

		rightPlatform: {},

		const: {
			platformVelocity: 500,
		},

		gameItems: [],

		getItem: function(name) {
			var self = this;
			var forReturn;
			self.gameItems.forEach(function(item){
				if (item.name == name) {
					return item;
				};
			});
		},

		resetGame: function(){

			this.ball = {
					name: 'ball',
					type: 'ball',
					size: {x: 50, y: 50},
					position: {x: 0, y: 0},
					velocity: {x: 1500, y: 0},
					acceleration: {x: 0, y: 0},
				};

			this.leftPlatform  = {
					name: 'leftPlatform',
					type: 'platform',
					size: {x: 20, y: 200},
					position: {x: -990, y: 0},
					velocity: {x: 0, y: 0},
					acceleration: {x: 0, y: 0}
				};

			this.rightPlatform = {
					name: 'rightPlatform',
					type: 'platform',
					size: {x: 17 , y: 200},
					position: {x: 990, y: 0},
					velocity: {x: 0, y: 0},
					acceleration: {x: 0, y: 0}
				};

			this.score = 0;
			this.currentTime = this.startTime;
			this.gameItems = [this.ball, this.leftPlatform, this.rightPlatform];
		},

		tick: function(dT) {

			dT = dT || 1000/60;
			var self = this;
			self.playScene(dT)
				.mayBeBonus()
				.countdown(dT)
				.scoreUp(dT)
				.checkCollisions();

			AI.play();

			View.drawAllItems(self.gameItems);
			View.drawCounter(self.currentTime);
		},

		countdown: function(dT) {
			this.currentTime -= dT / 1000;
			if (this.currentTime < 0) {
				this.currentTime = 0;
				$(document).trigger('gameover');
			}
			return this;
		},

		scoreUp: function(dT) {
			this.score += dT / 100;
			return this;
		},

		playScene: function(dT) {

			var self = this;
			self.gameItems.forEach(function(item){

				item.position.x += item.velocity.x * dT / 1000;
				item.position.y += item.velocity.y * dT / 1000;
				item.velocity.x += item.acceleration.x * dT / 1000;
				item.velocity.y += item.acceleration.y * dT / 1000;

			});

			return self;
		},

		checkCollisions: function(){

			var self = this;
			self.gameItems.forEach(function(item, i){
// ball - walls
			var changeV = function(item, comp) {
				switch (item.type) {
					case 'ball' : {

							item.velocity[comp] *= -1;
							if (comp == 'x') {
								Model.changeTime(5 * (item.position.x < 0 ? 1 : -1));
							};
						break;
					};

					case 'platform': {

							item.velocity[comp] = 0;

						break;
					};
				};
			};

			if ((item.position.x + item.size.x/2 > self.fieldWidth/2)) {

				item.position.x = self.fieldWidth / 2 - item.size.x/2;
				changeV(item, 'x');

			} else if (item.position.x - item.size.x/2 < -self.fieldWidth/2){

				item.position.x = -self.fieldWidth/2 + item.size.x/2;
				changeV(item, 'x');

			} else if (item.position.y + item.size.y/2 > self.fieldHeight/2) {

				item.position.y = self.fieldHeight/2 - item.size.y/2;
				changeV(item, 'y');

			} else if (item.position.y - item.size.y/2 < -self.fieldHeight/2) {

				item.position.y = -self.fieldHeight/2 + item.size.y/2;
				changeV(item, 'y');

			};


			for (var j = i + 1; j < self.gameItems.length; j++) {

				var item1 = self.gameItems[i];
				var item2 = self.gameItems[j];
				var ballItem = null, platformItem = null, bonusItem = null;
				if (item1 && item2){


					if (item1.type === 'ball') {
						ballItem = self.gameItems[i];
					};

					if (item2.type === 'platform') {
						platformItem = self.gameItems[j]
					};

					if (item2.type === 'bonus') {
						bonusItem = self.gameItems[j]
					};

					var distance = {
						x: Math.abs(item1.position.x - item2.position.x) - item1.size.x/2 - item2.size.x/2,
						y: Math.abs(item1.position.y - item2.position.y) - item1.size.y/2 - item2.size.y/2,
					};

					if (distance.x < 0 && distance.y < 0) {

						if (ballItem && platformItem) {

							if (distance.y >= distance.x) {
								if (ballItem.position.y < platformItem.position.y) {
									ballItem.position.y = platformItem.position.y - ballItem.size.y/2 - platformItem.size.y/2;
								} else {
									ballItem.position.y = platformItem.position.y + ballItem.size.y/2 + platformItem.size.y/2;
								};

								ballItem.velocity.y *= -1;
								ballItem.velocity.y += platformItem.velocity.y;

							} else if (distance.x > distance.y) {

								if (ballItem.position.x < platformItem.position.x) {
									ballItem.position.x = platformItem.position.x - ballItem.size.x/2 - platformItem.size.x/2;
								} else {
									ballItem.position.x = platformItem.position.x + ballItem.size.x/2 + platformItem.size.x/2;
								};

								var keff = (ballItem.position.y - platformItem.position.y)/(platformItem.size.y)

		// 						if (Math.abs(keff) > .3) {
									ballItem.velocity.y = keff * Math.abs(ballItem.velocity.x);
		// 						};
								ballItem.velocity.x *= -1;
								ballItem.velocity.x += platformItem.velocity.x;

							};

						};
						if (ballItem && bonusItem) {
							delete self.gameItems[j];
							self.checkBonus(bonusItem);
						};
					};
				};
			};

			});
			return self;
		},

		mayBeBonus: function() {
			var self = this;
			if (probably(.007) && !self.bonusFlag) {
				self.createBonus();
				self.bonusFlag = true;
				setTimeout(function(){
					self.bonusFlag = false;
				}, 2000)
			};
			return self;
		},

		checkBonus: function(bonusItem){
			var value = bonusItem.value;
			this.changeTime(value);
		},

		createBonus: function(){
			var value = getRandom(1, 5);
			var bonusItem;
			bonusItem = {
				type: 'bonus',
				position: {
					x: getRandom(-200,200),
					y: getRandom(-200,200)
				},
				velocity: {
					x: 0,
					y: 0
				},
				acceleration: {
					x: 0,
					y: 0
				},
				size: {x: 75, y: 75},
				value: value,
			};
			this.gameItems.push(bonusItem);
		},

		bonusFlag: null,



		platformUp : function(name){
			var self = this;
			self[name].velocity.y = -self.const.platformVelocity;
		},

		platformDown : function(name){
			var self = this;
			self[name].velocity.y = self.const.platformVelocity;
		},

		stopPlatform : function(name) {
			var self = this;
			self[name].velocity.y = 0;
		},

		inPlay: false,
		gameStarted: false,

		startGame: function(){
			this.gameStarted = true;
			this.currentTime = this.startTime;
			this.startRound();
		},

		startRound: function(){
			this.inPlay = true;
			this.gameStep();
		},

		pauseGame: function(){
			this.inPlay = false;
		},

		restoreGame: function() {
			this.inPlay = true;
			Model.gameStep();
		},

		// endRound: function(evt) {
		// 	this.inPlay = false;
		// },

		gameOver: function(){
			this.inPlay = false;
			this.gameStarted = false;
			View.drawCounter(this.currentTime);
			View.drawScore(Math.round(this.score));

		},

		gameRestart: function() {
			this.inPlay = true;
			this.resetGame();
			View.drawAllItems(this.gameItems)
				.unDrawScore()
				.drawCounter(this.currentTime);
		},

		changeTime: function(value){
				console.log(value)
				this.currentTime += value;
				View.showChangedTime(value);
				if (this.currentTime < 0) {
					this.currentTime = 0;
					$(document).trigger('gameover');
				};
		},

		restartGame : function() {
			this.resetGame();
			View.drawAllItems(this.gameItems);
		},

		gameStep : function(){
			if (Model.inPlay && Model.currentTime > 0){
				Model.tick();
				requestAnimationFrame(Model.gameStep);
			};
			return this;
		},

		init: function(){
			this.resetGame();
			this.gameItems = [this.ball, this.leftPlatform, this.rightPlatform];
			View.init(this.gameItems);
			// this.gameStep();
			// View.saveItems(this.gameItems);
		},

	};

/*  =========== end MODEL ===========*/



/*  ============= VIEW =============*/
//  DOM view
	var View = {

		message: {
			text: '',
			sense: null, //true or false  -  good or bad
		},

		gameField : '',

		gameCanvas : '',
		drawField : '',

		scoreWindowElement: $('.game-over'),
		countdownElement: $('.countdown'),

		canvasWidth : 2000,
		canvasHeight : 1000,

		drawItem: function(item){

			var self = this;
			var type = item.type;
			var position = item.position;
			var size = item.size;
			self.drawField.beginPath();

			switch (type) {
				case 'ball' : {
					var cords = {
						x: position.x + self.canvasWidth/2,
						y:  position.y + self.canvasHeight/2,
					};
					self.drawField.arc(cords.x, cords.y, size.x/2 , 0, 2*Math.PI, false);
					var grd = self.drawField.createRadialGradient(cords.x, cords.y, 0, cords.x, cords.y, size.x/2);
					grd.addColorStop(0,"white");
					grd.addColorStop(.8,"white");
					grd.addColorStop(1,"rgba(255,255,255,.1)");
					self.drawField.fillStyle = grd;
					break;
				};
				case 'platform': {
					self.drawField.rect(position.x + self.canvasWidth/2 - size.x/2, position.y + self.canvasHeight/2 - size.y/2, size.x, size.y);
					self.drawField.fillStyle = '#fff';
					break;
				};

				case 'bonus': {
					var cords = {
						x: position.x + self.canvasWidth/2,
						y:  position.y + self.canvasHeight/2,
					};
					self.drawField.arc(cords.x, cords.y, size.x/2 , 0, 2*Math.PI, false);
					var grd = self.drawField.createRadialGradient(cords.x, cords.y, 0, cords.x, cords.y, size.x/2);
					grd.addColorStop(0,"rgba(55,255,55,.2)");
					grd.addColorStop(.8,"rgba(55,255,55,.2)");
					grd.addColorStop(1,"rgba(55,255,55,.9)");

					self.drawField.font="50px Raleway";
					self.drawField.fillStyle = 'white';
					self.drawField.fillText(item.value,cords.x-13,cords.y+12);

					self.drawField.fillStyle = grd;
					break;
				}
			};

			self.drawField.fill();

			return this;
		},

		drawScore: function(score){

			this.scoreWindowElement.find('.score').text(score);
			this.scoreWindowElement.addClass('show');

			return this;
		},

		unDrawScore: function(){
			this.scoreWindowElement.removeClass('show');
			return this;
		},

		drawCounter: function(time){
			time = Math.round(time * 100) / 100 + '';
			var splited = time.split('.');
			if (splited.length > 1) {
				if (splited[1].length === 1) {
					time += 0;
				}
			} else {
				time += '.00';
			};

			this.countdownElement.text(time);
			return this;
		},

		drawAllItems: function(array, score) {

			var self = this;
			self.drawField.clearRect(0,0,self.canvasWidth, self.canvasHeight);
			array.forEach(function(item){
				self.drawItem(item);
			});

			return self;
		},

		showChangedTime: function(value){
			if (value > 0) { value = '+' + value;}
			var message = $('<span>' + value +'</span>');
			var addedClass = value < 0 ? 'bad-message' : 'good-message';

			message.addClass('info-msg ' + addedClass);

			this.gameField.append(message);
			setTimeout(function(){message.addClass('run');}, 0);
			setTimeout(function(){
				message.remove();
			}, 1500);
		},

		init: function(array) {
			var self = this;
			self.gameField = $('#pong-game-field');
			self.gameCanvas = $('<canvas width="'+ self.canvasWidth +'" height="'+ self.canvasHeight +'"></canvas>');
			self.gameField.append(self.gameCanvas);
			self.drawField = self.gameCanvas.get(0).getContext('2d');

			// array.forEach(function(item, i){
			// 	// self.viewItems[i] = item;
			// });

			self.drawAllItems(array);
		},

	};

/*  =========== end VIEW ===========*/



/*  ============= CONTROLLER =============*/

	var Controller = {
// up - 38; down - 40
		keysInPlay: {},
		startButton: function() {

			if (!Model.gameStarted){
				Model.startGame();
			} else {
				if (Model.inPlay) {
					Model.pauseGame();
				} else {
					Model.restoreGame();
				}
			}
		},
		keyDownAction: function(keyCode) {
			switch (keyCode) {
				case 38: {
					Model.platformUp('rightPlatform');
					break;
				};
				case 40 : {
					Model.platformDown('rightPlatform');
					break;
				};
				case 87 : {
					Model.platformUp('leftPlatform');
					break;
				};
				case 83 : {
					Model.platformDown('leftPlatform');
				};
			}
		},

		keyUpAction: function(keyCode) {
			switch (keyCode) {
				case 38:
				case 40: {
					Model.stopPlatform('rightPlatform');
					break;
				};
				case 87:
				case 83: {
					Model.stopPlatform('leftPlatform');
				}
			};
		},

		touchPlay: function(touchY) {
			if (touchY > Model.rightPlatform.position.y) {
				this.keysInPlay.touch = 40;
				this.keyDownAction(40);
			} else {
				this.keysInPlay.touch = 38;
				this.keyDownAction(38);
			};
		},

		touchEndPlay: function() {
			if (this.keysInPlay.touch){
				this.keyUpAction(this.keysInPlay.touch);
			}
		},

		gameOver: function(){
			Model.gameOver();
		},

		gameRestart: function() {
			Model.gameRestart();
		},

		bonusAdd: function(){
			console.log('bonusadded');
		},
	};

/*  =========== end CONTROLLER ===========*/

var AI = {

	watch: true,
	watchTimer: false,
	key: null,
	predictBallPosition: null,
	timeout: 200,
	ball: Model.ball,
	position: Model.leftPlatform.position,

	calculateBallPosition: function(){
		var self = this;
		var ballAbsY = Model.ball.position.y + Model.fieldHeight / 2;
		var deltaX = Math.abs(Model.ball.position.x - Model.leftPlatform.position.x) - (Model.leftPlatform.size.x / 2 + Model.ball.size.x / 2);
		// console.log( )
		var deltaY = Math.abs(deltaX/Model.ball.velocity.x)*Model.ball.velocity.y;

		var predictY = Model.ball.position.y + deltaY;

		return {x: Model.leftPlatform.position.x, y: predictY};
	},

	slide: function(flag){
		var self = this;
		var eventUp;
		var eventDown;
		var flagKey;

		if (flag == 'up') {
			flagKey = 87;
		} else if (flag == 'down') {
			flagKey = 83;
		};

		if (self.key != flagKey) {

			if (self.key) {
				var eventUp = new Event('keyup');
				eventUp.keyCode = self.key;
				document.dispatchEvent(eventUp);
				self.key = null;
			}
			var eventDown = new Event('keydown');
			eventDown.keyCode = flagKey;
			self.key = flagKey;
			document.dispatchEvent(eventDown);
		};

	},

	stop: function(){
		var self = this;
		if (self.key) {
			var event = new Event('keyup');
			event.keyCode = self.key;
			self.key = null;
			self.predictBallPosition = null;
			document.dispatchEvent(event);
		};
	},

	play : function(){
		var self = this;
		if (self.watch) {
			if (Model.ball.velocity.x < 0) {
				// if (!self.predictBallPosition) {
					self.predictBallPosition = self.calculateBallPosition();
					 // console.log(self.predictBallPosition)
				// }
				if (Model.leftPlatform.position.y - self.predictBallPosition.y > 50 ) {
					setTimeout(function(){
						self.slide('up')
						self.timeout = 1;
					}, self.timeout);
					// console.log ('up')
				} else if (Model.leftPlatform.position.y - self.predictBallPosition.y < -50){
					setTimeout(function(){
						self.slide('down');
						self.timeout = 1;
					}, self.timeout);
				};
			} else {
				self.stop();
				self.timeout = 200;
			};
		} else {
			return false;
		};
	},

	setTimer: function(){
		// var self.watchTimer = setTimeout( );
	}

};

//  app
	(function(){

		var app = {

			init: function(){

				this.main();
				this.events();

			},

			main: function(){
				Model.init();

			},

			events: function() {
				keysDown = {};

				var onKeyDown = function(evt){
// 32 - space	
// console.log(evt.keyCode)
					if (evt.keyCode == 32) {
						evt.preventDefault();
						Controller.startButton();
					};
					if (evt.keyCode == 38 || evt.keyCode == 40 || evt.keyCode == 87 || evt.keyCode == 83) {
						evt.preventDefault();
						if (!keysDown[evt.keyCode]) {
							keysDown[evt.keyCode] = true;
							Controller.keyDownAction(evt.keyCode);
						};

					};
				};

				var onKeyUp = function(evt) {
					if (evt.keyCode == 38 || evt.keyCode == 40 || evt.keyCode == 87 || evt.keyCode == 83) {
						evt.preventDefault();
						if (keysDown[evt.keyCode]) {
							keysDown[evt.keyCode] = false;
							Controller.keyUpAction(evt.keyCode);
						};
					};
				};

				var onKeyPress = function(evt) {
					if (evt.keyCode == 32) {

						evt.preventDefault();
						Controller.startButton();
					};
				};

// touch events 
				var onTouchStart = function(evt) {
					if (Model.inPlay) {
						evt.preventDefault();

						var touch = evt.originalEvent.touches[0] || evt.originalEvent.changedTouches[0];
				
						var relY = (touch.pageY - $('canvas').offset().top)/($('canvas').outerHeight()) * $('canvas').attr('height') - $('canvas').attr('height') / 2 ;

						Controller.touchPlay(relY);
					};
				};

				var onTouchEnd = function(evt) {
					if (Model.inPlay) {
						Controller.touchEndPlay();
					};
				};

				$(document).on('keydown', onKeyDown);
				$(document).on('keyup', onKeyUp);
				$(document).on('keypress', onKeyPress);

				$(document).on('click', '.closeButton', Controller.gameRestart);


				$(document).on('touchstart', 'canvas', onTouchStart);
				$(document).on('touchend', onTouchEnd);

				$(document).on('bonusadded', Controller.bonusAdd);
				$(document).on('gameover', Controller.gameOver);
			},

		};

		app.init();

	}());

//  }(jQuery));