import React from 'react'
import { Modal, Modal_content, Modal_header, Modal_footer, Modal_title, Modal_body_1 } from '../../components/common.style';

const Modal_final =() =>{
    return(
        <Modal>
            <Modal_content>
                <Modal_header>
                    {/* /*<button onClick ={props.onClose}>&times;</button> */}
                    <Modal_title><h4>Flight and Fare Details</h4></Modal_title>
                    
                </Modal_header>
                <Modal_body_1>
                    DEL  CCU₹5,325
                    Delhi (T3) - Kolkata*Earn 265 RWDS (6E Rewards)
                </Modal_body_1>
                <Modal_body_1>
                    SAVER FARE
                    wednesday, Jul 14 • 03:00 - 04:50
                    6E 2214 • A320
                </Modal_body_1>
                <Modal_body_1>
                    <p>
                        Check-in Baggage: 15kg per person (1 piece only). For eligible passengers with ‘6E Double Seat’ or ‘6E Triple Seat’ bookings, an additional 10 kg allowance will be applicable. Additional charges may apply for excess baggage.
                        One hand bag up to 7 kgs and 115 cms (L+W+H), shall be allowed per customer. For contactless travel we recommend to place it under the seat in front, on board
                    </p>

                </Modal_body_1>
                <Modal-h2>Adult - 1*5320</Modal-h2>
                <Modal-footer>
                    <p>GST comprises of both Central GST and State GST. For details, kindly refer the tax invoice shared on your email id.
                        A Non-refundable convenience fee up to INR 350 per pax per sector for Domestic and up to INR 600 per pax per sector for International has been levied on all online payments made except credit file. Please note that if the payment is to be made in any other currency than Indian Rupee, the Convenience Fee will be calculated as per the conversion rate prevalent at the time of payment.</p>
                </Modal-footer>

            </Modal_content>
            
        </Modal>
    );
};

export default Modal_final