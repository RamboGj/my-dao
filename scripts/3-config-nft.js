import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x12951f264BA74D8f893ceB16f45131dAA755D79a");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "Freedom nft",
                description: "Nft to get access to my DAO",
                image: readFileSync("scripts/assets/download.png"),
            }
        ]);
        console.log("✅ Novo NFT criado com sucesso no !");
    } catch (error) {
        console.error("Falha ao criar novo NFT", error)
    }
})()