import React, { useEffect } from 'react';
import ProfileCard from '../components/MembersCard'; // Assuming you have ProfileCard component in the same directory
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Sample data for the team members
const members = [
    { name: 'Varad Upgade', designation: 'Secretary MCA', imageUrl: 'https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862134/Varad_Upgade_Secretary_MCA_I_yr_qxpns8.png' },
    { name: 'Shweta Prajapati', designation: 'Discipline Head', imageUrl: 'https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862126/Shweta_Prajapati_Discipline_Head_ooat8c.png' },
    { name: 'Aboli Faye', designation: 'Backdrop Head', imageUrl: 'https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862103/Aboli_Faye_Backdrop_head_cj163x.png' },
    { name: 'Naziya Kapadiya', designation: 'Co-Treasurer', imageUrl: 'https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862122/Naziya_Kapadia_co_treasurer_ytqftq.png' },
    { name: 'Riya Saxena', designation: 'Inaugral Head', imageUrl: 'https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862146/Riya_Saxena_Inaugral_Head_osvaed.png' },
    { name: 'Himanshu Bankar', designation: 'Techanical Head', imageUrl: 'https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862171/techanical_head_wdxbey.png' },
    { name: 'Omkar  Barhanpure', designation: 'Sports Head', imageUrl: 'https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862150/sports_head_shpfrq.png' },
    { name: 'Gunjan Maurya', designation: 'Sports Head', imageUrl: 'https://res.cloudinary.com/dcpugzrqm/image/upload/v1738866482/WhatsApp_Image_2025-02-06_at_23.53.00_e9093ad3_gevgxf.png' },
];

const Members = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration
        });
    }, []);

    return (
        <div className="p-6 mt-[5rem]">
            {/* "Our Leads" section */}
            <div className="mb-12 pb-8 flex flex-col">
                <h2 className="text-center mt-8 mb-12 font-custom leading-relaxed">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 font-extrabold text-6xl block">
                        OUR <span className="font-extrabold">CREATIVITY</span>
                    </span><br />
                    <span className="text-white text-4xl block">
                        and attention to detail are
                    </span><br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-extrabold text-6xl block">
                        TRULY INSPIRING.
                    </span>
                </h2>
                <h2 className="text-5xl font-extrabold text-center mt-32 mb-12 font-custom">
                    <span className="bg-clip-text text-transparent text-white">OUR</span>
                    <span className="bg-clip-text text-blue-500 ml-2">LEADS</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 pl-6 pr-6">
                    <ProfileCard
                        name={"Pratik Amnerkar"}
                        designation={"President"}
                        imageUrl={"https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862124/Pratik_Amnerkar_President_fby7cv.png"}
                    />
                </div>
            </div>

            {/* "Other members" section */}
            <div className="flex justify-center items-center mb-20" data-aos="fade-up">
                <div className="flex flex-wrap justify-evenly gap-28 pl-6 pr-6">
                    <ProfileCard
                        name={"Sankalp Singh"}
                        designation={"Vice President MCA"}
                        imageUrl={"https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862125/Sankalp_Singh_Vice_President_MCA_I_yr_g4rzq6.png"}
                    />
                    <ProfileCard
                        name={"Priyanshi Jha"}
                        designation={"Vice President BCA"}
                        imageUrl={"https://res.cloudinary.com/dcpugzrqm/image/upload/v1738862143/vice_president_BCA_u84jfw.png"}
                    />
                </div>
            </div>

            {/* Other members (responsive grid) */}
            <div className="mb-10" data-aos="fade-up">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-6 md:gap-8 justify-center">
                    {members
                        .filter(member => member.designation !== 'Our Lead')
                        .map((member, idx) => (
                            <div key={idx} className="flex flex-wrap justify-center  mb-6 sm:mb-8 md:mb-10" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <ProfileCard
                                    name={member.name}
                                    designation={member.designation}
                                    imageUrl={member.imageUrl}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Members;
