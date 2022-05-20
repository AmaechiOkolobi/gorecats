async function main() {
    // We get the contract to deploy
    const ICOFactory = await ethers.getContractFactory("ICOFactory");
    const icoFactory = await ICOFactory.deploy();
  
    await icoFactory.deployed();
  
    console.log("icoFactory deployed to:", icoFactory.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });