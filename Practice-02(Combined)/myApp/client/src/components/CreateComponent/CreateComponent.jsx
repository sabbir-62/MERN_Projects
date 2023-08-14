import { useRef } from "react";
import { Create } from './../../apiServices/CRUDServices';


const CreateComponent = () => {

    let productName, productID, img, unitPrice, quantity, totalPrice = useRef();

    let saveData = () => {
        let name = productName.value;
        let id = productID.value;
        let image = img.value;
        let price = unitPrice.value;
        let qty = quantity.value;
        let total = totalPrice.value;


        Create(name, id, image, price, qty, total)
        .then((result) => {
            if(result){
                alert("Success");
                productName.value = "";
                productID.value = "";
                img.value = "";
                unitPrice.value = "";
                quantity.value = "";
                totalPrice.value = "";
            }
            else{
                alert("Request Fail. Please try again");
            }
        })
        .catch((err) => {
            alert(err);
        })
    }

    return (
        <div>
            <div className="container pt-4">
                <div className="row">
                    <div className="col-md-4 p-3">
                        <label>Product Name</label>
                        <input ref={(input) => productName = input} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-4 p-3">
                        <label>Product Code</label>
                        <input ref={(input) => productID = input} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-4 p-3">
                        <label>Image</label>
                        <input ref={(input) => img = input} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-4 p-3">
                        <label>Unit Price</label>
                        <input ref={(input) => unitPrice = input} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-4 p-3">
                        <label>Quantity</label>
                        <input ref={(input) => quantity = input} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-4 p-3">
                        <label>Total Price</label>
                        <input ref={(input) =>totalPrice = input} type="text" className="form-control"/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-4 p-3">
                        <button onClick={saveData} className="btn btn-primary w-100">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateComponent;