
const { expectedEvent, BN } = require("@openzeppelin/test-helpers");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { before } = require("lodash");
const web3 = require ("web3");

const SupplyChain = artifacts.require("SupplyChain");

contract('SupplyChain',(accounts) => {
    before(async() =>{
        this.SupplyChainInstance ={};
        this.owner = accounts[0];

        this.SEEDS = {
            Kantola_Seeds: "Kantola_Seeds",
            Chia_Seeds:"Chia_Seeds",
            Rajgira_Seeds:"Rajgira_Seeds",
            Sunflower_Seeds:"Sunflower_Seeds"
        };
        this.FERTILIZERS = {
            Nitrogen_Fertilizers: "Nitrogen_Fertilizers",
            Phosphorus_Fertilizers: "Phosphorus_fertilizers",
            Potassium_Fertilizers: "Potassium_Fertilizers",
        };
        this.spices = {
            Pepper_spice: "Pepper_spice",
            Turmeric_spice: "Turmeric_spice",
            Ginger_spice:"Ginger_spice",
        }
        this.ModeEnums = {
            ISSUR: { val: "ISSUER", pos: 0},
            PROVER: {val: "PROVER", pos:1},
            VERIFIER: {val: "VERIFIER", pos:2},
            
        };
        this.StatusEnums = { //{MANUFACTURED, DELIVERING_INTERNATIONAL,STORED,DELIVERING_LOCAL,DELIVERED}
            manufactured: { val: "MANUFACTURED", pos: 0},
            delivering: {val: "DELIVERING_INTERNATIONAL", pos:1},
            stored:  {val: "STORED", pos:2},
            delivering2:  {val: "DELIVERY_LOCAL", pos:3},
            delivering:  {val: "DELIVERED", pos:4}
        };

        this.defaultEntites = {
            manufacturA: { id: accounts[1], mode: thi.ModeEnums.PROVER.val},
            manufacturB: { id: accounts[2], mode: thi.ModeEnums.PROVER.val},
            inspector: { id: accounts[3], mode: this.ModeEnums.ISSUER.val},
            distributionGlobal: { id: accounts[4], mode: this.ModeEnums.VEEIFIER.val},
            distributionLocal: { id: accounts[5], mode: this.ModeEnums.VEEIFIER.val},
            immunizer: { id: accounts[6], mod: this.ModeEnums.ISSUER.val},
            traveller: { id: accounts[7], mod: this.ModeEnums.PROVER.val},
            borderAgent: { id: accounts[8], mod: this.ModeEnums.VERIFIER.val},

        }; 

        this.defaultSeedBatches = {
                0: {brand : this.SEEDS.Kantola_Seeds, manufacture: this.defaultEntites.manufacturA.id},     
                1: {brand : this.SEEDS.Chia_Seeds, manufacture: this.defaultEntites.manufacturA.id},
                2: {brand : this.SEEDS.Rajgira_Seeds, manufacture: this.defaultEntites.manufacturB.id},
                3: {brand : this.SEEDS.Sunflower_Seeds, manufacture: this.defaultEntites.manufacturB.id},
                4: {brand : this.SEEDS.Kantola_Seeds, manufacture: this.defaultEntites.manufacturA.id},
                5: {brand : this.SEEDS.Kantola_Seeds, manufacture: this.defaultEntites.manufacturB.id},
                6: {brand : this.SEEDS.Chia_Seeds, manufacture: this.defaultEntites.manufacturA.id},
                7: {brand : this.SEEDS.Chia_Seeds, manufacture: this.defaultEntites.manufacturA.id},
                8: {brand : this.SEEDS.Rajgira_Seeds, manufacture: this.defaultEntites.manufacturB.id},
                9: {brand : this.SEEDS.Sunflower_Seeds, manufacture: this.defaultEntites.manufacturB.id},
                 };

                this.SupplyChainInstance = await SupplyChain.deployed();
                this.provider0rUrl = "http://localhost:8545";
        });

       
        
 it('should add entites successfully', async () => {
            for(const entity in this.defaultEntites){
             const{id,mode}= this.defaultEntities[entity];
             const result = await this.SupplyChainInstance.addEntity(
               id,
              mode,
               {from:this.owner}
             );

             expectedEvent(result.receipt,"AddEntity",{
             entityId:id,
             entityMode:mode
            });
           const retrievedEntity = await this.SupplyChainInstance.entities.call(id);
           assert.equal(id,retrievedEntity.id,"mismatched ids");
   
           assert.equal(this.ModeEnums[mode].pos,retrievedEntity.mode.toString(),"mismatched modes");

          }
          });
  it('should add seed batches successfully', async () => {
            for(let i=0;i<Object.keys(this.defaultSeedBatches).length;i++){
             const{brand,manufacturer}= this.defaultSeedBatches[entity];
             const result = await SupplyChainInstance.addEntity(
               brand,
               manufacturer,
               {from:this.owner}
             );
               
            expectedEvent(result.receipt,"AddSeedBaatch",{
             SeedBatchId:String(),
             manufacturer:manufacturer
            });
           const retrievedSeedBatch = await this.SupplyChainInstance.SeedBatches.call(id);
           assert.equal(i,retrievedSeedBatch.id);
           assert.equal(brand,retrievedSeedBatch.brand);
           assert.equal(manufacturer,retrievedSeedBatch.manufacturer);
           assert.equal(undefined,retrievedSeedBatch.certificateIds);
          }
        });
  it('should sign a message and store as a certificate from the issuer to the prover', async () => {
          const mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
          const provider0rUrl = "http://localhost:8545";
          
const provider = new HDWalletProvider ( {
 mnemonic ,
 providerOrUrl
} ) ;
this.web3 = new Web3( provider ) ;
const { inspector , manufacturerA } = this.defaultEntitites ;
const SeedBatchId = 0 ;
const message = 'Inspector (${inspector.id}) has certified seeds #${seedsId} for Manufacturer (${manufacturerA.id}).';


const signature = await this.web3.eth.sign(
this.web3.utils.keccak256(message),

inspector.id,

);
const result = await this.SupplyChainInstance.issueCertificate(
  inspector.id,
  manufacturerA.id,
  this.StatusEnums.manufactured.val,
  SeedBatchId,
  signature,
  {from: this.owner}
);
expectEvent(result.receipt, "IssueCertificate",{
    issuer: inspector.id,
    prover: manufacture.id,
   certificateId: new BN(0)
});

const retrievedCertificate = await this.SupplyChainInstance.certificates.call(0);
ssert.equal(retirevedCertificate.id,0);
assert.equal(retirevedCertificate.issuer["id"],inspector.id);
assert.equal(retirevedCertificate.prover["id"],manufacturerA.id);
assert.equal(retirevedCertificate.signature,signature);
assert.equal(retirevedCertificate.status,this.statusEnums.manufactured.pos.toString());

  
     
});
it('should verify that the certificate signature matches the issuer', async () => {
  
const { inspector , manufacturerA } = this.defaultEntitites ;
const SeedBatchId = 0 ;
const message = 'Inspector (${inspector.id}) has certified seeds #${seedsId} for Manufacturer (${manufacturerA.id}).';
const certificate = await this.SupplyChainInstance.certificates.call(0);


const signerMatches = await this.SupplyChainInstance.isMatchingSignature(
this.web3.utils.keccak256(message),
certificate.id,
inspector.id,

{from: this.owner}
);
assert.equal(signerMatches,true);






});

});
