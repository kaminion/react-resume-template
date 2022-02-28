import React from 'react';
import config from '../config.yml';
import Associations from './component/Associations';
import Education from './component/education';
import Experience from './component/experience';
import Footer from './component/footer';
import Header from './component/header';
import Interests from './component/interests';
import Recognition from './component/recognition';
import Skills from './component/skills';

const App = () => {

    const { resume_contact_telephone, resume_contact_address } = config;

    
    return (
        <div className="wrapper" itemScope itemType="http://schema.org/Person">
            <meta itemProp="telephone" content={ resume_contact_telephone }/>
            <meta itemProp="address" content={ resume_contact_address }/>
            <Header config={config} />
            <Experience config={config} />
            <Education config={config} />
            <Skills config={config} />
            <Recognition config={config} />
            <Associations config={config} />
            <Interests config={config} />
            <Footer/>
        </div>
    );
    
}

export default App;