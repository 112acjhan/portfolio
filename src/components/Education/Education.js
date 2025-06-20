import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

import './Education.css';
import EducationCard from './EducationCard';
import { educationData } from '../../data/educationData';

function Education() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="education" id="resume" style={{ backgroundColor: theme.secondary }}>
            <div className="education-body">
                <div className="education-description">
                    <h1 style={{ color: theme.primary }}>Education</h1>

                    {educationData.map(edu => (
                        <Link
                            to={edu.link || `/education/${edu.id}`}
                            className="education-card-with-image"
                            key={edu.id}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <div className="education-card-content">
                                <EducationCard
                                    id={edu.id}
                                    institution={edu.institution}
                                    degree={edu.degree}
                                    duration={edu.duration}
                                    cgpaDetails={edu.cgpaDetails}
                                    cgpa={edu.cgpa}
                                    result={edu.result}
                                    summary={edu.summary}
                                />
                            </div>
                            {edu.image && (
                                <div className="education-card-image">
                                    <img
                                        src={process.env.PUBLIC_URL + '/' + edu.image}
                                        alt={edu.institution}
                                        className="education-thumb"
                                    />
                                </div>
                            )}
                        </Link>
                    ))}
                </div>

                <div className="education-image">
                    <img src={theme.eduimg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Education;
