import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({ product }) => {

    const { user } = useContext(AuthContext);
    const { _id, title, resale_price, image } = product;
    const date = format(new Date(),'PP');


    return (
        <div>
            <div className="modal fade" id={`bookingModal-${_id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-info" id="exampleModalLabel"><b>{title}</b></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <input type="hidden" name="product_id" value={_id}/>
                            <input type="hidden" name="product_title" value={title}/>
                            <input type="hidden" name="image" value={image}/>
                            <input type="hidden" name="order_status" value='1'/>
                            <input type="hidden" name="payment_status" value='0'/>

                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label"><b>Date</b></label>
                                <div className="col-sm-8">
                                    <input type="text" name='date' readonly className="form-control-plaintext" id="staticEmail" value={date}/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label"><b>Customer Name</b></label>
                                <div className="col-sm-8">
                                    <input type="text" name='buyer_name' readonly className="form-control-plaintext" id="staticEmail" value={user.displayName}/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label"><b>Customer Email</b></label>
                                <div className="col-sm-8">
                                    <input type="text" name='buyer_email' readonly className="form-control-plaintext" id="staticEmail" value={user.email}/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label"><b>Product Price (BDT)</b></label>
                                <div className="col-sm-8">
                                    <input type="number" name='price' className="form-control-plaintext" id="staticEmail" value={resale_price}/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label"><b>Phone</b></label>
                                <div className="col-sm-8">
                                    <input type="number" name='buyer_phone' className="form-control-plaintext" placeholder='Phone'/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label"><b>Meeting Location</b></label>
                                <div className="col-sm-8">
                                    <textarea name="meeting_location" className='form-control' rows="5"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Submit</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;