const networkId = 4; // 1 for mainnet, 4 for testnet
const abiJson = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getPreSaleRedeemed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"to","type":"address[]"},{"internalType":"uint256[]","name":"quantity","type":"uint256[]"}],"name":"grantTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPreSaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPreSalePeriod","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPublicSaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPublicSalePeriod","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSaleEndTimeStamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"preSaleMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"preSaleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSaleStartTimeStamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSaleStartTimeStamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI_","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"setPreSaleEndTimeStamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"setPreSaleStartTimeStamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxPerWallet","type":"uint256"}],"name":"setPresaleMaxPerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"root","type":"bytes32"}],"name":"setPresaleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"setPublicSaleStartTimeStamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"togglePresaleActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleSaleActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const contractAddress = "0x0A8f779a8Ef0b1a530B1aCa5b4F06D025fE19CD5";
const whitelist = ['0xb838eD7D136A99031de68106B9CD5C8b7e89a08A', '0xcb92AC2f2408295d0F947679239c5672df918306', '0x803FB9C67B8FcfAe77521C7157823d55BE03985C', '0x96166c840B579D23bD39F0525B5032646450b8C3', '0xd0E062dd8cA053e635889B1f442514924472D484', '0xA8c2D542a746826015D193729292fB97D9b52d6A'].map(element => {
    return element.toLowerCase();
});
const totalSupply = 15;
const unitPrice = 0.01;
const STATUS = {
    BEFORE_PRESALE_MINT: 1,
    PRESALE_MINT: 2,
    AFTER_PRESALE_MINT: 3,
    PUBLICSALE_MINT: 4,
}
let currentStatus = null;
let contract = null;
let methods = null;
let currnetMinted = null;
let presaleStartTs = null;
let presaleEndTs = null;
let publicsaleStartTs = null;
let timerid = null;

const inMintSite = () => {
    return window.location.pathname == '/mint'
}

const pad = (num, size) => {
    var s = "0" + num;
    return s.substr(s.length - size);
}

const getTimeRemaining = (endtime) => {
    var t = (endtime - Date.now()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / (1000 * 60 * 60)) % 24),
        days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

const clock = (id, endtime) => {
    let days = document.getElementById(id + '-days'),
        hours = document.getElementById(id + '-hours'),
        minutes = document.getElementById(id + '-minutes'),
        seconds = document.getElementById(id + '-seconds');
    let timeinterval = setInterval(function () {
        var t = getTimeRemaining(endtime);
        if (t.total = 0) {
            clearInterval(timeinterval);
        } else {
            days.innerHTML = pad(t.days, 2);
            hours.innerHTML = pad(t.hours, 2);
            minutes.innerHTML = pad(t.minutes, 2);
            seconds.innerHTML = pad(t.seconds, 2);
        }
    }, 1000);
    timerid = timeinterval;
}

const checkWeb3 = async () => {
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        return true;
    } catch (error) {
        $('.error-msg-section').show();
        $('.error-msg').html('Signature declined. Please try again if you want to connect..');
        $('.mint-container').hide();
        console.log('user rejected permission');
    }
    return false;
}

const getNetworkId = () => {
    return parseInt(window.web3.currentProvider.networkVersion);
}

const getUserAddress = () => {
    return window.web3.currentProvider.selectedAddress.toLowerCase();
}

const getUserMintable = async () => {
    let now = Date.now();
    if (now > presaleStartTs && now < presaleEndTs) {
        redeemed = parseInt(await methods.getPreSaleRedeemed(getUserAddress()).call());
    } else {
        redeemed = 0;
    }
    return 2 - redeemed;
}

const getProof = (address) => {
    // TODO : whitelisted address
    let leaves = whitelist.map(v => keccak256(v));
    let tree = new MerkleTree(leaves, keccak256, { sort: true });
    let leaf = keccak256(address);
    let proof = tree.getHexProof(leaf);
    return proof;
}

const mintBtnClick = async (e) => {
    e.preventDefault();
    $('.error-msg-section').hide();
    $('.error-msg').html(``);
    let quantity = parseInt($('#counter-input').val());
    if (quantity <= 0) {
        return;
    }
    let mintable = await getUserMintable();
    if (mintable == 0) {
        $('.error-msg-section').show();
        $('.error-msg').html(`You had reached the mint limit, please wait for public sale!`);
        return;
    } else if (quantity > mintable) {
        $('.error-msg-section').show();
        $('.error-msg').html(`You can mint at most ${mintable} more!`);
        return;
    }
    $('.has-wallet').hide();
    let userAddress = getUserAddress();
    let proof = getProof(userAddress);
    let gasLimit = 500_000;
    let value = ethers.utils.parseEther(`${quantity * unitPrice}`);
    let now = Date.now();
    let result = null;
    try {
        if (now >= presaleStartTs && now < presaleEndTs) {
            result = await methods.preSaleMint(quantity, proof).send({
                from: userAddress,
                gasLimit,
                value
            });
        } else if (now >= publicsaleStartTs) {
            result = await methods.mint(quantity).send({
                from: userAddress,
                gasLimit,
                value
            });
        }
    } catch (e) {
        console.log(e);
        $('.error-msg-section').show();
        $('.error-msg').html(`There is an error in your transaction, please check your transaction.`);
    } finally {
        $('.has-wallet').show();
    }

    if (result) {
        console.log(result);
        $('.error-msg-section').show();
        $('.error-msg').html(`Congratulations! You have successfully minted ${quantity} Meowomen, 
        Here is your transaction hash ${result.transactionHash}`);
    }
}

const updateLayout = async () => {
    console.log(`Updating layout : ${currentStatus}`);
    if (timerid != null) {
        clearInterval(timerid);
    }
    if (currentStatus != null && currnetMinted != null) {
        let now = Date.now();
        $('.has-wallet').show();
        if (currnetMinted < totalSupply) {
            $('.error-msg-section').hide();
            if (currentStatus == STATUS.BEFORE_PRESALE_MINT) {
                //hide mint panel
                $('.mint-container').hide();
                //not start msg
                $('.timer-caption').html('Presale Mint is not start yet. Stay tuned!');
                $('.timer').css('display', 'flex');
                clock('js-clock', presaleStartTs);
            } else if (currentStatus == STATUS.PRESALE_MINT) {
                let userAddress = getUserAddress();
                if (whitelist.indexOf(userAddress) >= 0) {
                    //in whitelist
                    //show mint panel
                    $('.mint-container').show();
                    //count down to presaleendts
                    $('.timer').css('display', 'flex');
                    $('.timer-caption').html('It\'s presale now, hurry up!');
                    clock('js-clock', presaleEndTs);
                } else {
                    //not in whitelist msg
                    $('.mint-container').hide();
                    $('.timer').hide();
                    $('.error-msg-section').show();
                    $('.error-msg').html('You are not on the whitelist.');
                }
            } else if (currentStatus == STATUS.AFTER_PRESALE_MINT) {
                //hide mint panel
                $('.mint-container').hide();
                //show timer count down to public sale start time
                $('.timer').css('display', 'flex');
                $('.timer-caption').html('Stay tuned. Our public sale is coming soon.');
                clock('js-clock', publicsaleStartTs);
            } else if (currentStatus == STATUS.PUBLICSALE_MINT) {
                //public sale
                //show panel
                $('.timer').hide();
                $('.mint-container').show();
            }
        } else {
            //mint end msg
            $('.timer').hide();
            $('.mint-container').hide();
            $('.error-msg-section').show();
            $('.error-msg').html('MEOWOMEN IS SOLD OUT!');
        }
    }
    if (currnetMinted == null) {
        //force redraw layout
        currentStatus = null;
    }

}

const mintSupplyMonitor = () => {
    setInterval(async () => {
        currnetMinted = parseInt(await methods.totalSupply().call());
        $('.mint-count-number').html(`${currnetMinted}/${totalSupply}`);
    }, 1000);
}

const mintTimeMonitor = () => {

    setInterval(async () => {
        let now = Date.now();
        let originalStatus = currentStatus;
        if (now < presaleStartTs) {
            currentStatus = STATUS.BEFORE_PRESALE_MINT;
        } else if (now >= presaleStartTs && now < presaleEndTs) {
            currentStatus = STATUS.PRESALE_MINT;
        } else if (now > presaleEndTs && now < publicsaleStartTs) {
            currentStatus = STATUS.AFTER_PRESALE_MINT;
        } else if (now >= publicsaleStartTs) {
            currentStatus = STATUS.PUBLICSALE_MINT;
        }

        if (originalStatus != currentStatus) {
            updateLayout();
        }

    }, 1000);
}

const initPage = async () => {
    $('.connect-wallet').hide();
    if (await getNetworkId() == networkId) {
        //mainnet
        contract = new web3.eth.Contract(abiJson, contractAddress);
        methods = contract.methods;
        presaleStartTs = parseInt(await methods.preSaleStartTimeStamp().call()) * 1000;
        presaleEndTs = parseInt(await methods.preSaleEndTimeStamp().call()) * 1000;
        publicsaleStartTs = parseInt(await methods.publicSaleStartTimeStamp().call()) * 1000;
        mintSupplyMonitor();
        mintTimeMonitor();
        $('#send-eth-submit').on('click', mintBtnClick);
        $('.counter-input').val(0);
        $('.mint-minus').on('click', (e) => {
            e.preventDefault();
            $('.counter-input').val(Math.max(0, parseInt($('.counter-input').val()) - 1));
        });
        $('.mint-plus').on('click', (e) => {
            e.preventDefault();
            $('.counter-input').val(Math.min(2, parseInt($('.counter-input').val()) + 1));
        });
        $('.has-wallet').hide();
        $('.mint-container').show();
    } else {
        //display network error
        $('.mint-container').hide();
        $('.error-msg-section').show();
        $('.error-msg').html('Please connect to ethereum mainnet.');
    }
}

const connectWalletBtnClick = async (e) => {
    e.preventDefault();
    if (await checkWeb3()) {
        initPage();
    }
}


$(document).ready(async function () {
    if (inMintSite()) {
        let hasWeb3 = false;
        if (window.ethereum) {
            window.web3 = new Web3(ethereum);
            hasWeb3 = true;
        }
        else if (window.web3) {
            window.web3 = new Web3(web3.currentProvider);
            hasWeb3 = true;
        }

        if (hasWeb3) {
            if (window.ethereum.selectedAddress != null) {
                //connected
                initPage();
            } else {
                //not connected
                $('.connect-metamask').on('click', (e) => connectWalletBtnClick(e));
            }
        }
        else {
            $('.connect-wallet').hide();
            $('.mint-container').show();
            $('.has-wallet').hide();
            $('.no-wallet').show();
            $('.mint-count').hide();
            console.log('No web3 provider detected');
        }
    }
});
