import React from 'react'
import { Hero } from "./Hero/Hero";
import { About } from "./About/About";
import Navbar from "./Navbar/Navbar";

import "./App.css";

// $(function() {
//     $('a[href*=#]').on('click', function(e) {
//         e.preventDefault();
//         $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
//     });
// });

export default function App() {

    return (
        <>
           <div>
                <Navbar />
                <Hero />
                <About />

                <div className="bye">
                    <p>Thank you for your visit</p>
                </div>
            </div>        
        </>
    )
}