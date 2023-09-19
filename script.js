
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

            
            

        }
    }
    }

}
manageExerciseModal();














// CONSTRUCTOR FUNCS TO CREATE OBJS AND FUNCS TO STORE THEM INTO ARRAYS

let myWorkoutList = []
const myExerciseList = []
let workoutId = 0 // counter to associate exercise section to it
let exerciseId = 0


function Workout(date, time, workoutType) { // WORKOUT OBJECT BUILDER AND STORING IN ARRAY
    Object.assign(this, {date, time, workoutType, id: workoutId++, exercises: []})
    
}

function createWorkoutObj(date, time, workoutType, id, exercises) { // WORKOUT HAS NESTED EXERCISES ARRAY TO STORE EXERCISES IN
    
    let currentWorkoutStorer = new Workout(date, time, workoutType, id, exercises)
    myWorkoutList.push(currentWorkoutStorer)


}
function Exercise(exerciseName, setsNumber, repsNumber, restTime, rir) { // EXERCISE OBJECT BUILDER AND STORING IN ARRAY
    Object.assign(this, {exerciseName, setsNumber, repsNumber, restTime, rir, id: exerciseId++})
    
}
function createExerciseObj(exerciseName, setsNumber, repsNumber, restTime, rir, id) {
    
    let currentExerciseStorer = new Exercise(exerciseName, setsNumber, repsNumber, restTime, rir, id)
    myExerciseList.push(currentExerciseStorer) // pushing to global myExerciseArray
    addExercise(currentExerciseStorer) // passing to addExercise func (to add it to associated workout)



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











// FUNCS FOR DISPLAYING INPUT DATA STORED IN ARRAYS TO THE DOM FOR ADD EXERCISE MODAL - REDUNDANT

/*
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

}*/












































// FUNCS FOR DISPLAYING INPUT DATA STORED IN ARRAYS TO THE DOM FOR ADD WORKOUT MODAL

let divForWorkoutsDisplay = document.getElementById('your-workouts-display') // SELECT THE DISPLAY DIV CONTAINER
let exerciseSect = document.getElementById('your-exercise-display')
let exerciseSect2 = document.getElementById('add-exercise-section')
let selectedWorkout = false;
let currentWorkoutId = null;


function removeDefaultBlankExerciseSect() { // logic to remove default page

    let defaultExerciseSectDiv = exerciseSect2.querySelector('.default-exercise-sect-div')
    if (defaultExerciseSectDiv) {
        exerciseSect2.removeChild(defaultExerciseSectDiv)
    }

}



function isMyWorkoutArrayEmpty() { // check if workout obj array is empty if so create default page if not call removeDefault

    let exerciseSectContent = document.getElementsByName('exercise-sect-content')[0] 
    removeDefaultBlankExerciseSect(); 

    if (!selectedWorkout) { 

        exerciseSectContent.style.display = "none" // no button or h2 shown
        
        // code for default page e.g. function defaultPage()
        let defaultExerciseSectDiv = document.createElement('div')
        defaultExerciseSectDiv.className = 'default-exercise-sect-div'
        defaultExerciseSectDiv.innerHTML = '<p>Add your workout and select it to start adding exercises.</p>'
        exerciseSect2.appendChild(defaultExerciseSectDiv)

        return;

    } else { // when have workout objs in my array
    
        exerciseSectContent.style.display = "block" 
        removeDefaultBlankExerciseSect()

    }
}

function displayWorkouts(myWorkoutList) { // if objArray not empty display data as dom elements inside a div (all dynamic) & create a exercise section
   
    divForWorkoutsDisplay.innerHTML = ''
    isMyWorkoutArrayEmpty()


    myWorkoutList.forEach((listItem) => {
        

        let displayWorkoutItems = document.createElement('div') // create the dynamic div
        displayWorkoutItems.className = 'workout-items' // give it the class workout-items

        let dateTimeParaElement = document.createElement('p')
        dateTimeParaElement.className = 'add-workout-list-item-date-time'
        dateTimeParaElement.textContent = `${listItem.date} at ${listItem.time}`

        let workoutTypeParaElement = document.createElement('p')
        workoutTypeParaElement.className = 'add-workout-list-item-workout-type'
        workoutTypeParaElement.textContent = listItem.workoutType

        let listItemId = listItem.id
        displayWorkoutItems.setAttribute('workout-id', listItemId) // giving our workout items an attribute of the #id

        divForWorkoutsDisplay.appendChild(displayWorkoutItems)
        displayWorkoutItems.appendChild(dateTimeParaElement)
        displayWorkoutItems.appendChild(workoutTypeParaElement)



        // creating a dynamic exercise section forEach obj array item > TURN INTO ITS OWN FUNC
        let exerciseSectContent = document.createElement('div')
        exerciseSectContent.className = 'exercise-section'
        exerciseSectContent.id = `exercise-section-${listItemId}` // has id that uses workout id value to ref#
        exerciseSectContent.style.display = 'none'; // hidden by default

        exerciseSect.appendChild(exerciseSectContent)







        // creating the delete button for the workoutItems > TURN INTO ITS OWN FUNC
        let workoutDeletebutton = document.createElement('button')
        workoutDeletebutton.innerHTML = '&times;' 
        workoutDeletebutton.className = 'workout-delete-button'
        workoutDeletebutton.setAttribute('data-workout-id', listItemId)

        displayWorkoutItems.appendChild(workoutDeletebutton);

        selectedWorkoutItem(displayWorkoutItems, listItemId)

    }); 

} 
displayWorkouts(myWorkoutList) // on submit run func that displays it to dom



divForWorkoutsDisplay.addEventListener('click', function(event) {
    if (event.target.classList.contains('workout-delete-button')) {

        const workoutIdToDelete = event.target.getAttribute('data-workout-id'); 
        console.log("check list before", myWorkoutList)
        myWorkoutList = myWorkoutList.filter(workout => String(workout.id) !== workoutIdToDelete);
        console.log("check right id", workoutIdToDelete)
        console.log("check list after", myWorkoutList)
              
                
        displayWorkouts(myWorkoutList);
    }
})










function selectedWorkoutItem(displayWorkoutItems, listItemId) { // listens for selecting a workoutItem and displaying add exercise modal

    displayWorkoutItems.addEventListener('click', function() {
        displayAddExerciseSection(listItemId)
        selectedWorkout = true
        console.log("here",listItemId)
        isMyWorkoutArrayEmpty();
        currentWorkoutId = listItemId // storing the current workoutItem interacting with
    })


}


function displayAddExerciseSection(workoutId) { // pass the workoutId of the clicked workoutItem here to use 

    console.log("passed", workoutId)

    document.querySelectorAll('.exercise-section').forEach(eachExerciseSection => { // then hide all exercise sections
        eachExerciseSection.style.display = "none"
    })

    const exerciseSection = document.getElementById(`exercise-section-${workoutId}`) // show exercise section associated with workout item selected
    if (exerciseSection) {
        exerciseSection.style.display = "block";
    }

    console.log("displayaddexercise working")
    


}


function addExercise(myExerciseObj) { // recieving exercise obj created from submit & pushing the exercises added to the workoutArray adding it within (e.g. selected)

    const currentWorkout = myWorkoutList.find(workout => workout.id == currentWorkoutId) // if a workout in the workout array has an id that matches currentWorkoutId = true

    if (currentWorkout) {
        currentWorkout.exercises.push(myExerciseObj) // if do get a match then push & store it in it's nested exercise array property
    }

    displayExercisesForWorkout(currentWorkoutId) // updates the exercise display if all passes


}


function displayExercisesForWorkout(currentWorkoutId) { // recieves currentWorkoutId from addExercise() & displays the exercises being added within specific workoutItem

    const currentWorkout = myWorkoutList.find(workout => workout.id == currentWorkoutId) // finding workout with id we recieved from addExercise()
    if (!currentWorkout) return;

    let divForExerciseDisplay = document.getElementById(`exercise-section-${currentWorkoutId}`) // selecting the display div container
    divForExerciseDisplay.innerHTML = ""

    currentWorkout.exercises.forEach((listItem) => {

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

         let listItemId = listItem.id
         displayExerciseItems.setAttribute('exercise-id', listItemId) // giving our exercise items an attribute of the #id


         // creating the delete button for the exerciseItems > TURN INTO ITS OWN FUNC
        let exerciseDeletebutton = document.createElement('button')
        exerciseDeletebutton.innerHTML = '&times;' 
        exerciseDeletebutton.className = 'exercise-delete-button'
        exerciseDeletebutton.setAttribute('data-exercise-id', listItemId)

        displayExerciseItems.appendChild(exerciseDeletebutton);
        console.log("id check", exerciseDeletebutton.attributes)

    })

}













































/*
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
*/