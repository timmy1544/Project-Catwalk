// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import { styled, Box } from '@mui/system';
import { Star } from '@mui/icons-material/';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import ModalTable from './ModalTable';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 'auto',
  height: 'auto',
  bgcolor: 'white',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

export default function Modal({ features, mainFeatures, productObj, relatedProductsObj }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Star
        onClick={handleOpen}
        sx={{ color: '#0098fa' }}
      />
      <StyledModal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <ModalTable
            features={features}
            mainFeatures={mainFeatures}
            productObj={productObj}
            relatedProductsObj={relatedProductsObj}
          />
        </Box>
      </StyledModal>
    </div>
  );
}