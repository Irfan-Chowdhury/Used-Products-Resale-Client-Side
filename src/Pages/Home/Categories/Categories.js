import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    })


    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                categories.map(category => 
                    <div key={category._id} className="col">
                        <Link to={`/category/${category._id}`} style={{textDecoration:'none'}}>
                            <div className="card">
                                <img src={category.img} className="card-img-top" height={80} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{category.title}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default Categories;