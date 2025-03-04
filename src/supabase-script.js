import { createClient } from "@supabase/supabase-js";

import dotenv from "dotenv";

//since this file will run as a script trigerring a node execution, we need to import dotenv to load the env variables

dotenv.config(); // load .env file

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("SUPABASE_URL and SUPABASE_ANON_KEY must be defined in .env");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
