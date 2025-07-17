'use client';

import React, { useState } from 'react';
import './scroll.css';

interface TeamMember {
  name: string;
  qualification: string;
  role: string;
  summary?: string;
  expertise?: string[];
  teamRole?: string;
}

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const medicalTeam: TeamMember[] = [
     {
      name: 'Dr. K. Vaishnav',
      qualification: 'Bachelor of Medicine\nBachelor of Surgery (MBBS)',
      role: 'Emergency Physician | Occupational Health Consultant | Drug Testing & Toxicology Specialist',
      summary:
        'Dr. Karan Vaishnav is a skilled medical practitioner with a strong background in emergency medicine, industrial health, and clinical coordination. His expertise includes drug analysis, alcohol testing, and toxicology screening, with a focus on maintaining safety and compliance within the marine and offshore sectors.',
      expertise: [
        'Drug & Alcohol Testing Oversight',
        'Clinical Toxicology & Drug Analysis',
        'Occupational & Industrial Health Care',
        'Emergency Response & Medical Coordination',
        'Crew Medical Fitness Certification',
        'Seafarer Health Screening & Compliance',
        'Medical Reporting & Risk Assessment',
      ],
      teamRole:
        'Dr. Karan Vaishnav plays a key role in reviewing drug and alcohol test reports, conducting crew fitness assessments, and managing post-incident medical evaluations.',
    },
    {
      name: 'Dr. A. R. Shinde',
      qualification: 'B.A.M.S. (Bachelor of Ayurvedic Medicine and Surgery)',
      role: 'Medical Officer | Clinical Reviewer | Drug Analysis Specialist',
      summary:
        'Dr. Anand R. Shinde is a qualified Medical Officer with a strong foundation in Ayurvedic medicine and extensive experience in clinical investigations and drug monitoring. He plays a key role in reviewing medical and toxicological reports to ensure accuracy, regulatory compliance, and client safety within the maritime sector.',
      expertise: [
        'Drug & Alcohol Test Result Review',
        'Clinical Investigation Analysis',
        'Toxicology & Drug Profiling',
        'Seafarer Health Screening',
        'Fitness-for-Duty Assessment',
        'Medical Documentation & Compliance',
        'Crew Health Monitoring & Reporting',
        'Interpretation of Laboratory Data',
        'Post-incident Medical Assessment',
      ],
      teamRole:
        'As a lead medical reviewer, Dr. Shinde ensures all clinical evaluations related to drug and alcohol testing are precise, confidential, and in accordance with maritime safety laws (IMO, SOLAS, ISPS).',
    },
    {
      name: 'Mr. G. Telan',
      qualification: 'Bachelor of Pharmacy',
      role: 'Laboratory Manager – Quality Manager',
    },
    {
      name: 'Ms. Vaishali Lashkare ',
      qualification: 'Diploma in Medical Laboratory Technology\nB.Sc. in Biological Sample Profiling & Clinical',
      role: 'DNA Analysis Specialist',
    },
    {
      name: 'Ms. Amau Sange',
      qualification: 'B.Sc. in Medical Laboratory Technology',
      role: 'Operational Testing Coordinator & Multidisciplinary Lab Specialist',
    },
    
   
  ];

  const operationalTeam: TeamMember[] = [
    {
      name: 'Mr. David Pedro (Pandiyan)',
      qualification: '',
      role: 'Head of Global Sales & Strategic Partnerships',
      summary:
        'An IT engineering professional specializing in operations, David has 5+ years of experience supporting global laboratories in safe, compliant drug and alcohol testing. He has ensured timely project delivery and assisted labs in building their global manpower networks, upholding the highest standards of maritime safety and excellence.',
      teamRole:
        '“In the maritime industry, the clock follows the ship — safety and service always come first.”',
    },
    {
      name: 'Mr. Satyajeet Ghole',
      qualification: '',
      role: 'Head of Global Operations – Maritime Compliance & Lab Services',
      summary:
        'An IT engineering professional with a strong foundation in operations management, Satyajeet has 7+ years of experience leading backend processes, logistics coordination, and compliance workflows for global laboratories. His expertise ensures seamless execution of drug and alcohol testing programs, timely project delivery, and the development of reliable global manpower networks — all while maintaining the highest standards of maritime safety and operational excellence.',
      teamRole:
        '“Time zones dont slow us down - they challenge us to be faster.”',
    },
    {
      name: 'Mr. Vincenzo',
      qualification: '',
      role: 'Head of Global Expansion & Strategic Partnerships',
      summary:
        'A global strategist with a vision for borderless healthcare delivery, Mr. Vincenzo is focused on building strong international connections and expanding services across unrestricted regions. With a relentless drive for speed, reliability, and global accessibility, he is leading efforts to streamline operations and establish efficient, high-compliance service routes worldwide. His mission: to ensure that distance and regulation never hinder access to fast and accurate testing solutions.',
      teamRole:
        '“When the world is your field, every connection counts — and every second matters.”',
    },
    {
      name: 'Mr. Viky',
      qualification: '',
      role: 'Head of Global Operations & Logistics',
      summary:
        'Mr. Viky leads global operations and logistics with a strong commitment to efficiency, compliance, and timely service delivery. He plays a key role in optimizing international supply chains, ensuring seamless movement of critical materials and test kits across unrestricted regions.\n\nWith a focus on precision, coordination, and global reach, he ensures that operational workflows support the highest standards of service reliability and responsiveness.',
      teamRole:
        '“Efficient operations, seamless delivery — powering global healthcare access.”',
    },
    {
      name: 'Mr. Peter Rodrigs',
      qualification: '',
      role: 'Senior Operations Manager',
      summary:
        'Mr. Peter Rodrigs plays a pivotal role in overseeing daily operational activities and ensuring the smooth execution of end-to-end processes across our service network. With a detail-oriented approach and deep operational insight, he ensures that service standards, timelines, and compliance measures are consistently met.\n\nHis expertise in workflow optimization, resource coordination, and interdepartmental collaboration strengthens the operational backbone of the organization, enabling reliable and responsive service delivery in all active regions.',
      teamRole:
        '“Strong systems, smooth execution — delivering excellence every step of the way.”',
    },
  ];

  const renderTeamSection = (title: string, members: TeamMember[]) => (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-gray-700 mb-6 text-center">{title}</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            onClick={() => setSelectedMember(member)}
            className="cursor-pointer bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <div className="text-xs text-teal-600 mt-1 break-words whitespace-normal">
                  {member.qualification?.split('\n').map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
                <p className="text-sm text-teal-700 font-medium mt-2">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="team" className="pt-10 pb-5 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Meet Our Team</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced professionals are dedicated to delivering excellence and maintaining the highest standards of quality.
          </p>
        </div>
        {renderTeamSection('Medical Team', medicalTeam)}
        {renderTeamSection('Operational Team', operationalTeam)}
      </div>

      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm bg-black/30">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 overflow-hidden max-h-[90vh] scrollbar-4px">
            <button
              className="absolute top-4 right-5 text-3xl font-bold text-gray-400 hover:text-red-600"
              onClick={() => setSelectedMember(null)}
            >
              &times;
            </button>

            <div className="pr-4 overflow-y-auto max-h-[80vh] custom-scrollbar">
              <h2 className="text-3xl font-bold text-gray-800">{selectedMember.name}</h2>
              <div className="text-teal-600 mt-1 text-lg break-words whitespace-normal">
                {selectedMember.qualification?.split('\n').map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
              <p className="text-teal-800 font-medium mt-2">{selectedMember.role}</p>

              {selectedMember.summary && (
                <>
                  <h3 className="text-xl font-semibold mt-6 text-gray-700">Profile Summary:</h3>
                  <p className="text-sm text-gray-600 mt-2 whitespace-pre-line">{selectedMember.summary}</p>
                </>
              )}

              {selectedMember.expertise && (
                <>
                  <h3 className="text-xl font-semibold mt-6 text-gray-700">Core Expertise:</h3>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                    {selectedMember.expertise.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {selectedMember.teamRole && (
                <>
                  <h3 className="text-xl font-semibold mt-6 text-gray-700">Anchor Thought:</h3>
                  <p className="text-sm text-gray-600 mt-2 whitespace-pre-line">{selectedMember.teamRole}</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
