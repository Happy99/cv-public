import { useState } from "react"
import meImage from "../img/face_bl_wh.png";

export function About() {

    const [timelineClassList, setTimelineClassList] = useState("timeline d-none");
    const [timelineButtonText, setTimelineButtonText] = useState("More.");
    
    function handleDisplayTimeline() {
        const timeline = document.getElementById("timeline--anchor");
        if ( timeline.classList.contains('d-none') ) {
            setTimelineClassList("timeline");
            setTimelineButtonText("Hide more.");
        }
        else {
            setTimelineClassList("timeline d-none");
            setTimelineButtonText("More.");
        }
        // timeline.classList.contains('d-none') === true ? (setTimelineClassList("timeline"), setTimelineButtonText("Hide more.")) : (setTimelineClassList("timeline d-none"), setTimelineButtonText("More."));
    };

    return (
        <>
            <div className="about">
                <div className="about__image">
                    <img src={meImage} alt="" />
                </div>
                <div className="about__text">
                    <div className="position">about</div>
                    <div className="text">
                        <h3>Hi! I'm Petr Šťastný</h3>
                        <p>
                            I love my family, friends, freedom and one of my biggest passion is travelling anywhere and anytime. I like learning new things and also creating new things.&nbsp;
                            <a href="#timeline--anchor" className="btn--more" title="My life timeline" onClick={handleDisplayTimeline}>{timelineButtonText}</a>
                        </p>
                        <div className="svgs">
                            <a href="https://www.facebook.com/petr.stastny99">
                                <svg className="svg-icon facebook" viewBox="0 0 20 20">
                                    <path fill="none" d="M17.675,0.62H2.327c-0.942,0-1.706,0.764-1.706,1.706v15.348c0,0.941,0.764,1.705,1.706,1.705h15.348c0.941,0,1.705-0.764,1.705-1.705V2.326C19.38,1.384,18.616,0.62,17.675,0.62 M18.526,17.674c0,0.471-0.381,0.852-0.852,0.852H2.327c-0.471,0-0.853-0.381-0.853-0.852V2.326c0-0.471,0.382-0.853,0.853-0.853h15.348c0.471,0,0.852,0.382,0.852,0.853V17.674zM10.849,7.975c0-0.345,0.035-0.531,0.565-0.531h0.709V6.162h-1.134c-1.364,0-1.844,0.642-1.844,1.721v0.834h-0.85V10h0.85v3.838h1.701V10h1.134l0.151-1.283h-1.285L10.849,7.975z"></path>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/petr.stastny/">
                                <svg className="svg-icon instagram" viewBox="0 0 20 20">
                                    <path fill="none" d="M17.835,0.438H2.29c-0.954,0-1.727,0.773-1.727,1.727V17.71c0,0.954,0.773,1.728,1.727,1.728h15.545c0.954,0,1.728-0.773,1.728-1.728V2.165C19.562,1.211,18.789,0.438,17.835,0.438 M18.699,17.71c0,0.477-0.388,0.864-0.864,0.864H2.29c-0.477,0-0.863-0.388-0.863-0.864V2.165c0-0.477,0.387-0.863,0.863-0.863h15.545c0.477,0,0.864,0.387,0.864,0.863V17.71zM12.653,5.619H7.472c-0.954,0-1.728,0.773-1.728,1.728v5.182c0,0.954,0.773,1.728,1.728,1.728h5.182c0.954,0,1.728-0.773,1.728-1.728V7.347C14.381,6.393,13.607,5.619,12.653,5.619 M11.79,6.915h1.295V8.21H11.79V6.915z M10.062,8.21c0.954,0,1.728,0.773,1.728,1.727s-0.773,1.728-1.728,1.728c-0.954,0-1.727-0.773-1.727-1.728S9.109,8.21,10.062,8.21M13.518,12.528c0,0.478-0.388,0.863-0.864,0.863H7.472c-0.477,0-0.864-0.386-0.864-0.863V9.505h0.907C7.491,9.647,7.472,9.79,7.472,9.938c0,1.432,1.16,2.591,2.591,2.591c1.432,0,2.591-1.159,2.591-2.591c0-0.148-0.02-0.291-0.044-0.432h0.908V12.528z"></path>
                                    <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                                        <stop stopColor="#fdf497" offset="0" />
                                        <stop stopColor="#fdf497" offset="0.05" />
                                        <stop stopColor="#fd5949" offset="0.45" />
                                        <stop stopColor="#d6249f" offset="0.6" />
                                        <stop stopColor="#285AEB" offset="0.9" />
                                    </radialGradient>
                                </svg>
                            </a>
                        </div>
                        <div className="contact">
                            <h4>contact me!</h4>
                            petr.stastny99@gmail.com
                        </div>
                    </div>
                </div>
            </div>    
            
            <div id="timeline--anchor" className={timelineClassList}>
                <div className="container left">
                    <div className="content">
                        <h2>21.03.1999</h2>
                        <p>Narodil jsem se v březnu roku 1999. Původně jsem měl být Terezka, ale asi se něco "pokazilo" a tak jsem Petr. Kamarádi mých rodičů mi říkají Pepa junior, pro své kamarády jsem Happy, pro rodinu Peťa a myslím si, že i s přibývajícím věkem mi to zůstane. Jsem totiž po dlouhé době v celé rodině chlap, tak si mě hlavně babičky a tetičky rozmazlují.</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <h2>2014</h2>
                        <p>Vystudoval jsem základní školu Horka-Domky v Třebíči a začal jsem váhat kým chci vlastně být. Jednu dobu u mě vedla architektura a design, což však prohrálo, ale i tak jsem skončil u designu - frontendu. Od mala jsem měl blízko k počítačům díky tátovi. Pamatuji si na doby, kdy jsem mu seděl na klíně a potichu ho sledoval, či později, když jsme "pařili" Need For Speed Underground. Jednak jsme hráli hry, ale táta počítače rád i spravoval, nebo se v nich nějak šťoural, proto moje volba byla celkem jasná. Začal jsem studovat Střední průmyslovou školu v Třebíčí obor Počítačové systémy. V prváku jsem váhal, jestli jsem si vybral správný obor a začal trochu litovat. Ve druháku se to ve mě zlomilo a dal se na weby. </p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        <h2>2018</h2>
                        <p>Konečně mám maturitu a vzhůru do dospěláckýho života</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <h2>25.06.2018</h2>
                        <p>Nastupuju do své první práce v Třebíči. Mám práci jako web developer v týmu Major Shop, kde se jako jediní v Republice specializujeme tvorbou e-shopů s napojením na Helios. Získávám zde cenné zkušenosti jak v programování tak i v komunikaci se zákazníky a celkovým "dospělým" životem.</p>
                    </div>
                </div>
            </div>        
        </>
    )
}