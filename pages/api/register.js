import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/app/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password, name, genre, gender } = req.body;

    if (!email || !password || !name || !genre || !gender) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const { db } = await connectToDatabase();

      // Check if the user already exists
      const existingUser = await db.collection("users").findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user
      await db.collection("users").insertOne({
        name,
        genre,
        gender,
        email,
        password: hashedPassword,
      });

      return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
