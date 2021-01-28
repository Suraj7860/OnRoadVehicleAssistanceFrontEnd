import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const UserSidebarData = [
    
    {
        title: 'Profile',
        path: '/profile',
        icon: <AiIcons.AiFillProfile />,
        cName: 'nav-text'
    },
    {
        title: 'Search Mechanics',
        path: '/mechanics',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Feedback',
        path: '/giveFeedback',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },

    {
        title: 'Logout',
        path: '/logout',
        icon: <IoIcons.IoMdPower />,
        cName: 'nav-text'
    },

]