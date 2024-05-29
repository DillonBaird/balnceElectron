/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import BottomNavbar from '../../../components/BottomNavbar';
import faceIcon from '../../../../../assets/face.png';
import backIcon from '../../../../../assets/backIcon.png';

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
    'Sign up mode activated',
    'Sign up mode activated',
    'Create Your Secure Digital Twin',
    'Create Your Secure Digital Twin',
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
  const [myName, setMyName] = useState('');
  const [verifyDeviceModal, setVerifyDeviceModal] = useState(false);
  const [verifyEmailModal, setVerifyEmailModal] = useState(false);
  const [verifyCodeSent, setVerifyCodeSent] = useState(false);
  const [deviceVerified, setDeviceVerified] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onStepChange(currentStep);
    // console.log(currentStep);
  }, [currentStep, onStepChange]);

  const handleClick = () => {
    if (currentStep === 8) {
      setMessageFeed([]);
    }
    if (
      currentStep === 6 ||
      currentStep === 7 ||
      currentStep === 9 ||
      currentStep > 10
    ) {
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
    success: boolean;
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
    console.log('avatar demo click');
  };

  const handleSignUpClick = () => {
    console.log('sign up click');
    setTimeout(() => {
      setAnimate(false);
      setCurrentStep(8);
    }, 300); // Duration of the animation
  };

  const handleVerifyDeviceClick = () => {
    console.log('verify device click');
    setVerifyDeviceModal(true);
    console.log(verifyDeviceModal);
  };

  const handleBackClick = () => {
    setVerifyDeviceModal(false);
    setVerifyEmailModal(false);
    setVerifyCodeSent(false);
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
      const result = extractMetaNameAndCleanString(
        arg.messages[0].content.text,
      );
      const postMsg: Message = {
        avatarSrc: '',
        source: 'ai',
        content: [{ content: result.cleanedString }],
      };

      setMessageFeed((prevMessageFeed) => [...prevMessageFeed, postMsg]);

      if (result.name) {
        setMyName(result.name.charAt(0).toUpperCase() + result.name.slice(1));
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
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messageFeed]);

  const handleSendMessage = (message: string) => {
    console.log('Message from BottomNavbar:', message);
    userMessage(message);
  };

  const handleSendVerifyCode = () => {
    console.log('send verify code');
    setVerifyCodeSent(true);
  };

  const handleDeviceVerified = () => {
    setVerifyCodeSent(false);
    setVerifyDeviceModal(false);
    setTimeout(() => {
      setDeviceVerified(true);
    }, 500);

    const aiMsg2: MessageContent = {
      content: 'Device registered and verified.',
    };
    const aiMsg3: MessageContent = {
      content:
        "Now add your email address, and all of your other preferences, settings and permissions will be created once you're in.",
      actions: [
        {
          title: 'Add my email',
          onClick: handleClickEmailVerify,
          success: emailVerified,
        },
      ],
    };

    setTimeout(() => {
      appendToRecentAiMessage(aiMsg2);
      setTimeout(() => {
        appendToRecentAiMessage(aiMsg3);
      }, 500);
    }, 800);
  };

  const handleEmailVerified = () => {
    const copyMsgFeed = [...messageFeed];
    copyMsgFeed.pop();
    setMessageFeed(copyMsgFeed);
    setEmailVerified(true);
    // handleDeviceVerified();
    const aiMsg2: MessageContent = {
      content: 'Device registered and verified.',
    };
    const aiMsg3: MessageContent = {
      content:
        "Now add your email address, and all of your other preferences, settings and permissions will be created once you're in.",
      actions: [
        {
          title: 'Add your email',
          onClick: handleClickEmailVerify,
          success: true,
        },
      ],
    };

    appendToRecentAiMessage(aiMsg2);
    appendToRecentAiMessage(aiMsg3);
    setTimeout(() => {
      setVerifyEmailModal(false);
      setTimeout(() => {
        setMessageFeed([]);
        setCurrentStep(10);
      }, 1200);
    }, 500);

    // const aiMsg2: MessageContent = {
    //   content: 'Device registered and verified.',
    // };
    // const aiMsg3: MessageContent = {
    //   content:
    //     "Now add your email address, and all of your other preferences, settings and permissions will be created once you're in.",
    //   actions: [{ title: 'Add your email', onClick: handleClickEmailVerify }],
    // };

    // setTimeout(() => {
    //   appendToRecentAiMessage(aiMsg2);
    //   setTimeout(() => {
    //     appendToRecentAiMessage(aiMsg3);
    //   }, 500);
    // }, 800);
  };

  const handleClickEmailVerify = () => {
    setVerifyEmailModal(true);
  };

  const handleVerifyPhoneInput = () => {
    // input capture stull here to get phone number
  };

  const VerifyModal = () => {
    return (
      <div className="bg-gradient-to-b via-black from-gray-900 p-6 block h-screen w-full max-w-lg mx-auto text-xl text-white">
        <div
          className="mt-4 nodrag rounded-full border border-gray-600 hover:border-gray-500 hover:bg-gray-800 transition-all w-10 h-10 mx-0 p-3 inline-block fadeIn cursor-pointer"
          onClick={handleBackClick}
        >
          <img draggable="false" src={backIcon} className="" alt="Back" />
        </div>
        <div className="flex flex-col w-full items-center mt-36">
          <div className="scale-150">
            <div className="rainbow-container bg-gradient-to-tr from-gray-900 bg-blue-900 animate transition-all duration-100 mb-12 absolute">
              <div className="green" />
              <div className="pink" />
              <div className="blue" />
            </div>
          </div>
          <h1 className="text-3xl">Verify your device</h1>
          {verifyCodeSent ? (
            <>
              <span className="text-lg m-6 text-center">
                Enter the 4 digit number that was sent to
                <br />
                <strong className="text-lg tracking-wider">xxx-xxx-xxxx</strong>
              </span>
              <div className="flex flex-row gap-2">
                <input
                  className="bg-transparent border w-16 border-gray-700 rounded-full text-3xl p-4 font-bold text-center tracking-wider outline-none"
                  type="text"
                  maxLength={1}
                />
                <input
                  className="bg-transparent border w-16 border-gray-700 rounded-full text-3xl p-4 font-bold text-center tracking-wider outline-none"
                  type="text"
                  maxLength={1}
                />
                <input
                  className="bg-transparent border w-16 border-gray-700 rounded-full text-3xl p-4 font-bold text-center tracking-wider outline-none"
                  type="text"
                  maxLength={1}
                />
                <input
                  className="bg-transparent border w-16 border-gray-700 rounded-full text-3xl p-4 font-bold text-center tracking-wider outline-none"
                  type="text"
                  maxLength={1}
                />
              </div>
              <button
                onClick={handleSendVerifyCode}
                className="text-base m-6 bg-transparent font-semibold"
              >
                Resend code
              </button>
              <button
                onClick={handleDeviceVerified}
                className="text-base text-green-800 m-6 bg-transparent"
              >
                Simulate verify
              </button>
            </>
          ) : (
            <>
              <span className="text-lg m-6 text-center">
                Enter your phone number to continue, we will send you a code to
                verify.
              </span>
              <input
                className="bg-transparent border border-gray-700 rounded-full text-3xl p-4 font-bold text-center tracking-wider outline-none"
                type="text"
              />
              <button
                onClick={handleSendVerifyCode}
                className="m-5 rounded-full text-lg py-4 bg-gradient-to-br from-gray-900 bg-black w-9/12 shadow-2xl shadow-blue-900"
              >
                Send code
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  const VerifyEmailModal = () => {
    return (
      <div className="bg-gradient-to-b via-black from-gray-900 p-6 block h-screen w-full max-w-lg mx-auto text-xl text-white">
        <div
          className="mt-4 nodrag rounded-full border border-gray-600 hover:border-gray-500 hover:bg-gray-800 transition-all w-10 h-10 mx-0 p-3 inline-block fadeIn cursor-pointer"
          onClick={handleBackClick}
        >
          <img draggable="false" src={backIcon} className="" alt="Back" />
        </div>
        <div className="flex flex-col w-full items-center mt-36">
          <div className="scale-150">
            <div className="rainbow-container bg-gradient-to-tr from-gray-900 bg-blue-900 animate transition-all duration-100 mb-12 absolute">
              <div className="green" />
              <div className="pink" />
              <div className="blue" />
            </div>
          </div>
          <h1 className="text-3xl">Verify your email</h1>
          {verifyCodeSent ? (
            <>
              <span className="text-lg m-6 text-center">
                Enter the 4 digit number that was sent to
                <br />
                <strong className="text-lg tracking-wider">
                  xxxxxx@xxxx.xxx
                </strong>
              </span>
              <div className="flex flex-row gap-2">
                <input
                  className="bg-transparent border w-16 border-gray-700 rounded-full text-3xl p-4 font-bold text-center tracking-wider outline-none"
                  type="text"
                  maxLength={1}
                />
                <input
                  className="bg-transparent border w-16 border-gray-700 rounded-full text-3xl p-4 font-bold text-center tracking-wider outline-none"
                  type="text"
                  maxLength={1}
                />
                <input
                  className="bg-transparent border w-16 border-gray-700 rounded-full text-3xl p-4 font-bold text-center tracking-wider outline-none"
                  type="text"
                  maxLength={1}
                />
                <input
                  className="bg-transparent border w-16 border-gray-700 rounded-full text-3xl p-4 font-bold text-center tracking-wider outline-none"
                  type="text"
                  maxLength={1}
                />
              </div>
              <button
                onClick={handleSendVerifyCode}
                className="text-base m-6 bg-transparent font-semibold"
              >
                Resend code
              </button>
              <button
                onClick={handleEmailVerified}
                className="text-base text-green-800 m-6 bg-transparent"
              >
                Simulate verify
              </button>
            </>
          ) : (
            <>
              <span className="text-lg m-6 text-center">
                Enter your email to continue, we will send you a code to verify.
              </span>
              <input
                className="bg-transparent w-10/12 border border-gray-700 rounded-full text-xl p-4 font-bold text-center tracking-wider outline-none"
                type="text"
              />
              <button
                onClick={handleSendVerifyCode}
                className="m-5 rounded-full text-lg py-4 bg-gradient-to-br from-gray-900 bg-black w-9/12 shadow-2xl shadow-blue-900"
              >
                Send code
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nodrag w-full h-screen mt-10 ${
        currentStep !== 6 && currentStep !== 7 && currentStep < 11
          ? 'cursor-pointer'
          : ''
      }`}
      onClick={handleClick}
    >
      <div
        className={`flex max-w-lg mx-auto w-full ${
          currentStep === 7 || currentStep === 9 || currentStep > 10
            ? 'min-h-0 flex-col pr-10'
            : 'flex-col'
        }`}
      >
        <div
          ref={chatContainerRef}
          className="nodrag overflow-y-auto pb-48 max-w-lg w-full h-screen"
        >
          <div
            className={`flex fadeInUp items-center justify-center align-center px-6 transition-all ${
              currentStep === 7 || currentStep === 9 || currentStep > 10
                ? '-ml-8 flex-row'
                : 'min-h-screen flex-col'
            }`}
          >
            <div
              className={`${
                currentStep === 7 || currentStep === 9 || currentStep > 10
                  ? 'scale-50'
                  : 'scale-150'
              } ${
                currentStep === 9 ? '-mt-36' : currentStep === 11 ? '-mt-56' : '-mt-6'
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
                currentStep === 7 || currentStep === 9 || currentStep > 10
                  ? 'text-xl leading-0 font-semibold mt-2'
                  : 'text-4xl h-64 text-center'
              } ${animate ? 'fadeOutUp' : 'fadeInUp'} mb-1`}
            >
              {titles[currentStep]}
              <div
                className={`inline-block w-full text-sm text-gray-100 font-thin tracking-wide mt-2 ${
                  currentStep === 7 || currentStep === 9 || currentStep > 10
                    ? 'fadeInUp delay-1000'
                    : 'hidden'
                }`}
              >
                {currentStep < 9 ? (
                  <>
                    So i don't have to call you a user, which is impersonal, and
                    a bit rude of me. And no wrries, you can always tell me to
                    call you something else later.
                  </>
                ) : (
                  <></>
                )}
                {currentStep === 9 ? (
                  <>
                    {myName}, you will never regret taking this leap into the
                    future economy with us. <br />
                    <br />
                    Let's verify your device so we can mint your digital
                    identity and get you into your AI.
                    <br />
                    <br />
                    <div className="w-96">
                      <button
                        onClick={handleVerifyDeviceClick}
                        disabled={deviceVerified}
                        className={`rounded-full text-sm w-full font-semibold mt-2 py-4 ${
                          deviceVerified
                            ? 'bg-gradient-to-tl from-green-400 bg-green-800'
                            : 'bg-gradient-to-tl from-purple-900 bg-blue-900'
                        }`}
                      >
                        {deviceVerified ? (
                          <>✓&nbsp;&nbsp;Verify your device</>
                        ) : (
                          <>Verify my device</>
                        )}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                  </>
                )}
                {currentStep === 11 ? (
                  <>
                    Passwords no longer work, {myName}!
                    <br />
                    <br />
                    The most secure way to login, protect your data and prove your identity is to create a digital twin with biometric signatures, like your facial expressions, which cannot be faked or duplicated.
                    <br />
                    <br />
                    And, you get to pewrsonalize your new superpower endowed guardian with a name.
                    <br />
                    <br />
                    <div className="w-96">
                      <button
                        onClick={handleAvatarDemoClick}
                        className={`rounded-full text-sm w-full font-semibold mt-2 py-4 bg-gradient-to-tl from-purple-900 bg-blue-900`}
                      >
                        Activate Experience
                      </button>
                    </div>
                  </>
                ) : (
                  <></>
                )}
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
                currentStep === 7 || currentStep === 9 || currentStep > 10
                  ? ''
                  : 'hidden'
              } flex scrollInChat flex-col`}
              key={index}
            >
              <div className="flex pt-6 text-sm text-gray-100 font-thin tracking-wide">
                <div
                  className={`h-full${
                    currentStep === 7 || currentStep === 9 || currentStep > 10
                      ? 'scale-50'
                      : 'scale-150'
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
                            <div key={index} className="w-11/12">
                              <button
                                onClick={actionItem.onClick}
                                disabled={actionItem.success}
                                className={`rounded-full text-sm w-full mt-2 py-4 ${
                                  actionItem.success
                                    ? 'bg-gradient-to-tl from-green-400 bg-green-800'
                                    : 'bg-gradient-to-tl from-purple-900 bg-blue-900'
                                }`}
                              >
                                {actionItem.success ? '✓  ' : ''}
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
        className={`fadeInUp z-50 fixed top-0 left-0 w-full ${
          verifyDeviceModal ? 'block' : 'fadeOutUp hidden'
        }`}
      >
        <VerifyModal />
      </div>
      <div
        className={`fadeInUp z-50 fixed top-0 left-0 w-full ${
          verifyEmailModal ? 'block' : 'fadeOutUp hidden'
        }`}
      >
        <VerifyEmailModal />
      </div>
      <div
        className={`nodrag ${
          currentStep === 7 ||
          currentStep === 9 ||
          (currentStep > 10 && !verifyDeviceModal)
            ? 'fadeInUp'
            : 'fadeOutUp hidden'
        } flex absolute bottom-0 w-full max-h-16]`}
      >
        <BottomNavbar onSendMessage={handleSendMessage} disableIcons />
      </div>
    </div>
  );
};

export default WelcomeSignUp;
