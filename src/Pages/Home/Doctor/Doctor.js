// doctors information
import React from 'react';
import doc1 from '../../../images/doctor/austin-distel-7bMdiIqz_J4-unsplash.jpg';
import doc2 from '../../../images/doctor/humberto-chavez-FVh_yqLR9eA-unsplash (1).jpg';
import doc3 from '../../../images/doctor/usman-yousaf-pTrhfmj2jDA-unsplash.jpg';
import './doctor.css';

const Doctor = () => {
    return (
        <div className="py-5">
            <div className="container">
                <h3 className="text-info fw-bold fs-2 py-3">Our Team</h3>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div className="col">
                        <div className="card h-100 shadow-lg">
                            <img src={doc1} className="card-img-top doctor" alt="..." />
                            <div class="card-body bg-info">
                                <h5 class="card-title text-white">Dr.Mark Lowson</h5>
                                <p class="card-text text-white">Therapist</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Monday-Friday &nbsp; &nbsp;&nbsp; &nbsp;10:00-17:00</li>
                                <li class="list-group-item">Saturday &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10:00-15:00 </li>
                                <li class="list-group-item">Sunday &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;10:00-15:00</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-lg">
                            <img src={doc2} className="card-img-top" alt="..." />
                            <div class="card-body bg-info">
                                <h5 class="card-title text-white">Dr.Molika Black</h5>
                                <p class="card-text text-white">Dentist</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Monday-Friday &nbsp; &nbsp;&nbsp; &nbsp;10:00-17:00</li>
                                <li class="list-group-item">Saturday &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10:00-15:00 </li>
                                <li class="list-group-item">Sunday &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;10:00-15:00</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-lg">
                            <img src={doc3} className="card-img-top" alt="..." />
                            <div class="card-body bg-info ">
                                <h5 class="card-title text-white">Dr.Usame</h5>
                                <p class="card-text text-white">Surgeon</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Monday-Friday &nbsp; &nbsp;&nbsp; &nbsp;10:00-17:00</li>
                                <li class="list-group-item">Saturday &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10:00-15:00 </li>
                                <li class="list-group-item">Sunday &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;10:00-15:00</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Doctor;