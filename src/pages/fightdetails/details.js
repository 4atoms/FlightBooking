import React from 'react'
import { Modalfirst, Modalcontent, Modalheader, Modalfooter, Modaltitle, Flightroot, Bagdetails, Adultdetails, AirlineName, Date } from '../../components/common.style';

const Details =(props) =>{

    console.log(`modal ${JSON.stringify(props.flightInfo)}`)

    if(!props.show){
        return null
    }    
    return(
        <Modalfirst>
            <Modalcontent>
                <Modalheader>
                    <Modaltitle><h4>Flight and Fare Details</h4></Modaltitle> 
                    <button onClick ={props.closeModal}>&times;</button> 
                </Modalheader>

                <Flightroot>
                <h3>{props.flightInfo.source} - {props.flightInfo.destination}</h3> 
                    <h3>{props.flightInfo.price}</h3>
                </Flightroot>

                <AirlineName>
                    <h3>
                       {props.flightInfo.airLineName} 
                    </h3>
                </AirlineName>

                <Date>
                    <h3>
                    {props.flightInfo.dateTime} 
                    </h3>
                </Date>



                <Bagdetails>
                    <p>
                        Check-in Baggage: 15kg per person (1 piece only). For eligible passengers with ‘6E Double Seat’ or ‘6E Triple Seat’ bookings, an additional 10 kg allowance will be applicable. Additional charges may apply for excess baggage.
                        One hand bag up to 7 kgs and 115 cms (L+W+H), shall be allowed per customer. For contactless travel we recommend to place it under the seat in front, on board
                    </p>

                </Bagdetails>
                <Adultdetails>Adult - 1 * {props.flightInfo.price} </Adultdetails>
                <Modalfooter>
                    <p>GST comprises of both Central GST and State GST. For details, kindly refer the tax invoice shared on your email id.
                        A Non-refundable convenience fee up to INR 350 per pax per sector for Domestic and up to INR 600 per pax per sector for International has been levied on all online payments made except credit file. Please note that if the payment is to be made in any other currency than Indian Rupee, the Convenience Fee will be calculated as per the conversion rate prevalent at the time of payment.</p>
                </Modalfooter>
            </Modalcontent>
            
        </Modalfirst>
    );
};

export default Details