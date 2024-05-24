/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
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

  const latestMessage = () => {
    return messageFeed[0]?.content[0]?.content;
  };

  const postUserMessage = (message: string) => {
    const aiMsg: MessageContent = {
      content: `Hi ${message} it's great to meet you.`,
    };
    const aiMsgC2: MessageContent = {
      content:
        'Can I start by showing you how to create your secure digital twin, or would you like to jump right in and create an account?',
      actions: [
        { title: 'The avatar facial demo', url: '/' },
        { title: 'Sign up', url: '/' },
      ],
    };
    const aiMsgC3: MessageContent = {
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
          newMessageFeed[newMessageFeed.length - 1].content.push(
            messageContent,
          );
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

    // Initial message
    appendToRecentAiMessage(aiMsg);

    // Schedule the follow-up messages
    setTimeout(() => {
      appendToRecentAiMessage(aiMsgC2);
      setTimeout(() => {
        appendToRecentAiMessage(aiMsgC3);
      }, 700);
    }, 1000);
  };

  const handleStartClick = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      setCurrentStep((prevStep) => prevStep + 1);
    }, 300); // Duration of the animation
  };

  const userMessage = (message: string) => {
    // Create a copy of the messageFeed to avoid direct state mutation
    const newMessageFeed = [...messageFeed];

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
      const postMsg = {
        avatarSrc: '',
        source: 'user',
        content: [{ content: message }],
      };
      newMessageFeed.push(postMsg);
    }

    // Update the messageFeed state
    setMessageFeed(newMessageFeed);
  };

  const handleSendMessage = (message: string) => {
    console.log('Message from BottomNavbar:', message);
    userMessage(message);
    setTimeout(() => {
      if (message.split(' ').length === 1 && !shownAiReply) {
        postUserMessage(message);
        setShownAiReply(true);
      } else if (message === 'Who are you?') {
        setTimeout(() => {
          const postMsg = {
            avatarSrc: '',
            source: 'ai',
            content: [
              { content: "I'm a hyper-personalized life Ai called Balnce." },
            ],
          };
          setMessageFeed([...messageFeed, postMsg]);
        }, 1000);
      }
      // else {
      //   setTimeout(() => {
      //     const postMsg = {
      //       avatarSrc: "",
      //       source: "ai",
      //       content: [{ content: "Sorry, I don't understand your question." }],
      //     };
      //     setMessageFeed([...messageFeed, postMsg]);
      //   }, 1000)
      // }
    }, 1500);
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
          currentStep > 7 ? 'min-h-0 flex-col pr-8' : 'flex-col'
        }`}
      >
        <div className="max-w-lg w-full h-screen">
          <div
            className={`flex fadeInUp items-center justify-center align-center -ml-8 px-6 transition-all ${
              currentStep > 7 ? 'flex-row' : 'min-h-screen flex-col'
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
              } flex fadeInUp flex-col`}
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
                            <button
                              onClick={login}
                              key={index}
                              className="rounded-full text-sm w-full bg-gradient-to-tl from-purple-900 bg-blue-900 mt-2 py-4"
                            >
                              {actionItem.title}
                            </button>
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
