// Le module 'hardhat' est importé, ce qui vous permet d'interagir avec les fonctionnalités de Hardhat.
const hre = require("hardhat");

async function main() {
 // Ici, vous utilisez l'objet 'hre.ethers' pour déployer un contrat. 'SimpleStorage' est le nom de votre contrat.
 const erc4626Vault = await hre.ethers.deployContract("ERC4626Vault");
 // Cette ligne attend que le déploiement du contrat soit terminé. Cela garantit que vous ne continuez pas tant que le contrat n'est pas déployé.
 await erc4626Vault.waitForDeployment();
 // Une fois le contrat déployé, cette ligne imprime dans la console l'adresse du contrat déployé.
 console.log(
 `erc4626Vault deployed to ${erc4626Vault.target}`
 );
}

// Vous appelez la fonction 'main' pour exécuter le déploiement du contrat. 
// Si une erreur se produit, elle est capturée et affichée dans la console.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
