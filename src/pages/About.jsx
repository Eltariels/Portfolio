import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {skills, experiences} from '../constants'
import CTA from "../components/CTA.jsx";

const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                Salut, moi c'est <span className="blue-gradient_text font-semibold drop-shadow">Théo</span>
            </h1>

            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>Je suis étudiant en fin de première année de Mastère web & technologie à l'école WEBTECH INSTITUTE du campus
                    Next-u à Lyon,
                    et je suis actuellement en recherche d'un alternance en Développement web Full-stack.
                </p>
            </div>

            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">
                    Mes <span className="blue-gradient_text font-semibold drop-shadow">compétences</span>
                </h3>

                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill) => (
                        <div className="relative block-container w-20 h-20 group">
                            <div className="btn-back rounded-xl"/>
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                            <div
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-white p-2 rounded-lg shadow-lg text-xs text-center w-30">
                                <div className="font-semibold truncate">{skill.name}</div>
                                <div className="text-gray-600 truncate">{skill.type}</div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>

            <div className="py-16">
                <h3 className="subhead-text">Expériences de <span
                    className="blue-gradient_text font-semibold drop-shadow">Travail</span></h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>J'ai eu l'opportunité de travaillé dans des structures de renom ou a mon compte !'
                    </p>
                </div>

                <div className="mt-12 flex">
                    <VerticalTimeline>
                        {experiences.map((experience) => (
                            <VerticalTimelineElement
                                key={experience.company_name}
                                date={experience.date}
                                icon={
                                    <div className="flex justify-center items-center w-full h-full">
                                        <img
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            className="w-[60%] h-[60%] object-contain"
                                        />
                                    </div>
                                }
                                iconStyle={{
                                    background: experience.iconBg
                                }}
                                contentStyle={{
                                    borderBottom: '8px',
                                    borderStyle: 'solid',
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: 'none',
                                }}
                            >
                                <div>
                                    <h3 className="text-black text-xl font-poppins font-semibold">
                                        {experience.title}
                                    </h3>
                                    <p className="text-black-500 font-medium font-base" style={{margin: 0}}>
                                        {experience.company_name}
                                    </p>
                                </div>
                                <ul className="my-5 list-disc ml-5 space-y-2">
                                    {experience.points.map((point, index) => (
                                        <li key={`experience-point-${index}`}
                                            className="text-black-500/50 font-normal pl-1 text-sm">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>

            <hr className="border-slate-200"/>

            <CTA/>
        </section>
    )
}

export default About