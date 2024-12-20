import './App.css';
import Ball from "./components/Ball/Ball.tsx";
import {useState} from "react";


const App = () => {

    const [balls, setBalls] = useState([5, 11, 16, 23, 32]);

    const randomBalls = () => {
        const randomArr: number[] = [];

        while(randomArr.length < 5) {
            const randomNumber = Math.floor(Math.random() * (33 - 5 + 1) + 1);

            if (!randomArr.includes(randomNumber)) {
                randomArr.push(randomNumber);
            }
        }

        randomArr.sort((a, b) => a - b);

        setBalls(randomArr);
    };

    return (
        <>
            <button type='button' onClick={randomBalls}>New numbers</button>
            <div style={{marginTop: '20px',display: 'flex', justifyContent: 'center', gap: '10px'}}>
                {balls.map((ball) => <Ball ballNumber={ball}/>)}
            </div>
        </>
    )
};

export default App
