import Image from "next/image";
import React from "react";

import Logo from '../assets/images/logo.svg'

export default function Navbar() {
    return (
      <>
        <div>
          <div>
            <Image src={Logo} alt="Logo" width={200} height={100} />
            <div className="border border-[#127FFF] rounded">
              <input type="text" placeholder="Search" />
              <button>Search</button>
            </div>
          </div>
        </div>
      </>
    );
}
