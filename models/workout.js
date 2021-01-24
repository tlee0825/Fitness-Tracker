const mongoose = require("mongoose");
const { Schema } = mongoose;

const workoutSchema = new Schema({
  
  date: { type: Date, default: Date.now },
  exercises: Array,

},{
    toObject:{
        virtuals: true
    },
    toJSON:{
        virtuals: true
    }
});

workoutSchema.virtual('totalDuration').get(function(){
    let total=0
    for (let i=0; i <  this.exercises.length; i++) {
        console.log(this.exercises[i])
        total=this.exercises[i].duration+total
    }
    return total
})

const Workout=mongoose.model("Workout", workoutSchema)
module.exports=Workout