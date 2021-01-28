import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as CgIcons from 'react-icons/cg'
import * as GiIcons from 'react-icons/gi'
import * as VscIcons from 'react-icons/vsc'
import * as RiIcons from 'react-icons/ri'
import * as AiIcons from 'react-icons/ai'
import * as ImIcons from 'react-icons/im'

export const SideBarData=[
    {
    title:'View Users',
    path:'/viewUser',
    icon:<CgIcons.CgUserList   />,
    cName: 'nav-text'
},
{
    title:'View Mechanics',
    path:'/viewMechanic',
    icon:<GiIcons.GiMechanicGarage  />,
    cName: 'nav-text'
},
{
    title:'View Requests',
    path:'/viewRequest',
    icon:<ImIcons.ImUsers/>,
    cName: 'nav-text'
},
{
    title:'View Feedbacks',
    path:'/viewFeedback',
    icon:<VscIcons.VscFeedback  />,
    cName: 'nav-text'
},
{
    title:'Logout',
    path:'/logout',
    icon:<CgIcons.CgLogOff/>,
    cName: 'nav-text'
}
];
