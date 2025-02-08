import { useEffect } from "react";
import "../styles/Modal.css";

const Modal = ({ setModalOpen, contract }) => {
  const sharing = async () => {
    const address = document.querySelector(".address").value;
    if (address) {
      try {
        await contract.allow(address);
        console.log(`Access granted to ${address}`);
        setModalOpen(false);
      } catch (error) {
        console.error("Error granting access:", error);
      }
    } else {
      alert("Please enter an address to share access.");
    }
  };

  const revokeAccess = async (address) => {
    if (contract) {
      try {
        await contract.revoke(address);
        console.log(`Access revoked for ${address}`);
        setModalOpen(false);
      } catch (error) {
        console.error("Error revoking access:", error);
      }
    }
  };

  useEffect(() => {
    const accessList = async () => {
      if (contract) {
        try {
          const addressList = await contract.shareAccess();
          console.log(addressList);
          let select = document.querySelector("#selectNumber");

          // Clear previous options except the default one
          select.innerHTML =
            '<option className="address">People With Access</option>';

          addressList.forEach((opt) => {
            let e1 = document.createElement("option");
            e1.textContent = opt;
            e1.value = opt;
            select.appendChild(e1);
          });
        } catch (error) {
          console.error("Error fetching access list:", error);
        }
      }
    };

    contract && accessList();
  }, [contract]);

  return (
    <>
        <div className="modalContainer">
          <div className="title">Manage Access</div>
          <div className="body">
            <input
              type="text"
              className="address"
              placeholder="Enter Address"
            />
          </div>
          <form id="myForm">
            <select id="selectNumber">
              <option>People With Access</option>
            </select>
          </form>
          <div className="footer">
            <button onClick={() => setModalOpen(false)} id="cancelBtn">
              Cancel
            </button>
            <button onClick={sharing}>Share</button>
            <div className="revoke">
              <button
                onClick={() => {
                  const addressToRevoke = prompt(
                    "Enter address to revoke access:"
                  );
                  if (addressToRevoke) {
                    revokeAccess(addressToRevoke);
                  }
                }}
              >
                Revoke Access
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default Modal;