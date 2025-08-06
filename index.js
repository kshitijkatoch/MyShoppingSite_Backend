const { initializeDatabase } = require("./db/db.connect");
const Category = require("./models/category.models");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
initializeDatabase();

// GET all categories
app.get("/api/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the data." });
  }
});

// POST category
app.post("/api/categories", async (req, res) => {
  try {
    // const newCategory = await new Category(req.body).save();
    const newCategory = await Category.insertMany(req.body);
    res
      .status(201)
      .json({ message: "Category added successfully", category: newCategory });
  } catch (error) {
    res.status(500).json({ error: "Failed to add data" });
  }
});

// GET category by ID
app.get("/api/categories/:categoryId", async (req, res) => {
  try {
    const data = await Category.findById(req.params.categoryId);
    data
      ? res.json(data)
      : res.status(404).json({ error: "Category not found" });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the data." });
  }
});

// DELETE category by id
app.delete("/api/categories/:id", async (req, res) => {
  try {
    const data = await Category.findByIdAndDelete(req.params.id);
    data
      ? res.status(200).json({
          message: "Category deleted successfully",
          deleted: data,
        })
      : res.status(404).json({ error: "Category not found" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete data." });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
