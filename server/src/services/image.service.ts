import { Configuration, OpenAIApi } from 'openai'
import config from '../config'

const configuration = new Configuration({
    apiKey: config.openai.apiKey,
})

const openai = new OpenAIApi(configuration)

const generateImage = async (description: string) => {
    try {
        const imageResponse = await openai.createImage({
            prompt: description,
            n: 1,
            size: '512x512',
        })

        return imageResponse.data.data[0].url
    } catch (error) {
        throw error
    }
}

export default generateImage
