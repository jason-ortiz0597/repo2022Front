import {v2 as cloudinary } from "cloudinary"
import "dotenv/config";

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
    secure: true
});

//upload image to cloudinary
export async function uploadImage(filePath) {
    return await cloudinary.uploader.upload(filePath , {
        folder: 'product-siipi2022'
    })
}

//delete image from cloudinary
export async function deleteImage(public_id) {
    return await cloudinary.uploader.destroy(public_id)
}

//update image from cloudinary
export async function updateImage(public_id, filePath) {
    return await cloudinary.uploader.upload(filePath, {
        public_id,
        folder: 'product-siipi2022'
    })
}