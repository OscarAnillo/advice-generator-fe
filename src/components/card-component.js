import { useState, useEffect } from 'react'
import axios from 'axios';

export default function CardComponent(){
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get('https://api.adviceslip.com/advice')
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <div className="card">
            <div className='container'>
               {Object.values(data).map(item => (
                <div key={item.id}>
                    <p>Advice #{item.id}</p>
                    <h1>"{item.advice}"</h1>
                </div>
               ))}
            </div>
            <div>
                <img src="/images/icon-dice.svg" alt="" />
                <img src="/images/pattern-divider-mobile.svg" alt="" />
            </div>
        </div>
    )
}