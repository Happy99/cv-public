import React from 'react'

import "./Reference.css"
import logoAlfain from "../img/alfain.png";
import logoIno from "../img/ino.png";
import logoDrevocentrum from "../img/drevocentrum.jpeg";
import logoFenix from "../img/fenix.png";
import logoMikov from "../img/mikov.png"

export function Reference() {
    return (
        <div className="references">
            <div className="reference__nadpis">
                <div className="text">
                    <p>Výběr zákazníků pod firmou PC HELP, a.s.</p>
                    <h3>Reference</h3>
                </div>
            </div>

            <div className="references__loga">
                <img src={logoAlfain} alt="logo firmy ALFA IN a.s." title="https://www.alfain.eu/" />
                <img src={logoIno} alt="logo firmy INTERPAP Office, s.r.o." title="https://ino.cz/"/>
                <img src={logoDrevocentrum} alt="logo firmy DŘEVOCENTRUM CZ, a.s." title="https://eshop.drevocentrum-as.cz/"/>
                <img src={logoFenix} alt="logo firmy FENIX Trading s.r.o." title="https://shop.fenixgroup.cz/"/>
                <img src={logoMikov} alt="logo firmy Mikov s.r.o."/>
            </div>
        </div>
    )
}