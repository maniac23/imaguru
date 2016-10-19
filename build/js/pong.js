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

/*  ============= MODEL =============*/

	var Model = {

		fieldWidth : 2000,
		fieldHeight : 1000,

		scores: {
			left: 4,
			right: 4,
		},

		ball : {
				name: 'ball',
				type: 'ball',
				size: {x: 50, y: 50},
				position: {x: 0, y: 0},
				velocity: {x: 1600, y: 0},
				acceleration: {x: 0, y: 0},
			},

		leftPlatform : {
				name: 'leftPlatform',
				type: 'platform',
				size: {x: 20, y: 200},
				position: {x: -900, y: 0},
				velocity: {x: 0, y: 0},
				acceleration: {x: 0, y: 0}
			},

		rightPlatform: {
				name: 'rightPlatform',
				type: 'platform',
				size: {x: 17 , y: 200},
				position: {x: 900, y: 0},
				velocity: {x: 0, y: 0},
				acceleration: {x: 0, y: 0}
			},

		const: {
			platformVelocity: 500,
		},

		gameItems: [],

		getItem: function(name) {
			var self = this;
			var forReturn;
			self.gameItems.forEach(function(item){
				if (item.name == name) {
					forReturn = item;
				};
			});
			return forReturn;
		},

		tick: function(dT) {
			dT = dT || 1000/60;
			var self = this;

			self.playScene(dT);
			self.checkCollisions();
			View.drawAllItems(self.gameItems);
		},

		playScene: function(dT) {

			var self = this;
			self.gameItems.forEach(function(item){

				item.position.x += item.velocity.x * dT / 1000;
				item.position.y += item.velocity.y * dT / 1000;
				item.velocity.x += item.acceleration.x * dT / 1000;
				item.velocity.y += item.acceleration.y * dT / 1000;

			});

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
								Model.gameScore(item.position.x);
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
				var ballItem, platformItem;
				if (item1.type == 'ball' && item2.type == 'platform') {
					ballItem = item1;
					platformItem = item2;
				} else if (item1.type == 'platform' && item2.type == 'ball'){
					ballItem = item2;
					platformItem = item1;
				};
				var distance = {
					x: Math.abs(item1.position.x - item2.position.x) - item1.size.x/2 - item2.size.x/2,
					y: Math.abs(item1.position.y - item2.position.y) - item1.size.y/2 - item2.size.y/2,
				};


				if (distance.x < 0 && distance.y < 0) {

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

				}

			};

			});

		},

		score: {
			left: 4,
			right: 4,
		},

		inPlay: false,
		gameStarted: false,

		startGame: function(){
			this.gameStarted = true;
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



		endRound: function(evt) {
			this.inPlay = false;
		},

		endGame: function(){

		},

		gameScore : function(flag){
			if (flag < 0) {
				this.score.right += 1;
			} else {
				this.score.left += 1;
			};
			console.log(this.score);
		},

		gameStep : function(){
			if (!Model.inPlay) return;
			Model.tick();
			requestAnimationFrame(Model.gameStep);
		},

		init: function(){
			this.gameItems = [this.ball, this.leftPlatform, this.rightPlatform];
			View.init(this.gameItems);
			this.gameStep();
			// View.saveItems(this.gameItems);
		},

	};

/*  =========== end MODEL ===========*/



/*  ============= VIEW =============*/
//  DOM view
	var View = {

		gameField : '',

		gameCanvas : '',
		drawField : '',

		canvasWidth : 2000,
		canvasHeight : 1000,

		viewItems: [], //массив, DOM-элементтов например, объектов, с какими-то параметрами для канваса

		saveItems: function(array) {

			var self = this;

		},

		drawItem: function(item){

			var self = this;
			var type = item.type;
			var position = item.position;
			var size = item.size;
			self.drawField.beginPath();

			switch (type) {
				case 'ball' : {
					self.drawField.arc(position.x + self.canvasWidth/2, position.y + self.canvasHeight/2, size.x/2 , 0, 2*Math.PI, false);
					break;
				};
				case 'platform': {
					self.drawField.rect(position.x + self.canvasWidth/2 - size.x/2, position.y + self.canvasHeight/2 - size.y/2, size.x, size.y);
					break;
				};
			};

			self.drawField.fillStyle = '#fff';
			self.drawField.fill();

		},

		drawAllItems: function(array) {

			var self = this;
			self.drawField.clearRect(0,0,self.canvasWidth, self.canvasHeight);
			array.forEach(function(item){
				self.drawItem(item);
			});

		},

		showItems: function() {
			console.log(View.viewItems);
		},


		init: function(array) {
			var self = this;
			self.gameField = $('#pong-game-field');
			self.gameCanvas = $('<canvas width="'+ self.canvasWidth +'" height="'+ self.canvasHeight +'"></canvas>');
			self.gameField.append(self.gameCanvas);
			self.drawField = self.gameCanvas.get(0).getContext('2d');

			array.forEach(function(item, i){
				self.viewItems[i] = item;
			});

			self.drawAllItems(array);
		},

	};

/*  =========== end VIEW ===========*/



/*  ============= CONTROLLER =============*/

	var Controller = {
// up - 38; down - 40
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

					Model.rightPlatform.velocity.y = -Model.const.platformVelocity;
					break;
				};
				case 40 : {
					Model.rightPlatform.velocity.y = Model.const.platformVelocity;
					break;
				};
			}
		},
		keyUpAction: function(keyCode) {
			switch (keyCode) {
				case 38:
				case 40: {
					Model.rightPlatform.velocity.y = 0;
					break;
				};
			};
		},

	};

/*  =========== end CONTROLLER ===========*/



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
					if (evt.keyCode == 38 || evt.keyCode == 40) {
						evt.preventDefault();
						if (!keysDown[evt.keyCode]) {
							keysDown[evt.keyCode] = true;
							Controller.keyDownAction(evt.keyCode);
						};

					};
				};

				var onKeyUp = function(evt) {
					if (evt.keyCode == 38 || evt.keyCode == 40) {
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
						console.log(32)
						Controller.startButton();
					};
				};

				$(document).on('keydown', onKeyDown);
				$(document).on('keyup', onKeyUp);
				$(document).on('keypress', onKeyPress);




			},

		};

		app.init();

	}());

//  }(jQuery));