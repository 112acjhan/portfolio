import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { educationData } from '../../data/educationData';
import { ThemeContext } from '../../contexts/ThemeContext';
import './EducationDetail.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function EducationDetail() {
    const { id } = useParams();
    const { theme } = useContext(ThemeContext);
    const history = useHistory();
    const edu = educationData.find(item => item.id === parseInt(id));

    if (!edu) {
        return <div className="education-detail"><h2>Education not found</h2></div>;
    }

    return (
        <div style={{ minHeight: '100vh', background: theme.secondary }}>
            <Navbar />
            <div className="education-detail" style={{ background: 'none', color: theme.tertiary, maxWidth: 1000, margin: 'auto', padding: '2rem 0' }}>
                <h1 style={{ color: theme.primary, marginBottom: '1.5rem' }}>{edu.institution}</h1>
                <h2 style={{ color: theme.tertiary80 }}>{edu.degree}</h2>
                <p><strong>Duration:</strong> {edu.duration}</p>
                {edu.cgpa && <p><strong>CGPA:</strong> {edu.cgpa}</p>}
                {edu.result && <p><strong>Result:</strong> {edu.result}</p>}

                {edu.cgpaDetails && edu.cgpaDetails.length > 0 && (
                    <div className="cgpa-details">
                        <h3 style={{ color: theme.primary }}>CGPA Details:</h3>
                        <ul>
                            {edu.cgpaDetails.map((c, index) => (
                                <li key={index}>{c.semester}: {c.cgpa}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="edu-summary" style={{ color: theme.tertiary70 }}>
                    <p>{edu.summary}</p>
                </div>

                {edu.events && edu.events.length > 0 && (
                    <div className="edu-events">
                        <h3 style={{ color: theme.primary }}>Events</h3>
                        <div className="event-cards">
                            {edu.events.map((event, index) => (
                                <div className="event-card" key={index} style={{ background: theme.primary30, borderColor: theme.primary }}>
                                    <div className="event-title" style={{ color: theme.primary }}>{event.title}</div>
                                    <div className="event-desc" style={{ color: theme.tertiary70 }}>{event.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {edu.gallery && edu.gallery.length > 0 && (
                    <div className="edu-gallery">
                        <h3 style={{ color: theme.primary }}>Gallery</h3>
                        <div className="gallery-grid">
                            {edu.gallery.map((media, index) => (
                                <div className="gallery-card" key={index} style={{ background: theme.primary30 }}>
                                    {media.endsWith('.mp4') ? (
                                        <video controls width="100%" style={{ borderRadius: '10px', maxHeight: '180px', objectFit: 'cover' }}>
                                            <source src={process.env.PUBLIC_URL + '/' + media} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img
                                        src={`/${media}`}
                                        alt={`gallery-${index}`}
                                        style={{ width: '100%', maxWidth: '800px', height: 'auto', objectFit: 'contain', display: 'block', margin: '0 auto' }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default EducationDetail;
