/** @jsx jsx */
// enables theme-ui in <jsx>
import { useState } from 'react';
import Modal from 'react-modal';
import { jsx, Box, Button, Flex } from 'theme-ui';

const Contact = () => {
  const [modalIsOpen, SetModalIsOpen] = useState(false);

  Modal.setAppElement('body');
  return (
    <Box sx={{ top: '30vh', left: '50vw', bg: 'white' }}>
      <Button onClick={() => SetModalIsOpen(true)}>Hit us up</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => SetModalIsOpen(false)}
        style={{
          // todo position: ,
          top: '100px',
          left: '100px',
          bg: 'white',
          // width: '80em',
          overlay: {
            background: 'grey',
          },
        }}
      >
        <Flex
          sx={{
            // position: 'fixed',

            opacity: 0.9,
            justifyContent: 'space-between',
          }}
        >
          <h2>Contact us!</h2>
          <Button onClick={() => SetModalIsOpen(false)}>Close dialog</Button>
        </Flex>
        <textarea name='email-us' cols='30' rows='10'></textarea>
      </Modal>
    </Box>
  );
};

export default Contact;
