import contractABI from "./contractABI.json";
import contractAddress from "./contractAddress.json";

// web3の初期化
const web3 = new Web3(window.ethereum);
await window.ethereum.enable();

// スマートコントラクトのアドレスとABIを指定
const contractAddress = contractAddress;
const contractABI = contractABI;
const contract = new web3.eth.Contract(contractABI, contractAddress);

// ユーザーのアドレスを取得
const accounts = await web3.eth.getAccounts();
const userAddress = accounts[0];

// 小説の話数を取得する関数
function getEpisodeNumber() {
  const url = window.location.href;
  const regex = /https:\/\/ncode.syosetu.com\/\w+\/(\d+)/;
  const match = url.match(regex);
  if (match) {
    return parseInt(match[1]);
  }
  return null;
}

// 話数が変わった際にトークンを付与する関数
async function grantTokensForReading() {
  const episodeNumber = getEpisodeNumber();
  if (episodeNumber) {
    try {
      // スマートコントラクトの関数を呼び出す
      await contract.methods.grantTokens(userAddress, episodeNumber).send({ from: userAddress });
      console.log("トークンが付与されました");
    } catch (error) {
      console.error("トークンの付与に失敗しました", error);
    }
  }
}

// 話数が変わったか監視する
let prevEpisodeNumber = getEpisodeNumber();
setInterval(async () => {
  const currentEpisodeNumber = getEpisodeNumber();
  if (currentEpisodeNumber && currentEpisodeNumber !== prevEpisodeNumber) {
    await grantTokensForReading();
    prevEpisodeNumber = currentEpisodeNumber;
  }
}, 5000);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "COUNT_CHAPTERS") {
      // 話数カウントロジックを実装します
      sendResponse({success: true});
    }
  });