/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  const [visible, setVisible] = useState(show);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 300); // Match the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [show]);

  const handleCheckboxChange = () => {
    setDontShowAgain(!dontShowAgain);
  };

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem("hideWelcomeModal", "true");
    }
    onClose();
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`fadeInUp fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="nodrag h-[93vh] overflow-y-auto bg-gray-900 p-12 max-w-[80vw] m-12 rounded-3xl shadow-lg leading-6 text-sm font-medium tracking-wider scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        <h2 className="text-2xl font-bold mb-4">Greetings,</h2>
        <p className="mb-4">
          We are engineering secure AI digital twin experiences so that
          consumers, brands, and communities can build trusted relationships to
          freely transact in a safer, more open global marketplace.
        </p>
        <p className="mb-4">
          What you are entering is a prototype designed to illustrate this
          application's concept, and to gather your opinions and feedback. Click
          around, see where different screens lead you, what the experience is
          like. You will find imperfections, things that might not yet make
          sense, but that's ok. In the end, let us know everything and anything
          that comes to mind.
        </p>
        <p className="mb-4">
          The past few years have seen evolutionary growth in several key
          technologies fueling the acceleration into a future where humans will
          live in a deeply interconnected world with their machines. People,
          brands, and society will greatly benefit from access to skills,
          automation, knowledge, augmentation, and guidance.
        </p>
        <p className="mb-4">
          Unfortunately, our machines will also manipulate and falsify
          information, create fake people, steal identities, and conduct harmful
          activities on behalf of other humans. We need to balance this equation
          with new tools and incentives that motivate positive action at a mass
          level. It's critical that we build experiences to protect and optimize
          our personal, professional, machine, and data relationships. Trust is
          critical to everything; relationships are built on trust.
        </p>
        <p className="mb-4">
          By motivating people and brands to interact and manage data
          responsibly alongside their digital AI twins, we empower privatized
          communications that maintain profitable returns and rewarding
          relationships for all participants while eliminating untrustworthy
          actors. Let's construct such a platform.
        </p>
        <p className="mb-4">
          Data is immensely powerful, but so is motivation. Data-driven
          decisions are deeply embedded into every business department across
          every industry. Motivation, or gamification-driven strategies, should
          also be deeply embedded into the daily interactions that consumers
          have with their data, brands, and themselves. Gains will become
          tremendously beneficial, consistent, and valuable. Identities,
          networks, data, generative content, wallets, and interactions are the
          new assets we will leverage to ensure ownership, sovereignty, and
          monetization for every user.
        </p>
        <p className="mb-4">
          If harnessed well at the right moment in history, ownership, trust,
          and our digital AI selves is a concept that we think could lead to a
          profound discovery of opportunities for humanity. A vessel for your
          digital superpowered twin that is shaped and controlled by you, yet
          bound to a set of standards and responsibilities. A sherpa that
          steadfastly navigates with you through digital insecurity, whose
          purpose will be to empower the psychological, physical, spiritual, and
          economic facets of your life, or brand, and maybe help you dream a bit
          more than before.
        </p>
        <p className="mb-4">
          Through AI, we can unlock new levels of personalization, anticipate
          needs, enhance our health, achieve goals, reach for aspirations, and
          uplift the economic conditions of humanity. Through blockchain
          technologies, we can revolutionize the way we transact, identify,
          trust, and conduct commerce in the digital realm. Its decentralized
          nature gives birth to a new asset ownership paradigm. By leveraging
          the power of blockchain and AI, we can remove barriers to progress,
          remove power from those that wish us harm, unlock what it means to be
          free, and enable a fair and inclusive digital economy.
        </p>
        <p className="mb-4">
          Our inflection point is now, and this is the moment in history where
          we get to build something visionary that has the capacity to create
          life-changing value, or allow these systems to do great harm.
        </p>
        <p className="mb-4">
          I for one cannot wait to meet the heroes that emerge and enjoy their
          stories.
        </p>
        <p className="mb-4">
          Thank you for your attention, and let us embark on this extraordinary
          adventure together.
        </p>
        <p className="mb-4">Regards,</p>
        <p className="mb-4">
          Zachary Schenkler
          <br />
          Co-founder & CEO
          <br />
          Balnce Ai
        </p>
        <button
          onClick={handleClose}
          className="px-14 py-3 my-10 mx-auto block bg-black text-white rounded-full shadow-xl shadow-blue-900"
        >
          Enter the prototype
        </button>
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            id="dontShowAgain"
            checked={dontShowAgain}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label htmlFor="dontShowAgain" className="text-white">
            Don't Show Again
          </label>
        </div>
      </div>
    </div>
  );
};

export default Modal;
