import React from 'react';
import avatar from 'images/avatar.jpg'
import ResumeCommonProps from '../module/props';


const Header = ({ config }: ResumeCommonProps) => {

    const { resume_avatar, resume_name, resume_title,
        display_header_contact_info, resume_header_contact_info, resume_header_intro,
        resume_looking_for_work, resume_social_links
    } = config;

    const resume_social_links_img_arr = {

    }

    const resume_social_links_arr = Object.values(resume_social_links);  

    return (
        <header className="page-header">
        {/* You can turn off the avatar in _config.yml by setting to false */}
        {resume_avatar === "true" && <img src={avatar} alt="my photo" className="avatar no-print" itemProp="image"/>}
        

        {/* Your name is defined in the _config.yml file */}
        <h1 className="header-name" itemProp="name">{ resume_name }</h1>

        {/* To display contact info here, change `display_header_contact_info` value in _config.yml to true */}
        {display_header_contact_info === 'true' && <div className="header-contact-info">
          <p>{ resume_header_contact_info }</p>
        </div>}

        <div className="title-bar no-print">

        {/* Your title is also defined in the _config.yml file */}
        <h2 className="header-title" itemProp="jobTitle">{ resume_title }</h2>

        {/* <!-- This is the markup for the icon links; moved out to an include because it's very verbose, and you shouldn't ever need to edit the markup (unless you want to re-order the icons); if you want to customize which links appear, define them in the _config.yml file -->
        {% include icon-links.html %} */}
        {resume_social_links_arr.length > 0 && (
            <ul className="icon-links">
                {
                    resume_social_links_arr.map((key: any, value: any) => {
                        return (
                            <li className="icon-link-item">
                                <a href={key}>{key}</a>
                            </li>
                        )
                    })   
                }
            </ul>   
        )}
        </div>

        <div className="executive-summary" itemProp="description" dangerouslySetInnerHTML={{__html:resume_header_intro}}/>

        { resume_looking_for_work === 'yes' && (
            <a href="mailto:{{ site.resume_contact_email }}" className="contact-button no-print" itemProp="email">Contact me</a>
        )}
        {resume_looking_for_work === 'no' && (
            <a className="contact-button not-looking no-print">I'm not looking for work right now.</a>
        )}
        </header>
    )

}

export default Header;