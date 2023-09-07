
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



















// correct inputting of data and retrieving the data:
// form validation (data type, required fields, data range, prevent submission):


let submitWorkoutBtn = document.getElementById("submit-workout") // submit workout data
    submitWorkoutBtn.addEventListener('click', function (event) {
        event.preventDefault()
    
        const addWorkoutForm = document.getElementById('add-workout-form') // retrieving the data
        const addWorkoutFormData = new FormData(addWorkoutForm)

        let date = addWorkoutFormData.get('date-picker')
        let time = addWorkoutFormData.get('time-picker')
        let workoutType = addWorkoutFormData.get('workout-selector')

        containerModal1.style.display = "none"

        if (!date || !time || !workoutType) {
            alert("all fields are required")
            return;
        }



        
        
        
        console.log("date", date, "time", time, "workout type", workoutType)

})






let submitExerciseBtn = document.getElementById('submit-exercise') // submit exercise data
    submitExerciseBtn.addEventListener('click', function (event) {
        event.preventDefault()
        
        const addExerciseForm = document.getElementById('add-exercise-form')

        const addExerciseFormData = new FormData(addExerciseForm)

        let exerciseName = addExerciseFormData.get('textbox-for-exercise')
        let setsNumber = addExerciseFormData.get('textbox-for-sets')
        let repsNumber =addExerciseFormData.get('textbox-for-reps')
        let restTime = addExerciseFormData.get('textbox-for-rest')
        let rir = addExerciseFormData.get('textbox-for-rir')

        containerModal2.style.display = "none"
        
        console.log(
            "exercise name", exerciseName,
            "sets number", setsNumber,
            "reps number", repsNumber,
            "rest time", restTime,
            "rir", rir
        )
    })






































// give our arrayMaker functions access to the data to then store in arrays:










