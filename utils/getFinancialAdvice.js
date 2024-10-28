const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
    console.log("Input data:", totalBudget, totalIncome, totalSpend);

    try {
      const userPrompt = `
        Based on the following financial data:
        - Total Budget: ${totalBudget} USD
        - Expenses: ${totalSpend} USD
        - Incomes: ${totalIncome} USD
        Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
      `;

      const endpoint = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY}`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: userPrompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 200,
          },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error:", errorText);
        throw new Error(`Error ${response.status}: ${errorText}`);
      }

      const data = await response.json();

      // Add debug logging
      console.log("API Response:", JSON.stringify(data, null, 2));

      // Updated path to access the generated text
      const advice = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!advice) {
        console.error("No advice found in response:", data);
        return "No advice available. Please check the API response structure.";
      }

      console.log("Financial advice:", advice);
      return advice;

    } catch (error) {
      console.error("Error fetching financial advice:", error);
      throw new Error(`Failed to get financial advice: ${error.message}`);
    }
  };

  export default getFinancialAdvice;
