import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const recentEmails = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    name: 'Hannah Morgan',
    event: 'Meeting scheduled',
    time: 'Yesterday at 8:49pm'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    name: 'Megan Clark',
    event: 'Update onmarketing compaing',
    time: 'Yesterday at 8:49pm'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    name: 'Brandon Williams',
    event: 'Design',
    time: 'Yesterday at 8:49pm'
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    name: 'Reid Smith',
    event: 'sdfs',
    time: 'Yesterday at 8:49pm'
  },
]

const HomeList = () => {
  return (
    <Box
      sx={{
        borderRadius: '15px',
        backgroundColor: 'rgba(249, 250, 252, 0.5)',
        backdropFilter: 'blur(8px)',
        boxShadow: '1px 1px 5px 0px #ccc',
        p: { xs: '5px' },
        m: { xs: '20px' },
        
      }}
    >

      <Table>

        {/* <TableHead>
          <TableRow>
            <TableCell>Photo</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Events</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead> */}

        <TableBody>
          {
            recentEmails?.map((item, index) => {

              return (<HomeListItem key={index} item={item} length={recentEmails.length}/>)
            })
          }
        </TableBody>

      </Table>
    </Box>
  )
}

const HomeListItem = ({ item, length }) => {

  return (
    <TableRow
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderBottom: length == item?.id ? 'none' : '1px solid #ccc',
        borderRadius: '15px',
        '&:hover': {
          backgroundColor: '#fff',
          boxShadow: '1px 1px 5px 0px #ccc',
        }
      }}
    >


      <TableCell sx={{ border: 'none', textAlign: 'left', width: '100%' }} >
        <Box
          sx={{
            width: '30px',
            height: '30px',
            overflow: 'hidden',
            borderRadius: '50%',
          }}
        >
          <img src={item.image} alt="" width="100%" height="100%" />
        </Box>
      </TableCell>

      <TableCell sx={{ border: 'none', textAlign: 'left', width: '100%' }} >
        {item?.name}
      </TableCell>

      <TableCell sx={{ border: 'none', textAlign: 'left', width: '100%' }} >
        {item?.event}
      </TableCell>

      <TableCell sx={{ border: 'none', textAlign: 'left', width: '100%' }} >
        {item?.time}
      </TableCell>

    </TableRow>
  )
}

export default HomeList