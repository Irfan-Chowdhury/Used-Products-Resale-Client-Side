import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import useTitle from '../../../hooks/useTitle';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    useTitle('Add Product');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user, successMessage} = useContext(AuthContext);
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const [isLoading, setLoading] = useState(false);

    const { data: categories } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://used-products-resale-market-server.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    });

    const handleProductSubmit = data => {
        setLoading(true);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                const product = {
                    category_id: data.category_id, 
                    title: data.title, 
                    location: data.location, 
                    original_price: data.original_price, 
                    resale_price: data.resale_price, 
                    years_of_use: data.years_of_use, 
                    seller_name: data.seller_name, 
                    seller_email: data.seller_email, 
                    phone: data.phone, 
                    condition_type: data.condition_type, 
                    description: data.description, 
                    image: imgData.data.url,
                    status: 0,
                    advertise: 0
                }
                // save product information to the database
                fetch('https://used-products-resale-market-server.vercel.app/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        // authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result =>{
                    setLoading(false);
                    successMessage();
                    navigate('/my-products')
                })
            }
        });
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='container'>
            
            <div className="card">
                <div className="card-header text-center">
                    <h2>Add Products</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(handleProductSubmit)}>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Category</label>
                            <div className="col-sm-10">
                            <select className="form-select" {...register("category_id", {required: "Category is Required"})} >
                                {
                                    categories?.map(category=> 
                                        <option key={category._id} value={category._id}>{category.title}</option>
                                    )
                                }
                            </select>
                            </div>
                        </div>


                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Image</label>
                            <div className="col-sm-10">
                                <input type="file" {...register("image", {
                                    required: "Photo is Required"
                                })} className="form-control" />
                                {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-10">
                                <input type="text" {...register("title", {
                                    required: "Title is Required"
                                })} className="form-control" placeholder='Title'/>
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Location</label>
                            <div className="col-sm-10">
                                <input type="text" {...register("location")} className="form-control" placeholder='location' />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Original Price</label>
                            <div className="col-sm-10">
                                <input type="number" {...register("original_price")} className="form-control" placeholder='original Price'/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Resale Price</label>
                            <div className="col-sm-10">
                                <input type="number" {...register("resale_price")} className="form-control" placeholder='Resale Price'/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Years of use</label>
                            <div className="col-sm-10">
                                <input type="number" {...register("years_of_use")}  className="form-control" placeholder='Years of use'/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Seller Name</label>
                            <div className="col-sm-10">
                                <input type="text" value={user?.displayName} {...register("seller_name")}  className="form-control" readOnly/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Seller Email</label>
                            <div className="col-sm-10">
                                <input type="text" value={user?.email} {...register("seller_email")}  className="form-control" readOnly/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Phone</label>
                            <div className="col-sm-10">
                                <input type="number" {...register("phone")} className="form-control" placeholder='Phone' />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Condition Type</label>
                            <div className="col-sm-10">
                            <select className="form-select" aria-label="Default select example" {...register("condition_type")}>
                                <option defaultChecked value="Good">Good</option>
                                <option value="Excellent">Excellent</option>
                                <option value="Normal">Normal</option>
                                <option value="Fair">Fair</option>
                            </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-10">
                                <textarea  {...register("description")} className="form-control" rows="5"></textarea>
                            </div>
                        </div>

                        {/* <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Days</label>
                            <div className="col-sm-10">
                                <input type="text" name='days' className="form-control" placeholder='Days' />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Rating</label>
                            <div className="col-sm-10">
                                <input type="text" name='rating' className="form-control" placeholder='Rating' />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Short Description</label>
                            <div className="col-sm-10">
                                <input type="text" name='short_description' className="form-control" placeholder='Rating' />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Long Description</label>
                            <div className="col-sm-10">
                                <textarea name="description" cols="30" rows="5"  className="form-control"></textarea>
                            </div>
                        </div> */}
                        <div className="d-grid gap-2">
                            <button  type="submit" className="btn btn-primary">Submit</button>
                            {/* <ToastContainer /> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;