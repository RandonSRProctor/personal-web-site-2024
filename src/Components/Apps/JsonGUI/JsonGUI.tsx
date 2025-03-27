import JSONVisualizer from './JSONVisualizer/JSONVisualizer';
import './App.css';
import { testObject } from './testObject';
import { useState } from 'react';

export function JsonGUI() {
  const [jsonInput, setJSONInput] = useState('');

  function handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setJSONInput(event.target.value);
  }
  const [jsonToSubmit, setJSONToSubmit] = useState(testObject);

  function visualizeJSONInput() {
    try {
      setJSONToSubmit(JSON.parse(jsonInput));
    } catch {
      setJSONInput('Invalid Submission');
    }
  }

  return (
    <div className="App border border-pink-500">
      <div className="CentralContent flex ">
        <div className="TextInputSection">
          <div className="textareaContainer">
            <textarea
              className="textarea"
              onChange={handleTextChange}
              value={jsonInput}
              placeholder={'Example shown:\n\n' + JSON.stringify(testObject)}
            >
              {JSON.parse(JSON.stringify(testObject))}
            </textarea>
          </div>
          <button onClick={visualizeJSONInput} className="TextAreaButton">
            Visualize
          </button>
        </div>
        <div className="VisualizerContainer">
          <JSONVisualizer data={jsonToSubmit} />
        </div>
      </div>
    </div>
  );
}
