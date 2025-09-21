import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import ReactMarkdown from 'react-markdown';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';

export default function PostEditor() {
  const [value, setValue] = useState(
    '## Write your post here\n\n```js\nconsole.log("Hello World");\n```'
  );

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <div style={{ flex: 1 }}>
        <h3>Editor</h3>
        <CodeMirror
          value={value}
          options={{
            mode: 'markdown',
            theme: 'material',
            lineNumbers: true,
            lineWrapping: true,
          }}
          onBeforeChange={(editor, data, val) => setValue(val)}
        />
      </div>

      <div style={{ flex: 1 }}>
        <h3>Preview</h3>
        <div
          style={{
            border: '1px solid #ddd',
            padding: '16px',
            minHeight: '200px',
            overflowY: 'auto',
          }}
        >
          <ReactMarkdown>{value}</ReactMarkdown>
        </div>
        <button
          style={{ marginTop: '12px' }}
          onClick={() => alert('Publish functionality not implemented yet')}
        >
          Publish
        </button>
      </div>
    </div>
  );
}
