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
              <ul className='achievement__list'>
                <li className='achievement__item'>Invented, tested and provisioned a new Cloud-Based Password system for Capital One ATMs that includes password generation, rotation, storage, failure recovery and resetting for over 1600 ATMs.</li>
                <li className='achievement__item'>Proposed and Implemented our system transition to AWS Fargate to future-proof our cloud service with automated maintenance capabilities and scaling, reducing operating costs by over 40%.</li>
                <li className='achievement__item'>Automated data collection to perform Root Cause Identification and Resolution for when ATMs fail health-checks to remotely begin recovery steps, saving the company in more technician costs.</li>
                <li className='achievement__item'>Delivered robust tooling, scripting, backend systems integration and provisioning for the maintenance and recovery of ATMs deployed across the US, reducing the need for field repairs and decreasing trouble shooting jobs from 4 hours to 4 minutes</li>
                <li className='achievement__item'>Established automated data collection, analysis and health reports through Splunk dashboards to develop a national view of the health of the ATM fleet.</li>
                <li className='achievement__item'>Developed test cases to support future code development and establish traceability when potential bugs are introduced into the code base. </li>
                <li className='achievement__item'>Performed a system modernization on internal Microsoft Service Installer pipelines to introduce a simpler method of deploying updates to ATMs out in the field.</li>
              </ul>

            </ul>
            <ul className='skill__cards__items'>
              <SkillCardItem 
              text="Working as a High Voltage Circuit Research Assistant, I provided reliable designs and implementation for testing circuits and developmental power transfer systems for the study of
              plasma in a vacuum. Used electrical engineering principles to overcome research obstacles and provide tooling for
              microsecond experiments."
              label="UCSD Science and Engineering Facility / Jan 2016 – Sep 2017"
              />
              <ul className='achievement__list'>
                <li className='achievement__item'>Designed, simulated and implemented high voltage / magnetic field calibration circuits used for energy research.</li>
                <li className='achievement__item'>Created a Trigger Delay Unit for Pulsed Powered Plasma experiment diagnostics with ranges between 1ns-10ms, making it possible to track instantaneous experiment events.</li>
              </ul>
            </ul>
            <ul className='skill__cards__items'>
              <SkillCardItem 
              text="Being a Project Engineer / Field Technician, I was responsible for field validations on our product lines and prototypes to ensure proper adherence to medical/privacy standards
              and product specifications. Kept senior management informed on project progress and proposed solutions for any
              engineering obstacles while keeping costs and timelines in mind."
              label="Sound Imaging / July 2016 – May 2017"
              />
              <ul className='achievement__list'>
                <li className='achievement__item'>Performed product design verification and proposed prototype reiterations after testing devices within the MRI machines/environment in nearby hospitals and communicated test results to our CEO and Engineering staff.</li>
                <li className='achievement__item'>Negotiated the reallocation of resources from a minimally cost effective MRI Ambiance project to refocus time and budget to our main product In-Patient Motion Detection Monitoring system</li>
              </ul>
            </ul>
            <ul className='skill__cards__items'>
              <SkillCardItem 
              text="As an Assistant Quality Control Engineer, I identified areas of potential improvement and cost cutting using modern manufacturing practices for quick development and
              rapid iterations of electronic circuits and board assembly. Paired with senior engineering to diagnose returns and propose
              solutions for refactoring and updating."
              label="V&P Scientific / July 2015 – Nov 2015"
              />
              <ul className='achievement__list'>
                <li className='achievement__item'>Redesigned and sourced stepper motor PCB using EAGLE CAD, slashing costs by 70% and vastly reducing the board size. </li>
                <li className='achievement__item'>Reconciled returns of faulty stepper motors and validated repairs before shipments to hospitals and customers.</li>
              </ul>
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
                <li>Scrum / 2 yrs</li>
                <li>Kanban / 1 yr</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
        <div className='certifiates__wrapper'>
          <h1>Certificates</h1>
          <ul className='certificates'>
            <li>AWS Certified Cloud Practitioner 2022</li>
            <li>LabView Associate Developer 2017</li>
          </ul>
        </div>
      </div>

    
  )
}

export default SkillCards
