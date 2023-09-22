# react-modal

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-modal.svg)](https://www.npmjs.com/package/react-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i react-modal-babi
```

## Usage

```jsx
import React, { useState } from 'react';
import Modal from 'react-modal-babi';

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal show={showModal} onClickCloseBtn={closeModal}>
        <h1>Hello, I'm a modal!</h1>
        <p>This is some modal content.</p>
      </Modal>
    </div>
  );
}

export default App;
```

## License

MIT © [blayres](https://github.com/blayres)
