/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import CheckIcon from '@mui/icons-material/Check';

const ModalTable = ({
  features, mainFeatures, productObj, relatedProductsObj,
}) => {
  const [test, setTest] = useState(productObj.name)
  // TO BE CONTINUED...
  // make a compare products method
  // refactor to be a table
  const mapFeatures = features.map((item, i) => (
    <div key={`modal-table-feature-${i}`} className="product-characteristics-container">
      <div className="whiteCheckIcon"><CheckIcon /></div>
      <p className="featureText">{item.feature && item.value ? `${item.feature}-${item.value}` : item.feature}</p>
      <div className="comparedCheckIcon"><CheckIcon /></div>
    </div>
  ));

  const mapMainFeatures = mainFeatures.map((item, i) => (
    <div key={`modal-table-mainFeature-${i}`} className="product-characteristics-container">
      <div className="mainCheckIcon"><CheckIcon /></div>
      <p className="featureText">{item.feature && item.value ? `${item.feature}-${item.value}` : item.feature}</p>
      <div className="whiteCheckIcon"><CheckIcon /></div>
    </div>
  ));

  useEffect(() => {

  }, [productObj, relatedProductsObj, features, mainFeatures])

  console.log(test)
  return (
    <div className="Modal-Container">
      <h1>Comparing</h1>
      <span className="headline-container">
        <h2 className="mainName">{productObj.name}</h2>
        <h2 className="featuresText">FEATURES</h2>
        <h2 className="relatedName">{relatedProductsObj.name}</h2>
      </span>
      <span className="table-list-container">
        {mapMainFeatures}
        {mapFeatures}
      </span>
    </div>
  );
};
export default ModalTable;

// LIST LIKE IMPLEMENTATION
// import * as React from 'react';
// import CheckIcon from '@mui/icons-material/Check';

// const ModalTable = () => (
//   <div>
//     <h1>Comparing</h1>
//     <span className="headline-container">
//       <h2>Current Product</h2>
//       <h2>Compared Product</h2>
//     </span>
//     <span className="table-list-container">
//       <hr />
//       <div className="product-characteristics-container">
//         <div><CheckIcon /></div>
//         {/* if feature/characteristic is true for current then checkmark else null */}
//         <p>100% Cotten</p>
//         <div><CheckIcon /></div>
//         {/* if feature/characteristic is true for compared then checkmark else null */}
//       </div>
//       <div className="product-characteristics-container">
//         {/* if feature/characteristic is true for current then checkmark else null */}
//         <div><CheckIcon /></div>
//         <p>100% Cotten</p>
//         <div><CheckIcon /></div>
//         {/* if feature/characteristic is true for compared then checkmark else null */}
//       </div>
//     </span>
//   </div>
// );

// export default ModalTable;

//  TABLE IMPLEMENTATION
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