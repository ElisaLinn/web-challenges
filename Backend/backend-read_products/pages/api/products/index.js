import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";


export default async function handler(request, response) {
  try {
    await dbConnect();
    
    if (request.method === "GET") {
      const products = await Product.find();
      response.status(200).json(products);
      return;
    }
    
    response.status(405).json({ status: "Method not allowed" });
  } catch (error) {
    console.error("Error in API handler:", error);
    response.status(500).json({ 
      error: error.message,
      details: "Failed to connect to database or fetch products" 
    });
  }
}
