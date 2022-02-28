import React from 'react';
import ResumeCommonProps from '../module/props';
import EduConfig from 'data/education.yml';


const Education = ( {config} : ResumeCommonProps ) => {

    const { resume_section_education } = config;
    
    return resume_section_education && (
        <section className="content-section">
            <header className="section-header">
            <h2>Education</h2>
            </header>
            {EduConfig.map((edu: any, _: any) => (
                <div className="resume-item" itemScope itemProp="alumniOf" itemType="http://schema.org/CollegeOrUniversity">
                    <h3 className="resume-item-title" itemProp="name">{ edu.uni }</h3>
                    <h4 className="resume-item-details group" itemProp="description" dangerouslySetInnerHTML={{__html:`${ edu.degree } &bull; ${ edu.year }`}}/>
                    <h5 className="resume-item-details award-title" itemProp="description">{edu.award}</h5>
                    <ul className="resume-item-list">
                        {edu.awards?.map((award:any, _:any) => (
                            <li>{award.award}</li>
                        ))}
                    </ul>
                    <p className="resume-item-copy" itemProp="description">{edu.summary}</p>
                </div>   
            ))}
        </section>
    ); 

}


export default Education;