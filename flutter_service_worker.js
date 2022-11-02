'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "747bc40a3326bba6c32a15322afc47ff",
"index.html": "23dad118585f019e6bef6248d425b0ec",
"/": "23dad118585f019e6bef6248d425b0ec",
"main.dart.js": "d1f5182fa914835daa92143aaec57ee4",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8b218a8fecb18d183c7516797bdd2986",
".git/config": "d21a908f96dd7c39b665ff49fc37e51b",
".git/objects/61/987269e37c5a0436c1ad22b400b542b70ce695": "3d3d97ea7dde57c5c792a2a0cf951f47",
".git/objects/59/1a11871ee78fa9ae94af51b2d43d997cfe6148": "355704b432a255568f51974b4e455914",
".git/objects/66/962e7d3c80a1a4cd8efec3c4653bb41be32a1b": "3d74e40c99c452cca592f2d5f79361bb",
".git/objects/66/e36d5ee6041de687dec97870ee4f4aea5075df": "77cb97b16c348379c59b319530bfc7f8",
".git/objects/3e/10e0a8bfa8e71394c3e4f5acae51868b48b977": "c823626dd2407b59a043019db2ab8121",
".git/objects/50/984d92350e12e260087186bfc482e9bf7f8240": "b38c736389fff3194f111d37b3cec54d",
".git/objects/68/a4a16bac151284a1b3ac6979dde7a967b5883d": "b185f7ed606d9224b970ecae8b3954d6",
".git/objects/57/7eb344a1b8ced28b360522000199799f6bc87c": "1cc604ed4b08f45e98740869f770fb29",
".git/objects/57/f313d5fed9a080bf94d435538cfa0397f627e1": "92c1a1080780f0d35c9a77e0c3c9aef7",
".git/objects/3b/64924f97752209a454abedaa9b057ee949b26f": "54dda3cd15f7cb5750bdfe08274b8533",
".git/objects/35/1ce72e47b1ef40e438a9b5ce56ee8963fe9b96": "846342d76dfc7eb4b26bd5741e0fade9",
".git/objects/3d/539e208cbd0e42df9b8e407789294f2b5920fd": "2ec9f5cb429658eece083d687281d0b6",
".git/objects/67/cd2fa0e8ae2c73cb13e5be7e2d638f35c98881": "f6ca22295a89340138bf406db48e8942",
".git/objects/0b/62ce95655973c26f9d60f2b67a89de02160f72": "4ff67aaf6943f6fff88d4c575bf517c7",
".git/objects/93/024cc2dba8df5ddb12b03dd8607e297760806b": "4e84fdc56d96f62bedb3e47368913764",
".git/objects/93/3ff1f5722e5bd36d4ca757b85c642a7e7a6948": "7e6329d70f5df55feb828170ee32398f",
".git/objects/0e/f0e557b2c15079fdcb583ffcd95b07bd913c66": "23a45e65949c5f214f45810ca5de6048",
".git/objects/0e/437e2f313169f8fdc09d275dc8388d98930b6b": "a2fe9cfd77d6f0def8f8dc8e7a5aefb6",
".git/objects/60/1a15de8f49f15e1f0ea23ec0f65df14877e7bc": "48cf8d514b9429b948ed0fb7312dd558",
".git/objects/60/23dfa3726ba1d8c5ac48941df37e95a2a0d7fc": "f2c7d764c0f089f1e14ea485a8211d89",
".git/objects/60/505aed8634fd2c336dea550695aea39a7c01eb": "b8edfc7f8c2f8e2d1bbb2af879cf00a4",
".git/objects/34/3d5edd23dcb59d6db3a0c48bcb723d7b2f60c6": "9275175227a3c16e967937d66dc87cba",
".git/objects/5a/adb48dd4d9c623bac8d61f76a321b6ce6b5fe2": "ea769de4b55f2245d69152b757a2acad",
".git/objects/5a/469adb4905477b2180a0810576de72fac93737": "5a8baf965a5132f8f0cf2c8b5d206ce0",
".git/objects/5f/9f49c8256ea3736ae41e25e9a994c72b4df039": "92eb2b1a94b6bbb793b7ef2a88180725",
".git/objects/9c/b261a6e23ff331a9a840b7662a64c4f9cb040b": "9380f67677d5effe7dd61cc1f6f9514c",
".git/objects/9c/0d6d8c8f2396e0c62edac59e2a8933fb8767ef": "b99c4b28ae6303c0d01b7f331eb4499e",
".git/objects/a3/d73c8d65fe11d9cfc2021a89b9ec1e6c298979": "2073c1da229ac0621bf5437c620f1873",
".git/objects/d9/c5d6df9c6a5b6c31de52bd9c8e1306327fa591": "7baff763a6bb16100def9da9553332c9",
".git/objects/d9/214a06f34444bca8d3b20865672f43cb3670a6": "a3d443d0d89961686dfb6408bb6a609b",
".git/objects/d7/4c9d5e2b70c38ca4a8c492eac0a7198498f39a": "0fbee5d5a82a4239fddbf3ca68caf8ee",
".git/objects/be/a2ffe5ef89377daa6708dc029d643ebd0fd78d": "559c82570e6419f6950cf0a06cba098f",
".git/objects/be/185301d3d3cbba81dedc32d1935a2fc77821b3": "eaa84df4b96f506ffe183b87fa73de9b",
".git/objects/be/6dd1ddf014ec9f5f119c741469b31c3a4548b8": "9210432c7b88baa2be5f36859ea445e0",
".git/objects/da/6d2adf67d4b7f2c238e67d55196229b319a9f3": "99e42ce7cada0af49a21921ef6dacd06",
".git/objects/da/2f4aef4d307f2d76ce205a47258e6778655c4c": "574bdc0e6d6421c4ece0b16a9630a922",
".git/objects/b4/7074222934e147463b39b6bb57c0e5ff71e4cf": "5a20fda56298852809c39ce7aa4d2914",
".git/objects/a5/0e2d88ee3358e4c42e4e33f46014fa68f572b3": "65b5106f2e969bfe1e289ae8017a0657",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/9322e18c0d11f0dbd464e2944b9b4bfccb9136": "b054b3421b8474cceadf6e47030519ba",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/47b0923f5ae27a1207a4e18651ebf48bc934cc": "730b2536adc62a42441f2a8d149feda6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/8cbe609d5c76f23b9000b51657b0d070ea9a14": "263f201a35ef5c472a9ff6ad4305890d",
".git/objects/e3/e2ba336552c02c857d621e6e22f4aeebf4836d": "a40c9530547d1ae6540630cc88433601",
".git/objects/fe/8e15f07149f6efa9d0e7dea7cad30afb577dc1": "8cb57baf2f1c8fe36026e48aa1f6636b",
".git/objects/c8/3e7e2e03e7f6087c2c152139141993721ecb4c": "2dea5c7ffc0f9187d9e7d31ee93a8785",
".git/objects/c8/4de6cee1cb8056fd48838b72f082ba9c2bec0b": "ca1b0167a2da7a3ac3e4e2ac9d308534",
".git/objects/ed/32eca4ebc255c2d90e38d15e90d17e906287ac": "fc5bd4d657ac2561c43806339b65745e",
".git/objects/c1/d389aa21244ef8705ec3413f0a24ee445fc56f": "f87574546bc1f720382e067b13c0af93",
".git/objects/c1/64ab3053889200d3439919c767a529cce17dbb": "c713a606825f0cd582cc4c26a1dfd934",
".git/objects/4e/20e0cb333b278c13b7176f7771e0a512e193c3": "afe8d9c0820c14d972d9ccaa9f92df21",
".git/objects/7d/2152e459322103578f29ba33594b12ec89b15b": "a54beaf6acf28c0de61df040c9989339",
".git/objects/29/7f9665d96c543c1a1a32f7409f916c34743195": "254ca5d36e2766159092c911672ed491",
".git/objects/29/59e9f68f1f8e0edf3cc35749c8cfcff6984556": "ce45a2f15d4e22bff170daa0813eafee",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/16/76fef95b038265be3fa7b917a27e14754d74e1": "0cd8965c2f81577a8caeee6cad6a1690",
".git/objects/89/d33ba38c8ff9e806e420e0f095d6fe1effc8f5": "48c76c514d53cc437287acccdd7a746b",
".git/objects/89/a06a98b3ef75899f8406e45387ec57cd19e4dc": "b90bfc975d9dbec9963007910a57ee25",
".git/objects/1f/77d3c5972ba2364d9e0a136ef81e2dfcf05b31": "afc0ebe89430eb9c38809aaf33d5b786",
".git/objects/1f/a036a0161f8b2f726a3d42074c06e14b989d6d": "19b878fb196842b10a9d71210b737d94",
".git/objects/87/51c9249c593c94ac960e6eb2550354ec00552f": "e858442b22fcae0141058c8ee3ad628b",
".git/objects/80/0bb0f2f8e97b1dae4f3d2da9301b7ff6481f5e": "641e423db229f0575a70e1d8f81a2802",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/28/2e88b06ce6d459f91213143a16e611fd1901f4": "3cfbf7ceb9fdfce0f3b66e3d87adf205",
".git/objects/7b/228925001430dbd625a3d3a8bf32640cb45fb5": "f3c75601a53cd495c4ab5d55c37fa639",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/34dabe4c9e544d2653ecd07a6b8ac40f192362": "804f868ad26eab5b43f8d119020efd4e",
".git/objects/19/10f3a910577b0227d5e3a9e774dd88905a9918": "e048df65dc090bf320fad6776f8fa4e1",
".git/objects/4c/ac15590c3026f86c2a3f212d58addb8dc3e3ad": "393a05dc39b55ef96740f3909c719d5f",
".git/objects/4d/1ce50f89767480f8a251c169a1a0bbffc64595": "2c72fe45064d913fa6fc9a6ef90f22ba",
".git/objects/75/24c91112f9e9e85ecaf8bfe72ca06d67ba9399": "2c1c141563e057ed6bf52c97159ff326",
".git/objects/81/9a9ad37575fc006aaa79704f939c12703175e6": "8487dfe7ff9a874a3d444731fe7809fe",
".git/objects/86/c0e0848323341b6a697aa4151a4a84cba38695": "0412710e23af038dcc2b3ce11365db95",
".git/objects/86/d8cf40869b525df2d0f0f199706c042b2597a5": "3fd676fc5f7e2b6e79fa2cf1712e58cd",
".git/objects/72/ff6c3a29e21c9b0e02ada83ed1492ce167a8ed": "58d6f2a4f88b2839061b04597b04df26",
".git/objects/44/40a4688b69fc5a8c5d76a086628678400f7521": "a216fabc55b4436933d763bb30148c8e",
".git/objects/2f/50eb8649397628740e4e8a44205eb2c1f750b6": "e4209f4999c460e6829f293ea99dc2af",
".git/objects/43/92cc86cb780d2649ac907893271380f177f1f4": "bfa60cf0b0eed86f194c6a62b4d3e894",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/ac7e77c860ce176175b51d5280be9d3c6c071e": "83cec9821c7bbd3e4f0200293c0457c4",
".git/objects/07/77c9e7fc9ee66c424ab24cc11700b62f579e6f": "5dde54b03f37aa90fd38960468868264",
".git/objects/36/4342b798ccb4526f00b4974fdcf46e81e0059a": "0cb5f7485a2c9ee9bf7341385e90bcc6",
".git/objects/5c/56deacde7a08ba9eaef211ba3277c52239057f": "e31171ae86dcee83a72cc8c7b58912c1",
".git/objects/09/37e24bf89cbc1083da08e7891a19f869f1e8e2": "b1385079834010eed076ebf626576ac0",
".git/objects/91/61b729689f9de4614a1ade91671941cd4852f8": "cf66ec96ccf04001383ab2d803623058",
".git/objects/62/80bb3b3a46637320c677a8790387a17e6c67df": "51c84925a309f5a08db5c4ce5e4d8460",
".git/objects/3a/3b90433cd6e0544c9030af55e15450875307e7": "bef8041f17500f0a05f8cbb53d0e3de9",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/30/fd5fb5df371641d9a338a284499a031932ce29": "a6442d67d9b45eb7089263c1a1a7d5e0",
".git/objects/5e/e9a0ab441f33357ef62c34f64b890c6960702b": "ac78208de0094fe197c83bb029616d53",
".git/objects/5b/b6e03c7a51db354e2468afe4fe3ef79e12a5b8": "bd6d7cfcadb33581c0fe2354bde29966",
".git/objects/5b/d1bce77f13bae9ac91dfb080ecd2014286231f": "84b3fc626b6730aee1e9487d12dd8a2d",
".git/objects/06/e46a149c911b3a7cad9a046abec96c14fbded3": "19fde4160d8131beeb1846d839e8fbc0",
".git/objects/52/cfdfa1f0ead87f01b041f258a656ebb97f3597": "6800cfc5dc39d2bc8118c35ca4979b7a",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/93c0b134fbe1ec663b3729ffe7c98bd284981d": "eb54bc5325a3ceed417fd70e60834d96",
".git/objects/0a/5bd28d7966d81a766a9ab10de6a217baf5e433": "c88245412d82f752929890b9b348fed5",
".git/objects/0a/07b341d27d05a21d0021908ef3ffebcea84c7c": "e0a922484041aba639e54c7d84963084",
".git/objects/90/096b31042c17570813f8e71d709d04a20bc465": "fda648dd9f3db28e174c04fe47321db6",
".git/objects/d3/6ff748b4dd4259ed14034542b97f4a34b3bc09": "263f1ee7a6788d09c86ea8cac8421053",
".git/objects/d4/ef10d22cdd4efff9fad89405d9a5a27b3f0409": "81f7298c72261eac31b73fe4a24d30d9",
".git/objects/d4/60bd705df2394c5d8ea77dd5a31045babdbf9f": "2f606055e9bcda68f3a99ac71c8841be",
".git/objects/ba/98c34e8a67f6ffd911e53ceb2faeaf5c22236c": "6cf36319d88897d284b0c1728dcec359",
".git/objects/dc/4e11870473c5d94636878194e38bab2088930a": "3078fa23cd5b48495503e681c6a07258",
".git/objects/b6/f4e67593b094494a5d24cab775da2ba51340e9": "674effe5cf969047b17b182e372e3b81",
".git/objects/d2/2c274732704c872a2ddb03e143d99d1ca1acff": "b85dc35c92a7c6179935f70efe64a1f7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/0fd772992ff3e6c0610d00200af5cc2a6a332a": "ac0ac77dd0126aa2c13ca0047e7f28b1",
".git/objects/c3/03c80866f48bcc55ca5a9bd3307af199fcf92e": "e97aabaf4f1d8788ef4a82cef654f3bc",
".git/objects/cd/7881d0553c298512a5f4acd9e8623868b8476c": "4f59dba50c5f1a91d131066543474dca",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e6/ac45d5ae135df66b0ab536ddfa8b3c9d456fb4": "9151cd7947085985db68519c21126ad8",
".git/objects/f9/bdcc45020d01c74b473da1221aa7736e097d5d": "f97f4aa891779640b871eb247ff7bf3d",
".git/objects/e8/1cdcbf296a4324bcc2927aab7911c8e04c799a": "f9ff5ce13198532fd22ac8bc8c2280bf",
".git/objects/ff/e620e69655b102f6eb15779f2054ab7ea139eb": "a4ddfbc731edc7072648274a31229451",
".git/objects/c5/ee769518b6eb14c62b45c53551c9136bb6891e": "e7d4c81c0602ef22111ca544df1f07e2",
".git/objects/c2/a16fa91f7328575b13d600e89f89b66ad05bf5": "e1a8f841fd7bc4a0787b43c87dd143d4",
".git/objects/cb/3d8e17cf2efca21aa48be62f0eeaa5c14be494": "bb46a892813baf2aa5fcb1b65611f96d",
".git/objects/cb/dfda602cd41715231608206c8aecee9ba68abc": "91ae872f59a1f0b8c856a2868d40df1f",
".git/objects/e0/46e53393e612d9cf8c98481a84ae1fa7cb28af": "1a6b5f5bb185d33bf49d007f0c5ec88d",
".git/objects/e0/8aa9e887aa99ac195420158e9f3bf22d1d87ea": "18e3f57c6655f2e7ffc8eb5dcc32587c",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/4fb6fd4d1d586151c55736c97541f4c4eb3280": "923b3a2c53b6536768ec837db9382d1d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/0c85211f7db3e1891c3d72f4084f264515db3f": "401b5e94951f256e15fa786b193fd46f",
".git/objects/77/a74526833478283bdcffe9281a1f76ee6d45b7": "f4f1ed24ad6efdadcf39574c70e41ead",
".git/objects/48/bc3bc0c425975f69a2196da41a28c6a844760e": "240343c21d2ed96cde4c45be7e2ee4b8",
".git/objects/70/fdac7ba26013920b44d20af8fbd8161e5a3330": "61e4f2a9ef2391dda09096cc7f44d555",
".git/objects/24/d3a4ee5da41e36d532b9ca707a85771ad0edab": "936e320f028145b703402d65925f4681",
".git/objects/4f/c3de59a5342074af160724e211c5e3cfc77e4c": "d943c00c8faaab025d6efb7167ecf41b",
".git/objects/12/9d4ef1ee6c8c2d4bb0fe8e4c7d2984c4558c2c": "87dbf6ac572a45ae65e1ffdfe672c540",
".git/objects/85/0afbb3a867635351ffc54355343df44be6b0cd": "d5350c6bc4f190434e2c43f296918477",
".git/objects/40/0db3ffebd1e7ec79e6d2d76471655bd3e6310f": "83b35878201cf37523b8405387e9dcac",
".git/objects/40/315103964144010b6336f30a32c2c23acc27a3": "0b7d2c426233cf30c9391a8e05b1e174",
".git/objects/40/1cdb2f801be54d94772358c53063db4dfbf262": "f0923b3218d653082b71e5894b0e6866",
".git/objects/2e/58f0e60019ea044a33dadbe7ca7ecfdd3595f5": "4d0b8273ff6fa56e8adebf39dcf3919f",
".git/objects/2e/1685c2439614dd9b4558a488e4ac39bd80a07a": "869f6f93cdec3c52e155ab2085d84e53",
".git/objects/2b/3debf6d601fd10731191d38c1e92553840331e": "d4a16d6e4c6d48649d7708be19ddedcd",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/47/5c992d2ba117a1f9c673e46dea346e625ae13d": "071faa84cc165394734692c773bbaf52",
".git/objects/47/9bb55be1c41aeec59eaac25319db23cc6cfb51": "5ceca8e6253ae24e6ff7fe8f6e1fa6a6",
".git/objects/7a/e6146667c8a387a400dad592df8cc391524a0c": "3adaf2fa8489de03d5389758d7d42843",
".git/objects/22/73cd751d275edd80c777da6ebe8f5120a6060d": "1f5c4dab4911362325ddf09aea96e41b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "5e760b1e0ef1c307ce766284e3368bd5",
".git/logs/refs/heads/main": "5e760b1e0ef1c307ce766284e3368bd5",
".git/logs/refs/remotes/origin/main": "fdbf1e08960732717e45b35f8e0af3ec",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b120212e48fddbe28190ae056574b1b2",
".git/refs/remotes/origin/main": "b120212e48fddbe28190ae056574b1b2",
".git/index": "1d9fea113d4bda1dcbfc98bd0e1a6fba",
".git/COMMIT_EDITMSG": "e82065b45170095af6d926a3062f3c95",
"assets/AssetManifest.json": "51b4e9edf905da344b5bdb4d795a71cc",
"assets/NOTICES": "ca834db7d8ea27a3d5fd2336f8db95b2",
"assets/FontManifest.json": "06c1a8427b77244c9dfd1b1198b8e60d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ac27f663e4033515c9bd96c7949102b7",
"assets/fonts/GoogleSans-Italic.ttf": "b08c7421b2d5350ea3003c8f38932601",
"assets/fonts/GoogleSans-Bold.ttf": "c0370e8a74992bab73461f8348e3b369",
"assets/fonts/GoogleSans-BoldItalic.ttf": "aebc8fe5e393970fa3d468524e64b670",
"assets/fonts/GoogleSans-Regular.ttf": "51134713ade7b1f137e06ce395d39d40",
"assets/fonts/GoogleSans-MediumItalic.ttf": "fb674b7b0ac8b18da163673c10081610",
"assets/fonts/MyFlutterApp.ttf": "12580ce1e76fd9aab709dac98383cf19",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/GoogleSans-Medium.ttf": "6e8db86fe091d16a432715917e040f29",
"assets/assets/IWDIndia22-ID-manas.png": "1dc7b3ce750dfa52f1399c2c31f0dfad",
"assets/assets/header.gif": "20d9aaa6af256640a9f19c1ee11dbcf5",
"assets/assets/bottom_branding.png": "593802f0b860389802343b72cc276ca7",
"assets/assets/devfest19.png": "63e81f67b5acba3fd1c38829c6e8a243",
"assets/assets/devfest_corner.png": "9ea16c9af3f898d2c83def69a9d89675",
"assets/assets/left_branding.png": "4959251a123abadca8bf54f44e644cc2",
"assets/assets/top_branding.png": "79f25b56c629f61fd48e15a81376d26b",
"assets/assets/google_logo.png": "3fe5b4aa1aeec453513812a822840099",
"assets/assets/twitter.png": "1b41a5aecd05df78ba72ba5e9d1a48e8",
"assets/assets/large_tshirt.png": "80cf75e4110b0ff1225645dc82c43d03",
"assets/assets/medium_tshirt.png": "701b9917c86944009f058bc13d4eb2c0",
"assets/assets/android-developers.png": "10e524d7879a0d786fa9bfab7672faca",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
