const networkId = 1;
const abiJson = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getPreSaleRedeemed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"to","type":"address[]"},{"internalType":"uint256[]","name":"quantity","type":"uint256[]"}],"name":"grantTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPreSaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPreSalePeriod","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPublicSaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPublicSalePeriod","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSaleEndTimeStamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"preSaleMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"preSalePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSaleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSaleStartTimeStamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSalePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSaleStartTimeStamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserved","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reservedMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI_","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"setPreSaleEndTimeStamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPreSalePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"setPreSaleStartTimeStamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxPerWallet","type":"uint256"}],"name":"setPresaleMaxPerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"root","type":"bytes32"}],"name":"setPresaleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPublicSalePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"setPublicSaleStartTimeStamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"togglePresaleActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleSaleActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const contractAddress = "0x67D2F36DB53369E23772b26D0935D82d890aD850";
const whitelist = ["0x000091892804f655cc1aca5bbe42944dbb972ab1","0x002988751de5bb1ff3ebfed2b6c65c5d383deb6b","0x0107b3d4fae11a95535166f1ffdb30930e49c049","0x0107ce60333b78b353370ae4facbeb7ac8545f02","0x011a77a500a8250a185b5d27be15bfd7dce06cc6","0x015b967d09be57c37a9db9c3ed149bed817a9cf4","0x01cb6466c3576b83cdc707f63d0ba9d34ba76c3e","0x021e95b3ff32843ff934390ca3350ff3c9cb8428","0x0223f06de5cd6e476c8ae87039b36bca33c2973d","0x0277db9fc7a147800d1c375a37bfe4ed792cdf77","0x0278afd108cd72d7569eab228b7cd8d1980b4ca1","0x02f8f757957c5bf9170e1950278eafd41f921e7a","0x0306a5ad0e492eb37be08ef21821dd0bca7ce82c","0x031054962d82c8a3f374cffb936cf1e7cfca987b","0x03452f4148058ed6a92b7e9f41bbd58ee02c2c3f","0x03e9be25f90ccdcc0515b790113d37f5bf4ba153","0x0479393df9765ddf101c072f5f265e7417723070","0x052c5fcc6cbc76173ec4ce625af1eb24eb5b574d","0x057ea45ab0355c02a66e11dec657694d89afcf59","0x05f122d0df4de17a9bbfa7f15448e972f587e041","0x06544ac8b449a6ce511aae1498a6fdd4334ee3c2","0x06cffcf5d403082e4075ed13a28588381842560a","0x070abdfe500e8e9b92a06bd4b7c12fd934f244b6","0x074f1ae98857a5497e1388c48691b732d5edd505","0x07793d2fa573831f93fb59c07c837999a5c57d51","0x07bfeb5488ad97aa3920cf241e59d2a817054ea3","0x088dfd61fa12ed98bbd027fbd4c6569d681bafdb","0x094cf31d5de07eab7a423183bf7eff1e6d28d8ad","0x09866848e7eec651d6fa2f083bc34a6f2297b5d4","0x0a1dac1c3b9136bd120fddfb28aeb084d9c9c42d","0x0a3b151beeb0acb8a16cdad2e186bc6685b821b0","0x0a5dde32f963c225aaab2a49dc5a73870b3b45ff","0x0a6362541867a7f342f6576d5df3fc291866c19f","0x0a7768f3c163f47f192c88fc6ca00887cd1deed7","0x0ae1804b5b2086d76801f90607fc7d4138279dea","0x0b523e89d754b63dd91460b8eb8b949664ff46b8","0x0b64d8c15615af747c2bbc215a1a84780d932338","0x0bf71ba8356845cb00d80802a741d29e5784f39d","0x0c902f0ba89ec1a0ed3c8b2791ed836184dccd7b","0x0caf65f812da0916bedce34be07f589d2f473df6","0x0ccfa1c3441f3febdcee067bd1cbe3af7bbb614b","0x0ce36abac93d4a3066dd38b91668ade632d09643","0x0cf592b2bad48baf97ef64b86d6dc574dd70a830","0x0d53ab1ede05039f6b91b753ddca767cf9a2fad9","0x0d68612ab332f42c7209c2aade491235c09c8675","0x0d9464dcc842c0b9e639bfd3844afd1031263980","0x0e30ed10efc4430c4610a72d9185bb507859e2b6","0x0e3ae1a3fee55cc2166b8fc79289c2d401e24c11","0x0f5762f6166f6dd643d5f4116ffc4c815956b84b","0x100105dc358a639c091c2e111f660e080e7382cb","0x10351e0b320eb67b8aacc838535adb562b9306d6","0x10900548c32474eaf5368c01ead468d78ac40d0b","0x10a62fa89ef70fd4e3bb90b83d80274ddaf25904","0x10c45c8b122916cb0c4b01f3df54e34b46b0bc9b","0x10f7f129e95fd7b25b670e78ac433bb845395a4b","0x12f666cf593b412dc88cb156584198e2f620b8dc","0x133255db23f6b03c15e8a4ad37c8cc51d41070e8","0x141c663fd81914a3ad328bce16a1b817a7bd82f2","0x144d18679fb2f77adb91c43b776ae0cee62a0b04","0x1497a64461399c000fdbab68be7882b1cfefb8a0","0x14ba3f3eb33a7bcd8b6f3ff195f6e9c9a28d92bc","0x1518bb499db1bf1e625617d5c716075aba6a3cc0","0x155ab1136da40a2fe6073d48cf43c5c292bd22a2","0x1634bce893295943dd4fa52b6f4117ea66a776a3","0x17472847aacf501b2824e72e8ba739941499437a","0x17bca8088d2f85f83b6a28b3f35150822d1a06cd","0x180c06de66e2d5bc1bc13ad17634b992f76ea90c","0x181c92b4c65a484dab51a5a266ac4b4fa09290b8","0x182363111776c1abb66eddee6906631566c1ac67","0x18d0f1edbb05c4c8a1a5a40bf7509bc8fc54c84a","0x18f94b6108e8f009266b9852e34fc4fe8db4979c","0x18ffae8600f82624489f1eafba0d8b0b1d553376","0x19627bce4db0d5b77be0b0958bb79cb12d06ffc0","0x1986c8a171504dc3e993465f8630a9501874a5f6","0x19cf96b6f66e4fdba0898b1c7fbf878ec25dcb0e","0x1a41ec571ec8fc815febf81fcbaf9d7f7ec98849","0x1a817e97893e6a8f5f60925f6216402ea2c25aef","0x1acef5f147f6ce2155085aa5bb8e7dd6ff8f78b1","0x1aeb22b33ff85466998f18687fac943982ecad49","0x1b46fef913660793e4d908800d6300c6170cfbe9","0x1b924da728aab975141d06e8e1fe3737760d35a3","0x1bc0fb24c9ef20b681157f283b76d0f753749ab0","0x1bcb4de155f2405ddd262dacf347a84154364e81","0x1bd4792901772412efd319f3d038f82d2efb1c38","0x1c3e92b1b1776eecf9ce2aa4f162b917869cef08","0x1c64ee9d2e694f5f361470aa9cf3fffbc18119f8","0x1d08f4f40cc8ae7ea0b37115b2b48620a43bf403","0x1d3adb9ab924451c25495d2b55c13059ea4d7dc6","0x1d5b8f533ac3fd1dc5e455360d037e66896c26b9","0x1d5da2214db65e0fedfd62a0c9e57147de833b15","0x1da8f15d00d987b7e08852a97a0dc6b00276538e","0x1dcfb0db0d1a774da525f1200e2c549bf8a9dc70","0x1e258904e7a7d6c68cc51e88164cb2df1ccca533","0x1eaf190e560f2e330d1ca94d8d38f0359a1fb6ca","0x1ede28b78f7b823166de88a5fcfda7de18343f0e","0x1f85aa3b8ddda2f94391e196241ad728d24e7f3d","0x1f8c8bb4971c42e441e2fc3662bcac89052d4373","0x1fe82bea7aa95e9595777a10712a4a60bcf9c6be","0x1febb23290fc48cbae3337f560e36e5f65b7b142","0x200856590e2526587128da09a5270980a1a28f03","0x20409bc49569f2a730530c42cea0c53a6b3eb119","0x20e78880d72540c8211c0d30ae9e3576094e9e8c","0x210dc0506bfdab95c855871ad7011a309e518585","0x2227de445dbfd90712c48bcd74d492ccca1cb242","0x223a91b67a58bf70c0ad820b710f73bd2c19998d","0x234dbc7e5394ea984e8be6d284a7770a538b23fb","0x237c757110bad7677ab117967de834f725afb7a7","0x23835af7d692d44910363a6c1990d93f39831720","0x23857e7cbc39cd33dc475a1188aee49b6bf30f79","0x23c4b54fc715a7f3ec0306a6805823e70e07be69","0x2462f9383af0d8a64bd96525ff775110c3fb8669","0x24b5a94808282154387b6cc1d52e87c4fc4e0c70","0x2502b0a366d66172ace0bc72d746ef3ee394dac3","0x2519be4184063490d1c468ec1a6a16b60fd23502","0x253493aaee5d87ec951dfaae9115a6cb4dd18ec1","0x256d6c137e717348ad0f8badc9292ac6ae210cca","0x259adb6c54c09a71a755390cb7646e09c5230bcc","0x26309f0029e40cd45d60ecd8feb23a7440ba629a","0x2664287ef75fa1fd392201709b3c1b608b4fbe1f","0x26ac6784a382f8d378d15b495548bff23ec1842e","0x26d1ea3451cd4271699864b2e3b66375f9aa99c5","0x278762df57b0ba6dcbd62ae269989938d728e77a","0x27ca5820b06e46d34550ee92a050cc623080f0d6","0x28318629c25ef6fa7356ca41b58ddd83fd3820d1","0x28450d59ebb1ca046cadcf097665aea107903386","0x290a5302ee16b5a3bf9632f22d0222c56bdc6ada","0x29aff5b6debb19d5600b7ecdc62a76a40add8488","0x29ffc772a49412daaed9e5bf9d13d481e75cf760","0x2a381a41627de73c9285de8f5b74791ad18bd292","0x2a601ef48f4fead97622a971b74bb13ff8d34821","0x2a63b6b1a4415dcec369b5f2e24f58eb2ac5a2a1","0x2a7f7b94b4acd9b244675f3342c8321e8a6c3327","0x2a8070f313cbe95dae30a80503c327ca830a15a5","0x2aef82f62fb135ea63d80a43ee0ea1a6d028f53a","0x2b6ca557426ef32205cbd3521fcd84df73c02397","0x2ba336941d980087cbf39cccf42bcf5b7d4b0087","0x2bb74b5affecbf1c41b396a2ff4ebee9582ace02","0x2bf5b69dc1665fbf4370f29862a44d09d48b8cde","0x2c1db30b007c384c759c5c4f4817c557b681fc69","0x2d118dfc2661670c8468c125cef8009a0c057c8c","0x2d18616b1b813ae4bf203b0669f3978f1d654657","0x2dd873dd2b31142ebc761a3f05c3bd2ce318cc7a","0x2e85954ec8e2970d5b60a81ad93852765b7711e2","0x2ea86705fc9e2756aefe9e6e9b487b62f4599bb5","0x2ee35074f7738f24e614661e5a212145d8120f95","0x2f49b3be4a061180efb4f7b4a8488ea51106ba6b","0x2fb7bef00c58a4f7d7bf3d4ee0009d84b4a886a1","0x2fcedba65ab84f70063e5d4118cdf8a628c46c19","0x300830703ea54a5b9e136b5db0d1032914b4daa1","0x30391fdc67b3a1427fd4fdc2d4e0875a8a1e3bbd","0x3054a64dd2717453c316afaa093ece6cfbe3f77e","0x3058f54689312d70fcf1a744b9b7960f4f2da853","0x31766b2f4986ff5870d8ebec0e414b1975420f0f","0x317921cc525e50d264c89cf0df2e507da997a85b","0x3183a9173ceeca7588f18b3b9cdcb4346534fda8","0x3195eb9fa94fd01e137f78c84e49f797a92164f7","0x31e8429ca4a8e2f9bcc1dcfc781fa4f654e7e9d2","0x31ebbfee1acbc20fc0eec8de27aaf6da87cb1e41","0x3213d6e5a811e90272f21a697bbf41d89c80e908","0x327893d88af9efe181450cda2bc90df15c4ee315","0x334508f01db19804f2ca0377e60bc6bddf09cb72","0x334df893a50bbb3016de1e825c4500da4b42e3fe","0x343301b71186bd0105bf4010ddbdb788dcb77bd6","0x35b1b8f083295122b4c6357a99279d184d88bc77","0x3679a16c418da3416f0d69c9f2458b2bff795661","0x369615bc57975b06c418f42d3fda3754a385b97b","0x36d7e86212eff3837671ddb76f5111a4e5fe6f9f","0x36e4bc44f88686bc9864df8a9235571b35cbd967","0x370d969b544f1f7079c80954f8359aea77fda69b","0x3743f1af0956e87a5b6f227e4cb76f11e6f11d1d","0x37a5a5a36dd9ad33d6ec6649de1066582ec50ca3","0x37ca449b261dcbe65f7eb2b44bb4c0d2aabf996d","0x37d0e934f563313a77d3d380af6708b7b3d94478","0x37d31be0256f89ca672a7f9bd937fdd98ae79c83","0x37ddaaf14a49b5107e592acdb8c13da0fade2299","0x382a8b179a137c15a5c7ce9d93fda26c30e97b10","0x3a87553b8e8e4840f57179611e45195d6ca71c3d","0x3a951adadb435c59d6d75e2ac7a850d895aec0bf","0x3bc94735148faca654303ad25772ec5180fd6518","0x3c1ed067a22f87a800a9986bc905617934d8d94e","0x3c64311bc9cc234dad28ab236970aba6346a004b","0x3c9d1d4cdd4bfa329400f856676881fc39ed03a4","0x3cdb93d2f802c3c76de7c7537cdd232eedeae5ba","0x3d05711903d48fd7c3326f5d764d08758e5e368f","0x3d3292d9142c9194de2e1fc7ea8f1ac51c01e408","0x3d6afe2a180728bd3c073b6c410156cb3a9230dc","0x3de4505c9aff59bff461c3f2bfacc6d40cd39c66","0x3e6b6cd9699f20cd6f992a0cd421cc46342d2f43","0x3e71cf3bcf4f8ffd484eeb5fabfb6285970b54a4","0x3ea8fd3e7c4b9217fd562aed8ac37becdfe39035","0x40209a423b2331b6a502630470d4095ee06dc62d","0x414e168ee31a7287e6ea9d3bf77672e93161dcf8","0x415bd9a5e2fdcb8310cee3f785f25b5e4d4564e3","0x41ddbd9074dcacacd714eb4c3be7703c7b0781f0","0x41e6732f0bbe183eaa772f75bcac2398d817b95f","0x41ecec8e3f90538ee1f522fe5862ba1fc62b9453","0x42213399736741d19b574c09cf43b4bd7ddca6e1","0x42245561cf1128496cef0ffd121af33ef6218f92","0x42409aeb4f436aaefbc6b542bde5081c46653499","0x4282213c956b9ba62f56a0cda0dd9179e7a6f410","0x42927f6c4c539ba7e7a49c1cc96e5ef2f21a8873","0x43a8c96e13ecaeb0bf1f23207565039e11ca3156","0x46b0a3a45959a0d4d828cfe384b8d006e94bed37","0x484ce76a06979e90adcb7ec1016d58c5b1b31afc","0x48910a64005cff019885bd7b277e0a69a94ae11f","0x4963033ddb642c78b90e951e1587c4a5c2a13998","0x4a0b88313a1d609061587989f75cec5adb34d959","0x4a232b714fc6f33fc31943a0a4b2a75636f58586","0x4a37c4e2d808ff3bb680ed655e888546e5428a26","0x4a7b11adbd18be007bbc88dc896ff0893b857df5","0x4b31c0362b2e68b38dadb9708a51ab024b9a900f","0x4b9d1097d414d27b95b5e84b14eebdec18edc29d","0x4bfde9c1ab8887452a2a9fb80b6f60e013108ea2","0x4c23e6fe44c190df58d29bd46cb2f313b32ed770","0x4c71dc5964ad400784068fcb89dce7526ba217bd","0x4ca13d740e1d942af124bd810ab259c970a8d86f","0x4cbb957837528cd3273f1407b45aadc878ec0692","0x4cef98d34e5bbe12491cef4d565ffbeb128a4b46","0x4dafdf2403a2d1795c1b82890cc58530cf63a63d","0x4e3221b2cd7b44532416fc45f9b0d2cded5779a5","0x4e93eb5aa690c1511096d3691d5eecc18e673de0","0x4f64c6b8333f74890b0ba0af4d480d8ecce01e17","0x4ffc88958e0a5ced57e373d32bca3da24f3db8d7","0x500eb89e9724528d9e26abbd624cacf0ccb485b3","0x5021eed9883ca9c7dbcdf383038b0e5140fce45c","0x5051b755a517d4995d86cf9881b76b174fbd12a9","0x5085e182e43723e9c7deb6022ec6a3da32c5f8dc","0x5089f74d6b44325c79442b4215054ee87eded588","0x5167f7416061307c8bf720ecfdfe4e0fe36c2fe5","0x518f8e3cc7d945a0297a8c61d6b01db8e0276d11","0x51a4da1d0a50e9602062e4fa310bbdc743aec09c","0x51beb67dedf18140460cfe38bfcff37ad4dae267","0x51d94fd32784acfea0f95bcc48e7ac6187ac001d","0x51edb088b39fd1ce613eb7ffb06503b83ef35198","0x5278223b78ce6a50cd0e5e237104c4ef65760f65","0x529e429871b3170bae904dc1ac687a3a07bd4fb4","0x53522109a167bb7619cc467581a7f87af0c5466e","0x53b581f0f916e09ba07b6204e8720a1d9323521a","0x54009c3d600dfbdd02c279075e3807480f7b783e","0x5450e02ae67cbf741f285e5ec0f194518ef496fc","0x54f36993542a8efa69a6473b9bbca92874906d9f","0x550406233334e5561514a8a2961609cceb370d9b","0x55a62ded73cb6cba91fb2b318d255d7c400267ec","0x5648883c1c9296591257633a26fc525734ad4709","0x56993057f0b924e7cd11984c0ca5a3e410e7da52","0x56e1b883a7ee8c948d014af899e2710b8b89de6d","0x571642c4500f57a204918c0b7d50dec6a30f72ae","0x57e6f03fc666b8be4726819961ae78cfbb7e2fa7","0x58110bceffd21e1f6c50f4670ed81f978aff5baa","0x58918bedc1c09288dd12b0393019a3fc850b52af","0x59318b8386f90808d491752930a759189072424a","0x59dcd59551848dda2448c71485e6e25238252682","0x5a431ca9365a1b3cfa5699a8deac12a943bd0ffb","0x5a4dc214f8d5b2537a3c857b6f8ab632bd330d68","0x5ac72f7f92ea6372d9e8a6131ac741163c97611f","0x5b64053c3f9bfda9effbc3c6f57dc427fe674bf2","0x5c06549146fbade0a69caa8105435b2918b48851","0x5d8153134c9e673f71eaf9369c4cd6c9a27243c7","0x5dd3435b1b086c08f96666744031cac5d8e49ee6","0x5e39f37b10fd3d55f27aa21f4b82a03bd0ab34a2","0x5e837dad4f995d7d020af9656f7e5bfd11e9bd17","0x5efdf197f9233e7f584192b52c52734522b75b15","0x5f6306d36e89a9f76f238949bbcd513d0039f4ea","0x60035bbf8409c6d0d92bb42919115373a4e1a44a","0x60219ae9ace8bcf7725a535cc6f43d47b37510eb","0x6037492228b7953239cb92f842d90b49144033b8","0x60f36434a42ec1126a6f1fd33d158cb670ea08c3","0x628fbf6e61b562dd0545ad4839aa2b94c8000b8a","0x629149b974987fac5dcda210ddb6cc60a0ac7e1b","0x62f65fd686b65ed36953347779f8168ba83ce2d3","0x637fd60cc34883cab05ac8b3548c31265a0072a8","0x63b9256e3082fc3ff1227a0843dd833a841f4c1d","0x63bf66d525ca43a3c0c2880e7dd210aa790e4519","0x640b362c1ea20716ef9a9cdf8b19ea371ab18e20","0x6417d5c90880a09ca76d246149c2bde57a414c1e","0x646807da0c817d40048752cb2038f05564873d5b","0x648a984003798b4735c198eebb81a78d546ce24c","0x64ff8a32bd2b2746ed2a42ce46eb1bd74c59f70c","0x65275caa5bb410377162427d60e03f495f691d63","0x65476310506f52c8f9ab338fb410c3c76e746c20","0x654d556ab8104da43aba8ef8592691967d7f1c28","0x65c575f3bc8c3450d8b283b6ff5d0ea9ac677aa6","0x65f20dcda74e773322bae8c312f3ed3c5aafd3be","0x6601649a5eb9198cb87c9023bfccedc0bca6ec2e","0x666aa79c66a85d7eac089fc30357814c3fb2257b","0x6687c63cce9b0c594e97fd776c100bd47b0c4e44","0x6692f937944d0c1b288166b9424a13cc6e4875ef","0x6705bb3eb41bb83518b43f4894ba5bf7504d4982","0x670f62cdfbf9e4c4e501e17e0758e900be7fa324","0x67147d78ef5eeaed7d8e053e77b2eb907e73faf1","0x67285b536f3930a25f46fbe55bfafe9cc16511d5","0x6736dbbc71e5e37098da7a6f9ec468afb8d3c12d","0x67955b540d15e2230993bd7efb7d2b70a9c70e3f","0x67b119e8a85b68d92f545ce0717b0ea1b2ae63f4","0x682870b5f4dcfc342f0a3c03c611d498d187913c","0x688bc734e0f452dd46c6b36f23959ea25f683177","0x68b294041bff591adb7b4c65e41fe76ab49d6899","0x6920138b0e147c0dda81fa7164e0ea5a28070a37","0x69420c67545e5ee95d1375f93ec0da06c05c9c1f","0x69cf21b0bf33cd668a8ad2070700ec3bfe48b775","0x6b47b8c73907912febbfd521e8232ed8d42501d0","0x6b52458539bae42eba03ba7ed080bcb001ae2463","0x6b66f709cb59fe79f5d1dcd69745a7f8e30bf07f","0x6b6e0f3998ab17e357288f852c1c9c19dbffadec","0x6b8d260d58c544e556d6f6de2691bdc0d7707eea","0x6bc49160ad22aeb092b15aa8c58cb8e80fec0f96","0x6bdea3dcf688722f5890dada31e7c328082b0221","0x6c6c6dd7cd706c786d96971ded9287fe0f971c46","0x6cfc78083488074eda91ccc6bec849854b0bda24","0x6d1c8ba374a2896800e834e1317b29575acf56b5","0x6d2de304ee4000987a0b02f9b707a0019828d29c","0x6d584eeca5f47ff742e525c4dfe90e17c46cd72d","0x6dd9900560fc0f2c32a5b25f311129abc65235ce","0x6e19270d38e06a417b8be783fb072303a439186b","0x6e2fc50bdde3e8b45ab47282986c5c45ffb08b7e","0x6ea2d729de8a0f5a1113611d0940c29b7684e684","0x6f0b60a2951ca056eac5d25ee79207ae0f02ee9e","0x6f6b0bdbc01ca09608c6d941da3c29ac452819e2","0x7047ed35c4c2c89360616cb13a42f6fc378a404c","0x70690cdba1d59eddd9d575753876102cb8d57428","0x71379fb7df62704f77a2638be81ec16aa047fd75","0x715ee041a4cf8054342f8ea2ffee83eba3cc5c92","0x716470e6a49244bbfc986e1d2af993c5c46e1983","0x72355c3b58c2bb68cb8e8145078428ab5a654ab2","0x73ae77c11af0f8780e8a56cf3897531f5b132c70","0x74f5f964568abdd06d57c887bb8518e1316b06b5","0x757762e80ca5c47cb825a7871dfdc45ec51919e3","0x7628ad148d07d471f991b9ddd6b2b698252a5845","0x76af7f6fd239994df462488154bab99dd46d38f5","0x771bc4857c975c854ebff5299213dee439dd22a8","0x772b7d1c1bcb399d85784affcfeb999837f6cd3d","0x77b14f509c1de672aa6d3260c9f6244e7252f332","0x77e8001a83e5175e36b0d80c11fe8b5a65ab5ca3","0x7842c0b2773ad16d0e0f00e24815c04f700a7d33","0x786a4dba0fada4a7f04b14160a88c4356a1f7556","0x78b1d246eff6aed3a8a85892314792dd04411890","0x78c8a2458de77b636958fc35af82770f619daf0e","0x790dbce0cd59eece79b5d21844f0c32e0078de59","0x794603c1a0c4799b04cd8f9406d2b201286ce63a","0x7994203f49fcbbf118b95caa52ec03e03bf06182","0x79ab4c8ca2c25bf2071678915a813b64371aad3a","0x79cbd28b8cd447e2528d38b58b19d9587c8d764a","0x79e52cb05ee494663d998d3b3def3d4fb48e4ab2","0x7a7be46ee70b8d659aba268681a14cbefc210af5","0x7b61a2c92dd964931c0c49c39ce616a81165a3dc","0x7bda8fba5213742cc4a6c2a0a6237bc90e54a5e2","0x7c1574d2a1f1b78d1c4cf17aa1c030a0517b2260","0x7c9b0337f79ddadbf8b225259adfaede30dca3c1","0x7ce652784ea8a15a45303c1c6f44e29c7d245a42","0x7dd977332dde9f815b249144e000b8590c2ca569","0x7e623a690477b0ea829b821901f8de9847a79f17","0x7ef96fa0e7b1a4045f72d6e3e3ba54e0971d16ba","0x7f04da3a49e22b05413c8fee39ac120eefbc5e39","0x7ff11507c9f7a350ded807166d4ecb59f22f6594","0x803fb9c67b8fcfae77521c7157823d55be03985c","0x8066afec8b19afcf8ebae53d8a0f813356d10589","0x810eb96f7bc6d448ebf0abe2ba92c74c334a16e5","0x814602d6614a7a60a436720647da8a0a1e694bca","0x81832925bd1f7061c317f012d65cc6db613184b1","0x824cd75db050a171bbfdb8067544bb009a866b87","0x82cd8bdd4c89a40c25a6236bdc30b2c59d728042","0x83f6cda11e74c75a5f0fef8be0e1693ecc314f35","0x842e2861bd7d401a5b916fe97dde0165d37992fc","0x844854bce8f31a14e275e646b4b2f52d704b22e5","0x848c5241af8f292ed8c0d7e5b5ff50849082db4d","0x848fba2129cd31844cb22dd7d0e69478bfb96f7c","0x84dc4343f50ac947954bb1c4aca7145d92b9c642","0x84df5f066fad302dc6d5ba364c47bfb3de0f1256","0x8542b7a67e1e0942883379f131165015d18ae701","0x85735eb7c13ffd9401da899a0a993802eec78b2c","0x8583c4b98b5cda69d138ea19d4f3f577a9372d2d","0x8699dc4038ac0b4b48946c423bd6ce0d1f7bf5ab","0x86a3719c7682ba9b702e9551a9027fda7da815fa","0x86aae1f634da38662d691d6821c1d49a195f2580","0x86c9ea30d6a9017164eaeb11f977f8770a6b0e1c","0x86f6ed71b191b77b52dbf24398eb2c235cd30774","0x86f8c7b0aa5c4ea488dbadc3d8f9a73aec7f7b59","0x87013cfd02a863d5ed3cad31223a81b59dbfdbcd","0x872eab8a707cf6ba69b4c2fb0f2c274998fede47","0x87929b1f21e2cf0f4d9c58a1269f8e7a598a8a2b","0x87a6501287d1c098a9fe21fb476e0965ad940704","0x87acc4c982d1d1fe8c63d5f2644896815211dffc","0x88dcad01503edbcd0795d332f9c3744304a71a15","0x890c343365c5b0380e6f532b82437cc5d0b31199","0x89995a0f98453b9b0442e5095297013f714b0c8e","0x89e1a971d1f62df8ccdacfb11954d8f1c81897ed","0x89fff6dfcd2fdee299dbdf2a697a53dcdcf7fa16","0x8ad74c522fc89c3f11d2a71c3341153fe8b1b58c","0x8af3bdd8981a72d60a1ae1b9d0d26b6e6daada24","0x8b20625537225f2e7f3df9a1183f57fc12596c00","0x8c166f7c91ae9c4cb89d3164ff34b8f82c8b27cf","0x8c1e67e71afe5af7b75ab8c41f465cf0cdda12fd","0x8c448fa410c3d67d80ac985dcf1f42147803549d","0x8c9cae0f8cdb244cea7b37e2083bb26809fe4f59","0x8cdb336a9f832cf92e6a9f05bf3d6112338966e1","0x8d1d8b2343072a8c1c0f275336eed0518ddc0fb9","0x8d1db0c2fce84a914c7d9bc291980d79d0d8e8c3","0x8dbfb1a7440e2f9e62f50b5c27ad980903563417","0x8eadc7cc0a77594e3fa999e80e1ccb7f4e1c04e0","0x8fe919c7a2ea2cd97cc7f165a8841a93d58b03d7","0x902b02a3ab094f62f2682c256f99e9f4939d4022","0x905e686aa4d7e580525884ff1c1443aea61bbc4e","0x90871f831518b3491df5b93e26f741f9176826b3","0x909ff064bbec1ac83168789605d9095a50c956c7","0x910947ff1342515122a7bf38f4e80afc3b4e4a27","0x9192ab3c37205c3463d3bb1b20be803d43bd962a","0x91c442e1bf3491ee1c2e3c2634f9cc964c106cea","0x91cbc4c0584d3ca7e6b689499264ad4cbde6ccd2","0x9209aeb0978e190f63b957514a3a8ab291dc4204","0x92107d5cacf208d0140d98da7f6d9058773c2bf3","0x922afb0b00844516e05ee62cc49d8f341ef96b5c","0x932dd6596afacf97da5bf7f49a9a907900783f12","0x934cc21876b1413e959aaaf8cad087d85119cb25","0x93991a65cb461dd113cf8ac6597c6661dad7febf","0x93ab3c4e6daa20b2b7ea65754a8c11311fbdba38","0x93ce5486824c3e5bea5561ce7e7dacd51f924526","0x93efbfa68e9bb44566cac1c7fc73f1c3369cdfe7","0x9408740bf0b2ce7ec90a3a1dc5de28c94bfa114b","0x940ec171090e4920f3adb90d52c66ff1dfbe7037","0x94704e7e55e6100c82dd4aa5457166e771fc6d42","0x9689ee48e0bb9e169422dbc999acd5308045fe1a","0x969a8fc2ba9854fac2dbd7ae6610994030e336af","0x96a484f72576c8fed6d0e6da337e7dd70509b171","0x96eca8bccda5092898b7e664a45cdfc099f3bd3a","0x976a7121d39cee988144e40cd6c89f4db8afde2b","0x9773929055e690cbec8e7d36d838941d4acb24e8","0x981d192cf252c4cf6cc76c132630d64ac351f9a2","0x9827929b310ca4e0b525ccf00333c90a16720da8","0x983b92c596eda97747402d86384187c2c3f69570","0x983c362329e316162f3cf1ab36463671f243d076","0x987a7c861de171489294a48b44dca0625d69d370","0x98dbfa7c90787b7e6919863a6fb92cc15241612e","0x98f3553c799adb8d378d871da2078b5afda6532b","0x98f4b5bfd059b1ea8c42a6f966380788dbfc6e9a","0x9973adf0ac4353984b85e57f4156cf57f6e69e0b","0x997708fe9e316f6e6b3ef91a53374148795f0e5c","0x99a5337ac864dd66cecdd637297b2ac63124bc93","0x9a349e95cd2e54b034a5e452752714d0e8ad6b99","0x9a397a3c993b593caced96ae13d01c4f1c551159","0x9aeae7672d534ac22f20d9797dc2154de334f35a","0x9afb9ae2678dc93b5bbc83fa14ed27d7d291f57e","0x9be3ebd8246dcf239184b6594a244a5522fcbd92","0x9c1aaae61d6d38bbeb79cc24fecca8279e434b19","0x9c28e4da67d4923960fbede4e0a7c2d7dd290142","0x9d490d585de4ab33c3827d3d19e59c787b8adfab","0x9d79f12e677822c2d3f9745e422cb1cdbc5a41aa","0x9e45e527b254d3342a2b8af2c7f28a708e9daf71","0x9e86cc88d072e1c0259ee96cfbc457feffcc1fee","0x9edc2b6c877a31768e6c80a5e329111c0a8b73bf","0x9f15e4eef102fb1b395f59f002ea5f1b0ef4f9f8","0x9f903298b1b4c2ed687ef34e9d919cd323aba332","0x9ff5813460e0940ca2c97a21aff33642b21b9168","0xa00911b0f452fd557e51815354857e0e9e505cd0","0xa04082a4fc3a2d72138f034ec99f316ac5a90906","0xa05ce66045c8be98befa338006b5c821adbc52df","0xa095c420ff5db4e4d28d85771367b1277a9057d3","0xa0a4a879b767ea2d6b23f7120f86f455c4e0a0cb","0xa0c197a227e153a805400398f73133ed5320aa30","0xa13d2eea2e7a1821f032e08b06df80f9fc2ad774","0xa14af8a15b5ad7bc1fa8cb23076db8375c17f9a2","0xa16448645508bceed675463e50f8004211ddad4d","0xa227d87ecca13550e724c717b6485e2e4da43aa8","0xa22f24aa0a7155f59f2b1528c1f121041c7db133","0xa236ea2194d56d54874730dcd2de9a39a47f57f9","0xa2a4431f919492932a88478e6bd68eb9f6281148","0xa2bff178071a266d14e360e3f3ce226b19d3f809","0xa3376b21130f5f555a25b442affd13e90eb08401","0xa36db06d33835f8a6922caaa221029aefa0e1c63","0xa39e6e227bade06d2ce6c881a139ca8a7c3b7c98","0xa3d02ad4bf5bd6f7e9b73930c498c4ca1ee40124","0xa45ccd91804fea59830486f294fbd775cac409ba","0xa5346e90cd9ae18b5cabd32f6201d4b92f4a55fc","0xa565a2fc773c3f681a9f16b672a8906dacf5daea","0xa5df69c1f7a1eff14ff6f682733c7b8d6da62ecc","0xa61f438c227c0af7ca5c53ba8057325fde72a811","0xa736f32f96a9f1456661674983e150bf22f543aa","0xa81dbb4c0a573c7c82d2419451fa0c8bf67db141","0xa8446749a2a7da1241c5f5158d5ca84c2edd4f9c","0xa8ad3c8d9039a0d10040d187c44336e57456fece","0xa8c2d542a746826015d193729292fb97d9b52d6a","0xa90d200001d8bbafcbf6618a3305e4750251f27b","0xa9573662f0d558cd171b99dc7d497f1b3e4e4282","0xa95e79bf63549d33d7320663682968f1030a225f","0xa961790033510f8ce97e22e3de6a1aebb9b42734","0xa9dea8370828bfa23d0df14d76908c1bd233e67f","0xaa017e8d9e8ec3b245fcbe584d0beae5b7872742","0xaa2f597552dc6350195995f4845b882f81d4122f","0xaa413939fa2da0ac9c6d5547473286532e4272ff","0xaa56fab6ee0cf3580b7e560a8f35878924922868","0xaa582a4f10cfa6967db9b9947df3aab861342f38","0xab12c6450c09311fc6fa536eb103adbd5bba292d","0xab3d6710ac99454ca908c1ba0b2e4080944551b5","0xab47e1c54dae88d2140c3f2e2aabc535095a1a21","0xab4c1d180ad252d0af8453a2fbd0b64e03b85f42","0xabb1adf04d86b985a78035ce189d269930badb55","0xac09fca3d686aae55b76f91b3e59154cfcc5625b","0xac9c7da4763e64e1988c5572be0c231bdce49cda","0xacf1222153e2b795cc35c57c32edd8b8eae86279","0xacf7690c458b275c3d761d7fc0725269620322ea","0xad0e3f6497da1c77a29b469516e319fbb337e896","0xad84b08e5eaf1f88a3f69cd656a62bcc2d3eb72d","0xadeae4e27fa97805f8c3fecdd18845d013ddee19","0xae377844627e6428798b0aeceb4836834eb92986","0xaec730982e2d84cba374d4cc0f9819912dab5949","0xaec8565136c64b4552eeaed2446531acceaccb09","0xafa1b7bb5143b972fa7a9115a8d08f72723be7e4","0xaffae83b0780ec2339698fee5fa7c2eac0d3949e","0xb06863ab5d862f55704914bc5902ae6ae4c87c4e","0xb0a2605167939103fe02b57daab90e491dc20ab5","0xb0abf7b22cf94fdab991b8f17398a405a94701b8","0xb0acf08a36de52e8f3c4f975971973f20781dba3","0xb0fe57995ea57d10379867c473fafbf825240c17","0xb1521b48f1010c77725b71d6edb58af30509f344","0xb1ff1f7c0906de6c343c59ad87481a51c944e8e2","0xb235e244ac2affa3d393e88f7bfd0ed771659bb8","0xb29479ef88dfff8dac466cf6c716e7985c4241c5","0xb2d56e9bc10640afef23d65b3d4956f50a8f382f","0xb2e6d222c7e1cff5d3438904166522ee911db19e","0xb3557ba0d49bb21b43b2a5ac1db4b5258b8e6640","0xb37a62a3503ac1a77090b4fbd1c318b5c808c565","0xb3eec5dea0c3bc6adeb56a53c6c54601e886d2b3","0xb4d3c81418a32b6c8dbb6462bbed26ab16884e92","0xb5096873201381b3e49e3ee0f71d39a3d382264a","0xb5750a89f5b23ad981f0d07f2272b72b78a44692","0xb616eee28344eae22d1514bbb0cb75f908422018","0xb63ca5fc3396b9304789f39053a8e9edaee40d6b","0xb640efa7bafc3c83526b6863764d7f09afd9eb79","0xb69c45a16ac339f1ed88a4201fb58657da998a6f","0xb6ac1c80241c6b08e23b5ca05a7df08506a8939a","0xb6d98de3178da308c88bf6167990cb5218e7455f","0xb779a358e43a12aa900086051112b04389fa22ab","0xb7a0963162805d797de6dc8b84ea063c066da8af","0xb7c1662c5577b533686fe8f5aeaab08eb53a74fd","0xb7dc3263e3544fbef42eed44676a44e9cf01d261","0xb81687f325be919c8f1a8b8b719be5339a4ae8ab","0xb82e1d74f07909778332a8ffa3b4d3ac7869b4ad","0xb84ff28b09cb747f52e163d785ec4da61b21cc5f","0xb87186765f4951dce0342fabda15b8966513a464","0xb8956287dec237624f22f480340a11bb89315658","0xb8b86f77a34d5679daa6df4ae830294c6e108b88","0xb9fb398651753e9e8b500a60015a469595b7c02c","0xba43cd84be2012971117c9ba575e2d3f3a0e3a52","0xba78031376a6264b6452145b19461065bfbe8876","0xbb0bbf1f79a1ac3517647dfe014535581b3126f5","0xbb8340216d933adc4a3ce9b8ff13fe8764761b82","0xbbbf89cb082aec247fd52c6d8f985a72f7235df0","0xbbdbd402e1f504394a70f4e41de15d854ba57d2b","0xbbe34fc7e984e234396ed60a599158210ea01689","0xbcb25067c1ca250de60dd3dccabbad45a64dfa31","0xbcc8017b52234d93beb7eb3166f11987ccf63bd3","0xbcd8af5c0d4b090a350841d8a87de62d072ba1e4","0xbd363599b9a7c532682affd88fd4109765636860","0xbd81a5db7feb74f729994e23a18d1c85c278403b","0xbe5be78a570126e6d66e0e5c211d4be03878a760","0xbe6a6e8922232a39be4a7afc4c7b91a61429f0e7","0xbe7e576848b434925d744fcf98d8229affa941dd","0xbec938b83d289ce61476bfb7d71419b7e8c1acde","0xbed2ecb6b6b38d2d4bbe1bc94593bc420647fd82","0xbfe2591048f4c47cbd09ddd3507058472c45022b","0xc0591887fb506440abb7f7f1755100ac9d2c6fa2","0xc06586674f846941fd898cc62173c2ea1ffd6ebe","0xc09cb1584650b137a3eb245bded226a8d171f242","0xc0eeedc3aa46bdcb0cbbc22e43877671edfc9de6","0xc14ac4bd04932db4c522bd6c78bb57bdce64f233","0xc16be65b024cae1796089d1665124ffe1d94c588","0xc1a0454af8a7edd1d5c361e22f6929e1c50710c7","0xc21633dfe36ffa788f8ac4ec11b5aaa1987884cf","0xc233d432df7e77da2a868dae63c6b4aec7a50916","0xc23bb6bc4b751386746ba0866cb500fa642806a7","0xc31b79bb4dfc4d0e2a15074120649f4c977b0298","0xc38f0a448b86255137179e8fbf32d615fc10041c","0xc45814a96514efa536aed86cfb37d0161cefc030","0xc491202a7f7c7b56a9034a791bebb40218cc0335","0xc6303aaf56ca2adf1296461a726afd6e9d4d0e0d","0xc6b17856a5c274d9e38ef4a840b7cf880b2f253b","0xc6b4a1f1b1c567282e7112d6f3251708809e5a95","0xc6fb3f10851167a09776d8714a12e32fa96fb2e2","0xc8056d08a81bdd6702bc184852cacacf4dc7eff0","0xc81a1b3e5d87273e78bab75abae659196ba98f6a","0xc886db8b8cd260f5ee38ba3d8f8e9324ee27ea33","0xc8c2008528de72fd1836de8c8896a73eca98a516","0xc8d2f3ff5d8feac92b77b792b47c11eb27369eda","0xc92183a2f5b7fecd10cb6cebd971fd006ee27fbf","0xc95e2aa5ddb0ca4e4c2c7533e7c607c3b13a054f","0xc971fd08b78a596df5b1b8e03ad1a612773f33b3","0xc9c977366b4253d2c035d7b58637cf17f6f87f53","0xc9e3b06b87e5e0d3f7ff45f9df87b78872dd99a0","0xca577a46675ecb280fea09a2593801de8638d874","0xcaa308190771adf0e4f8a0298fd76ffc558cd674","0xcb18ce2d5be5bf83a0f16991654e95632572a051","0xcb7b8a1dbe163cb3ccff2fbc4e55bca30cda300a","0xcb895dfa8808d0c5a900ced39da485ddc0bf31e9","0xcb92ac2f2408295d0f947679239c5672df918306","0xcbcb8c35ea712dc0793ba7bd975dc1041cb034d5","0xcbdc62c44e8304a4b632572639a58bf81d9a4d44","0xcc8fb9fb321f6edacfbb9d9147429780e170afeb","0xcd066dd52c1776e7cad9ff67645800f48e15a2a4","0xcd22ae9a33d6c6e9d0805b4a9150c6dcfdb2f61a","0xce73f5b5751441acee8d28cf294db1c308cf1d74","0xcecae6941682b81d1ee1ef3425a06b0d8d8de594","0xcf57014785b88769bb369747413bc07f62b180a0","0xd042a30c979d870765a5f78a674434ba41157ada","0xd0465868afb62ade87e3a5e712486b06432f48d6","0xd0732949b43d7d02a427a5f3c5bac207d8e656cb","0xd0846eb20ce6891aa17b18340e74dd5754060b9b","0xd0cd8bb95c1f766de5942238303302e5fd6b84f2","0xd0f2a12ab52c83ffe5bc419a963ef2e3f4f25d08","0xd107670e6edf38491c48658b466853de12528dc2","0xd1248c3979590a1a614f19e75a5bc30348c94828","0xd1a55fcfa2079d77a1fc745c1ece306bee29b140","0xd1f484a348b305c2ff3c86e7ad1b968665717f91","0xd24d37dff53cf50faa81a832fe39b5ebca24506d","0xd253b4e73c33b3c8d90225007f98fb66d9419245","0xd25fca47010638aab9ecf77b9977c4200c11cddd","0xd2c25855e4eafbd5681b8c486607c2b61d27d6c9","0xd2e4741df8f528723cd4038b98793ca77e44210e","0xd2ec48af2a301570c11ad2e564945f4e86542d42","0xd316e0d4335544b2328c4fc94d244f60f7b0e6e9","0xd3669cb3f3d35ca9dc912f6910bdc755c79ddf3d","0xd481070e6d9834b903125b89093e3b922dd869a7","0xd537bd1351da10f92cc0c9a7ee83831bcf7117d7","0xd586d7d95b5899cd73cfa62ac5f5e77ad5f86a7c","0xd5bc65ed8fef954d959f7f32c97a6da7a046f9d7","0xd5e06c2729f072790acdb20c85a2c37175f11f0d","0xd652a66fdeffdc0a4019ac2a34375648e393c4c8","0xd68fca0ee86639b32811092f8f3d2828298ed5e2","0xd6e73bf132b4efcfeaf2530f892c616ee231f8b3","0xd795465de1344f520da4060772f2d80230dfc3d2","0xd83b93462dc74440da11d6fc4639ed7ee1dc6403","0xd958d165957a20a2d3019f6078c48f4fc628c6d0","0xd96ea9314054a447fd00431462196859c784506e","0xd98403ead18cd4351813580afcf2e231cd762309","0xd9bc1a374fa2a0b465982843682da582695c05c1","0xd9fc64162c63918034e0d5efeaa37008e56d5471","0xda46c6c522f83d88cde5e983f707a3b6f266b02a","0xda6536c53a861c1af9df8972846d49c0313ee203","0xda70ec4a555d05161d0e6a0fc6ffd80de3f8bf7a","0xdab557046a07a3ed0c0991f5021e29d6b8393704","0xdb438e09165d494bd826c3df62ff4b2886ca35d9","0xdb4a14437b2c0aad9999da1f2e1f7df2de80c769","0xdc22c94831557d94af613d69415b0a9f29321a33","0xdc9e04c2db48ca44b55cce16413511cca4e2953a","0xdcfefb907518d40a8878608e78abd9bb5f382150","0xdd7c39ff8715cddef0c208059eddd317e3ec5422","0xddca950af22b9e65fd5fc072f46255d772ff9ea4","0xde752fe8e28fdc6b7116b4c9b8e10ee4a2cea934","0xdeda98a4f40f93d359993d548cf05bfa71909cdf","0xdef21aedf38f9ac733756f338275eb2620c84d92","0xdf2b3d6b9654a140fe7fc97265e578dcdf8c1737","0xdfe038a412711ecbc5f0d24c47d1454ab13487ec","0xe06a3ffd8c7be91ef45c99f4822a8fd76b31a0b9","0xe126f1cd25e4e1292b101fae2611c1c7bb8996d4","0xe1fe72c626902acdf34470cf0db7d4f3c2d4f56e","0xe207f93af88e4a4853be29192054c45b96290d9d","0xe3518f0f5a33eb5612057057ae8a2559cfa75e05","0xe371caec14ad7870524e7468bb0afb7f24558906","0xe419053afde59955b5e369dd386b88bf4b086f5d","0xe435b2da7efad18ebca5902fe765dddfb6a45e09","0xe47e1ac440a31a8c77c825cf30d9a91f6352bc84","0xe52d1724dc8fd0bce997fac595f269d702d426be","0xe571670dfbfff8f927522d9b051c20c03c14a00c","0xe5919152a8880ba3f39a1b8787b82261bbde4471","0xe599b8b44e84b284d2f0c189ec56d59d46695144","0xe5ca68852276fe4df18c74149ca5c56af3a1c7a2","0xe5cb69d9fa0d94a5f1a1608d241f30e233d211d7","0xe5cf73f96f57d56d6e44bd82d8af95727a2fab04","0xe5ef5aae73b05fa47c5333277401f19b3c5aeae6","0xe6286cfff85bee3982b45d643af54194c3c5d72a","0xe646a31218058c490a4ecfb7fee2e9dd807084c9","0xe649926a291e453b021a050b4335471e53210652","0xe66d5b97d66fa620e97e4eac1b99fd69c373bb9c","0xe6940456421f59a6b3660f4dcf5dcb3469a830da","0xe74dcec5b9feed8da515b85beb2aa9dde5644150","0xe77064473be26ce57405f2aaa341470d9626f725","0xe789a01c6e7c0b2abe80cc0858f7e02139112b93","0xe7b5c49eb37b7cbf924fcc5a2d6b4a3254a759d7","0xe7fbc5015d9bc330863f3ea31d6b8a76a7e84844","0xe88a81070f34c675659ee2d722070c2b00ad6795","0xe918597dd8558946fa6227ef25b3f7729dbf8b8a","0xe92bae408931906f6c90ca23b6238bdfbe648945","0xe97db0468fe2527f50c298361420a157a0716c6a","0xe9fd605eb616ceaae5218eac62bc3aaf985c45bb","0xea2e01a900ece9a05581825c7fcb91fdda178c34","0xea6ee3460be39cdb904b675b77539b4b42e83b9c","0xeab6b29c351a8523bcd956bc9a6b2b66c588e685","0xeb000f1ffe63b5b1c7130d2179d9211378244e55","0xeb5eb585b301f4bf8362324bba0c565f5f7a2e0e","0xeb6bc3940c9fe8d7a90baeb168f64f2fecd9a5ce","0xec692ff19ce7689ecb947346144478c5230c612f","0xed73f61544e4c6b24b8498da5723a07a00af0f41","0xed77c4b116935b833b0677b3385178b253e6ca51","0xedde30bbc37a16ef459e08da75428a337718f787","0xede7ba7302692862bf282c85c8510cbe4e3be8b9","0xee5ba346ece5bd393dae3799476bac55822df838","0xee86e4783d4849891e3a33d3a6c446aeb8997209","0xef0ed09f9e05784faa4fecba5579dfdd694d3d12","0xef683764be57e6f0f6d91c34f2ccfa37414075fa","0xf0cb0a2d4a519849d3dff16fb7645ab8dc95937b","0xf179bc78b07178fb0ec8490f0728c20b6fb152d4","0xf1ab12776e88099e13e1f58d6137f0d36c24dfe6","0xf2151c4db1564dbec2d334c363ea26280d94bd7a","0xf21f12fe8d9ba51851607882962c690e32ac83d8","0xf2344e15f83532efc829a0ed4dd4a63b15d91c33","0xf29e00fe8111665480779312696c3a0dc8c32bc5","0xf2ce1333794db2b1a8f009c289627ce34b9c2c6e","0xf2cec9b524ffb51dfd52671089fa8b7325a77833","0xf2d8b8d92a9628e1d32aefaf11aacb4db0caae3c","0xf33e7ea3fa2462e166d34e2da5cc65e7139df269","0xf3b10029ab079153a55c41a360074ffa78671677","0xf3c0704626fca7ccf581af1991b0fb50ff454c6b","0xf4ad12bade2177b0ec4b4d796f00612d2ab823bf","0xf4eb82eca2522db060d59641bbbd77adaf7ebadd","0xf5a40a74bf78150b41177fbf7476d395900d28d6","0xf5b78664661f71b19c76b93046ad80c677efd56a","0xf5f7f1f6f6ae42c2d7dad5cea9c7fc6bb95cb972","0xf606507ae2e57c1c9cd67a0afd2674160b5f3547","0xf670f4451fbf4430e58a65119202c0773a60b24e","0xf6770aeb4c47ce6460a29f7653e00619c39a16e6","0xf6a9b29acd34a8bf1ae48fe1525861486f853d75","0xf6fa6feb67ab2159c0e13b943b084a761f332acf","0xf70bfca82ec4c75f5024515b0bacb2abe76c525f","0xf71fc2ecf07364f3992beaf93168e8d911ac4336","0xf7382b4e33201f95441e7eeba17d1053339a2e63","0xf79a52271367ad0084f07d1234d59e7638134fee","0xf7c9d2b4abae6698dbad860c4e3ac602461bbebf","0xf839be76b49d329886216a024a7d3ea2a3ca2ce0","0xf9257b22ae3f62342c7adc34749d7148dc5f61f2","0xf96a23502c48b3c7ee053db35367ee9b7660f2f5","0xf980b97102fbe1bed8a0fefbd20fac3e7a664a20","0xfaad3f33c8988cf1ba578062c8508d9637998baa","0xfac7b8b2bad87b7d933a6d694a7c24bffe80652e","0xfadfdda22758fa57da22e5562bdf020aab1ab965","0xfaf1b53f4f51e76acdd1a6d4a345f74ee3eb65fd","0xfb3717ffd128c89daaefe6b2f6ab76f7fdda9c65","0xfb7280f8290979d7a68c8cbfb31161d473b907c0","0xfbf8e63963e371d355c1d25563ad52376e1b70d9","0xfc04621bd7a4c4fcb8de537b005c701c06d249d4","0xfc38b140e49a453f25ed2d6b9dcbed8c983c882e","0xfc421af2800084492962a069d04daf27f086af0d","0xfc98b088552c060856cd93d1344822daaf835eb8","0xfcbedf5ffddc57779d441e0cb7186f885df50dcc","0xfd8d26024794a325ad801434d075a0168872bea0","0xfe13d2275e6ed9f9bc44c06610dac17f7318f4b3","0xff679e060158b2b131f71cfac6ed51724b57a2ce"].map(element => {
    return element.toLowerCase();
});
const totalSupply = 4096;
const unitPreSalePrice = 0.08;
const unitPublicSalePrice = 0.1;
const STATUS = {
    BEFORE_PRESALE_MINT: 1,
    PRESALE_MINT: 2,
    AFTER_PRESALE_MINT: 3,
    PUBLICSALE_MINT: 4,
}
let currentStatus = null;
let contract = null;
let methods = null;
let currentMinted = null;
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
    if (now >= presaleStartTs && now < presaleEndTs) {
        redeemed = parseInt(await methods.getPreSaleRedeemed(getUserAddress()).call());
    } else {
        return 10;
    }
    return 3 - redeemed;
}

const getProof = (address) => {
    // TODO : whitelisted address
    let leaves = whitelist.map(v => keccak256(v));
    let tree = new MerkleTree(leaves, keccak256, { sort: true });
    let leaf = keccak256(address);
    let proof = tree.getHexProof(leaf);
    return proof;
}

const getPrice = () => {
    let now = Date.now();
    if (now >= presaleStartTs && now < presaleEndTs) {
        return unitPreSalePrice
    } else {
        return unitPublicSalePrice;
    }
    
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
    let value = ethers.utils.parseEther(`${quantity * getPrice()}`);
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
    if (currentStatus != null && currentMinted != null) {
        let now = Date.now();
        $('.has-wallet').show();
        if (currentMinted < totalSupply) {
            $('.error-msg-section').hide();
            if (currentStatus == STATUS.BEFORE_PRESALE_MINT) {
                //hide mint panel
                $('.mint-container').hide();
                //not start msg
                $('.timer-caption').html('Presale Mint is not started yet. Stay tuned!');
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
    if (currentMinted == null) {
        //force redraw layout
        currentStatus = null;
    }

}

const mintSupplyMonitor = () => {
    setInterval(async () => {
        currentMinted = parseInt(await methods.totalSupply().call());
        $('.mint-count-number').html(`${currentMinted}/${totalSupply}`);
        if(currentMinted >= totalSupply){
            updateLayout();
        }
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
            $('.counter-input').val(Math.min(10, parseInt($('.counter-input').val()) + 1));
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
