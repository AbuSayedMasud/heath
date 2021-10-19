// our images  Gallery
import React from 'react';
import img1 from '../../../images/Gallary/afro-doctors-consulting-young-adult-hospital-ward.jpg';
import img2 from '../../../images/Gallary/disabled-senior-woman-having-discussion-with-medical-specialist-about-treatment-hospital-hallway-wearing-face-mask-against-coronavirus.jpg';
import img3 from '../../../images/Gallary/medic-african-ethnicity-helping-sick-patient-clinic-hospital-ward-doctor-using-medical-equipment-technology-young-woman-healthcare-treatment-black-person-bed.jpg';
import img4 from '../../../images/Gallary/medical-assistant-checking-oximeter-attached-senior-man (1).jpg';
import img5 from '../../../images/Gallary/young-man-checking-appointment-respecting-social-distancing-hospital-waiting-room-nurse-looking-computer-wearing-face-mask-against-covid-19.jpg';
import img6 from '../../../images/6.png';
import './Gallery.css'


const Gallary = () => {
    return (
        <div className="py-5 gallery">
            <h3 className="text-info fw-bold fs-2 py-3">Our Gallery</h3>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                            <img src={img1} class="card-img-top" alt="..." />

                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={img2} class="card-img-top" alt="..." />

                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={img3} class="card-img-top" alt="..." />

                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={img4} class="card-img-top width" alt="..." />

                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={img5} class="card-img-top width" alt="..." />

                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={img6} class="card-img-top" alt="..." />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallary;
