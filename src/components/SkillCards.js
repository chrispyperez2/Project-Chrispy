import React from 'react'
import SkillCardItem from './SkillCardItem'
import './SkillCards.css'
function SkillCards() {
  return (
    <div className='skill__cards'> 
      <h1>Full of Skills and Experience</h1>
      <div className='skills__and__experience__container'>
        <div className='skill__experience__container'>
          <div className='skill__experience__wrapper'> 
            <ul className='skill__cards__items'>
              <SkillCardItem 
              text="Support the ATM(Automated Teller Machine) Operations teams that maintain the fleet using software-based cloud solutions
              that reach our distributed systems spread throughout the US, ensuring that end-stream customers have complete access to
              their money when they need it. Provide debugging and recovery expertise for Ops during deployments and software testing. "
              label="Capital One / Feb 2018 - Present"
              />
            </ul>
            <ul className='skill__cards__items'>
              <SkillCardItem 
              text="Provided reliable designs and implementation for testing circuits and developmental power transfer systems for the study of
              plasma in a vacuum. Used electrical engineering principles to overcome research obstacles and provide tooling for
              microsecond experiments."
              label="UCSD Science and Engineering Facility / Jan 2016 – Sep 2017"
              />
            </ul>
            <ul className='skill__cards__items'>
              <SkillCardItem 
              text="Responsible for field validations on our product lines and prototypes to ensure proper adherence to medical/privacy standards.
              Kept senior management informed on project progress and proposed solutions for any engineering obstacles while keeping
              costs and timelines in mind."
              label="Sound Imaging / July 2016 – May 2017"
              />
            </ul>
            <ul className='skill__cards__items'>
              <SkillCardItem 
              text="Identified areas of potential improvement and cost cutting using modern manufacturing practices for quick development and
              rapid iterations of electronic circuits and board assembly. Paired with senior engineering to diagnose returns and propose
              solutions for refactoring and updating."
              label="V&P Scientific /  July 2015 – Nov 2015"
              />
            </ul>
          </div>
        </div>

        <div className='skill__cards__container'>
          <div className='skill__cards__wrapper'>
            <ul className='skill__cards__items'>
              <SkillCardItem 
              text="Typescript/Node.js, PostgreSQL, Python, Bash, Powershell, Arduino, Windows Systems"
              label="Software"
              />
            </ul>
            <ul className='cards__items'>
              <SkillCardItem 
              text="Jenkins, Docker, Terraform, Ansible, Winrm, Splunk"
              label="DevOps"
              />
            </ul>
            <ul className='cards__items'>
              <SkillCardItem 
              text="Fusion 360, EagleCAD, Matlab, Pspice, LtSpice"
              label="Design Tools"
              />
            </ul>
            <ul className='cards__items'>
              <SkillCardItem 
              text="Circuit Component Selection, Power Converters/Electronics, Board Assembly and Testing, Renewable Power
              Generation, Robotic Design/Assembly, Bluetooth "
              label="Hardware"
              />
            </ul>

            <ul className='cards__items'>
              <SkillCardItem 
              text="Agile, Scrum, Kanban"
              label="Project Management"
              />
            </ul>
            <ul className='cards__items'>
              <SkillCardItem 
              text="AWS Certified Cloud Practitioner 2022/ LabView Associate Developer 2017"
              label="Certificates"
              />
            </ul>

          </div>
        </div>
      </div>

    </div>
  )
}

export default SkillCards
