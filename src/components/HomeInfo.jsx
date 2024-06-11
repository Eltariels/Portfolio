import React from 'react';
import {Link} from "react-router-dom";
import {arrow} from '../assets/icons/';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow}  alt="" className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Salut ! Moi c'est <span className="font-semibold">Théo</span> 🖥️
            <br/>
            Je suis alternant Développeur Web Full-Stack chez <span className="font-semibold">La Bonne Agence</span>, à
            Grenoble
        </h1>
    ),
    2: (
        <InfoBox
            text="J'ai aquis de nombreuse compétence pendant ces 3 dernières années !"
            link="/about"
            btnText="A propos"
        />
    ),
    3: (
        <InfoBox
            text="J'ai réalisé de nombreux projet au fil du temps !"
            link="/projects"
            btnText="Voir les projets"
        />
    ),
    4: (
        <InfoBox
            text="Envie de travaillez avec moi ? C'est par ici !"
            link="/contact"
            btnText="Me contactez"
        />
    )
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo;