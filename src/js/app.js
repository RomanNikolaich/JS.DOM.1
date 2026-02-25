
class GoblinCame {
  constructor(element, number) {
    this.number = number;
    this.element = element;
  };

  render() {
    const container = this.element;
    for (let i = 1; i <= this.number; i++) {
      let box = document.createElement('div');
      box.id = `box${i}`;
      box.classList.add('box');
      if (i === 1) {
        box.classList.add('character');
      }
      container.appendChild(box);
    };
  };

  game(boolean) {
    this.playing = boolean;
    let activeBox = 1;
    
    const stop = () => playing = true,
    getBox = index => document.getElementById(`box${index}`),
    deactivateBox = index =>
      getBox( index ).className = 'box',
    activateBox = index =>
      getBox( index ).className = 'box character',
    next = () => setTimeout(() => {
      if ( !this.playing ) {
        return;
      }
      deactivateBox( activeBox );
      activeBox = Math.floor( 1 + Math.random() * this.number );
      activateBox( activeBox );
      next();
    }, 1000 );

    next();
  };
};

const game = new GoblinCame(document.querySelector('.container'), 16);
game.render();
game.game(true);

