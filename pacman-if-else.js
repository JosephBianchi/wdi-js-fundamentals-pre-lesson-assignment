var powerPelletEaten = false;
var ghosts = 4;

while (true) {
  console.log('ghosts remaining: ' + ghosts);

  if (powerPelletEaten == false) {
    console.log('pac-mean eats the power pellet');
    powerPelletEaten = true;
  } else if (ghosts > 0) {
    console.log('pac-man eats a ghost.');
    ghosts--;
  } else {
    break;
  }
}

console.log('pac-man returns home after a long day in the maze.');
