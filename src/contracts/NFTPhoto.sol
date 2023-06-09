// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// OpenZeppelin 라이브러리의 Smart Contracts를 가져옵니다.
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Address.sol";

// NFTPhoto라는 새로운 스마트 컨트랙트를 정의합니다.
// ERC721 및 Ownable의 기능을 상속받습니다.
contract NFTPhoto is ERC721, Ownable {
    // Address 라이브러리를 사용하여 주소 관련 기능을 사용할 수 있습니다.
    using Address for address;

    uint256 public tokenCounter; // 현재까지 생성된 토큰 수를 추적하는 변수입니다.
    mapping(uint256 => string) private _tokenURIs; // 각 토큰의 URI를 저장하는 맵입니다.
    mapping(uint256 => uint256) private _tokenPrices; // 각 토큰의 가격을 저장하는 맵입니다.

    // 다양한 이벤트를 정의하여 블록체인에 로깅합니다.
    event TokenCreated(uint256 tokenId, string tokenURI, uint256 tokenPrice);
    event TokenPurchased(
        uint256 tokenId,
        address previousOwner,
        address newOwner,
        uint256 price
    );
    event TokenPriceUpdated(uint256 tokenId, uint256 newPrice);

    // 컨트랙트의 생성자 함수입니다.
    constructor() ERC721("NFTPhoto", "NFTP") {
        tokenCounter = 0; // 초기 토큰 카운터를 0으로 설정합니다.
    }

    // ERC721 토큰의 기본 URI를 반환하는 함수입니다.
    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/";
    }

    // 특정 토큰의 전체 URI를 반환하는 함수입니다.
    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        return string(abi.encodePacked(_baseURI(), _tokenURIs[tokenId]));
    }

    // 특정 토큰의 가격을 반환하는 함수입니다.
    function tokenPrice(uint256 tokenId) public view returns (uint256) {
        return _tokenPrices[tokenId];
    }

    // 새로운 토큰을 만드는 함수입니다. 오직 컨트랙트의 소유자만 호출할 수 있습니다.
    // 'tokenURI'와 'tokenPrice'의 이름 변경
    function createPhotoNFT(
        string memory _tokenURI,
        uint256 _tokenPrice
    ) public onlyOwner returns (uint256) {
        uint256 newTokenId = tokenCounter;
        _mint(msg.sender, newTokenId);
        _tokenURIs[newTokenId] = _tokenURI;
        _tokenPrices[newTokenId] = _tokenPrice;
        tokenCounter = tokenCounter + 1;

        emit TokenCreated(newTokenId, _tokenURI, _tokenPrice);

        return newTokenId;
    }

    // 특정 토큰의 가격을 업데이트하는 함수입니다. 오직 토큰의 소유자만 호출할 수 있습니다.
    function updatePhotoNFTPrice(uint256 tokenId, uint256 newPrice) public {
        require(ownerOf(tokenId) == msg.sender, "Not the owner of the NFT"); // 호출자가 토큰의 소유자인지 확인합니다.

        _tokenPrices[tokenId] = newPrice; // 새로운 가격을 설정합니다.

        emit TokenPriceUpdated(tokenId, newPrice); // 이벤트를 발생시킵니다.
    }

    // 특정 토큰을 삭제하는 함수입니다. 오직 토큰의 소유자만 호출할 수 있습니다.
    function deletePhotoNFT(uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender, "Not the owner of the NFT"); // 호출자가 토큰의 소유자인지 확인합니다.

        _burn(tokenId); // 토큰을 삭제합니다.
        delete _tokenURIs[tokenId]; // 토큰의 URI를 삭제합니다.
        delete _tokenPrices[tokenId]; // 토큰의 가격을 삭제합니다.
    }
}
