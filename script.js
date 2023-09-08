
// add workout button modal architecture:

let containerModal1 = document.getElementById("add-workout-modal-container"); // modal component container
let openModalBtn1 = document.getElementById("open-modal-add-workout-button") // button to open the modal component
let cancelButton1 = document.getElementById('cancel1')

openModalBtn1.addEventListener('click', function () { // if button clicked modal opens (display = block)
    containerModal1.style.display = "block";
})

containerModal1.addEventListener('click', function (event) { // 
    if (event.target == containerModal1) {
        containerModal1.style.display = "none"
    } 
    
})

cancelButton1.addEventListener('click', function () { // if X clicked modal removed (display = none)
    containerModal1.style.display = "none";
})



// add exercise button modal architecture

let containerModal2 = document.getElementById("add-exercise-modal-container"); // modal component container
let openModalBtn2 = document.getElementById("open-modal-add-exercise-button") // button to open the modal component
let cancelButton2 = document.getElementById('cancel2')

openModalBtn2.addEventListener('click', function () { // if button clicked modal opens (display = block)
    containerModal2.style.display = "block";
})

containerModal2.addEventListener('click', function (event) { // 
    if (event.target == containerModal2) {
        containerModal2.style.display = "none"
    } 
    
})

cancelButton2.addEventListener('click', function () { // if X clicked modal removed (display = none)
    containerModal2.style.display = "none";
})


















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


// function to take user input, make a new obj by using 'new' syntax on constructor then push to array:

function exerciseObjMakerAndArrayStorer(){
    
    let something = new Exercise(userInput, ui, ui, ui, ui)
    myExerciseList.push(something)

}

function workoutObjMakerAndArrayStorer(){
    
    let somethingTwo = new Workout(userInput, ui)
    myWorkoutList.push(somethingTwo)

}

// how do i build functionality to add repeated sets of data?


//---------------------------------------------------------------------------------------------------------------







// inputting of data and retrieving the data:
// form validation (data type, required fields, data range, prevent submission):


document.getElementById("submit-workout").addEventListener('click', function (event) { // ADD WORKOUT MODAL

    event.preventDefault()
    
    const addWorkoutForm = document.getElementById('add-workout-form') // retrieving the data
    const addWorkoutFormData = new FormData(addWorkoutForm)

    let date = addWorkoutFormData.get('date-picker')
    let time = addWorkoutFormData.get('time-picker')
    let workoutType = addWorkoutFormData.get('workout-selector')

    let dateError = document.getElementById('date-error')// select error message elements
    let timeError = document.getElementById('time-error')
    let workoutTypeError = document.getElementById('workout-type-error')

    resetErrorMessagesWorkoutBtn(dateError, timeError, workoutTypeError)

    requiredFieldsWorkout(date, time, workoutType, dateError, timeError, workoutTypeError) // pass args to requiredFields func    
    
    console.log("date", date, "time", time, "workout type", workoutType)

    

})

let fullFieldsWorkout = true



function resetErrorMessagesWorkoutBtn(dateError, timeError, workoutTypeError) {

    dateError.textContent = "" 
    timeError.textContent = ""
    workoutTypeError.textContent = ""

}

function requiredFieldsWorkout(date, time, workoutType, dateError, timeError, workoutTypeError) { // pass args to requiredFields func

    fullFieldsWorkout = true


    if (!date) {
        dateError.textContent = "Date is required"
        fullFieldsWorkout = false
    }

    if (!time) {
        timeError.textContent = "Time is required"
        fullFieldsWorkout = false
    }

    if (!workoutType) {
        workoutTypeError.textContent = "Time is required"
        fullFieldsWorkout = false
    }

    if (!fullFieldsWorkout) { // if notFullFields not false e.g. true > do not finish &
        return;
    } 

    containerModal1.style.display = "none"
    

}












document.getElementById('submit-exercise').addEventListener('click', function (event) { // ADD EXERCISE BUTTON

    event.preventDefault()
        
    const addExerciseForm = document.getElementById('add-exercise-form') // retrieving the data
    const addExerciseFormData = new FormData(addExerciseForm)

    let exerciseName = addExerciseFormData.get('textbox-for-exercise') // selecting and assigning properties to variables
    let setsNumber = addExerciseFormData.get('textbox-for-sets')
    let repsNumber =addExerciseFormData.get('textbox-for-reps')
    let restTime = addExerciseFormData.get('textbox-for-rest')
    let rir = addExerciseFormData.get('textbox-for-rir')

    let exerciseNameError = document.getElementById('exercise-name-error') // selecting & assigning error divs to variables
    let setsNumberError = document.getElementById('number-of-set-error')
    let repsNumberError = document.getElementById('number-of-reps-error')
    let restTimeError = document.getElementById('rest-time-error')
    let rirError = document.getElementById('reps-in-reserve-error')

    validation(exerciseName, setsNumber, repsNumber, restTime, rir, exerciseNameError, setsNumberError, repsNumberError, restTimeError, rirError)
    // calling validation & passing validation all arguments needed

    console.log(
        "exercise name", exerciseName,
        "sets number", setsNumber,
        "reps number", repsNumber,
        "rest time", restTime,
        "rir", rir
        )
    })



function resetErrorMessagesExerciseBtn(exerciseNameError, setsNumberError, repsNumberError, restTimeError, rirError) {

    exerciseNameError.textContent = ""
    setsNumberError.textContent = ""
    repsNumberError.textContent = ""
    restTimeError.textContent = ""
    rirError.textContent = ""

}

function requiredFieldsExercise(exerciseName, setsNumber, repsNumber, restTime, rir, exerciseNameError, setsNumberError, repsNumberError, restTimeError, rirError ) {
    console.log("requiredFieldsExercise is called here")

    let fullFieldsExercise = true

    if (!exerciseName) {
        exerciseNameError.textContent = "Exercise required"
        fullFieldsExercise = false
    }

    if (!setsNumber) {
        setsNumberError.textContent = "Sets number required"
        fullFieldsExercise = false
    }

    if (!repsNumber) {
        repsNumberError.textContent = "Reps number required"
        fullFieldsExercise = false
    }

    if (!restTime) {
        restTimeError.textContent = "Rest time required"
        fullFieldsExercise = false
    }

    if (!rir) {
        rirError.textContent = "Reps in reserve required"
        fullFieldsExercise = false
    }

    if (!fullFieldsExercise) { // if fullFieldsExercise not true > do not finish & exit
        return;
    } 

    console.log("reached end of requiredFieldsExercise", fullFieldsExercise)
    return fullFieldsExercise;
    
    

}

function requiredRanges(exerciseName, setsNumber, repsNumber, restTime, rir, exerciseNameError, setsNumberError, repsNumberError, restTimeError, rirError) {

    let rangesValid = true


    if (!/^[a-zA-Z]+$/.test(exerciseName)) {
        exerciseNameError.textContent = "Must be a word"
        rangesValid = false
    }

    if (isNaN(setsNumber)) {
        setsNumberError.textContent = "Must be a number"
        rangesValid = false
    }

    if (isNaN(repsNumber)) {
        repsNumberError.textContent = "Must be a number"
        rangesValid = false
    }

    if (isNaN(restTime)) {
        restTimeError.textContent = "Must be a number"
        rangesValid = false
    }

    if (isNaN(rir)) {
        rirError.textContent = "Must be a number"
        rangesValid = false
    }

    if (!rangesValid) { // if fullFieldsExercise not true > do not finish & exit
        return;
    } 

    return rangesValid;

    // exercise name > text not numbers
    // sets number > number range 1-10
    // reps number > 1-50
    // rest time > 30s-5min
    // rir > 1-10

} 



function validation(exerciseName, setsNumber, repsNumber, restTime, rir,exerciseNameError, setsNumberError, repsNumberError, restTimeError, rirError) {
    resetErrorMessagesExerciseBtn(exerciseNameError, setsNumberError, repsNumberError, restTimeError, rirError)

    let fullFieldsExercise = requiredFieldsExercise(exerciseName, setsNumber, repsNumber, restTime, rir,exerciseNameError, setsNumberError, repsNumberError, restTimeError, rirError)
    console.log("full fields exercise:", fullFieldsExercise)

    let rangesValid = requiredRanges(exerciseName, setsNumber, repsNumber, restTime, rir,exerciseNameError, setsNumberError, repsNumberError, restTimeError, rirError)
    console.log("ranges valid:", rangesValid)

    // turn into its own function call of passedValidation() so can do more complex outcomes
    if (fullFieldsExercise && rangesValid) { // input data range flag here too
        console.log("validation passed")
        containerModal2.style.display = "none"
    }

    
}



 























// give our arrayMaker functions access to the data to then store in arrays:










