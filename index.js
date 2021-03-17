function Monday() {
  exerciseRoutine(liftWeights)
}
  
function Tuesday() {
  exerciseRoutine()
}
  
function Wednesday() {
  exerciseRoutine(runFiveMiles)
}
  
function Thursday() {
  exerciseRoutine(liftWeights)
}
  
function Friday() {
  exerciseRoutine(swimFortyLaps)
}

function runFiveMiles() {
  console.log('Go for a five-mile run');
} 

function liftWeights() {
  console.log('Pump iron');
}
  
function swimFortyLaps() {
  console.log('Swim 40 laps');
} 

function exerciseRoutine(postRunActivity) {
  runFiveMiles()
  postRunActivity()
}

exerciseRoutine(() => console.log("Stretch! Work that core!"))

function morningRoutine(exercise) {
  let breakfast;

  if (exercise === liftWeights) {
    breakfast = 'protein bar';
  } else if (exercise === swimFortyLaps) {
    breakfast = 'kale smoothie';
  } else {
    breakfast = 'granola';
  }

  exerciseRoutine(exercise);

  // we could give this function a name if we wanted to, but since
  // it's only available _inside_ morningRoutine(), we don't need to
  return function() {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  }
} 

const afterExercise = morningRoutine(liftWeights)

console.log(afterExercise)
afterExercise()
