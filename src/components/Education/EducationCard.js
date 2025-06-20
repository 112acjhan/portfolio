import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg';
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg';
import './Education.css';

function EducationCard({ id, institution, degree, duration, cgpaDetails, cgpa, result, summary }) {
    const { theme } = useContext(ThemeContext);
    const [expanded, setExpanded] = useState(false);

    const useStyles = makeStyles((t) => ({
        educationCard: {
            backgroundColor: theme.primary30,
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`}>
                <div className="educard-img" style={{ backgroundColor: theme.primary }}>
                    <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{ color: theme.primary }}>{duration}</h6>
                    <h4 style={{ color: theme.tertiary }}>{degree}</h4>
                    <h5 style={{ color: theme.tertiary80 }}>{institution}</h5>

                    {/* Always show summary */}
                    {summary && <p style={{ color: theme.tertiary70, marginTop: '8px' }}>{summary}</p>}

                    {expanded && (
                        <div style={{ marginTop: '10px' }}>
                            {cgpaDetails && cgpaDetails.map((item, index) => (
                                <p key={index} style={{ color: theme.tertiary70 }}>
                                    {item.semester}: CGPA {item.cgpa}
                                </p>
                            ))}
                            {cgpa && !cgpaDetails && <p style={{ color: theme.tertiary70 }}>CGPA: {cgpa}</p>}
                            {result && <p style={{ color: theme.tertiary70 }}>Result: {result}</p>}
                        </div>
                    )}

                    {(cgpaDetails || cgpa || result) && (
                        <button
                            className="expand-btn"
                            onClick={() => setExpanded(!expanded)}
                            style={{ 
                                color: theme.primary, 
                                marginTop: '8px', 
                                background: 'none', 
                                border: 'none', 
                                cursor: 'pointer',
                                fontSize: '0.9rem'
                            }}
                        >
                            {expanded ? 'Show Less ▲' : 'Show More ▼'}
                        </button>
                    )}
                </div>
            </div>
        </Fade>
    );
}

export default EducationCard;
