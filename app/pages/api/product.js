import { getAllProducts } from "../../../../Backend/models/products";

export default async function handler(req, res) {
  try {
    // Call the function from your product.js file
    await getAllProducts(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
