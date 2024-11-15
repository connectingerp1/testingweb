import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// Mongoose schema and model (reuse the schema)
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  coursename: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

// Function to handle the MongoDB connection
const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }
};

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Local development
  res.setHeader('Access-Control-Allow-Origin', 'https://qhvpqmhj-3000.inc1.devtunnels.ms'); // DevTunnels URL
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end(); // Respond to preflight requests
    return;
  }

  if (req.method === 'GET') {
    await connectDB();
    try {
      const users = await User.find(); // Fetch all users from the database
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching leads:', error);
      res.status(500).json({ message: 'Error fetching leads' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}