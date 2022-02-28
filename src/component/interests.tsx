import React from 'react';
import interConfig from 'data/interests.yml';
import ResumeCommonProps from '../module/props';


const Interests = ({ config }: ResumeCommonProps) => {
    
    const { resume_section_interests } = config; 

    return resume_section_interests && (
        <section className="content-section">
            <header className="section-header">
                <h2>Outside Interests</h2>
            </header>
            <div className="resume-item">
                <ul className="resume-item-list">
                    {interConfig.map((interest: any, _: any) => (
                        <li>{interest.description}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}


export default Interests;