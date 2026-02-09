const supabase = require("../config/supabase");
const { generateMockAnswer, fetchResources } = require("../services/jiji.service");
const ensureProfileExists = require("../services/profile.service");

const askJiji = async (req, res) => {
  try {
    const { query } = req.body;
    const user = req.user;

    // Ensure profile exists
    await ensureProfileExists(user);

    // Save user query
    await supabase.from("queries").insert({
      user_id: user.id,
      query_text: query
    });

    // Generate AI-like answer
    const answer = generateMockAnswer(query);

    // Fetch learning resources
    const resourcesData = await fetchResources();

    const resources = resourcesData.map((r) => ({
      title: r.title,
      type: r.type,
      url: r.file_url
    }));

    return res.status(200).json({
      answer,
      resources
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Something went wrong while processing your request"
    });
  }
};

module.exports = { askJiji };
