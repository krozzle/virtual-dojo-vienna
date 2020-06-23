/** @jsx jsx */
// enables theme-ui in <jsx>
import { useState } from 'react';
import Modal from 'react-modal';
import { jsx, Box, Button, Flex, Textarea } from 'theme-ui';

const Contact = () => {
  const [modalIsOpen, SetModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('body');
  return (
    <>
      <Button onClick={() => SetModalIsOpen(true)}>Hit us up</Button>
      <Box>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => SetModalIsOpen(false)}
          style={customStyles}
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
          <Textarea name='email-us' cols='30' rows='10'></Textarea>
        </Modal>
      </Box>
    </>
  );
};

export default Contact;
