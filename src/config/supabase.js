const { createClient } = require("@supabase/supabase-js");


const rawUrl = process.env.SUPABASE_URL;
const rawKey = process.env.SUPABASE_ANON_KEY;


const supabaseUrl = rawUrl?.replace(/[<>]/g, "").trim();
const supabaseKey = rawKey?.trim();

console.log("FINAL URL:", supabaseUrl);
console.log("KEY exists:", !!supabaseKey);

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase env variables missing");
}

const supabase = createClient(supabaseUrl, supabaseKey);
module.exports = supabase;
