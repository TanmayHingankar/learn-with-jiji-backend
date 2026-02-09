const supabase = require("../config/supabase");

const ensureProfileExists = async (user) => {
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!data) {
    await supabase.from("profiles").insert({
      id: user.id,
      email: user.email
    });
  }
};

module.exports = ensureProfileExists;
