/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import CheckIcon from '@mui/icons-material/Check';

const ModalTable = ({
  features, mainFeatures, productObj, relatedProductsObj,
}) => {
  const [compareFeatures, setCompareFeatures] = useState([]);

  const style = {
    textAlign: 'center',
    wordWrap: 'break-word',
    whiteSpace: 'normal',
  };

  const checkColor = {
    color: 'green',
  };

  const divSize = {
    width: '100%',
  };

  const tableFeatures = compareFeatures.map((item, i) => (
    <tr key={`modal-table-mainFeature-${i}`} style={style}>
      <td style={checkColor}>{item.compared ? <CheckIcon /> : null}</td>
      <td>
        {item.value}
      </td>
      <td style={checkColor}>{item.main ? <CheckIcon /> : null}</td>
    </tr>
  ));

  const addFeatures = (features, mainFeatures) => {
    const reducedFeatures = [];
    const comparedHasFeat = [];
    const sameFeatures = [];

    features.forEach(item => {
      if (reducedFeatures.indexOf(item.value) === -1 && item.value !== null) {
        reducedFeatures.push(item.value);
        comparedHasFeat.push({
          value: item.value,
          compared: true,
          main: false,
        });
      }
    });

    mainFeatures.forEach(item => {
      if (reducedFeatures.indexOf(item.value) === -1 && item.value !== null) {
        reducedFeatures.push(item.value);
        comparedHasFeat.push({
          value: item.value,
          compared: false,
          main: true,
        });
      } else if (reducedFeatures.indexOf(item.value) >= 0 && item.value !== null) {
        sameFeatures.push({
          value: item.value,
          compared: true,
          main: true,
        });
      }
    });

    comparedHasFeat.forEach((item) => {
      for (const key in sameFeatures) {
        if (item.value === sameFeatures[key].value) {
          item.main = true;
        }
      }
    });

    setCompareFeatures(comparedHasFeat);
  };

  useEffect(() => {
    addFeatures(features, mainFeatures);
  }, [features, mainFeatures]);

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
          {tableFeatures}
        </tbody>
      </table>
    </div>
  );
};
export default ModalTable;