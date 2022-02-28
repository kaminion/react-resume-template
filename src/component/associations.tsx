import React from 'react';
import ResumeCommonProps from '../module/props';
import assoConfig from '/data/Associations.yml';


const Associations = ({ config } : ResumeCommonProps) => {

    const { resume_section_associations } = config;

    return resume_section_associations && (
        <section className="content-section">
            <header className="section-header">
                <h2>Associations</h2>
            </header>
            {
                assoConfig.map((asso:any, _:any) => (
                <div className="resume-item" itemScope itemProp="memberOf" itemType="http://schema.org/Organization">
                    <h3 className="resume-item-title" itemProp="name">
                        {asso.url && (<a href={`${asso.url}`}>{ asso.organization }</a>)}
                        {!asso.url && (asso.organization)}
                    </h3>
                    <h4 className="resume-item-details" itemProp="description" dangerouslySetInnerHTML={{__html:`${ asso.role } &bull; ${ asso.year }`}}/>
                    <p className="resume-item-copy">{ asso.summary }</p>
                </div>
                ))
            }
        </section>);
}
export default Associations;