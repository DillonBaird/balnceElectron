/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSend = () => {
    if (input) {
      setMessages([...messages, `You: ${input}`]);
      window.electron.ipcRenderer.sendMessage('ipc-example', [input]);
      setInput('');
    }
  };

  useEffect(() => {
    window.electron.ipcRenderer.once('ipc-example', (arg) => {
      console.log(arg);
      setMessages((prevMessages) => [...prevMessages, `AI: ${arg}`]);
    });
  });

  return (
    <div className="text-black h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-4">
        <div className="h-96 overflow-y-scroll mb-4 p-2 border rounded-lg">
          {messages.map((msg, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={`nodrag p-2 my-2 rounded-lg ${
                msg.startsWith('You:') ? 'bg-blue-100' : 'bg-gray-100'
              }`}
            >
              {msg}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="nodrag flex-1 p-2 border rounded-lg"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSend}
            className="nodrag ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
