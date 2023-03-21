# RajasthanIT
Tech Stack
Blockchain - Ethereum, Solidity and Ganache
IOT - Arduino and DHT11 sensor 
Backend - Fastapi
Frontend - Reactjs and Ethers.js

HOW TO RUN

Run every service seperately
Project is divided into three parts i.e client(frontend) , backend and IOT

Backend:-
So first setup metamask wallet and enable testnet get some test ethers from this webiste:https://goerlifaucet.com/?__cf_chl_tk=rZutIV5X0DV3wRsNFlueISHCjnTGEEpUYEKTWl9Mp8w-1679366436-0-gaNycGzNCbs.
Select the environment to Injected Provider-MetaMask via remix ide.
Now after compiling the contract, deploy it to the Ethereum blockchain through Goerli testnet.

After approving the transaction through metamask you will see the output of this similar kind:
[block:8688796 txIndex:91]from: 0x7eF...A16D6to: CryptoSuite.(constructor)value: 0 weidata: 0x605...20033logs: 0hash: 0x7d6...829d6

Finally you can see the block conformation on etherscan:https://etherscan.io/

Client/Frontend:-
Go to client folder and run this command: npm install.
After performing the above task and change the path to the project folder in the terminal.
Next give the command: npm run start
The following information will be visible after executing the former command and this is the output of the terminal:
 
Compiled successfully!

You can now view supplychainmanagement in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.10.6.249:3000

Finally, the website will be running on the port number:3000

IOT:
Setup dht11 with arduino 
So here we send data from arduino to com3 port and we setup a node that collects data and from there we can modify or add data according to our needs and calls an API that will send our data to blockchain.
The execution helps us to find the fradulent players in the supply chain thereby maintaining the integrity while tracking each and every movement of the product with respect to various constraints.
