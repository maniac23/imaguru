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

		fieldWidth : 1000,
		fieldHeight : 500,

		ball : {
				name: 'ball',
				type: 'ball',
				size: {x: 30, y: 30},
				position: {x: 0, y: 0},
				velocity: {x: 500, y: 500},
				acceleration: {x: 0, y: 0},
			},

		leftPlatform : {
				name: 'leftPlatform',
				type: 'platform',
				size: {x: 5, y: 100},
				position: {x: -400, y: 0},
				velocity: {x: 0, y: 0},
				acceleration: {x: 0, y: 0}
			},

		rightPlatform: {
				name: 'rightPlatform',
				type: 'platform',
				size: {x: 5, y: 100},
				position: {x: 400, y: 0},
				velocity: {x: 0, y: 0},
				acceleration: {x: 0, y: 0}
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

			switch (item.type) {
				case 'ball' : {
					if ((item.position.x + item.size.x/2 > self.fieldWidth/2)) {

						item.position.x = self.fieldWidth / 2 - item.size.x/2;
						item.velocity.x *= -1;

					} else if (item.position.x - item.size.x/2 < -self.fieldWidth/2){

						item.position.x = -self.fieldWidth/2 + item.size.x/2;
						item.velocity.x *= -1;

					} else if (item.position.y + item.size.y/2 > self.fieldHeight/2) {

						item.position.y = self.fieldHeight/2 - item.size.y/2;
						item.velocity.y *= -1;

					} else if (item.position.y - item.size.y/2 < -self.fieldHeight/2) {

						item.position.y = -self.fieldHeight/2 + item.size.y/2;
						item.velocity.y *= -1;

					};
					break;
				};

				case 'platform': {
					break;
				};
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

					} else if (distance.x > distance.y) {

						if (ballItem.position.x < platformItem.position.x) {
							ballItem.position.x = platformItem.position.x - ballItem.size.x/2 - platformItem.size.x/2;
						} else {
							ballItem.position.x = platformItem.position.x + ballItem.size.x/2 + platformItem.size.x/2;
						};

						ballItem.velocity.x *= -1;

					};

				}

			};

			});

		},

		f: 0,

		init: function(){
			this.gameItems = [this.ball, this.leftPlatform, this.rightPlatform];
			View.init(this.gameItems);
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

		canvasWidth : 1000,
		canvasHeight : 500,

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
		keyDownAction: function(keyCode) {
			switch (keyCode) {
				case 38: {
					Model.rightPlatform.velocity.y = -200;
					break;
				};
				case 40 : {
					Model.rightPlatform.velocity.y = 200;
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
				var step = function(){
					Model.tick();
					requestAnimationFrame(step);
				};

				step();
			},

			events: function() {
				keysDown = {};

				var onKeyDown = function(evt){
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

				$(document).on('keydown', onKeyDown);
				$(document).on('keyup', onKeyUp);



			},

		};

		app.init();

	}());

//  }(jQuery));