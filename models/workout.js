const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
	day: {
		type: String,
		trim: true,
		required: "Workout type IS required."
	},
	exercises: [
		{
			type: Schema.Types.ObjectId,
			ref: "Exercise"
		}
	]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

WorkoutSchema.methods.totalDuration = function () {
	this.totalDuration = `${this.duration}`;
}

module.exports = Workout;