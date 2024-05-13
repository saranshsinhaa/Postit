import generateContent from '../../services/content.service'
import generateImage from '../../services/image.service'

export const generate = async (description: string) => {
    try {
        const content = await generateContent(description)
        const imageUrl = await generateImage(description)

        return {
            ...content,
            url: imageUrl,
        }
    } catch (error) {
        throw error
    }
}

export const image = async (description: string) => {
    try {
        const imageUrl = await generateImage(description)

        return imageUrl
    } catch (error) {
        throw error
    }
}
