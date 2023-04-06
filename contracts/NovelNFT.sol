// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NovelNFT is ERC721 {
    uint256 private _tokenIdCounter;
    address private _tokenAddress;
    uint256 public constant LEVEL1_COST = 20;
    uint256 public constant LEVEL2_COST = 100;

    constructor(address tokenAddress) ERC721("NovelNFT", "NNFT") {
        _tokenAddress = tokenAddress;
    }

    function mint(address to) internal {
        _safeMint(to, _tokenIdCounter);
        _tokenIdCounter++;
    }

    function buyNFT(uint8 level) external {
        require(level >= 1 && level <= 3, "Invalid level");
        uint256 tokenCost;
        if (level == 1) {
            tokenCost = 0;
        } else if (level == 2) {
            tokenCost = LEVEL1_COST;
        } else {
            tokenCost = LEVEL2_COST;
        }

        IERC20 token = IERC20(_tokenAddress);
        if (tokenCost > 0) {
            token.transferFrom(msg.sender, address(this), tokenCost);
        }
        mint(msg.sender);
    }
}
