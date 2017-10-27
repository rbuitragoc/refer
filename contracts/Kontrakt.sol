pragma solidity ^0.4.2;

contract Kontrakt {
  address public owner;

  function Kontrakt() {
    owner = msg.sender;
  }

}
