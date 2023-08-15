import axios from "axios"


//Create
export const Create = async(productName, productID, img, unitPrice, quantity, totalPrice) => {
    let url = "http://localhost:8000/api/v1/createProduct";
    let data = {
        productName: productName,
        productID: productID,
        img: img,
        unitPrice: unitPrice,
        quantity: quantity,
        totalPrice: totalPrice
    }
    return await axios.post(url, data)
    .then((res) => {
        if(res.status == 200){
            return true;
        }
        else{
            return false;
        }
    })
    .catch((err) => {
        console.log(err);
        return false;
    })
}



//Read
export const Read = async() => {
    let url = "http://localhost:8000/api/v1/readProduct";
    return await axios.get(url).then((res) => {
        if(res.status == 200){
            return res.data['data'];
        }
        else{
            return false;
        }
    }).catch((err) => {
        console.log(err);
        return false;
    })
}



//Update
export const Update = async(id, productName, productID, img, unitPrice, quantity, totalPrice) => {
    let url = "http://localhost:8000/api/v1/updateProduct/" + id;
    let data = {
        productName: productName,
        productID: productID,
        img: img,
        unitPrice: unitPrice,
        quantity: quantity,
        totalPrice: totalPrice
    }
    return await axios.post(url, data)
    .then((res) => {
        if(res.status == 200){
            return true;
        }
        else{
            return false;
        }
    })
    .catch((err) => {
        console.log(err);
        return false;
    })
}



//Delete
export const Delete = async(id) => {
    let url = "http://localhost:8000/api/v1/deleteProduct/" + id;
    return await axios.get(url).then((res) => {
        if(res.status == 200){
            return true;
        }
        else{
            return false;
        }
    }).catch((err) => {
        console.log(err);
        return false;
    })
}

// export default {Create, Read, Update, Delete}