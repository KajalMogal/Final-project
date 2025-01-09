const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;  

// Login handler
exports.login = (req, res) => {
    const { email, password } = req.body;

    // Validate email and password
    if (email === 'abc@example.com' && password === 'password12') {
        // Generate the JWT token
        const token = generateAuthToken({ email });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'invalid credentials !!' });
    }
};

// generate JWT token
const generateAuthToken = (user) => {
    const payload = {
        email: user.email,  
    };

    // sign and generate the JWT token
    const token = jwt.sign(payload, JWT_SECRET_KEY, {
        expiresIn: '1h', //will expire in 1 hour
    });
    return token;
};
