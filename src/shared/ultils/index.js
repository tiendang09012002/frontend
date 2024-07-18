import { BASE_URL } from "../constants/app";
export const getImageProduct = (imageName) => {
    return `${BASE_URL}/static/uploads/images/${imageName}`;
}

export const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

export const checkFileImage = (fileName) => {
    const arr = ['png', 'gif', 'jpeg', 'jpg'];
    const lastFileName = fileName.split('.')
    if (arr.includes(lastFileName[lastFileName.length - 1].toLowerCase())) {
        return true;
    } else {
        return false;
    }
}

export const colors = [
    "Đỏ",
    "Xanh lá",
    "Xanh dương",
    "Cam",
    "Tím",
    "Hồng",
    "Đen",
    "Trắng"
]
