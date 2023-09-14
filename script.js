
// MODALS FOR ADD A WORKOUT AND ADD AN EXERCISE FUNCTIONALITY

function manageWorkoutModal() { // ADD WORKOUT MODAL ARCHITECTURE

    // modal architecture
    let containerModal1 = document.getElementById("add-workout-modal-container"); // modal component container
    let openModalBtn1 = document.getElementById("open-modal-add-workout-button") // button to open the modal component
    let cancelButton1 = document.getElementById('cancel1')

    openModalBtn1.addEventListener('click', function () { // if button clicked modal opens (display = block)
        containerModal1.style.display = "block";
    })

    containerModal1.addEventListener('click', function (event) { // if outside input box clicked (display = none)
        if (event.target == containerModal1) {
            containerModal1.style.display = "none"
            
            console.log(resetErrorMessagesWorkoutBtn(dateError, timeError, workoutTypeError))
            
            
        } 
    
    })

    cancelButton1.addEventListener('click', function () { // if X clicked modal removed (display = none)
        containerModal1.style.display = "none";
    })

    
    // validation
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

        validationWorkout(date, time, workoutType, dateError, timeError, workoutTypeError)
    
        

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
            workoutTypeError.textContent = "Workout Type is required"
            fullFieldsWorkout = false
        }

        if (!fullFieldsWorkout) { // if notFullFields not false e.g. true > do not finish &
            return;
        } 
    
        return fullFieldsWorkout;

    }

    function validationWorkout(date, time, workoutType, dateError, timeError, workoutTypeError) {
        resetErrorMessagesWorkoutBtn(dateError, timeError, workoutTypeError)

        let fullFieldsExercise = requiredFieldsWorkout(date, time, workoutType, dateError, timeError, workoutTypeError)
        if (fullFieldsExercise) {

            containerModal1.style.display = "none"

            createWorkoutObj(date, time, workoutType) // on submit run func that creates it into an obj & stores it

            displayWorkouts(myWorkoutList) // on submit run func that displays it to dom
        }

    }

}
manageWorkoutModal();


function manageExerciseModal() { // ADD EXERCISE MODAL ARCHITECTURE


    // modal architecture
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


    // validation
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

    validationExercise(exerciseName, setsNumber, repsNumber, restTime, rir, exerciseNameError, setsNumberError, repsNumberError, restTimeError, rirError)
    // calling validation & passing validation all arguments needed

    /* console.log(
        "exercise name", exerciseName,
        "sets number", setsNumber,
        "reps number", repsNumber,
        "rest time", restTime,
        "rir", rir
        ) */
    }) 

    function resetErrorMessagesExerciseBtn(exerciseNameError, setsNumberError, repsNumberError, restTimeError, rirError) {

    exerciseNameError.textContent = ""
    setsNumberError.textContent = ""
    repsNumberError.textContent = ""
    restTimeError.textContent = ""
    rirError.textContent = ""

    }

    function requiredFieldsExercise(exerciseName, setsNumber, repsNumber, restTime, rir, exerciseNameError, setsNumberError, repsNumberError, restTimeError, rirError ) {
    

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

    return fullFieldsExercise;
    
    

    }

    function requiredRanges(exerciseName, setsNumber, repsNumber, restTime, rir, exerciseNameError, setsNumberError, repsNumberError, restTimeError, rirError) {

    let rangesValid = true


    if (!/^[a-zA-Z]+$/.test(exerciseName)) {
        exerciseNameError.textContent = "Must be a word"
        rangesValid = false
    }

    if (isNaN(setsNumber) || setsNumber < 1 || setsNumber > 11) {
        setsNumberError.textContent = "Must be a number between 1-10"
        rangesValid = false
    }

    if (isNaN(repsNumber) || repsNumber < 1 || repsNumber > 50) {
        repsNumberError.textContent = "Must be a number between 1-50"
        rangesValid = false
    }

    if (isNaN(restTime) || restTime < 0.5 || restTime > 5) {
        restTimeError.textContent = "Must be a number between 0.5-5"
        rangesValid = false
    }

    if (isNaN(rir) || rir < 1 || restTime > 10) {
        rirError.textContent = "Must be a number between 1-10"
        rangesValid = false
    }

    if (!rangesValid) { // if fullFieldsExercise not true > do not finish & exit
        return;
    } 

    return rangesValid;

    } 

    function validationExercise(exerciseName, setsNumber, repsNumber, restTime, rir,exerciseNameError, setsNumberError, repsNumberError, restTimeError, rirError) {
    resetErrorMessagesExerciseBtn(exerciseNameError, setsNumberError, repsNumberError, restTimeError, rirError)

    let fullFieldsExercise = requiredFieldsExercise(exerciseName, setsNumber, repsNumber, restTime, rir,exerciseNameError, setsNumberError, repsNumberError, restTimeError, rirError)
    
    if (fullFieldsExercise) {
        let rangesValid = requiredRanges(exerciseName, setsNumber, repsNumber, restTime, rir,exerciseNameError, setsNumberError, repsNumberError, restTimeError, rirError)

        if (rangesValid) {
            containerModal2.style.display = "none"

            createExerciseObj(exerciseName, setsNumber, repsNumber, restTime, rir)

            displayExercises(myExerciseList) // on submit run func that displays it to dom
        }
    }
    }

}
manageExerciseModal();














// CONSTRUCTOR FUNCS TO CREATE OBJS AND FUNCS TO STORE THEM INTO ARRAYS

const myWorkoutList = []
const myExerciseList = []


function Workout(date, time, workoutType) { // WORKOUT OBJECT BUILDER AND STORING IN ARRAY
    Object.assign(this, {date, time, workoutType})
    
}

function createWorkoutObj(date, time, workoutType) {
    
    let currentWorkoutStorer = new Workout(date, time, workoutType)
    myWorkoutList.push(currentWorkoutStorer)

    console.log(
        "new instance workout obj:", currentWorkoutStorer,
        myWorkoutList[0],
        myWorkoutList[1],
        myWorkoutList[2],
        myWorkoutList[3],
        myWorkoutList[4],
        myWorkoutList[5],
        "my full array", myWorkoutList) 

}



function Exercise(exerciseName, setsNumber, repsNumber, restTime, rir) { // EXERCISE OBJECT BUILDER AND STORING IN ARRAY
    Object.assign(this, {exerciseName, setsNumber, repsNumber, restTime, rir})
    
}


function createExerciseObj(exerciseName, setsNumber, repsNumber, restTime, rir) {
    
    let currentExerciseStorer = new Exercise(exerciseName, setsNumber, repsNumber, restTime, rir)
    myExerciseList.push(currentExerciseStorer)


    console.log(
        "new instance exercise obj:", currentExerciseStorer,
        myExerciseList[0],
        myExerciseList[1],
        myExerciseList[2],
        myExerciseList[3],
        myExerciseList[4],
        myExerciseList[5],
        "my full array", myExerciseList)
    
}




// FUNCS FOR DISPLAYING INPUT DATA STORED IN ARRAYS TO THE DOM FOR ADD WORKOUT MODAL


let divForExerciseDisplay = document.getElementById('your-exercise-display') // selecting the display div container


function displayExercises(myExerciseList) {// logic of displaying dynamic exercises elements to dom if objArray not empty

    divForExerciseDisplay.innerHTML = '' 

    myExerciseList.forEach((listItem) => {

        // dynamic created dom elements dynamic div container 
        let displayExerciseItems = document.createElement('div') // create the dynamic dom div
        displayExerciseItems.className = 'exercise-items' // giving it the class of exercise-items

        // dynamic created dom elements to go inside dynamic div container
        let exerciseNameElement = document.createElement('p')
        exerciseNameElement.className = 'add-exercise-list-item-name'
        exerciseNameElement.textContent = 'Exercise Name: ' + listItem.exerciseName

        let setsNumberElement = document.createElement('p')
        setsNumberElement.className = 'add-exercise-list-item-sets'
        setsNumberElement.textContent = 'Number of Sets:' + listItem.setsNumber

        let repsNumberElement = document.createElement('p')
        repsNumberElement.className = 'add-exercise-list-item-reps'
        repsNumberElement.textContent = 'Number of Reps:' + listItem.repsNumber

        let restTimeElement = document.createElement('p')
        restTimeElement.className = 'add-exercise-list-item-rest'
        restTimeElement.textContent = 'Rest Time:' + listItem.restTime

        let rirElement = document.createElement('p')
        rirElement.className = 'add-exercise-list-item-rir'
        rirElement.textContent = 'Reps in Reserve: ' + listItem.rir

        divForExerciseDisplay.appendChild(displayExerciseItems)

        displayExerciseItems.appendChild(exerciseNameElement)
        displayExerciseItems.appendChild(setsNumberElement)
        displayExerciseItems.appendChild(repsNumberElement)
        displayExerciseItems.appendChild(restTimeElement)
        displayExerciseItems.appendChild(rirElement)


    })

}


    












// FUNCS FOR DISPLAYING INPUT DATA STORED IN ARRAYS TO THE DOM FOR ADD WORKOUT MODAL


let divForWorkoutsDisplay = document.getElementById('your-workouts-display') // SELECT THE DISPLAY DIV CONTAINER
let exerciseSect = document.getElementById('add-exercise-section')



function displayDefaultBlankExerciseSect() { // dynamic DOM default logic (add)

    let defaultExerciseSectDiv = document.createElement('div')
    defaultExerciseSectDiv.className = 'default-exercise-sect-div'
    defaultExerciseSectDiv.innerHTML = '<p>No workouts added yet. Add a workout to start adding exercises.</p>'
    exerciseSect.appendChild(defaultExerciseSectDiv)

}

function removeDefaultBlankExerciseSect() { // dynamic DOM default logic (rm)

    let defaultExerciseSectDiv = exerciseSect.querySelector('.default-exercise-sect-div')
    if (defaultExerciseSectDiv) {
        exerciseSect.removeChild(defaultExerciseSectDiv)
    }

}

function isMyWorkoutArrayEmpty() { // check if workout obj array is empty or not and call relevent func

    if (myWorkoutList.length === 0) {

        let exerciseSectContent = document.getElementById('exercise-sect-content') // < input here the div that will be container for exercise section
        exerciseSectContent.style.display = "none" // no button or h2 shown
        displayDefaultBlankExerciseSect();

        return;

    } else {
    
        let exerciseSectContent = document.getElementById('exercise-sect-content') // < input here the div that will be container for exercise section
        exerciseSectContent.style.display = "block" 
        removeDefaultBlankExerciseSect()

    }
}

function displayWorkouts(myWorkoutList) { // logic of displaying dynamic workout elements to dom if objArray not empty
   
    divForWorkoutsDisplay.innerHTML = ''

    isMyWorkoutArrayEmpty()

    myWorkoutList.forEach((listItem) => {
        
        let displayWorkoutItems = document.createElement('div') // create the dynamic div
        displayWorkoutItems.className = 'workout-items' // give it the class workout-items

        let dateParaElement = document.createElement('p')
        dateParaElement.className = 'add-workout-list-item-date'
        dateParaElement.textContent = listItem.date

        let timeParaElement = document.createElement('p')
        timeParaElement.className = 'add-workout-list-item-time'
        timeParaElement.textContent = listItem.time

        let workoutTypeParaElement = document.createElement('p')
        workoutTypeParaElement.className = 'add-workout-list-item-workout-type'
        workoutTypeParaElement.textContent = listItem.workoutType

        displayWorkoutItems.appendChild(dateParaElement)
        displayWorkoutItems.appendChild(timeParaElement)
        displayWorkoutItems.appendChild(workoutTypeParaElement)

        divForWorkoutsDisplay.appendChild(displayWorkoutItems)


        
    }); 

} 

displayWorkouts(myWorkoutList) // on submit run func that displays it to dom



// CONNECTING EACH WORKOUT TO OWN EXERCISE SECTION

// Add an identifier to workout objs
    // inside Workout constructor function add an id: workoutID++ to act as a counter

// Modify the displayWorkouts() function 
    // when creating the dynamic div that displays as our added workout add an event listener
    // make event listener display corresponding 'Add Exercise' section 
    // assign a data attribute with the workout ID

// Create a func to display the Add Exercise Section
    // func takes workout ID as arg, displays corresponding Add exercise section
    // hide all 'Add Exercise sections & display only one that corresponds to clicked workout






































// PART 2 - CONNECT EACH ADD A WORKOUT TO INDIVIDUAL ADD EXERCISE PAGES
    // REF# THE OBJ VIA ARRAY[INDEX] AND ASSIGN THE CONTENTS TO A DIV USING .TEXTCONTENTS
    // ADD A DELETE BUTTON TO THAT DIV DYNAMICALLY USING CURRENTDIV.ADDELEM AND REF IT TO REMOVE ARR ELEM USING A METHOD


// PART 3 - DELETE BUTTON & COMPLETE BUTTON
    // 












    Workout.prototype.reportWorkout = function () {
        console.log(
            "date", this.date,
            "time", this.time,
            "workout type", this.workoutType
            )            
    }

    Exercise.prototype.reportExercise = function () {
        console.log(
            "name", this.exerciseName, 
            "sets", this.setsNumber,
            "reps", this.repsNumber,
            "RIR", this.rir,
            "rest", this.restTime,
        )
}