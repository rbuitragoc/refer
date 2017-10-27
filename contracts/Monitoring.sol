pragma solidity ^0.4.12;

/// @title Monitoring kontrakts changes and partial deliverables during their lifecycle
contract Monitoring {

  mapping(address => Kontrakt) existingContracts;

  struct Kontrakt {
    string name;
    address entity;
    address contractor;
    uint value;
    uint nos;
    string start;
    string end;
    Deliverable[] deliverables;

  }

  struct Deliverable {
    bool payed;
    bool delivered;
    string name;
    string dueDate;
    uint value;
  }

  function buildKontrakt() {
    // loop through each deliverable and add their value to overall value
  }

  function Monitoring() {
    // build N kontrakts
  }

}
