const users = require('./users.json');

// CREATING USER
function CreateUser(req, res) {
    const user = req.body;

    // CHECKING FOR AN EXISTING USER
    const existingUser = users.find(existingUser => existingUser.username === user.username);
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    user.api_key = `${user.username}_${user.password}`;
    if (user.username === 'nsraymond') {
        user.user_type = 'admin'
    } else {
        user.user_type = 'user'
    }
    users.push(user)
    return res.status(201).json({
        message: 'User created successfully',
        users: users
    })

}

module.exports = {
    CreateUser
}