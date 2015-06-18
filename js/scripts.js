(function() {
	var World = {};

	World.Character = function(DOMNode, playable) {
		this.playable = playable;
		this.direction = 'down';
		this.moving = false;
		this.element = DOMNode;

		if (this.playable) {
			B.addEvent(document, 'keyup', function (e) {
				if (this.moving) {
					this.moving = false;
					B.removeClass(this.element, 'moving');
				}
			}.bind(this));

			B.addEvent(document, 'keydown', function (e) {
				switch (e.which) {
					case 37: // left
						B.removeClass(this.element, this.direction);
						this.direction = 'left';
						this.moving = true;
						B.addClass(this.element, 'moving');
						B.addClass(this.element, this.direction);
						e.preventDefault();
						break;
					case 38: // up
						B.removeClass(this.element, this.direction);
						this.direction = 'up';
						this.moving = true;
						B.addClass(this.element, 'moving');
						B.addClass(this.element, this.direction);
						e.preventDefault();
						break;
					case 39: // right
						B.removeClass(this.element, this.direction);
						this.direction = 'right';
						this.moving = true;
						B.addClass(this.element, 'moving');
						B.addClass(this.element, this.direction);
						e.preventDefault();
						break;
					case 40: // down
						B.removeClass(this.element, this.direction);
						this.direction = 'down';
						this.moving = true;
						B.addClass(this.element, 'moving');
						B.addClass(this.element, this.direction);
						e.preventDefault();
						break;
				};
			}.bind(this));
		}
	};

	window.World = World;
})();
