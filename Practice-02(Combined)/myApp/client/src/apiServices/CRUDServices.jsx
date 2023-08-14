import axios from "axios"


export const Create = () => {
    let url = "/api/v1/createProduct"
    axios.post().then().catch()
}

export const Read = () => {
    let url = "/api/v1/readProduct"
    axios.get().then().catch()
}

export const Update = (id) => {
    let url = "/api/v1/updateProduct" + id;
    axios.patch().then().catch()
}

export const Delete = (id) => {
    let url = "/api/v1/deleteProduct" + id;
    axios.get().then().catch()
}

// export default {Create, Read, Update, Delete}