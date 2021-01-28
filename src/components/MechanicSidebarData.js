import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const MechanicSidebarData = [
   
    {
        title: 'Profile',
        path:"/profile",
        icon: <AiIcons.AiFillProfile />,
        cName: 'nav-text'
    },
    {
        title: 'View Request',
        path:"/viewrequest",
        icon: <AiIcons.AiFillProfile />,
        cName: 'nav-text'
    },
    {
        title: 'View Feedback',
        path: '/viewfeedback',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },

    {
        title: 'Logout',
        path: '/logout',
        icon: <IoIcons.IoMdPower />,
        cName: 'nav-text'
    }

]