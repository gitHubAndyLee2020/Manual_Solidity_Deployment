// specifies the version of Solidity
pragma solidity ^0.4.17;

// define new contract
contract Inbox {
    // storage variables (exists during the lifetime of the contract)
    string public message;

    // constructor
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    } 
}