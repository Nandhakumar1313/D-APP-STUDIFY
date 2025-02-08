// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Upload {
  
  struct Access {
     address user; 
     bool access; // true or false
  }
  
  mapping(address => string[]) private value;
  mapping(address => mapping(address => bool)) private ownership;
  mapping(address => Access[]) private accessList;
  mapping(address => mapping(address => bool)) private previousData;

  // Mapping to store document signatures
  mapping(string => address) public documentSignatures; // Document URL -> Signer

  // Events for notifications
  event DocumentSigned(string documentUrl, address signedBy);
  event DocumentUploaded(address indexed user, string documentUrl);

  function add(address _user, string memory url) external {
      value[_user].push(url);
      emit DocumentUploaded(_user, url);
  }

  function allow(address user) external {
      ownership[msg.sender][user] = true;
      if (previousData[msg.sender][user]) {
         for (uint i = 0; i < accessList[msg.sender].length; i++) {
             if (accessList[msg.sender][i].user == user) {
                  accessList[msg.sender][i].access = true; 
             }
         }
      } else {
          accessList[msg.sender].push(Access(user, true));  
          previousData[msg.sender][user] = true;  
      }
  }

  function disallow(address user) public {
      ownership[msg.sender][user] = false;
      for (uint i = 0; i < accessList[msg.sender].length; i++) {
          if (accessList[msg.sender][i].user == user) { 
              accessList[msg.sender][i].access = false;  
          }
      }
  }

  function accessListCheck(address _owner, address _user) public view returns (bool) {
        return ownership[_owner][_user];
  }

  function display(address _user) external view returns (string[] memory) {
      require(_user == msg.sender || ownership[_user][msg.sender], "You don't have access");
      return value[_user];
  }

  function shareAccess() public view returns (Access[] memory) {
      return accessList[msg.sender];
  }

  function revoke(address user) public {
      ownership[msg.sender][user] = false;
      for (uint i = 0; i < accessList[msg.sender].length; i++) {
          if (accessList[msg.sender][i].user == user) {
              accessList[msg.sender][i] = accessList[msg.sender][accessList[msg.sender].length - 1];
              accessList[msg.sender].pop();
              break;
          }
      }
      delete previousData[msg.sender][user];
  }
}
