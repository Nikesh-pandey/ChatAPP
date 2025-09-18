const Gemini_API_KEY = "AIzaSyA0aYNytwy1MuSEewRtVXqmqaOK8ODrKzE";

export async function chatApp(userMessage) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${Gemini_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: userMessage }],
          },
        ],
      }),
    }
  );

  const data = await res.json();

  if (data.candidates && data.candidates.length > 0) {
    return data.candidates[0].content.parts[0].text;
  } else {
    return "No response from Gemini";
  }
}