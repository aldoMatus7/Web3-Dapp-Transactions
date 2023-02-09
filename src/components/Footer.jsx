import React from 'react';
import logo from '../../images/logo.png';

const Footer = () => (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo" className="w-32" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <a className="text-white text-base text-center mx-2" href={"https://goerlifaucet.com"}>Faucet</a>
          <a className="text-white text-base text-center mx-2" href={"https://www.youtube.com/@EstonianBlockchainChannel"}>YouTube</a>
          <a className="text-white text-base text-center mx-2" href={"https://www.linkedin.com/in/aldo-matus117"}>LinkedIn</a>
          <a className="text-white text-base text-center mx-2" href={"https://github.com/aldoMatus7"}>GitHub</a>
        </div>
      </div>
  
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">Contact us</p>
        <p className="text-white text-sm text-center font-medium mt-2">info@kryptum.com</p>
      </div>
  
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
  
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-left text-xs">@Kryptum2023</p>
        <p className="text-white text-right text-xs">All rights reserved</p>
      </div>
    </div>
  );
  
  export default Footer;
  // <a className="text-white text-base text-center mx-2" href={"https://coinmarketcap.com"}>Market</a>