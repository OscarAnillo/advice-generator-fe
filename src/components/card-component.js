import { useState, useEffect } from 'react'
import axios from 'axios';
import 'animate.css';

export default function CardComponent(){
    const [data, setData] = useState([]);

    const clickHandler = () => {
        axios
        .get('https://api.adviceslip.com/advice')
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        clickHandler();
    }, []);

    return (
        <div className="card">
            <div className='container animate__animated animate__swing'>
               {Object.values(data).map(item => (
                   <div key={item.id}>
                    <p>Advice #{item.id}</p>
                    <h1>“{item.advice}”</h1>
                </div> 
               ))}
            </div>
            <img src="/images/pattern-divider-mobile.svg" alt="" className='mobile-pattern' />
            <img src="/images/pattern-divider-desktop.svg" alt="" className='desktop-pattern' />
            <div className='images'>
                <img src="/images/icon-dice.svg" alt="" className='dice' onClick={clickHandler} />
            </div>
        </div>
    )
}