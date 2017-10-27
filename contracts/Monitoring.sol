pragma solidity ^0.4.12;

/// @title Monitoring kontrakts changes and partial deliverables during their lifecycle
contract Monitoring {
  address public owner;

  struct Kontrakt {

  }
  function Monitoring() {
    owner = msg.sender;
  }

}
