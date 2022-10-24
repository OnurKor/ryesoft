import { Box, Grid } from '@mui/material'
import React from 'react'
import MainHome from './MainHome/MainHome'
import SideHome from './SideHome/SideHome'

const Home = () => {
    return (
        <Box
            sx={{
                // backgroundColor: 'red',
                width: '100%',
                px:{ xs: '10px'}
            }}
        >

            <Grid container spacing={2}>

                <Grid item xs={12} md={8}>
                    <MainHome />
                </Grid>

                <Grid item xs={12} md={4}>
                    <SideHome />
                </Grid>

            </Grid>

        </Box>
    )
}

export default Home