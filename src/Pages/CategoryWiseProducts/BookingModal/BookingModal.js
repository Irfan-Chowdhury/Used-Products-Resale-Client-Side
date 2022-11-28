import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({ handleSubmit, product }) => {

    const { user } = useContext(AuthContext);
    const { _id, title, resale_price, image, seller_name, seller_email } = product;
    const date = format(new Date(), 'PP');

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     console.log(123);
    //     return;
    //     const form = event.target;
    // }


    return (
        <div>
            <div className="modal fade" id={`bookingModal-${_id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-info" id="exampleModalLabel"><b>{title}</b></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={handleSubmit}>
                                <input type="hidden" name="product_id" defaultValue={_id} />
                                <input type="hidden" name="product_title" defaultValue={title} />
                                <input type="hidden" name="image" defaultValue={image} />
                                <input type="hidden" name="order_status" defaultValue={1} />
                                <input type="hidden" name="payment_status" defaultValue='pending' />
                                <input type="hidden" name="payment_method" defaultValue={null} />
                                <input type="hidden" name="seller_name" defaultValue={seller_name} />
                                <input type="hidden" name="seller_email" defaultValue={seller_email} />

                                <div className="mb-3 row">
                                    <label htmlFor="staticEmail" className="col-sm-4 col-form-label"><b>Date</b></label>
                                    <div className="col-sm-8">
                                        <input type="text" name='date' readOnly className="form-control-plaintext" id="staticEmail" defaultValue={date} />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="staticEmail" className="col-sm-4 col-form-label"><b>Customer Name</b></label>
                                    <div className="col-sm-8">
                                        <input type="text" name='buyer_name' readOnly className="form-control-plaintext" id="staticEmail" defaultValue={user.displayName} />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="staticEmail" className="col-sm-4 col-form-label"><b>Customer Email</b></label>
                                    <div className="col-sm-8">
                                        <input type="text" name='buyer_email' readOnly className="form-control-plaintext" id="staticEmail" defaultValue={user.email} />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="staticEmail" className="col-sm-4 col-form-label"><b>Product Price (BDT)</b></label>
                                    <div className="col-sm-8">
                                        <input type="number" name='price' className="form-control-plaintext" id="staticEmail" defaultValue={resale_price} />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="staticEmail" className="col-sm-4 col-form-label"><b>Phone</b></label>
                                    <div className="col-sm-8">
                                        <input type="number" name='buyer_phone' required className="form-control-plaintext" placeholder='Phone' />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="staticEmail" className="col-sm-4 col-form-label"><b>Meeting Location</b></label>
                                    <div className="col-sm-8">
                                        <textarea name="meeting_location" required className='form-control' rows="5"></textarea>
                                    </div>
                                </div>

                                <div className="d-grid gap-3">
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;