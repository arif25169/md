import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Editor } from 'primereact/editor';
import PrimeReact from 'primereact/api';
import TurndownService from "turndown";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';
const turndownService = new TurndownService();



function App() {

  const [text, setText] = useState('');
  const [md, setMd] = useState('');
  const [copied, setcopied] = useState(false);

  // active ripple effect
  PrimeReact.ripple = true;

  const onText = (e) => {
    setcopied(false)
    setText(e.htmlValue)
    let data = turndownService.turndown(e.htmlValue)
    setMd(data)
  }

  return (
    <div className="App">

      <Editor style={{ height: '450px' }} value={text} onTextChange={onText} />
      <br></br>
      <CopyToClipboard text={md}
        onCopy={() => setcopied(true)}>
        <Button label="Copy to Clipboard"></Button >
      </CopyToClipboard>
    </div>
  );
}

export default App;
