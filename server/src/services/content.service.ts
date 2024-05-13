import { Configuration, OpenAIApi } from 'openai'
import config from '../config'

const configuration = new Configuration({
    apiKey: config.openai.apiKey,
})

const openai = new OpenAIApi(configuration)

const generateContent = async (description: string) => {
    try {
        const completion = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: `Generate a formal title, description, caption, tags, hashtags for the following description in a js object format with tags and hashtags in a list format such that is can be directly used JSON.parse function for following description " " ${description} "`,
                },
            ],
        })

        const response = completion.data.choices[0].message.content

        const data = JSON.parse(response)

        return { ...data }
    } catch (error) {
        throw error
    }
}

export default generateContent
