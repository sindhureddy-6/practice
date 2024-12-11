import React from 'react';
import './Mentor.css';

const MentorCard = ({ title, currentQuarter, mentors }) => {
    return (
        <div className="mentor-card border rounded-lg m-2 w-[410px] h-[724px]" >

            <div
                className={`mentor-card-header 
    ${title === 'Project Mentor' ? 'bg-[#93D4EF]' : ''} 
    ${title === 'Skill Mentor' ? 'bg-[#C5E1A5]' : ''} 
    ${title === 'Domain Mentor' ? 'bg-[#D2B7FF]' : ''}`}
            >

                <h6 className="headline">{title} <span className='bg-white rounded-full w-7 h-7 pt-1 text-center  text-sm'>1</span></h6>


                <button
                    className="button"

                >
                    <span className="button-content">
                        <span>+</span>
                        <span>Request</span>
                    </span>
                </button>
            </div>
            <div className="card-body">
                <p className="quarter">Current Quarter: ({currentQuarter})</p>

                {mentors.map((mentor, index) => (
                    <div key={index} className={`mentor
                    ${mentor.status === 'Pending' ? 'pending' : ''}
    ${title === 'Project Mentor' ? 'bg-[#F3FAFD]' : ''} 
    ${title === 'Skill Mentor' ? 'bg-[#F8FBF5]' : ''} 
    ${title === 'Domain Mentor' ? 'bg-[#FAF7FF]' : ''}`}
                    >
                        <div className={`mentor-left-design
    ${mentor.status === 'Pending' ? 'pending-left-design ' : ''}
    ${title === 'Project Mentor' ? 'bg-[#B4E1F4]' : ''} 
    ${title === 'Skill Mentor' ? 'bg-[#D7EAC0]' : ''} 
    ${title === 'Domain Mentor' ? 'bg-[#DFCDFF]' : ''}`}></div>
                        <div className='mentor-details'>
                            {mentor.status === 'Pending' && (
                                <div className="pending-approval">Pending Approval</div>
                            )}
                            <p className="mentor-name">{mentor.name}</p>
                            <p className="mentor-role">{mentor.role}</p>

                            {mentor.status === 'Pending' && (
                                <div className="pending-outer">
                                    <div className='pending-inner'>
                                        <span></span>
                                        <span className='w-[125px] h-[20px] font-inter text-[14px] text-[#B3261E] font-medium leading-[20px] tracking-[0.1px] text-center'>Withdraw Request</span>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                ))}
            </div>
        </div>
    );
};

const MentorManagement = () => {
    const projectMentors = [
        { name: 'Ujwal Parker', role: 'Project Manager', status: 'Pending', },
        { name: 'Ankita Shrivastava', role: 'Project Manager', status: 'Active', },
    ];

    const skillMentors = [
        { name: 'Ankita Shrivastava', role: 'Project Manager', status: 'Active', },
    ];

    const domainMentors = [
        { name: 'Ankita Shrivastava', role: 'Project Manager', status: 'Active', },
    ];



    return (
        <div id="main-box" >
            <MentorCard
                title="Project Mentor"
                currentQuarter="Q3"
                mentors={projectMentors}

            />
            <MentorCard
                title="Skill Mentor"
                currentQuarter="Q3"
                mentors={skillMentors}

            />
            <MentorCard
                title="Domain Mentor"
                currentQuarter="Q3"
                mentors={domainMentors}

            />
        </div>
    );
};

export default MentorManagement;