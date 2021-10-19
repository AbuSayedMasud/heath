// shops area
import React from 'react';
import sh1 from '../../images/medicine/prod-img2.jpg'
import sh2 from '../../images/medicine/prod-img3.jpg'
import sh3 from '../../images/medicine/prod-img5.jpg'

import './shops.css'
const Shops = () => {
    return (
        <div className="py-5">
            <div className="container">
                <h3 className="fs-2 fw-bolder text-info py-4">Available Products</h3>
                <div>
                    <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card h-100 shadow-lg">
                                <img src={sh1} className="card-img-top  img-thumbnail" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-info">Allegra</h5>
                                    <p className="text-primary"> Price : <small className="text-warning">10 Taka</small></p>
                                    <p class="card-text text-secondary">
                                        Fexofenadine is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 shadow-lg">
                                <img src={sh2} className="card-img-top pro-image img-thumbnail" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-info">Azithromycin</h5>
                                    <p className="text-primary">Price : <small className="text-warning">32 Taka</small></p>
                                    <p class="card-text text-secondary">Azithromycin is an antibiotic. It's widely used to treat chest infections such as pneumonia, infections of the nose and throat such as sinus infection </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 shadow-lg">
                                <img src={sh3} className="card-img-top  img-thumbnail" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-info">Diabetes Test Machine</h5>
                                    <p className="text-primary">Price : <small className="text-warning">1000 Taka</small></p>
                                    <p class="card-text text-secondary">Diabetes mellitus, commonly known as diabetes, is a metabolic disease that causes high blood sugar.</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shops;