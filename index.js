const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://madhu:madhui2025@cluster0.cprdpkq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function startServer() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    const db = client.db("ElectrozDB");
    const usersCollection = db.collection("users");

    // Optional: Ensure email is unique in collection
    await usersCollection.createIndex({ email: 1 }, { unique: true });

    // ==========================
    //         Routes
    // ==========================

    // Register
    app.post("/register", async (req, res) => {
      try {
        const { name, email, phone, password } = req.body;

        if (!name || !email || !phone || !password) {
          return res.status(400).json({ message: "All fields are required." });
        }

        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
          return res.status(409).json({ message: "User already exists with this email." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await usersCollection.insertOne({ name, email, phone, password: hashedPassword });

        res.status(201).json({ message: "User registered successfully." });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error during registration." });
      }
    });

    // Login
    app.post("/login", async (req, res) => {
      try {
        const { email, password } = req.body;

        if (!email || !password) {
          return res.status(400).json({ message: "Email and password are required." });
        }

        const user = await usersCollection.findOne({ email });
        if (!user) {
          return res.status(401).json({ message: "Invalid email or password." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).json({ message: "Invalid email or password." });
        }

        res.status(200).json({
          message: "Login successful!",
          user: { name: user.name, email: user.email, phone: user.phone, _id: user._id }
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error during login." });
      }
    });

    // Reset Password
    app.post("/reset-password", async (req, res) => {
      try {
        const { email, newPassword } = req.body;

        if (!email || !newPassword) {
          return res.status(400).json({ message: "Email and new password are required." });
        }

        const user = await usersCollection.findOne({ email });
        if (!user) {
          return res.status(404).json({ message: "User not found." });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await usersCollection.updateOne(
          { email },
          { $set: { password: hashedPassword } }
        );

        res.json({ message: "Password changed successfully!" });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error during password reset." });
      }
    });

    // ==========================
    //       Start Server
    // ==========================
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });

    // Graceful Shutdown
    process.on('SIGINT', async () => {
      console.log("\n🛑 Gracefully shutting down...");
      await client.close();
      process.exit(0);
    });

  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
}

startServer();
