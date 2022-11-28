import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Checkout = () => {
    useTitle('Checkout Page');
    const { _id, product_id, product_title,price } = useLoaderData();
    const {successMessage} = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        event.preventDefault();
        const form  = event.target;
        const card_number = form.card_number.value;
        const date_format_cbc = form.date_format_cbc.value;

        const order = {
            product_id,
            payment_status:'done',
            payment_method:'stripe',
            card_number,
            product_title,
            date_format_cbc,
        };

        fetch(`http://localhost:5000/orders/checkout/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json', 
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(result =>{
                console.log(result);
                if(result.acknowledged){
                form.reset();
                successMessage();
                navigate('/buyer-dashboard/my-orders');
            }
        })
        .catch(err => console.error(err));
    }

    return (
        <div>
            <h1 className='text-center'>Checkout Page</h1>
            <hr />

            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-4 col-form-label"><b>Product Title :</b></label>
                            <div className="col-sm-8">
                                <input type="text" readonly className="form-control-plaintext" id="staticEmail" defaultValue={product_title}/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-4 col-form-label"><b>Product Price (BDT) :</b></label>
                            <div className="col-sm-8">
                                <input type="text" readonly className="form-control-plaintext" id="staticEmail" defaultValue={price}/>
                            </div>
                        </div>

                        <h5 className='text-primary mt-5'>Strpie Information</h5>
                        <hr />
                        <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-4 col-form-label"><b>Card Number :</b></label>
                            <div className="col-sm-8">
                                <input type="text" required name='card_number' className="form-control" placeholder='Card Number'/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-4 col-form-label"><b>Format :</b></label>
                            <div className="col-sm-8">
                                <input type="text" required name='date_format_cbc' className="form-control" placeholder='MM/YY CBC'/>
                            </div>
                        </div>

                        <div className="mt-3 row text-center">
                            <button className='btn btn-success'>Pay Now</button>
                        </div>
                    </form>



                    
                </div>
            </div>
        </div>
    );
};

export default Checkout;