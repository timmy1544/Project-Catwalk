import * as React from 'react';

const ModalTable = () => (
  <div>
    <h1>Comparing</h1>
    <span className="headline-container">
      <h2>Current Product</h2>
      <h2>Compared Product</h2>
    </span>
    <span className="table-list-container">
      <hr />
      <ul>
        <li>FREE</li>
        <li>&#10004; Single User &#10004;</li>
        <li>&#10004; Single User</li>
        <li>&#10004; Single User</li>
        <li>&#10004; Single User</li>
        <li>&#10004; Single User</li>
        <li>&#10006; Single User</li>
        <li>&#10006; Single User</li>
      </ul>
    </span>
  </div>
);

export default ModalTable;

// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];


// const ModalTable = () => (
//   <TableContainer component={Paper}>
//     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//       <TableHead>
//         <TableRow>
//           <TableCell>Dessert (100g serving)</TableCell>
//           <TableCell align="right">Calories</TableCell>
//           <TableCell align="right">Fat&nbsp;(g)</TableCell>
//           <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//           <TableCell align="right">Protein&nbsp;(g)</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {rows.map((row) => (
//           <TableRow
//             key={row.name}
//             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//           >
//             <TableCell component="th" scope="row">
//               {row.name}
//             </TableCell>
//             <TableCell align="right">{row.calories}</TableCell>
//             <TableCell align="right">{row.fat}</TableCell>
//             <TableCell align="right">{row.carbs}</TableCell>
//             <TableCell align="right">{row.protein}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
// );

// export default ModalTable