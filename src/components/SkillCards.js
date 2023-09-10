import React from 'react'
import SkillCardItem from './SkillCardItem'
import './SkillCards.css'

function SkillCards() {
  return (
    <div className='skill__cards'> 
      <h1>Experience</h1>
      <div className='skills__and__experience__container'>
        <div className='skill__experience__container'>
          <div className='skill__experience__wrapper'> 
            <ul className='skill__cards__items'>
              <SkillCardItem 
              text="Operating as a Senior Associate Developer, I support the ATM (Automated Teller Machine) Operations teams that maintain the fleet using software-based cloud solutions
              that reach our distributed systems spread throughout the US, ensuring that end-stream customers have complete access to
              their money when they need it. Provide debugging and recovery expertise for Ops during deployments and software testing. "
              label="Capital One / Feb 2018 - Present"
              />
            </ul>
            <ul className='skill__cards__items'>
              <SkillCardItem 
              text="Working as a High Voltage Circuit Research Assistant, I provided reliable designs and implementation for testing circuits and developmental power transfer systems for the study of
              plasma in a vacuum. Used electrical engineering principles to overcome research obstacles and provide tooling for
              microsecond experiments."
              label="UCSD Science and Engineering Facility / Jan 2016 – Sep 2017"
              />
            </ul>
            <ul className='skill__cards__items'>
              <SkillCardItem 
              text="Being a Project Engineer / Field Technician, I was responsible for field validations on our product lines and prototypes to ensure proper adherence to medical/privacy standards
              and product specifications. Kept senior management informed on project progress and proposed solutions for any
              engineering obstacles while keeping costs and timelines in mind."
              label="Sound Imaging / July 2016 – May 2017"
              />
            </ul>
            <ul className='skill__cards__items'>
              <SkillCardItem 
              text="As an Assistant Quality Control Engineer, I identified areas of potential improvement and cost cutting using modern manufacturing practices for quick development and
              rapid iterations of electronic circuits and board assembly. Paired with senior engineering to diagnose returns and propose
              solutions for refactoring and updating."
              label="V&P Scientific / July 2015 – Nov 2015"
              />
            </ul>
          </div>
        </div>

        <div className='skill__cards__container'>
          <h1>Skills</h1>
          
          <div className='skill__cards__wrapper'>
            <div className='skills__tree__container'>
              <h3>
                Software
              </h3>
              <ul>
                <li>JavaScript /  3 yrs</li>
                <li> Python / 2 yrs </li>
                <li>PostgreSQL / 2 yrs</li>
                <li>Arduino / 2 years</li>
                <li>Powershell / 2 yrs</li>
              </ul>
            </div>
            <div className='skills__tree__container'>
              <h3>
                DevOps
              </h3>
              <ul>
                <li>Jenkins / 4 yrs</li>
                <li>Docker / 2 yrs</li>
                <li>Terraform / 1 yr</li>
                <li>Ansible / 1 yr</li>
                <li>WinRM / 2 yrs</li>
                <li>Splunk / 3 yrs</li>
              </ul>
              </div>
            <div className='skills__tree__container'>
              <h3>
                Design Tools
              </h3>
              <ul >
                <li>AutoDesk Fusion 360 / 1 yr </li>
                <li>EagleCAD / 2 yrs</li>
                <li>Matlab / 2 yrs</li>
                <li>Pspice / 2 yrs</li>
                <li>LtSpice / 2 yrs</li>
              </ul>
            </div>
          </div>

          <div className='skill__cards__wrapper'>
            <div className='skills__tree__container'>
              <h3>
                Electrical
              </h3>
              <ul>
                <li>Power Converters / 3 yrs</li>
                <li>Board Assembly and Testing / 2 yrs</li>
                <li>Robotic Design/Assembly / 3 yrs</li>
                <li>Bluetooth / 2 yrs</li>
              </ul>
            </div>
            <div className='skills__tree__container'>
              <h3>
                Project Management
              </h3>
              <ul>
                <li>Agile / 2 yrs</li>
                <li>Scrum / 3 yrs</li>
                <li>Kanban / 1 yr</li>
              </ul>
            </div>
          </div>

        </div>
          <div className=''>
            <h1>Certificates</h1>
            <ul>
              <li>AWS Certified Cloud Practitioner 2022</li>
              <li>LabView Associate Developer 2017</li>
            </ul>
          </div>
      </div>

    </div>
  )
}

export default SkillCards
