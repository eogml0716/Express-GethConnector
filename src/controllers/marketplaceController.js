import { addFile } from '../ipfs/ipfsService.js';
import {
  createWeb3Instance,
  getContractInstance,
  buyPhotoNFT,
  updatePhotoNFTPrice,
  deletePhotoNFT,
} from './web3Controller.js';

// Web3 인스턴스를 생성합니다.
const web3 = createWeb3Instance();

// NFTPhoto 스마트 계약의 인스턴스를 가져옵니다.
let contract;
try {
  contract = getContractInstance(
    web3,
    './src/contracts/NFTPhoto.sol',
    'NFTPhoto'
  );
} catch (error) {
  console.error(`Failed to get contract instance: ${error.message}`);
  process.exit(1);
}

// 블록체인 에러를 처리하는 함수입니다. 에러 메시지를 함께 보내는 응답을 생성합니다.
export const handleBlockchainError = (res, error) => {
  res.status(500).send({ message: error.message });
};

// 필요한 요청 본문 필드가 모두 존재하는지 검증하는 함수입니다.
export const validateRequestBody = (body, requiredFields) => {
  for (let field of requiredFields) {
    if (!body[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
};

// NFT를 생성하는 엔드포인트입니다.
export const createNFT = async (req, res) => {
  try {
    // 필요한 요청 본문 필드와 파일이 모두 존재하는지 검증합니다.
    validateRequestBody(req.body, ['ownerAddress', 'price']);
    validateRequestBody(req.file, ['path', 'photo']);

    // 요청 본문과 파일에서 필요한 정보를 추출합니다.
    const { ownerAddress, price } = req.body;
    const file = req.body.file;

    // IPFS로 파일을 추가합니다.
    const cid = await addFile(file).then((res) => res.cid.toString());

    // Web3Controller를 통해 블록체인에 NFT 생성 트랜잭션을 발생시킵니다.
    // 이때 IPFS에서 받은 CID를 사용합니다.
    await createPhotoNFT(contract, ownerAddress, price, cid);

    // 생성 성공 메시지와 CID를 응답으로 보냅니다.
    res.send({ message: 'Successfully created NFT', cid });
  } catch (error) {
    // 발생한 에러를 처리합니다.
    handleBlockchainError(res, error);
  }
};

// NFT를 구매하는 엔드포인트입니다.
export const buyNFT = async (req, res) => {
  try {
    // 필요한 요청 본문 필드가 모두 존재하는지 검증합니다.
    validateRequestBody(req.body, ['buyerAddress', 'tokenId', 'price']);

    // 요청 본문에서 필요한 정보를 추출합니다.
    const { buyerAddress, tokenId, price } = req.body;
    // Web3Controller를 통해 블록체인에 NFT 구매 트랜잭션을 발생시킵니다.
    await buyPhotoNFT(contract, buyerAddress, tokenId, price);
    // 구매 성공 메시지를 응답으로 보냅니다.
    res.send({ message: 'Successfully purchased NFT' });
  } catch (error) {
    // 발생한 에러를 처리합니다.
    handleBlockchainError(res, error);
  }
};

// NFT 가격을 수정하는 엔드포인트입니다.
export const updateNFT = async (req, res) => {
  try {
    // 필요한 요청 본문 필드가 모두 존재하는지 검증합니다.
    validateRequestBody(req.body, ['ownerAddress', 'tokenId', 'newPrice']);

    // 요청 본문에서 필요한 정보를 추출합니다.
    const { ownerAddress, tokenId, newPrice } = req.body;
    // Web3Controller를 통해 블록체인에 NFT 가격 수정 트랜잭션을 발생시킵니다.
    await updatePhotoNFTPrice(contract, ownerAddress, tokenId, newPrice);
    // 가격 수정 성공 메시지를 응답으로 보냅니다.
    res.send({ message: 'Successfully updated NFT price' });
  } catch (error) {
    // 발생한 에러를 처리합니다.
    handleBlockchainError(res, error);
  }
};

// NFT를 삭제하는 엔드포인트입니다.
export const deleteNFT = async (req, res) => {
  try {
    // 필요한 요청 본문 필드가 모두 존재하는지 검증합니다.
    validateRequestBody(req.body, ['ownerAddress', 'tokenId']);

    // 요청 본문에서 필요한 정보를 추출합니다.
    const { ownerAddress, tokenId } = req.body;
    // Web3Controller를 통해 블록체인에 NFT 삭제 트랜잭션을 발생시킵니다.
    await deletePhotoNFT(contract, ownerAddress, tokenId);
    // 삭제 성공 메시지를 응답으로 보냅니다.
    res.send({ message: 'Successfully deleted NFT' });
  } catch (error) {
    // 발생한 에러를 처리합니다.
    handleBlockchainError(res, error);
  }
};
