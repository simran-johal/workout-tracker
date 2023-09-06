




// constructor functions for workout and exercise objs
// functions to take user input and store new exercise or workout in own array

const myExerciseList = []
const myWorkoutList = []


function Exercise(name, sets, reps, rir, rest, completed) {
    Object.assign(this, {name, sets, reps, rir, rest, completed })
    this.reportWorkout = function () {
        console.log(
            "name", name, 
            "sets", sets,
            "reps", reps,
            "RIR", rir,
            "rest", rest,
            "completed?", completed,
        )
    }
}

let exerciseOne = new Exercise("Bench", 5, 5, 3, "3 min", Boolean)


function Workout(dateAndTime, workoutType) {
    Object.assign(this, {dateAndTime, workoutType})
    this.reportExercise = function () {
        console.log(
            "date and time", dateAndTime,
            "workout type", workoutType
        )
                
    }
}

let workoutOne = new Workout("", "Weights")


// function to take user input, make a new obj by using 'new' syntax on constructor then push to array

function userExercisesArrayMaker(){
    
    let something = new Exercise(userInput, ui, ui, ui, ui)
    myExerciseList.push(something)

}

function userWorkoutsArrayMaker(){
    
    let somethingTwo = new Workout(userInput, ui)
    myWorkoutList.push(somethingTwo)

}

// how do i build functionality to add repeated









// getting the user inputs to use in ArrayMakers using modals


// modal architecture


let containerModal = document.getElementById("my-add-workout-modal-container"); // modal component container
let btn = document.getElementById("open-modal-add-workout-button") // button to open the modal component
let cancelButton = document.getElementsByClassName("cancel")[0];

btn.addEventListener('click', function () { // if button clicked modal opens (display = block)
    containerModal.style.display = "block";
})

containerModal.addEventListener('click', function (event) { // 
    if (event.target == containerModal) {
        containerModal.style.display = "none"
    } 
        
    
})

cancelButton.addEventListener('click', function () { // if X clicked modal removed (display = none)
    containerModal.style.display = "none";
})







