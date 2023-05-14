// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import { Link, useHistory } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import { Button } from '@mui/material';
// import { useEffect } from 'react';
// import axios, { Axios } from 'axios';




// const columns = [
//     { id: 'name', label: 'Service Name', minWidth: 170 },
//     { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//     {
//       id: 'population',
//       label: 'Population',
//       minWidth: 170,
//       align: 'right',
//       format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//       id: 'size',
//       label: 'Size\u00a0(km\u00b2)',
//       minWidth: 170,
//       align: 'right',
//       format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//       id: 'density',
//       label: 'Density',
//       minWidth: 170,
//       align: 'right',
//       format: (value) => value.toFixed(2),
//     },
//   ];
  
//   function createData(name, code, population, size) {
//     const density = population / size;
//     return { name, code, population, size, density };
//   }
  
//   const rows = [
//     createData('India', 'IN', 1324171354, 3287263),
//     createData('China', 'CN', 1403500365, 9596961),
//     createData('Italy', 'IT', 60483973, 301340),
//     createData('United States', 'US', 327167434, 9833520),
//     createData('Canada', 'CA', 37602103, 9984670),
//     createData('Australia', 'AU', 25475400, 7692024),
//     createData('Germany', 'DE', 83019200, 357578),
//     createData('Ireland', 'IE', 4857000, 70273),
//     createData('Mexico', 'MX', 126577691, 1972550),
//     createData('Japan', 'JP', 126317000, 377973),
//   ];


// export const UserHomeSearch = () => {
    
//     const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [users, setUsers] = React.useState([]);
//   useEffect(() => {
//     loadUsers();
//   },[]);
  
//   const loadUsers = async () => {
//     const result = await axios.get("http://localhost:8082/service/user_list");
//     console.log(result.data);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

// //   const history = useHistory();
//   const navigate = useNavigate(); 

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // console.log({
//     //   username: data.get('username'),
//     //   password: data.get('password'),
//     // });
//     navigate('/UserProfile')
//   };
//   return (
//     <div>
        
//     <Autocomplete
//       disablePortal
//       id="combo-box-demo"
//       options={Area}
//       sx={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="Area" />}
//     />
//     <Autocomplete
//       disablePortal
//       id="combo-box-demo"
//       options={Service}
//       sx={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="Services" />}
//     />

// <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {column.format && typeof value === 'number'
//                             ? column.format(value)
//                             // : <Link to={`ServiceDetailsUserSide/${row.id}`}>{value}</Link>}
//                             : <Link to={`/servicerequestuserside`}>{value}</Link>}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//     <Button component={Link} to="/UserProfile" variant="contained" color="primary">
//       Profile
//     </Button>
//     </div>
    
//   );
// }

// const Area = [
//             { label: 'Southampton', id: 1 },
//             { label: 'London', id: 2 },
//             { label: 'Manchester', id: 3 },
//             { label: 'Edinburgh', id: 4 },
//           ];
//           const Service = [
//             { label: 'Cleaning', id: 1 },
//             { label: 'Babysitting', id: 2 },
//             { label: 'Pest Control', id: 3 },
//             { label: 'Plumbing', id: 4 },
//             { label: 'Electrical Repairs', id: 5 },
//             { label: 'Beauty', id: 6 },
//           ];

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import FolderIcon from '@mui/icons-material/Folder';
// import DeleteIcon from '@mui/icons-material/Delete';

// function generate(element) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     }),
//   );
// }

// const Demo = styled('div')(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
// }));

// export const UserHomeSearch = () => {
//   const [dense, setDense] = React.useState(false);
//   const [secondary, setSecondary] = React.useState(false);

//   return (
//     <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
//       <FormGroup row>
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={dense}
//               onChange={(event) => setDense(event.target.checked)}
//             />
//           }
//           label="Enable dense"
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={secondary}
//               onChange={(event) => setSecondary(event.target.checked)}
//             />
//           }
//           label="Enable secondary text"
//         />
//       </FormGroup>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
//             Text only
//           </Typography>
//           <Demo>
//             <List dense={dense}>
//               {generate(
//                 <ListItem>
//                   <ListItemText
//                     primary="Single-line item"
//                     secondary={secondary ? 'Secondary text' : null}
//                   />
//                 </ListItem>,
//               )}
//             </List>
//           </Demo>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
//             Icon with text
//           </Typography>
//           <Demo>
//             <List dense={dense}>
//               {generate(
//                 <ListItem>
//                   <ListItemIcon>
//                     <FolderIcon />
//                   </ListItemIcon>
//                   <ListItemText
//                     primary="Single-line item"
//                     secondary={secondary ? 'Secondary text' : null}
//                   />
//                 </ListItem>,
//               )}
//             </List>
//           </Demo>
//         </Grid>
//       </Grid>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
//             Avatar with text
//           </Typography>
//           <Demo>
//             <List dense={dense}>
//               {generate(
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar>
//                       <FolderIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText
//                     primary="Single-line item"
//                     secondary={secondary ? 'Secondary text' : null}
//                   />
//                 </ListItem>,
//               )}
//             </List>
//           </Demo>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
//             Avatar with text and icon
//           </Typography>
//           <Demo>
//             <List dense={dense}>
//               {generate(
//                 <ListItem
//                   secondaryAction={
//                     <IconButton edge="end" aria-label="delete">
//                       <DeleteIcon />
//                     </IconButton>
//                   }
//                 >
//                   <ListItemAvatar>
//                     <Avatar>
//                       <FolderIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText
//                     primary="Single-line item"
//                     secondary={secondary ? 'Secondary text' : null}
//                   />
//                 </ListItem>,
//               )}
//             </List>
//           </Demo>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';


export const UserHomeSearch = () => {
  const items = [
    {
      id: 1,
      name: 'Item 1',
      description: 'Description of Item 1',
      reviews: [
        {
          id: 1,
          text: 'Review 1 for Item 1',
          rating: 4,
        },
        {
          id: 2,
          text: 'Review 2 for Item 1',
          rating: 5,
        },
      ],
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'Description of Item 2',
      reviews: [
        {
          id: 1,
          text: 'Review 1 for Item 2',
          rating: 3,
        },
        {
          id: 2,
          text: 'Review 2 for Item 2',
          rating: 4,
        },
      ],
    },
  ];

  return (
    <ul style={{ color: 'white' }}>
    {items.map(item => (
      // <Link to={`/item/${item.id}`} key={item.id}>
      <Link to={`/servicerequestuserside`}>
        <li>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <ul>
            {item.reviews.map(review => (
              <li key={review.id}>
                <p>{review.text}</p>
                <p>Rating: {review.rating}/5</p>
              </li>
            ))}
          </ul>
        </li>
      </Link>
    ))}
  </ul>
  );
};

export default UserHomeSearch;