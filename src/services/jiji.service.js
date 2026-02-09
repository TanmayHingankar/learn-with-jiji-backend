const supabase = require("../config/supabase");

const generateMockAnswer = (query) => {
  const lowerQuery = query.toLowerCase();

  if (lowerQuery.includes("rag")) {
    return `Retrieval-Augmented Generation (RAG) is a technique that combines information retrieval with large language models. 
It fetches relevant documents from a knowledge base and uses them to generate more accurate and grounded responses.`;
  }

  return `This is a learning explanation related to "${query}". 
Jiji helps you understand concepts using curated learning resources.`;
};

const fetchResources = async () => {
  const { data, error } = await supabase
    .from("resources")
    .select("title, type, file_url");

  if (error) {
    throw new Error("Failed to fetch resources");
  }

  return data;
};

module.exports = {
  generateMockAnswer,
  fetchResources
};
