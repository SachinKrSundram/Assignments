import React from 'react'
import "./Seats.css"

const Seats = () => {
    const newSeat = [1, 2, 3, 4 , 5, 6]

    return (
        <>
            <ul className='showcase'>
                <li>
                    <div className="seats"></div>
                    <small>Avaliable</small>
                </li>

                <li>
                    <div className='seat selected'></div>
                    <small>Selected</small>
                </li>

                <li>
                    <div className='seat sold'></div>
                    <small>Sold</small>
                </li>
            </ul>
            <div className='conatiner'>
                <div className='screen'></div>
                <div className="row">
                <div className="seat sold"></div>
                <div className="seat"></div>
                <div className="seat sold"></div>
                <div className="seat sold"></div>
                <div className="seat sold"></div>
                <div className="seat sold"></div>
                <div className="seat sold"></div>
                <div className="seat sold"></div>
                <div className="seat "></div>
                <div className="seat sold"></div>
                </div>
                {newSeat.map((ele,i)=>{
                    return(
                        <>
                        <div className='row' key={i}>
                <div className="seat sold"></div>
                <div className='seat'></div>
                <div className="seat sold"></div>
                <div className='seat'></div>
                <div className="seat sold"></div>
                <div className='seat'></div>
                <div className="seat sold"></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                </div>
                        </>
                    )
                })}
            </div>
            <p className='text'>
                You have selected <span id="count">0</span> seats of RS. <span id="total">0</span>
            </p>
        </>
    )
}

export default Seats
