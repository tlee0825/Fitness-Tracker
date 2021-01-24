const router = require("express").Router();
const db = require("../models");
let totalDur;
router.post("/api/workouts", ({ body }, res) => {
    totalDur = 0;
    db.Workout.create({ body })
        .then(dbFitness => {
    console.log(body);
            res.json(dbFitness)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
router.put("/api/workouts/:id", (req, res) => {
    let id = req.params.id;
    let data = req.body;
    totalDur+= data.duration
    db.Workout.update({_id: id}, {$push: {exercises: data}, totalDuration: totalDur}).then(dbUpdate => {
        res.send(dbUpdate);
    }).catch(err => {
        console.log(err.message)
    })
})
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err.message);
    })
});
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err.message);
    })
})
module.exports = router;








