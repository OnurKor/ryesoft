import { Box, Typography } from '@mui/material'
import React from 'react'
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)


const HomeCharts = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        p: { xs: '20px' },
        alignItems: 'center',
  

      }}
    >

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          // gap: '5px',
          // backgroundColor: 'red',
        }}
      >
        <HomeChartItems
          item={{
            name: 'New clients',
            number: 54,
            rate: 18.7,
          }}
        />
        <HomeChartItems
          item={{
            name: 'Invoices overdue',
            number: 5,
            rate: 2.7,
          }}
        />
      </Box>

      <Box
        sx={{
          borderRadius: '15px',
          backgroundColor: '#fff',
          boxShadow: '1px 1px 5px 0px #ccc',
          m: { xs: '5px' },
          p: { xs: '20px' },
          flex: 1,
          overflow: 'hidden',
          maxHeight: '320px',
          backgroundColor: 'rgba(256, 256, 256, 0.5)',
        backdropFilter: 'blur(8px)',
        }}
      >

        <Line
          // width={100}
          height={230}

          data={{
            labels: ['Feb 14', 'Feb 15', 'Feb 16', 'Feb 17', 'Feb 18', 'Feb 19', 'Feb 20',],
            datasets: [
              {
                id: "1",
                label: 'option 1',
                data: [15, 11, 12, 16, 18, 13, 17]
              },
              {
                id: "2",
                label: 'option 2',
                data: [11, 15, 18, 16, 14, 13, 15]
              }
            ]
          }}


          options={{
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
              mode: 'index',
              intersect: false,
            },
            // stacked: false,
            // plugins: {
            //   title: {
            //     display: true,
            //     text: 'Revenue',
            //   },
            // },
            scales: {
              // y: {
              //   type: 'linear',
              //   display: true,
              //   position: 'left',
              // },
              // y1: {
              //   type: 'linear',
              //   display: true,
              //   position: 'left',
              //   grid: {
              //     drawOnChartArea: false,
              //   },
              // },
            },
          }}

        />

      </Box>

    </Box>
  )
}

const HomeChartItems = ({ item }) => {


  return (
    <Box
      sx={{
        borderRadius: '15px',
        backgroundColor: '#fff',
        boxShadow: '1px 1px 5px 0px #ccc',
        m: { xs: '5px' },
        p: { xs: '20px' },
        backgroundColor: 'rgba(256, 256, 256, 0.5)',
        backdropFilter: 'blur(8px)',
        minWidth: {
          xs: '200px',
        }
      }}
    >

      <Typography
        sx={{
          fontWeight: 'bold',
          mb: { xs: '10px' }
        }}
      >
        {item?.name}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: '35px',
            color: "#161235",
          }}
        >
          {item?.number}
        </Typography>
        <Typography
          sx={{
            color: item?.rate > 10 ? '#92da86' : '#a55063',
            backgroundColor: item?.rate > 10 ? 'rgba(147, 218, 134, 0.3)' : 'rgba(165, 80, 98, 0.3)',
            p: { xs: '5px 10px' },
            borderRadius: '5px',
            fontSize: '10px',
          }}
        >
          +{item?.rate}
        </Typography>
      </Box>

    </Box>
  )
}

export default HomeCharts