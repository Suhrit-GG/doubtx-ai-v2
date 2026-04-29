console.log("API KEY:", process.env.HUGGINGFACE_API_KEY)
export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    const res = await fetch(
      "https://api-inference.huggingface.co/models/google/flan-t5-base",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          inputs: message
        })
      }
    )

    const text = await res.text()

    let reply = ""

    try {
      const data = JSON.parse(text)
      reply = data?.[0]?.generated_text || "No response 🤖"
    } catch {
      reply = "⚠️ API Error: " + text.slice(0, 100)
    }

    return Response.json({ reply })

  } catch (error) {
    return Response.json({
      reply: "Error getting response ❌"
    })
  }
}