import React, { useState, useEffect } from "react";
import { useSupabase } from "../context/supabaseContext"; // Adjust path to your SupabaseContext

function Testing() {
  const supabase = useSupabase(); // Get the shared Supabase client
  const [test, setTest] = useState([]); // Initial state as empty array

  async function getProducts() {
    try {
      const { data, error } = await supabase.from("products").select("*"); // Fetch all columns

      if (error) {
        throw error; // Throw if there’s an issue (e.g., network, permissions)
      }

      console.log("Fetched data:", data); // Log the raw data for debugging
      setTest(data || []); // Set data to state, fallback to empty array if null
    } catch (error) {
      console.error("Error fetching products:", error.message);
      setTest([]); // Reset state on error
    }
  }

  useEffect(() => {
    getProducts(); // Fetch on mount
  }, []); // Empty deps = run once

  // Log state after it updates
  useEffect(() => {
    console.log("Updated test state:", test);
  }, [test]); // Log whenever test changes

  return (
    <div>
      <h1>Test Products</h1>
      {test.length > 0 ? (
        <ul>
          {test.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products yet</p>
      )}
    </div>
  );
}

export default Testing;
