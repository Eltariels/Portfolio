import React from 'react';
import {Link} from "react-router-dom";

const CTA = () => {
    return (
        <section className="cta">
            <p className="cta-text">
                Vous avez un projet en tête ?
                <br className="sm:block hidden"/>
                Laissez moi le réaliser !
            </p>
            <Link to="/contact" className="btn">
                Contactez moi
            </Link>
        </section>
    )
}

export default CTA;