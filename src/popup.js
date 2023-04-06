// スマートコントラクトのアドレスとABIを設定します
import contractABI from "./contractABI.json";
import contractAddress from "./contractAddress.json";

const contractAddress = contractAddress;
const contractABI = contractABI;

// web3インスタンスを作成し、スマートコントラクトと通信します
const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(contractABI, contractAddress);

async function login(email, password) {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('Logged in:', user);
    } catch (error) {
      console.error('Login error:', error);
    }
  }

// ログインフォームのサブミットイベントにログイン処理をバインドします
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    await login(email, password);
  });

  async function mintNFT(to) {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.mint(to).send({from: accounts[0]});
  }
  
  async function buyNFT(level) {
    // ... その他の購入処理 ...
  
    // NFTを購入後、自動的に発行する
    const userAddress = await web3.eth.getAccounts()[0];
    await mintNFT(userAddress);
  }  
// スマートコントラクトの関数を呼び出すための関数を定義します
async function getNFT() {
    // ...
  }

  async function checkNFT() {
    // ...
  }
  

  
  // ボタンクリックで各機能を実行するように設定します
  document.getElementById('getNFTButton').addEventListener('click', async () => {
    await getNFT();
  });
  
  document.getElementById('checkNFTButton').addEventListener('click', async () => {
    await checkNFT();
  });
  
  document.getElementById('buyNFTButton').addEventListener('click', async () => {
    const level = parseInt(document.getElementById('nftLevel').value);
    await buyNFT(level);
  });
  
  // トークン付与機能をcontentScript.jsにメッセージングで実装します
  chrome.runtime.sendMessage({type: "COUNT_CHAPTERS"}, (response) => {
    if(response.success){
      // トークン付与ロジックを実装します
    }
  });

// document.getElementById('loginButton').addEventListener('click', async () => {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
  
//     // Firebaseを使ったログイン処理を行う
//     // 成功したら、NFT取得・確認・購入等の機能を実装
//   });

//   async function getNFT() {
//     try {
//       // スマートコントラクトの関数を呼び出す
//       await contract.methods.mintNFT(userAddress).send({ from: userAddress });
//       console.log("NFTを取得しました");
//     } catch (error) {
//       console.error("NFTの取得に失敗しました", error);
//     }
//   }
  
//   // NFT情報を確認する関数
//   async function checkNFT() {
//     try {
//       // スマートコントラクトの関数を呼び出す
//       const nftInfo = await contract.methods.getNFTInfo(userAddress).call({ from: userAddress });
//       console.log("NFT情報:", nftInfo);
//     } catch (error) {
//       console.error("NFT情報の取得に失敗しました", error);
//     }
//   }
  
//   // NFTを購入する関数
//   async function buyNFT(level) {
//     try {
//       // スマートコントラクトの関数を呼び出す
//       await contract.methods.buyNFT(userAddress, level).send({ from: userAddress });
//       console.log("NFTを購入しました");
//     } catch (error) {
//       console.error("NFTの購入に失敗しました", error);
// }
// }

// // 以下のコードをpopup.jsの適切な箇所に追加します。
// // 例えば、ボタンクリックで各機能を実行するように設定できます。

// document.getElementById('getNFTButton').addEventListener('click', async () => {
// await getNFT();
// });

// document.getElementById('checkNFTButton').addEventListener('click', async () => {
// await checkNFT();
// });

// document.getElementById('buyNFTButton').addEventListener('click', async () => {
// const level = parseInt(document.getElementById('nftLevel').value);
// await buyNFT(level);
// });