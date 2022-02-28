import React from 'react';
import ResumeCommonProps from '../module/props';
import skils from 'data/skills.yml';
      

const Skills = ({ config }:ResumeCommonProps) =>
{
    const { resume_section_skills } = config;

    return resume_section_skills && (
        <section className="content-section">
            <header className="section-header">
              <h2>Skills</h2>
              {skils.map((skill: any, _: any) => (
                <div className='resume-item'>
                  <h4 className='resume-item-details'>{skill.skill}</h4>
                  <p className='resume-item-copy'>{skill.description}</p>
                </div>
              ))}
            </header>
        </section>
    );
}


export default Skills;