import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SideMenu from '../Components/SideMenu/SideMenu'
import Home from '../Pages/Home/Home'
import NotFound from '../Pages/NotFound/NotFound'

const AppRouter = () => {


    return (
        <BrowserRouter>

            <Box
                sx={{
                    display: 'flex',

                }}
            >

                <SideMenu />

                <Box
                    sx={{
                        height: 'calc(100vh - 20px)',
                        width: '100%',
                        overflow: 'auto',
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Box>

            </Box>

        </BrowserRouter>

    )
}

export default AppRouter