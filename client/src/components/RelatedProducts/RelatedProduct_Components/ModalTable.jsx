/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import CheckIcon from '@mui/icons-material/Check';

const ModalTable = ({
  features, mainFeatures, productObj, relatedProductsObj, item,
}) => {
  const style = {
    textAlign: 'center',
  };

  const divSize = {
    // tableLayout: 'fixed',
    width: '100%',
  }

  const mapFeatures = features.map((item, i) => (
    <tr key={`modal-table-feature-${i}`} style={style}>
      <td><CheckIcon /></td>
      <td>
        {
          item.feature
            && item.value
            ? `~${item.feature}~ \n

          ${item.value}` : item.feature
        }
      </td>
      <td><CheckIcon /></td>
    </tr>
  ));

  const mapMainFeatures = mainFeatures.map((item, i) => (
    <tr key={`modal-table-mainFeature-${i}`} style={style}>
      <td><CheckIcon /></td>
      <td>
        {
          item.feature
            && item.value
            ? `~${item.feature}~ \n

          ${item.value}` : item.feature
        }
      </td>
      <td><CheckIcon /></td>
    </tr>
  ));


  console.log(item);
  return (
    <div style={divSize}>

      <p>Comparing...</p>
      <table className="table table-striped">
        <thead>
          <tr className="modal-headers" style={style}>
            <th scope="col">{productObj.name}</th>
            <th scope="col">Features</th>
            <th scope="col">{relatedProductsObj.name}</th>
          </tr>
        </thead>
        <tbody>
          {mapFeatures}
          {mapMainFeatures}
        </tbody>
      </table>
    </div>
  );
};
export default ModalTable;

// /* eslint-disable react/no-array-index-key */
// import React, { useState, useEffect } from 'react';
// import CheckIcon from '@mui/icons-material/Check';

// const ModalTable = ({
//   features, mainFeatures, productObj, relatedProductsObj,
// }) => {
//   // TO BE CONTINUED...
//   // make a compare products method
//   // refactor to be a table
//   const mapFeatures = features.map((item, i) => (
//     <div key={`modal-table-feature-${i}`} className="product-characteristics-container">
//       <div className="whiteCheckIcon"><CheckIcon /></div>
//       <p className="featureText">{item.feature && item.value ? `${item.feature}-${item.value}` : item.feature}</p>
//       <div className="comparedCheckIcon"><CheckIcon /></div>
//     </div>
//   ));

//   const mapMainFeatures = mainFeatures.map((item, i) => (
//     <div key={`modal-table-mainFeature-${i}`} className="product-characteristics-container">
//       <div className="mainCheckIcon"><CheckIcon /></div>
//       <p className="featureText">{item.feature && item.value ? `${item.feature}-${item.value}` : item.feature}</p>
//       <div className="whiteCheckIcon"><CheckIcon /></div>
//     </div>
//   ));

//   // useEffect(() => {

//   // }, [productObj, relatedProductsObj, features, mainFeatures])

//   return (
//     <div className="Modal-Container">
//       <h1>Comparing</h1>
//       <span className="headline-container">
//         <h2 className="mainName">{productObj.name}</h2>
//         <h2 className="featuresText">FEATURES</h2>
//         <h2 className="relatedName">{relatedProductsObj.name}</h2>
//       </span>
//       <span className="table-list-container">
//         {mapMainFeatures}
//         {mapFeatures}
//       </span>
//     </div>
//   );
// };
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