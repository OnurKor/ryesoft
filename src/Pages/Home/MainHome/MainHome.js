import { Box, Typography } from '@mui/material'
import React from 'react'
import HomeCharts from './HomeCharts'
import HomeList from './HomeList'
import HomeSlider from './HomeSlider'

const MainHome = () => {
    return (
        <Box
            sx={{
                // backgroundColor: 'red',
                height: 'auto'
            }}
        >

            <Typography
                sx={{
                    fontSize: { xs: '22px' },
                    fontWeight: 'bold',
                    lineHeight:'36px',
                }}
            >
                Good morning, James!
            </Typography>
            
            <HomeSlider />
            <HomeCharts />
            <HomeList />

        </Box>
    )
}

export default MainHome