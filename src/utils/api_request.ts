const chatgpt_api = {
    improveDescription: async (description) => {
      const prompt = description.trim()
        ? `Improve the following description: \n\n${description}`
        : "Improve this description: Our website will feature a modern, responsive design with intuitive navigation and seamless user experience. We'll incorporate branded elements and ensure accessibility across all devices.";
  
      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer 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`, 
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo", 
            messages: [{ role: "user", content: prompt }],
            max_tokens: 150,
            temperature: 0.7,
          }),
        });
  
        const data = await response.json();
        return data.choices[0]?.message?.content.trim() || description;
      } catch (error) {
        console.error("Error improving description:", error);
        throw new Error("Failed to improve description");
      }
    },
  };
  
  export default chatgpt_api;
  