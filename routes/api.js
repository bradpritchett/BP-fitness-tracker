const router = require("express").Router();
const db = require("../models/");


db.Workout.create({ day: Date.now() })
	.then(dbWorkout => {
		console.log("created ", dbWorkout);
	})
	.catch(({ message }) => {
		console.log(message);
	});

router.get("/api/workouts", (req, res) => {
	console.log("db.workout", db.Workout)
	db.Workout.find({})
		.populate("exercises")
		.then(dbWorkout => {
			res.json(dbWorkout);
		})
		.catch(err => {
			res.json(err);
		});
});

router.get("/api/workouts/:id", (req, res) => {
	db.Workout.findOne({
		_id: mongojs.ObjectId(req.params.id)
	},
		(error, data) => {
			if (error) {
				res.send(error);
			} else {
				res.send(data);
			}
		}
	);
})

module.exports = router;
