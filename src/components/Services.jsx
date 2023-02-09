import { BsShieldFillCheck } from "react-icons/bs";
import { BsGlobe } from 'react-icons/bs';
import { BsFillLightningChargeFill } from 'react-icons/bs';

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow.xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-white text-lg">{title}</h3>
            <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
        </div>
    </div>
)

const Services = () => {
    return (
        <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start item-start">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
                        Services that are  
                        <br />
                        truly useful to users
                    </h1>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-center">
                <ServiceCard
                    color="bg-[#2952E3]"
                    title="Security gurantee"
                    icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                    subtitle="Security is guranteed. We use blockchain technology to ensure the security and privacy of your transactions."
                />
                <ServiceCard
                    color="bg-[#8945F8]"
                    title="Across the world"
                    icon={<BsGlobe fontSize={21} className="text-white" />}
                    subtitle="Transactions with anyone, anywhere in the world, without being limited by geographic borders."
                />
                <ServiceCard
                    color="bg-[#ffa500]"
                    title="Lightning-fast transactions"
                    icon={<BsFillLightningChargeFill fontSize={21} className="text-white" />}
                    subtitle="Say goodbye to long wait times and hello to quick, seamless transactions in the goerli test network."
                />
            </div>
        </div>
    );
}

export default Services;