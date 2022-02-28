import React from 'react';
import ResumeCommonProps from '../module/props';
import RecognConfig from 'data/recognitions.yml';


const Recognition = ( {config}: ResumeCommonProps ) => 
{
    const { resume_section_recognition } = config;

    return resume_section_recognition && (
        <section className="content-section">
            <header className="section-header">
            <h2>Recognition</h2>
            </header>
            {
                RecognConfig.map((recogn: any, _: any) => (
                    <div className="resume-item">
                        <h3 className="resume-item-title" itemProp="award">{ recogn.award }</h3>
                        <h4 className="resume-item-details" dangerouslySetInnerHTML={{__html:`${ recogn.organization } &bull; ${ recogn.year }`}} />
                        <p className="resume-item-copy">{ recogn.summary }</p>
                    </div>
                ))
            }
        </section>
    );
}


export default Recognition;