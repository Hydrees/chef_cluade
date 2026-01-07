import HfInference from "@huggingface/inference"

const SYSTEM_PROMPT = `
You are an asistant that receives a list of ingredients that a user
has and suggests a recipe they could make with some or all of those
ingredients. You dont need to use every ingredient they mention in
your recipe.The recipe can include additional ingredients they didnt
mention, but try not to include too many extra ingredients.Format
your response in markdown to make it easier to render to a web page.
`
 
const hf = new HfInference(process.env.HF_ACCESS_TOKEN)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.joint(",")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x78-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe
                 you would recommend I make!` },
            ],
            max_token: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        alert.error(err.message)
    }
}