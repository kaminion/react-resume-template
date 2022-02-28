import React from 'react';
import ResumeCommonProps from '../module/props';
import ExpConfig from 'data/experience.yml';


const Experience = ({config}: ResumeCommonProps) => {

    const { resume_section_experience } = config;
    
    return resume_section_experience && (
        <section className="content-section">
            <header className="section-header">
                <h2>Experience</h2>
            </header>
            {ExpConfig.map((job: any, _: any) => (
                <div className="resume-item" itemScope itemProp="worksFor" itemType='http://schema.org/Organization'>
                    <h3 className="resume-item-title" itemProp="name">{ job.company }</h3>
                    <h4 className="resume-item-details" itemProp="description" dangerouslySetInnerHTML={{__html:`${ job.position } &bull; ${ job.duration }`}}></h4>
                    <p className="resume-item-copy" dangerouslySetInnerHTML={{ __html:job.summary }}/>)
                </div>)
            )}
        </section>
    );

}


export default Experience;