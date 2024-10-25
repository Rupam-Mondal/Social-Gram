import cloudinary from "./cloudinaryConfig.js";

export const deleteImageFromCloudinary = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        console.log('Image deleted:', result);
        return result;
    } catch (error) {
        console.error('Error deleting image:', error);
        throw error;
    }
};