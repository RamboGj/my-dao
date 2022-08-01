import sdk from "./1-initialize-sdk.js";

// Esse é o endereço do nosso contrato ERC-1155 do NFT de filiação.
const editionDrop = sdk.getEditionDrop("0x12951f264BA74D8f893ceB16f45131dAA755D79a");

// Esse é o endereço do nosso contrato ERC-20 do nosso token.
const token = sdk.getToken("0x691055C66fBE3c8EdF63B99804E0f79384A6F924");

(async () => {
    try {
    // Pegue o endereço de todas as pessoas que possuem o nosso NFT de filiação, que tem o tokenId 0.
    const walletAddresses = await editionDrop.history.getAllClaimerAddresses(0);

    if (walletAddresses.length === 0) {
        console.log("Ninguém mintou o NFT ainda, peça para alguns amigos fazerem isso e ganhar um NFT de graça!");
        process.exit(0);
    }
    
    // faça um loop no array de endereços.
    const airdropTargets = walletAddresses.map((address) => {
        // Escolha um # aleatório entre 1000 e 10000.
        const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
        console.log("✅ Vai enviar", randomAmount, "tokens para ", address);

        // Configure o alvo.

      const airdropTarget = {
        toAddress: address,
        amount: randomAmount,
      };

      return airdropTarget;
    })

    // Chame transferBatch em todos os alvos do airdrop.
    console.log("🌈 Começando o airdrop...")
    
    await token.transferBatch(airdropTargets);

    console.log("✅ Feito o airdrop de tokens para todos os donos de NFT!");


    
    } catch (error) {
        console.error("O airdrop de tokens falhou", err);
    }
})();