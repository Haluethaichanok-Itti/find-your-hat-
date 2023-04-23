const prompt = require('prompt-sync')({ sigint: true });
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let stillPlay = true;
class Field {
  constructor(fieldGame) {
    this._fieldGame = fieldGame;
  }
  print() {
    const newField = this._fieldGame.map((row) => {
      return row.join('');
    })
    return newField.join('\n');
  }

  /* loop and check */
  checkLoop() {
    let x = 0;
    let y = 0;
    let input;
    while (stillPlay) {
      this._input = prompt("Which way? ( U = Up, D = Down, L = Left, R = Right ) : ");

      if (this._input.toLocaleUpperCase() === 'U' && y !== 0) {
        y -= 1;
      }
        else if (this._input.toLocaleUpperCase() === 'U' && y ===0) {
         console.log('You Hit The Wall!!');
           break;
      }
        
      else if (this._input.toLocaleUpperCase() === 'D' && y < 9) {
        y += 1;
      }
        else if (this._input.toLocaleUpperCase() === 'D' && y >= 9) {
        console.log('You Hit The Wall!!');
           break;
      }
        
      else if (this._input.toLocaleUpperCase() === 'L' && x !== 0) {
        x -= 1;
      }
        else if (this._input.toLocaleUpperCase() === 'L' && x <= 0) {
        console.log('You Hit The Wall!!');
          break;
      }
      else if (this._input.toLocaleUpperCase() === 'R' && x < 9) {
        x += 1;
      }
         else if (this._input.toLocaleUpperCase() === 'R' && x >= 9) {
        console.log('You Hit The Wall!!');
          break;
      }
        else if(this._input === '' || this._input.toLocaleUpperCase() !== 'R' || this._input.toLocaleUpperCase() !== 'L' ||
               this._input.toLocaleUpperCase() !== 'D' ||
               this._input.toLocaleUpperCase() !== 'U'){
          console.log('Please Type U = Up, D = Down, L = Left, R = Right')
        }
      else {
        console.log('You Lose!!');
        break;
      }
      if (this._fieldGame[y][x] === hat) {
        console.log('You Win!!!');
    
        break;
      }
      else if (this._fieldGame[y][x] === hole) {
        console.log('You Lose!!!');
        break;
      }
      else {
        this._fieldGame[y][x] = pathCharacter;
        console.log(this.print());
      }

    }
  }
}

/* build level */
const easyField = [
  [pathCharacter, hole, hole, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole, fieldCharacter, hole],
  [fieldCharacter, hole, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, fieldCharacter, fieldCharacter, hat, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole, fieldCharacter],
  [fieldCharacter, hole, fieldCharacter, fieldCharacter, hole, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, hole, fieldCharacter, hole, fieldCharacter, hole, fieldCharacter, hole, fieldCharacter, fieldCharacter],
  [fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole, fieldCharacter, hole],
  [hole, fieldCharacter, hole, fieldCharacter, hole, fieldCharacter, fieldCharacter, hole, fieldCharacter, hole],
  [fieldCharacter, hole, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, hole, fieldCharacter, fieldCharacter]
];
//console.log(easyField);
const hardField = [
  ['*', 'O', 'O', '░', 'O', '░', '░', '░', '░', '░'],
  ['░', '░', '░', '░', 'O', '░', 'O', '░', '░', '░'],
  ['░', 'O', '░', '░', '░', '░', '░', 'O', '░', 'O'],
  ['░', 'O', '░', 'O', '░', '░', '░', '░', '^', '░'],
  ['░', '░', '░', '░', '░', '░', '░', '░', 'O', '░'],
  ['░', 'O', '░', '░', 'O', '░', 'O', '░', '░', '░'],
  ['░', 'O', '░', 'O', '░', 'O', '░', 'O', '░', '░'],
  ['░', 'O', '░', '░', '░', '░', '░', 'O', '░', 'O'],
  ['O', '░', 'O', '░', 'O', '░', '░', 'O', '░', 'O'],
  ['░', 'O', '░', 'O', '░', '░', '░', 'O', '░', '░']
]


/* random choose field */
let numRandom;
function randomlevel() {
  numRandom = Math.floor(Math.random() * 3)
  //console.log(numRandom);
  if (numRandom === 1) {
    return hardField;
  }
  else {
    return easyField;
  }
}
/* create variable fo get value from randomlevel()*/
let myField = randomlevel();
//console.log(myField);

/* to put myField to class Game */
const field = new Field(myField);
console.log(field.print());
field.checkLoop();

