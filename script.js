




// constructor functions for workout and exercise objs

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



