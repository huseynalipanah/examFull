import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
const cardSchema = new Schema({
  name: String,
  price: Number,
  img: String,
});
const Card = mongoose.model("Card", cardSchema);

app.get("/card", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.json({ message: error.message });
  }
});
app.get("/card/:id", async (req, res) => {
  try {
    const cardItem = await Card.findById(req.params.id);
    if (!cardItem) {
      res.json({ message: "Card not found" });
    } else {
      res.json(cardItem);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.post("/card", async(req, res) => {
  const newCard = new Card(req.body)
  try {
      await newCard.save()
      res.json(newCard)
    
  } catch (error) {
    res.json({ message: error.message });
    
  }
});

app.delete("/card/:id", async (req, res) => {
  try {
    const cardItem = await Card.findByIdAndDelete(req.params.id);
    if (!cardItem) {
      res.json({ message: "Card not found" });
    } else {
      res.json({ message: "Card deleted", cardItem });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

mongoose.connect("mongodb+srv://huz3yn:huseyn04ru@hakunamatata.wsdwnh9.mongodb.net/")
.then(() => console.log("Database connected"))
.catch((error) => console.log(error.message))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
