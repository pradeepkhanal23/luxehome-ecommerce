import supabase from "./supabase-script.js";
import { productsData } from "../src/data/products.js";

async function insertProducts() {
  try {
    const { data, error } = await supabase
      .from("products")
      .insert(productsData);

    if (error) {
      console.error("Error inserting products:", error);
      process.exitCode = 1;
      return;
    }

    console.log("Products inserted successfully:", data);
  } catch (err) {
    console.error("Unexpected error:", err);
    process.exitCode = 1;
  }
}

insertProducts();
