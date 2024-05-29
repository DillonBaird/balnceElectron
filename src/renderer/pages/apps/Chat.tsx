/* eslint-disable react/button-has-type */
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const messageHandlerSet = useRef(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    const promptTemplate = `Imagine that you are a user onboarding wizard for an app called Balnce. You just asked the user for their name (first name) or said they can ask any question about Balnce. If they provide a name, respond with 'Hey {name}! It's nice to meet you. Let's get you signed up! {{ <action url="/apps">}}Sign Up{{</action>}}'. If they ask a question about Balnce, respond with the answer. If they ask anything else, be friendly and tell the user you're sorry but can't help with that and to please provide their name or ask a question about Balnce.', be annoyed/sassy if they keep doing it. User Input: "${input}"`;
    if (input) {
      const userMessage = {
        conversation_id: '12345',
        messages: [
          {
            message_id: String(new Date().getTime()),
            timestamp: new Date().toISOString(),
            sender: {
              id: 'user_001',
              type: 'user',
            },
            content: {
              type: 'text',
              text: input,
            },
          },
        ],
      };

      setMessages([...messages, JSON.stringify(userMessage)]);
      userMessage.messages[0].content.text = promptTemplate;
      window.electron.ipcRenderer.sendMessage('ipc-example', userMessage);
      setInput('');
    }
  };

  useEffect(() => {
    const handleIpcExample = (arg) => {
      console.log(arg.messages[0].content.text);
      setMessages((prevMessages) => [...prevMessages, JSON.stringify(arg)]);
    };

    window.electron.ipcRenderer.on('ipc-example', handleIpcExample);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      window.electron.ipcRenderer.removeListener(
        'ipc-example',
        handleIpcExample,
      );
    };
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="text-black h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-4">
        <div
          ref={chatContainerRef}
          className="nodrag h-96 overflow-y-scroll mb-4 p-2 border rounded-lg"
        >
          {messages.map((msg, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={`scrollInMessage nodrag p-2 my-2 rounded-lg ${
                JSON.parse(msg).messages[0].sender.type === 'user'
                  ? 'bg-blue-100'
                  : 'bg-gray-100'
              }`}
            >
              {console.log(msg)}
              {JSON.parse(msg).messages[0].content.text}
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
