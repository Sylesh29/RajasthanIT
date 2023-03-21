pragma solidity >=0.8.4;

contract Migrations {
    address public owners;
    uint256 public last_completed_migration;

    modifier restricted() {
        if (msg.sender == owners) _;
    }

    constructor() {
        owners = msg.sender;
    }

    function setcompleted(uint256 completed) public restricted {
        last_completed_migration = completed;
    }
}
