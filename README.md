# D-APP-STUDIFY: Blockchain-Powered Decentralized Identity Verification Platform
## Overview
D-APP-STUDIFY is a blockchain-powered decentralized identity verification platform that allows users and institutions to securely manage identity documents. Users can upload their own identity-related documents, which are verified by institutions. If a document is found to be fake or invalid, institutions have the authority to delete it. The platform ensures privacy, security, and transparency in identity verification.

## Features
### For Users:
* **Upload Identity Documents:** Users can upload their own documents for verification.
* **View Assigned Documents:** Users can access documents uploaded by institutions.
* **Identity Verification:** Users' uploaded documents are verified by institutions.
### For Institutions:
* **Verify User-Uploaded Documents:** Institutions review and approve/reject identity documents.
* **Upload Identity Records:** Institutions can upload verified documents directly.
* **Grant/Revoke Access:** Institutions can control user access to documents.
* **Delete Fake Documents:** If a document is identified as fraudulent, institutions can remove it.
### Security Features:
* **Role-Based Access Control (RBAC):** Users can only manage their own documents, while institutions have administrative control.
* **Smart Contracts for Verification:** Ensures automated access control and document authenticity.
* **Blockchain Immutability:** Approved documents cannot be altered.
## Technologies Used
* **Blockchain:** Ethereum (or any other blockchain platform) for decentralized document storage.
* **Smart Contracts:** Automate document verification and access control.
* **IPFS (InterPlanetary File System):** For decentralized storage of identity documents.
* **Web3.js:** Enables blockchain interaction in the frontend.
* **Node.js & Express.js:** Backend services for managing smart contract interactions.
* **MongoDB:** To store metadata (non-sensitive information about documents and user access).
* **React.js:** Frontend UI for users and institutions.
## System Architecture
* **User Dashboard (user):** Allows users to upload and view documents.
* **Institution Dashboard (admin):** Enables institutions to verify, upload, and manage documents.
* **Smart Contracts:** Handle document ownership, verification, and access control.
* **IPFS Storage:** Stores documents in a decentralized manner with unique content hashes.

  
 ![diagram-export-2-9-2025-5_52_06-PM](https://github.com/user-attachments/assets/64045ebb-d6dc-44b5-815d-7659cfb0770a)


## Getting Started
### Prerequisites
Ensure you have the following installed:\

* Node.js (v14 or later)
* Truffle or Hardhat for smart contract development
* Ganache or Infura for Ethereum test networks
* MetaMask for interacting with the blockchain
* MongoDB (optional for non-sensitive metadata storage)
## Installation
### Clone the repository
```
git clone https://github.com/yourusername/D-APP-STUDIFY.git
cd D-APP-STUDIFY
```
## How the System Works
### 1)User Uploads Document

* User selects a document and uploads it via the frontend.

* Document is stored on IPFS (Pinata), and a reference (CID) is generated.

* Metadata (user info, document type, status) is stored in MongoDB.

### 2)Institution Verification

* Institutions retrieve uploaded documents using the CID from IPFS.

* They verify authenticity and approve or reject the document.

* If approved, the document hash is stored on the blockchain.

* If rejected, users must re-upload a valid document.

### 3)Institution Uploads Verified Documents

* Institutions can upload verified identity documents directly.

* Documents are stored on IPFS, and blockchain records the verification.

### 4)Access Control Management

* Institutions grant or revoke user access to specific documents.

* Users can only view institution-approved documents.

### 5)Fraud Detection & Deletion

* Institutions monitor uploaded documents and detect fraudulent data.

* Fake documents can be removed from IPFS, and access revoked.

## License

This project is licensed under the MIT License.

## Contributors
* Tejusve Kabeer F - Project Lead
*  Mathiyazhagan A - Frontend Developer
*  Rohit Jain D - Frontend Developer
*  Nandhakumar G R - Blockchain Developer
* Karthikeyan R - Database Engineer
* Kishore B - AI Chatbot Developer


