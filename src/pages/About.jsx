import React from 'react';
import cvitems from '../cvitems';
import educations from '../educations';
import sidejobs from '../sidejobs';
import EducationCards from '../components/EducationCards';
import CvCards from '../components/CvCards';

function About() {
    return (
        <>
            <div className='passione'>
                <div className='stronzo'>
                    <h1>Work Experience</h1>
                    {cvitems.map((cvitem) => (
                        <CvCards
                            id={cvitem.id}
                            position={cvitem.position}
                            company={cvitem.company}
                            location={cvitem.location}
                            starting={cvitem.starting}
                            ending={cvitem.ending}
                            description={cvitem.description}
                        />
                    ))}
                </div>
                <div className='puzza'>
                    <h1>Education</h1>
                    {educations.map((education) => (
                        <EducationCards
                            id={education.id}
                            name={education.name}
                            degree={education.degree}
                            time={education.timeframe}
                            description={education.description}
                        />
                    ))}
                    <h1>Additional Employment (Part-Time)</h1>
                    {sidejobs.map((sidejob) => (
                        <EducationCards
                            id={sidejob.id}
                            name={sidejob.name}
                            degree={sidejob.role}
                            time={sidejob.timeframe}
                            description={sidejob.description}
                        />
                    ))}
                </div>

            </div>

        </>
    )
}

export default About;
