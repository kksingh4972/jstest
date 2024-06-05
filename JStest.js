/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, artist, dateCreated, description) {
    //creating an opbject to hold the metadata for the NFT
    const nft = {
        name:  name,
        artist: artist,
        dateCreated: dateCreated,
        description: description
    };
    // storing the NFT object in the nftcollection array
    nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT #${index + 1}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Artist: ${nft.artist}`);
        console.log(`Date Created: ${nft.dateCreated}`);
        console.log(`Description; ${nft.description}`);
        console.log('***********************');
    });

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`Total NFT Minted: ${nftCollection.length}`);

}

// call your functions below this line
mintNFT("Art Piece 1", "Artist A", "2024-02-02", "A crazy piece of art.");
mintNFT("Art Piece 2", "Artist B", "2024-03-04", "An horrific landscape.");
mintNFT("Art Piece 3", "Artist C", "2024-04-09", "A romantic weather.");

//lift of all NfTs
listNFTs();

// Get the total suppply of NFTs
getTotalSupply();
