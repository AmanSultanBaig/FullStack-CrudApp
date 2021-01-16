module.exports = app => {
    const user = require("../controller/user");

    var router = require("express").Router();

    // Create a new user
    router.post("/", user.create);

    // Retrieve all user
    router.get("/", user.findAll);

    // Retrieve a single user with id
    router.get("/:id", user.findOne);

    // Update a user with id
    router.put("/:id", user.update);

    // Delete a user with id
    router.delete("/:id", user.delete);

    app.use('/api/user', router);
};