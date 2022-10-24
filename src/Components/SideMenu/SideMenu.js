import React, { useState } from 'react'
import { Box, Typography, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';


import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';


const styles = {
    link: {
        color: 'white',
        // p: { xs: '2px' },
        // backgroundColor:'red',
        my: { xs: '10px' },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',

    }
}

const menuList = [
    {
        id: "1",
        icon: <HomeOutlinedIcon />,
        text: "Home",
        link: "/"
    },
    {
        id: "2",
        icon: <InsertChartOutlinedRoundedIcon />,
        text: "Statistics",
        link: "/"
    },
    {
        id: "3",
        icon: <AccountBalanceOutlinedIcon />,
        text: "Services",
        link: "/"
    },
    {
        id: "4",
        icon: <MailOutlineOutlinedIcon />,
        text: "Mails",
        link: "/"
    },
    {
        id: "5",
        icon: <PlayCircleOutlinedIcon />,
        text: "Media",
        link: "/"
    },
    {
        id: "6",
        icon: <PeopleOutlineOutlinedIcon />,
        text: "Users",
        link: "/"
    },
    {
        id: "7",
        icon: <TextSnippetOutlinedIcon />,
        text: "Docs",
        link: "/"
    },
    {
        id: "8",
        icon: <MonetizationOnOutlinedIcon />,
        text: "Lists",
        link: "/"
    },
]

const SideMenu = () => {

    const [isMiniNav, setIsMiniNav] = useState(true)
    const [selectedMenuItem, setSelectedMenuItem] = useState("1")

    const handleSetSelectedMenuItem = (id) => {
        setSelectedMenuItem(id)
    }


    return (
        <Box
            sx={{
                height: 'calc(100vh - 20px)',
                // width: isMiniNav ? 'auto' : '130px',
                backgroundColor: '#6f6af8',
                borderTopRightRadius: '10px',
                borderBottomRightRadius: '10px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: isMiniNav ? 'center' : '',
                justifyContent: 'space-between',
                // px: { xs: '8px' },
                py: { xs: '20px' },

                position: 'relative',
                textAlign: 'center',


            }}
        >

            <Box
                onClick={() => setIsMiniNav(!isMiniNav)}
                sx={{
                    position: 'absolute',
                    top: '60px',
                    right: '-15px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '50%',
                    boxShadow: '1px 1px 5px 1px #ccc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: { xs: '3px' },
                    cursor: 'pointer',
                    color: '#6f6af8'
                }}
            >
                {
                    isMiniNav ?
                        <ArrowForwardIosOutlinedIcon sx={{ fontSize: '18px' }} />
                        :
                        <ArrowBackIosNewOutlinedIcon sx={{ fontSize: '18px' }} />
                }
            </Box>


            <Box>

                <Typography
                    sx={{
                        color: '#fff',
                        mb: { xs: '50px' },
                        px: { xs: '8px' },
                    }}
                >
                    dappr
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        // alignItems: 'center',
                        // backgroundColor: 'red'
                    }}
                >

                    {
                        menuList?.map((item, index) => {

                            return (
                                <Link
                                    key={index}
                                    to={item?.link}
                                    component={RouterLink}
                                    sx={{
                                        ...styles.link,
                                        borderLeft: selectedMenuItem === item?.id ? '5px solid #fff' : '5px solid transparent',
                                        justifyContent: isMiniNav ? 'center' : 'space-between',
                                        px: isMiniNav ? '0' : '10px',
                                        // backgroundColor: 'red',

                                    }}
                                    onClick={() => handleSetSelectedMenuItem(item?.id)}
                                >
                                    {item?.icon}

                                    {isMiniNav ? "" : (
                                        <span style={{ textAlign: 'left', width: '100%', marginLeft: '10px' }}>
                                            {item?.text}
                                        </span>
                                    )
                                    }

                                </Link>
                            )
                        })
                    }

                </Box>

            </Box>

            <Link
                to="/"
                component={RouterLink}
                sx={{
                    ...styles.link,
                    borderLeft: selectedMenuItem === "settings" ? '5px solid #fff' : 'none',
                    justifyContent: isMiniNav ? 'center' : 'space-between',

                    px: isMiniNav ? '0' : '10px',

                }}
                onClick={() => handleSetSelectedMenuItem("settings")}

            >
                <SettingsOutlinedIcon />
                {isMiniNav ? "" : "Settings"}
            </Link>
        </Box>
    )
}

export default SideMenu