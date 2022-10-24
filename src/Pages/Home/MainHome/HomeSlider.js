import { MoreHorizRounded } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import Slider from "react-slick";

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import PunchClockOutlinedIcon from '@mui/icons-material/PunchClockOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';



const sliderData = [
  {
    id: '1',
    icon: <AccountBalanceWalletOutlinedIcon />,
    number: "$143,624",
    text: 'Your bank balance'
  },
  {
    id: '2',
    icon: <PieChartOutlineOutlinedIcon />,
    number: "$143,624",
    text: 'Your bank balance'
  },
  {
    id: '3',
    icon: <PunchClockOutlinedIcon />,
    number: "7",
    text: 'Employees workiing today'
  },
  {
    id: '4',
    icon: <AddCardOutlinedIcon />,
    number: "$3,287.49",
    text: 'This week\'s card spending'
  },
  {
    id: '5',
    icon: <AccountBalanceWalletOutlinedIcon />,
    number: "$143,624",
    text: 'Your bank balance'
  },
  {
    id: '6',
    icon: <AccountBalanceWalletOutlinedIcon />,
    number: "$143,624",
    text: 'Your bank balance'
  },
]

const HomeSlider = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };


  return (
    <Box
      sx={{
        p: { xs: '20px' },
        // backgroundColor: '#f1f1f1'
      }}
    >
      <Slider {...settings}>

        {
          sliderData?.map((item, index) => {

            return (<HomeSliderItem key={index} item={item} />)
          })
        }

      </Slider>
    </Box>
  )
}



const HomeSliderItem = ({ item }) => {

  return (
    <Box
      sx={{
        // border: '1px solid #ccc',
        borderRadius: '15px',
        backgroundColor: '#fff',
        boxShadow: '1px 1px 5px 0px #ccc',
        m: { xs: '5px' },
        p: { xs: '20px' },

      }}
    >

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          // backgroundColor: 'red',
          mb:{xs:'10px'},
        }}
      >
        {item?.icon}

        <IconButton
          sx={{
            transform: 'rotate(-90deg)',
            position: 'relative',
            right: '-20px',
            
          }}
        >
          <MoreHorizRounded />
        </IconButton>
      </Box>

      <Typography
      sx={{
        fontWeight: 'bold',
        fontSize: '20px',
        mb: { xs: '20px'},
        color: "#161235",

        // fontFamily: 'Roboto !important',

      }}
      >
        {item?.number}
      </Typography>

      <Typography
        sx={{
        // fontWeight: 'bold',
        fontSize: '14px',
        // mb: { xs: '20px'},
        color: "#161235",

      }}
      >
        {item?.text}
      </Typography>

    </Box>
  )
}

export default HomeSlider