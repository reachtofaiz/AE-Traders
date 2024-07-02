import home from './home.css'
import React from 'react';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';


const Home = () => {
    const firstEl = useRef(null);
    const secondEl = useRef(null);

    useEffect(() => {
        const firstTyped = new Typed(firstEl.current, {
            strings: ['<i>Discover the finest handloom creations that blend tradition with innovation at </i>'],
            typeSpeed: 50,
            showCursor: false, 
            onComplete: () => {
                const secondTyped = new Typed(secondEl.current, {
                    strings: ['<i><b>" AE TRADERS "</b></i>'],
                    typeSpeed: 50,
                });
            }
        });

        return () => {
            firstTyped.destroy(); 
        };
    }, []);

    return (
        <div className='home' id='home'>
            <div>
                <span ref={firstEl}></span>
            </div>
            <div>
                <span ref={secondEl}></span>
            </div>
        </div>
    );
}

export default Home;

// "Welcome to AE Traders – where your ideas are woven into reality. Discover the finest handloom creations that blend tradition with innovation."