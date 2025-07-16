import React from "react";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="py-16 px-10 bg-primary-100 flex-md justify-between-md">
      <div className="flex flex-col gap-4 basis-1/3">
        <img className="w-[130px]" src={Logo} alt="Logo" />
        <p>
          Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
          purus et arcu massa dictum condimentum. Augue scelerisque iaculis orci
          ut habitant laoreet. Iaculis tristique.
        </p>
        <p>© Evogym All Rights Reserved.</p>
        <p></p>
      </div>

      <div className="flex flex-col gap-4 mt-15 md-mt-0">
        <h4 className="font-bold">Links</h4>
        <p>Massa orci senectus</p>
        <p>Et gravida id et etiam</p>
        <p>Ullamcorper vivamus</p>
      </div>

      <div className="flex flex-col gap-4 mt-15 md-mt-0">
        <h4 className="font-bold">Contact US</h4>
        <p>Et gravida id et etiam</p>
        <p>{`(333)425-6784`}</p>
      </div>
    </footer>
  );
};

export default Footer;
