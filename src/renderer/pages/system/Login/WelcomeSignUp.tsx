/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import BottomNavbar from '../../../components/BottomNavbar';
import faceIcon from '../../../../../assets/face.png';

interface WelcomeSignUpProps {
  onStepChange: (step: number) => void;
}

const WelcomeSignUp: React.FC<WelcomeSignUpProps> = ({ onStepChange }) => {
  const titles = [
    "Hi, I'm Balnce...",
    '...a personal ai guardian designed to protect your privacy and data.',
    "I'm your navigator and I grow with you, but you decide who and what I will become.",
    'My mission is to help you unleash the power and potential of owning the data you create and generate.',
    'You should be able to freely express who you are, who you want to be, and thrive in digital economies.',
    'I have superpowers to help achieve your goals, but with great power comes great responsibility.',
    'The Story of Balnce',
    "Welcome, I'd love to know your name",
    "Welcome, I'd love to know your name",
  ];

  // interface Actions {
  //   title: string;
  //   url: string;
  // }

  // interface Message {
  //   avatarSrc: string;
  //   source: string;
  //   content: {
  //     content: string;
  //     actions?: [Actions];
  //   }[];
  // }

  const [currentStep, setCurrentStep] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [messageFeed, setMessageFeed] = useState<Message[]>([]);
  const [shownAiReply, setShownAiReply] = useState(false);

  const { login } = useAuth();

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onStepChange(currentStep);
  }, [currentStep, onStepChange]);

  const handleClick = () => {
    if (currentStep === 6 || currentStep > 7) {
      return;
    }
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      setCurrentStep((prevStep) => prevStep + 1);
    }, 300); // Duration of the animation
  };

  // Define the type for an action
  type Action = {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
    title: string;
    url: string;
  };

  // Define the type for message content
  type MessageContent = {
    content: string;
    actions?: Action[];
  };

  // Define the type for a message
  type Message = {
    avatarSrc: string;
    source: string;
    content: MessageContent[];
  };

  const handleAvatarDemoClick = () => {
    console.log('avatar demo click')
  };

  const handleSignUpClick = () => {
    console.log('sign up click')
  };

  const handleStartClick = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      setCurrentStep((prevStep) => prevStep + 1);
    }, 300); // Duration of the animation
  };

  const extractMetaNameAndCleanString = (input: string) => {
    // Define a regular expression to match the <meta name='Dillon' /> tag
    const metaTagRegex = /<meta name="([^']*)" \/>/;

    // Find the match and extract the name
    const match = input.match(metaTagRegex);
    let name = '';

    if (match) {
      name = match[1];
    }

    // Remove the <meta name='Dillon' /> tag from the string
    const cleanedString = input.replace(metaTagRegex, '');

    return { name, cleanedString };
  };

  const userMessage = (message: string) => {
    setMessageFeed((prevMessageFeed) => {
      const newMessageFeed = [...prevMessageFeed];

      // Check if the most recent message exists and its source is 'user'
      if (
        newMessageFeed.length > 0 &&
        newMessageFeed[newMessageFeed.length - 1].source === 'user'
      ) {
        // Append the new content to the most recent message's content
        newMessageFeed[newMessageFeed.length - 1].content.push({
          content: message,
        });
      } else {
        // If not, create a new user message and append it to the messageFeed
        const postMsg: Message = {
          avatarSrc: '',
          source: 'user',
          content: [{ content: message }],
        };
        newMessageFeed.push(postMsg);

        const promptTemplate = `You are Balnce, an expert hyperpersonalized life-ai and you are onboarding a user in a wizard. You just asked the user for their name (first name) or
        said they can ask any question about Balnce. Only if they provide a name, respond with '<meta name="{name}" />Hey {name}! It's great to meet you.'.
        If they ask a question about Balnce, respond with the answer. If they ask anything else, be friendly and tell the user you're sorry but can't help with that and to please provide their name or ask a question about Balnce.', feel free to add some light humor.
        Blance is a hyperpersonalized life-Ai that utilizes the latest in AI, crypto, and Web3 technologies to automate your life, relationships, and devices. User Input: "${message}"`;
        const userMessageObj = {
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
                text: promptTemplate,
              },
            },
          ],
        };
        window.electron.ipcRenderer.sendMessage('ipc-example', userMessageObj);
      }

      return newMessageFeed;
    });
  };

  const aiMsg: MessageContent = {
    content:
      'Can I start by showing you how to create your secure digital twin, or would you like to jump right in and create an account?',
    actions: [
      { title: 'The avatar facial demo', onClick: handleAvatarDemoClick },
      { title: 'Sign up', onClick: handleSignUpClick },
    ],
  };
  const aiMsgC2: MessageContent = {
    content:
      "You can also ask me anything about Balnce, and I'll do my best to answer your questions.",
  };

  // Function to append content to the most recent AI message
  const appendToRecentAiMessage = (messageContent: MessageContent) => {
    setMessageFeed((prevMessageFeed) => {
      const newMessageFeed = [...prevMessageFeed];
      if (
        newMessageFeed.length > 0 &&
        newMessageFeed[newMessageFeed.length - 1].source === 'ai'
      ) {
        newMessageFeed[newMessageFeed.length - 1].content.push(messageContent);
      } else {
        const newAiMsg: Message = {
          avatarSrc: '',
          source: 'ai',
          content: [messageContent],
        };
        newMessageFeed.push(newAiMsg);
      }
      return newMessageFeed;
    });
  };

  useEffect(() => {
    const handleIpcExample = (arg: {
      messages: { content: { text: any } }[];
    }) => {
      console.log(arg.messages[0].content.text);
      const result = extractMetaNameAndCleanString(
        arg.messages[0].content.text,
      );
      console.log(result.name);
      console.log(result.cleanedString);
      const postMsg: Message = {
        avatarSrc: '',
        source: 'ai',
        content: [{ content: result.cleanedString }],
      };

      setMessageFeed((prevMessageFeed) => [...prevMessageFeed, postMsg]);

      if (result.name) {
        setTimeout(() => {
          // Initial message
          appendToRecentAiMessage(aiMsg);

          // Schedule the follow-up messages
          setTimeout(() => {
            appendToRecentAiMessage(aiMsgC2);
          }, 700);
        }, 1000);
      }
    };

    window.electron.ipcRenderer.on('ipc-example', handleIpcExample);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      window.electron.ipcRenderer.removeListener(
        'ipc-example',
        handleIpcExample,
      );
    };
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messageFeed]);

  const handleSendMessage = (message: string) => {
    console.log('Message from BottomNavbar:', message);
    userMessage(message);
  };

  return (
    <div
      className={`nodrag w-full h-screen mt-10 ${
        currentStep !== 6 && currentStep < 8 ? 'cursor-pointer' : ''
      }`}
      onClick={handleClick}
    >
      <div
        className={`flex max-w-lg mx-auto w-full ${
          currentStep > 7 ? 'min-h-0 flex-col pr-10' : 'flex-col'
        }`}
      >
        <div
          ref={chatContainerRef}
          className="nodrag overflow-y-auto pb-48 max-w-lg w-full h-screen"
        >
          <div
            className={`flex fadeInUp items-center justify-center align-center px-6 transition-all ${
              currentStep > 7 ? '-ml-8 flex-row' : 'min-h-screen flex-col'
            }`}
          >
            <div
              className={`${
                currentStep > 7 ? 'scale-50' : 'scale-150'
              } transform-gpu`}
            >
              <div className="rainbow-container bg-gradient-to-tr from-gray-900 bg-blue-900 animate transition-all duration-100 mb-12 absolute">
                <div className="green" />
                <div className="pink" />
                <div className="blue" />
              </div>
            </div>
            <h1
              className={`${
                currentStep > 7
                  ? 'text-xl leading-0 font-semibold -mt-2'
                  : 'text-4xl h-64'
              } ${animate ? 'fadeOutUp' : 'fadeInUp'} mb-1`}
            >
              {titles[currentStep]}
              <div
                className={`inline-block w-full text-sm text-gray-100 font-thin tracking-wide mt-2 ${
                  currentStep > 7 ? 'fadeInUp delay-1000' : 'hidden'
                }`}
              >
                So i don't have to call you a user, which is impersonal, and a
                bit rude of me. And no wrries, you can always tell me to call
                you something else later.
              </div>
            </h1>
            <div
              className={`nodrag fadeInUp rounded-3xl bg-white text-black w-full p-6 my-4 font-thin ${
                currentStep == 6 ? '' : 'hidden'
              } -mt-48`}
            >
              <p>
                Hi, I'm Balnce, a personal ai guardian designed to protect your
                privacy and data. I'm your navigator and I grow with you, but
                you decide who and what I will become.
              </p>
              <br />
              <p>
                My mission is to help you unleash the power and potential of
                owning the data you create and generate. You should be able to
                freely express who you are, who you want to be, and thrive in
                digital economies.
              </p>
              <br />
              <p>
                I have superpowers to help achieve your goals, but with great
                power comes great responsibility.
              </p>
              <button
                onClick={handleStartClick}
                className="bg-black w-full py-3 mt-12 text-white rounded-full shadow-md shadow-gray-600"
              >
                Take me in
              </button>
            </div>
            {/* <button
              onClick={login}
              className={`nodrag fadeIn nodrag text-white bg-transparent text-sm tracking-wider absolute bottom-12 mb-10 ${
                currentStep > 6 ? "hidden" : ""
              }`}
            >
              Log Into Existing Balnce Account
            </button> */}
          </div>

          {messageFeed.map((item, index) => (
            <div
              className={`${
                currentStep > 7 ? '' : 'hidden'
              } flex scrollInChat flex-col`}
              key={index}
            >
              <div className="flex pt-6 text-sm text-gray-100 font-thin tracking-wide">
                <div
                  className={`h-full${
                    currentStep > 7 ? 'scale-50' : 'scale-150'
                  } transform-gpu`}
                >
                  {item.source === 'ai' ? (
                    <div className="max-w-8 max-h-8 mx-2 mr-3 -mt-2 rainbow-container bg-gradient-to-tr from-gray-900 bg-blue-900 animate transition-all duration-100 mb-12 absolute">
                      <div className="green" />
                      <div className="pink" />
                      <div className="blue" />
                    </div>
                  ) : (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img src={faceIcon} className="w-7 h-7 mx-4 ml-3 -mt-1" />
                  )}
                </div>
                <div className="">
                  {item.content.map((contentItem, index) => (
                    <div className="fadeInUp " key={index}>
                      {contentItem.content}
                      {contentItem.actions ? (
                        <div className="w-full flex flex-col gap-2 mt-6 font-semibold text-xs">
                          {contentItem.actions.map((actionItem, index) => (
                            <div key={index} className='w-11/12'>
                              <button
                                onClick={actionItem.onClick}
                                className="rounded-full text-sm w-full bg-gradient-to-tl from-purple-900 bg-blue-900 mt-2 py-4"
                              >
                                {actionItem.title}
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <></>
                      )}
                      <br />
                      <br />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`nodrag ${
          currentStep > 7 ? 'fadeInUp' : 'fadeOutUp hidden'
        } flex absolute bottom-0 w-full max-h-16]`}
      >
        <BottomNavbar onSendMessage={handleSendMessage} disableIcons />
      </div>
    </div>
  );
};

export default WelcomeSignUp;
