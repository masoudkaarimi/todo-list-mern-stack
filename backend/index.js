const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = 3030;
const app = express();
const todoRoutes = require('./routes/todoRoutes');

// Database Connection
const connectionOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect('mongodb://localhost/todolist', connectionOptions)
	.then(() => console.log('Database Connected Successfully'))
	.catch((err) => console.error(err));

// Middleware
app.use(express.json());
app.use(cors());
app.use('/todo', todoRoutes);

app.listen(PORT, () => {
	console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
