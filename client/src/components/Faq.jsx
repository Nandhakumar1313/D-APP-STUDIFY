import React, { useState } from "react";
import "../styles/Faq.css"; // Ensure correct path to CSS

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item-container">
        {[
          {
            question: "What is this system about?",
            answer:
              "This is a secure blockchain-based storage and retrieval system where users can store important documents like educational records, medical records, and bank KYC. Based on where you access it (hospital, bank, or educational institution), only relevant data will be retrieved.",
          },
          {
            question: "How does this system ensure my data privacy?",
            answer:
              "Your data is stored securely on the blockchain with encryption and access control policies. Only authorized entities (hospitals, banks, universities) can retrieve the required information, ensuring no unauthorized access.",
          },
          {
            question: "Can I access my documents anytime?",
            answer:
              "Yes! You can access your documents anytime through the system’s dashboard. However, institutions will only be able to retrieve the information they are authorized to access.",
          },
          {
            question: "How can I upload my documents?",
            answer:
              "You can log in to the system, navigate to the Upload Section, and add your documents. The system will categorize them automatically into educational, medical, or banking records.",
          },
          {
            question: "What file formats are supported for document upload?",
            answer: "The system supports PDF, JPEG, PNG, and DOCX formats.",
          },
          {
            question: "Can I update or delete my documents?",
            answer:
              "Yes, you can update or delete your documents from your personal dashboard. However, once stored on the blockchain, an audit trail remains to ensure data integrity.",
          },
          {
            question: "How does the system determine which documents to show?",
            answer:
              "The system automatically identifies the institution type (Hospital, Bank, Educational Institution, etc.) and retrieves only the relevant data.\n\n- Hospitals can access only medical records.\n- Banks can access only KYC documents.\n- Universities/Companies can access only educational records.",
          },
          {
            question: "Can I manually select which documents to share?",
            answer:
              "Yes! You have the option to manually approve or deny access requests before an institution retrieves your records.",
          },
          {
            question: "What if I want to share my data with a different organization?",
            answer:
              "You can generate a secure access key or QR code that allows temporary access for the required entity.",
          },
          {
            question: "How does blockchain enhance security in this system?",
            answer:
              "Blockchain ensures:\n✅ Tamper-proof storage – No one can modify your records once stored.\n✅ Decentralization – No central authority can misuse your data.\n✅ Smart Contracts – Only authorized parties can access relevant data.",
          },
          {
            question: "What happens if I lose access to my account?",
            answer:
              "You can recover access using your registered email/phone number. If you lose your blockchain key, contact the support team for recovery options.",
          },
          {
            question: "Is my data stored on a public blockchain?",
            answer:
              "No, your data is stored on a private and permissioned blockchain, ensuring only authorized entities can access it.",
          },
          {
            question: "Is there a mobile app available?",
            answer: "Currently, the system is web-based, but a mobile app version is under development.",
          },
          {
            question: "What should I do if my documents are not showing up?",
            answer:
              "Try refreshing the dashboard or contact our support team if the issue persists.",
          }
        ].map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <button className="faq-question">{faq.question}</button>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;