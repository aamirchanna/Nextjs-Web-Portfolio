import { contactData } from "@/Data/data";
import React from "react";
import { FaEnvelope,  } from "react-icons/fa";

const ContactInfo = () => {
  return(
<>
  {/* Email Info Section - Positioned at the Bottom */}
  <div className="flex items-center space-x-6 p-4 bg-gray-900 rounded-lg shadow-md">
    <div className="text-white w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-gray-300 to-orange-700 flex items-center justify-center hover:scale-125 duration-200 ease-linear">
      <FaEnvelope className="w-6 h-6 md:w-8 md:h-8 text-white" />
    </div>
    <div>
      <h1 className="font-bold text-lg sm:text-xl text-white">Email</h1>
      <h1 className="text-base sm:text-lg text-white text-opacity-70">
        {contactData.email}
      </h1>
    </div>
  </div>

</>

  )
}

export default ContactInfo;
