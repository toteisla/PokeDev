ig.module('game.background-animations')

.requires()

.defines(function() {

    initBackgroundAnimations = function() {

        var animationSheet0 = new ig.AnimationSheet( 'media/animations/0.15-1,1,1,1,1,2,3,1,1,1,1,1,3,1,1,1,1,1,2,3,1,1,1,1,2,3,1,1,1,1,1,2-pda.png', 16, 16 );
        var animationSheet1 = new ig.AnimationSheet( 'media/animations/0.15-1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,3,4,5,5,5,5,5,5,4,3-pda.png', 16, 16 );
        var animationSheet2 = new ig.AnimationSheet( 'media/animations/0.15-1,2.png', 16, 16 );
        var animationSheet3 = new ig.AnimationSheet( 'media/animations/0.25-1,2,1,3,1,2,1,3-pda.png', 16, 16 );
        var animationSheet4 = new ig.AnimationSheet( 'media/animations/0.25-1,2,1,3.png', 16, 16 );
        var animationSheet5 = new ig.AnimationSheet( 'media/animations/0.25-1,2,3,4,5,6,7,8.png', 16, 16 );
        ig.game.backgroundAnims = { 'media/master.png': {
            2520: new ig.PositionDependantAnimation( animationSheet0, 0.15, [1,1,1,1,1,2,3,1,1,1,1,1,3,1,1,1,1,1,2,3,1,1,1,1,2,3,1,1,1,1,1,2] ) ,
            3109: new ig.PositionDependantAnimation( animationSheet1, 0.15, [1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,3,4,5,5,5,5,5,5,4,3] ) ,
            1183: new ig.PositionDependantAnimation( animationSheet1, 0.15, [7,7,8,8,7,7,8,8,7,7,8,8,7,7,8,8,7,7,8,8,7,7,9,10,11,11,11,11,11,11,10,9] ) ,
            6587: new ig.Animation( animationSheet2, 0.15, [1,2] ) ,
            1808: new ig.Animation( animationSheet2, 0.15, [4,5] ) ,
            6092: new ig.PositionDependantAnimation( animationSheet3, 0.25, [1,2,1,3,1,2,1,3] ) ,
            5299: new ig.PositionDependantAnimation( animationSheet3, 0.25, [5,6,5,7,5,6,5,7] ) ,
            3630: new ig.PositionDependantAnimation( animationSheet3, 0.25, [9,10,9,11,9,10,9,11] ) ,
            243: new ig.PositionDependantAnimation( animationSheet3, 0.25, [13,14,13,15,13,14,13,15] ) ,
            1737: new ig.PositionDependantAnimation( animationSheet3, 0.25, [17,18,17,19,17,18,17,19] ) ,
            817: new ig.PositionDependantAnimation( animationSheet3, 0.25, [21,22,21,23,21,22,21,23] ) ,
            4039: new ig.PositionDependantAnimation( animationSheet3, 0.25, [25,26,25,27,25,26,25,27] ) ,
            3002: new ig.PositionDependantAnimation( animationSheet3, 0.25, [29,30,29,31,29,30,29,31] ) ,
            2871: new ig.PositionDependantAnimation( animationSheet3, 0.25, [33,34,33,35,33,34,33,35] ) ,
            6468: new ig.PositionDependantAnimation( animationSheet3, 0.25, [37,38,37,39,37,38,37,39] ) ,
            6624: new ig.PositionDependantAnimation( animationSheet3, 0.25, [41,42,41,43,41,42,41,43] ) ,
            4331: new ig.PositionDependantAnimation( animationSheet3, 0.25, [45,46,45,47,45,46,45,47] ) ,
            4399: new ig.PositionDependantAnimation( animationSheet3, 0.25, [49,50,49,51,49,50,49,51] ) ,
            6612: new ig.PositionDependantAnimation( animationSheet3, 0.25, [53,54,53,55,53,54,53,55] ) ,
            3225: new ig.PositionDependantAnimation( animationSheet3, 0.25, [57,58,57,59,57,58,57,59] ) ,
            6503: new ig.Animation( animationSheet4, 0.25, [1,2,1,3] ) ,
            3627: new ig.Animation( animationSheet4, 0.25, [5,6,5,7] ) ,
            1588: new ig.Animation( animationSheet4, 0.25, [9,10,9,11] ) ,
            2058: new ig.Animation( animationSheet5, 0.25, [1,2,3,4,5,6,7,8] ) ,
            2980: new ig.Animation( animationSheet5, 0.25, [10,11,12,13,14,15,16,17] ) ,
            574: new ig.Animation( animationSheet5, 0.25, [19,20,21,22,23,24,25,26] ) ,
            2412: new ig.Animation( animationSheet5, 0.25, [28,29,30,31,32,33,34,35] ) ,
            3615: new ig.Animation( animationSheet5, 0.25, [37,38,39,40,41,42,43,44] ) ,
            985: new ig.Animation( animationSheet5, 0.25, [46,47,48,49,50,51,52,53] ) ,
            3825: new ig.Animation( animationSheet5, 0.25, [55,56,57,58,59,60,61,62] ) ,
            5193: new ig.Animation( animationSheet5, 0.25, [64,65,66,67,68,69,70,71] ) ,
            4053: new ig.Animation( animationSheet5, 0.25, [73,74,75,76,77,78,79,80] ) ,
            2492: new ig.Animation( animationSheet5, 0.25, [82,83,84,85,86,87,88,89] ) ,
            4888: new ig.Animation( animationSheet5, 0.25, [91,92,93,94,95,96,97,98] ) ,
            6416: new ig.Animation( animationSheet5, 0.25, [100,101,102,103,104,105,106,107] ) ,
            5412: new ig.Animation( animationSheet5, 0.25, [109,110,111,112,113,114,115,116] ) ,
            1467: new ig.Animation( animationSheet5, 0.25, [118,119,120,121,122,123,124,125] ) ,
            2508: new ig.Animation( animationSheet5, 0.25, [127,128,129,130,131,132,133,134] ) ,
            5646: new ig.Animation( animationSheet5, 0.25, [136,137,138,139,140,141,142,143] ) ,
            1469: new ig.Animation( animationSheet5, 0.25, [145,146,147,148,149,150,151,152] ) ,
            1167: new ig.Animation( animationSheet5, 0.25, [154,155,156,157,158,159,160,161] ) ,
            1383: new ig.Animation( animationSheet5, 0.25, [163,164,165,166,167,168,169,170] ) ,
            499: new ig.Animation( animationSheet5, 0.25, [172,173,174,175,176,177,178,179] ) ,
            6333: new ig.Animation( animationSheet5, 0.25, [181,182,183,184,185,186,187,188] ) ,
            5304: new ig.Animation( animationSheet5, 0.25, [190,191,192,193,194,195,196,197] ) ,
            2297: new ig.Animation( animationSheet5, 0.25, [199,200,201,202,203,204,205,206] ) ,
            445: new ig.Animation( animationSheet5, 0.25, [208,209,210,211,212,213,214,215] ) ,
            352: new ig.Animation( animationSheet5, 0.25, [217,218,219,220,221,222,223,224] ) ,
            295: new ig.Animation( animationSheet5, 0.25, [226,227,228,229,230,231,232,233] ) ,
            1235: new ig.Animation( animationSheet5, 0.25, [235,236,237,238,239,240,241,242] ) ,
            42: new ig.Animation( animationSheet5, 0.25, [244,245,246,247,248,249,250,251] ) ,
            1586: new ig.Animation( animationSheet5, 0.25, [253,254,255,256,257,258,259,260] ) ,
            3105: new ig.Animation( animationSheet5, 0.25, [262,263,264,265,266,267,268,269] ) ,
            1571: new ig.Animation( animationSheet5, 0.25, [271,272,273,274,275,276,277,278] ) ,
            6530: new ig.Animation( animationSheet5, 0.25, [280,281,282,283,284,285,286,287] ) ,
            6190: new ig.Animation( animationSheet5, 0.25, [289,290,291,292,293,294,295,296] ) ,
            4620: new ig.Animation( animationSheet5, 0.25, [298,299,300,301,302,303,304,305] ) ,
            136: new ig.Animation( animationSheet5, 0.25, [307,308,309,310,311,312,313,314] ) ,
            5440: new ig.Animation( animationSheet5, 0.25, [316,317,318,319,320,321,322,323] ) ,
            4891: new ig.Animation( animationSheet5, 0.25, [325,326,327,328,329,330,331,332] ) ,
            5979: new ig.Animation( animationSheet5, 0.25, [334,335,336,337,338,339,340,341] ) ,
            4287: new ig.Animation( animationSheet5, 0.25, [343,344,345,346,347,348,349,350] ) ,
            4210: new ig.Animation( animationSheet5, 0.25, [352,353,354,355,356,357,358,359] ) ,
            936: new ig.Animation( animationSheet5, 0.25, [361,362,363,364,365,366,367,368] ) ,
            254: new ig.Animation( animationSheet5, 0.25, [370,371,372,373,374,375,376,377] ) ,
            4873: new ig.Animation( animationSheet5, 0.25, [379,380,381,382,383,384,385,386] ) ,
            3629: new ig.Animation( animationSheet5, 0.25, [388,389,390,391,392,393,394,395] ) ,
            3268: new ig.Animation( animationSheet5, 0.25, [397,398,399,400,401,402,403,404] ) ,
            607: new ig.Animation( animationSheet5, 0.25, [406,407,408,409,410,411,412,413] ) ,
            2633: new ig.Animation( animationSheet5, 0.25, [415,416,417,418,419,420,421,422] ) ,
            5119: new ig.Animation( animationSheet5, 0.25, [424,425,426,427,428,429,430,431] ) ,
            4238: new ig.Animation( animationSheet5, 0.25, [433,434,435,436,437,438,439,440] ) ,
            829: new ig.Animation( animationSheet5, 0.25, [442,443,444,445,446,447,448,449] ) ,
            1103: new ig.Animation( animationSheet5, 0.25, [451,452,453,454,455,456,457,458] ) ,
            287: new ig.Animation( animationSheet5, 0.25, [460,461,462,463,464,465,466,467] ) ,
            2541: new ig.Animation( animationSheet5, 0.25, [469,470,471,472,473,474,475,476] ) ,
            3154: new ig.Animation( animationSheet5, 0.25, [478,479,480,481,482,483,484,485] ) ,
            318: new ig.Animation( animationSheet5, 0.25, [487,488,489,490,491,492,493,494] ) ,
            6450: new ig.Animation( animationSheet5, 0.25, [496,497,498,499,500,501,502,503] ) ,
            3456: new ig.Animation( animationSheet5, 0.25, [505,506,507,508,509,510,511,512] ) ,
            2455: new ig.Animation( animationSheet5, 0.25, [514,515,516,517,518,519,520,521] ) ,
            2040: new ig.Animation( animationSheet5, 0.25, [523,524,525,526,527,528,529,530] ) ,
            5382: new ig.Animation( animationSheet5, 0.25, [532,533,534,535,536,537,538,539] ) ,
            1441: new ig.Animation( animationSheet5, 0.25, [541,542,543,544,545,546,547,548] ) ,
            2617: new ig.Animation( animationSheet5, 0.25, [550,551,552,553,554,555,556,557] ) ,
            1428: new ig.Animation( animationSheet5, 0.25, [559,560,561,562,563,564,565,566] ) ,
            6098: new ig.Animation( animationSheet5, 0.25, [568,569,570,571,572,573,574,575] ) ,
            1287: new ig.Animation( animationSheet5, 0.25, [577,578,579,580,581,582,583,584] ) ,
            5616: new ig.Animation( animationSheet5, 0.25, [586,587,588,589,590,591,592,593] ) ,
            1915: new ig.Animation( animationSheet5, 0.25, [595,596,597,598,599,600,601,602] ) ,
            6625: new ig.Animation( animationSheet5, 0.25, [604,605,606,607,608,609,610,611] ) ,
            3284: new ig.Animation( animationSheet5, 0.25, [613,614,615,616,617,618,619,620] ) ,
            2140: new ig.Animation( animationSheet5, 0.25, [622,623,624,625,626,627,628,629] ) ,
            1104: new ig.Animation( animationSheet5, 0.25, [631,632,633,634,635,636,637,638] ) ,
            6317: new ig.Animation( animationSheet5, 0.25, [640,641,642,643,644,645,646,647] ) ,
            2262: new ig.Animation( animationSheet5, 0.25, [649,650,651,652,653,654,655,656] ) ,
            1954: new ig.Animation( animationSheet5, 0.25, [658,659,660,661,662,663,664,665] ) ,
            6358: new ig.Animation( animationSheet5, 0.25, [667,668,669,670,671,672,673,674] ) ,
            2926: new ig.Animation( animationSheet5, 0.25, [676,677,678,679,680,681,682,683] ) ,
            6211: new ig.Animation( animationSheet5, 0.25, [685,686,687,688,689,690,691,692] ) ,
            5595: new ig.Animation( animationSheet5, 0.25, [694,695,696,697,698,699,700,701] ) ,
            1100: new ig.Animation( animationSheet5, 0.25, [703,704,705,706,707,708,709,710] ) ,
            190: new ig.Animation( animationSheet5, 0.25, [712,713,714,715,716,717,718,719] ) ,
            2536: new ig.Animation( animationSheet5, 0.25, [721,722,723,724,725,726,727,728] ) ,
            3052: new ig.Animation( animationSheet5, 0.25, [730,731,732,733,734,735,736,737] ) ,
            6336: new ig.Animation( animationSheet5, 0.25, [739,740,741,742,743,744,745,746] ) ,
            2382: new ig.Animation( animationSheet5, 0.25, [748,749,750,751,752,753,754,755] ) ,
            6056: new ig.Animation( animationSheet5, 0.25, [757,758,759,760,761,762,763,764] ) ,
            1486: new ig.Animation( animationSheet5, 0.25, [766,767,768,769,770,771,772,773] ) ,
            3070: new ig.Animation( animationSheet5, 0.25, [775,776,777,778,779,780,781,782] ) ,
            2737: new ig.Animation( animationSheet5, 0.25, [784,785,786,787,788,789,790,791] ) ,
            240: new ig.Animation( animationSheet5, 0.25, [793,794,795,796,797,798,799,800] ) ,
            2707: new ig.Animation( animationSheet5, 0.25, [802,803,804,805,806,807,808,809] ) ,
            4012: new ig.Animation( animationSheet5, 0.25, [811,812,813,814,815,816,817,818] ) ,
            3026: new ig.Animation( animationSheet5, 0.25, [820,821,822,823,824,825,826,827] ) ,
            3577: new ig.Animation( animationSheet5, 0.25, [829,830,831,832,833,834,835,836] ) ,
            1583: new ig.Animation( animationSheet5, 0.25, [838,839,840,841,842,843,844,845] ) ,
            47: new ig.Animation( animationSheet5, 0.25, [847,848,849,850,851,852,853,854] ) ,
            4973: new ig.Animation( animationSheet5, 0.25, [856,857,858,859,860,861,862,863] ) ,
            4870: new ig.Animation( animationSheet5, 0.25, [865,866,867,868,869,870,871,872] ) ,
            6420: new ig.Animation( animationSheet5, 0.25, [874,875,876,877,878,879,880,881] ) ,
            5654: new ig.Animation( animationSheet5, 0.25, [883,884,885,886,887,888,889,890] ) ,
            3275: new ig.Animation( animationSheet5, 0.25, [892,893,894,895,896,897,898,899] ) ,
            2874: new ig.Animation( animationSheet5, 0.25, [901,902,903,904,905,906,907,908] ) ,
            4272: new ig.Animation( animationSheet5, 0.25, [910,911,912,913,914,915,916,917] ) ,
            2346: new ig.Animation( animationSheet5, 0.25, [919,920,921,922,923,924,925,926] ) ,
            4732: new ig.Animation( animationSheet5, 0.25, [928,929,930,931,932,933,934,935] ) ,
            5303: new ig.Animation( animationSheet5, 0.25, [937,938,939,940,941,942,943,944] ) ,
            440: new ig.Animation( animationSheet5, 0.25, [946,947,948,949,950,951,952,953] ) ,
            5105: new ig.Animation( animationSheet5, 0.25, [955,956,957,958,959,960,961,962] ) ,
            732: new ig.Animation( animationSheet5, 0.25, [964,965,966,967,968,969,970,971] ) ,
            3437: new ig.Animation( animationSheet5, 0.25, [973,974,975,976,977,978,979,980] ) ,
            6635: new ig.Animation( animationSheet5, 0.25, [982,983,984,985,986,987,988,989] ) ,
            4585: new ig.Animation( animationSheet5, 0.25, [991,992,993,994,995,996,997,998] ) ,
            4460: new ig.Animation( animationSheet5, 0.25, [1000,1001,1002,1003,1004,1005,1006,1007] ) ,
            4370: new ig.Animation( animationSheet5, 0.25, [1009,1010,1011,1012,1013,1014,1015,1016] ) ,
            4776: new ig.Animation( animationSheet5, 0.25, [1018,1019,1020,1021,1022,1023,1024,1025] ) ,
            81: new ig.Animation( animationSheet5, 0.25, [1027,1028,1029,1030,1031,1032,1033,1034] ) ,
            715: new ig.Animation( animationSheet5, 0.25, [1036,1037,1038,1039,1040,1041,1042,1043] ) ,
            5644: new ig.Animation( animationSheet5, 0.25, [1045,1046,1047,1048,1049,1050,1051,1052] ) ,
            1155: new ig.Animation( animationSheet5, 0.25, [1054,1055,1056,1057,1058,1059,1060,1061] ) ,
            4598: new ig.Animation( animationSheet5, 0.25, [1063,1064,1065,1066,1067,1068,1069,1070] ) ,
            4635: new ig.Animation( animationSheet5, 0.25, [1072,1073,1074,1075,1076,1077,1078,1079] ) ,
            5325: new ig.Animation( animationSheet5, 0.25, [1081,1082,1083,1084,1085,1086,1087,1088] ) ,
            444: new ig.Animation( animationSheet5, 0.25, [1090,1091,1092,1093,1094,1095,1096,1097] ) ,
            3986: new ig.Animation( animationSheet5, 0.25, [1099,1100,1101,1102,1103,1104,1105,1106] ) ,
            3717: new ig.Animation( animationSheet5, 0.25, [1108,1109,1110,1111,1112,1113,1114,1115] ) ,
            6237: new ig.Animation( animationSheet5, 0.25, [1117,1118,1119,1120,1121,1122,1123,1124] ) ,
            3697: new ig.Animation( animationSheet5, 0.25, [1126,1127,1128,1129,1130,1131,1132,1133] ) ,
            1701: new ig.Animation( animationSheet5, 0.25, [1135,1136,1137,1138,1139,1140,1141,1142] ) ,
            307: new ig.Animation( animationSheet5, 0.25, [1144,1145,1146,1147,1148,1149,1150,1151] ) ,
            3942: new ig.Animation( animationSheet5, 0.25, [1153,1154,1155,1156,1157,1158,1159,1160] ) ,
            1710: new ig.Animation( animationSheet5, 0.25, [1162,1163,1164,1165,1166,1167,1168,1169] ) ,
            5884: new ig.Animation( animationSheet5, 0.25, [1171,1172,1173,1174,1175,1176,1177,1178] ) ,
            2734: new ig.Animation( animationSheet5, 0.25, [1180,1181,1182,1183,1184,1185,1186,1187] ) ,
            522: new ig.Animation( animationSheet5, 0.25, [1189,1190,1191,1192,1193,1194,1195,1196] ) ,
            280: new ig.Animation( animationSheet5, 0.25, [1198,1199,1200,1201,1202,1203,1204,1205] ) ,
            5550: new ig.Animation( animationSheet5, 0.25, [1207,1208,1209,1210,1211,1212,1213,1214] ) ,
            2077: new ig.Animation( animationSheet5, 0.25, [1216,1217,1218,1219,1220,1221,1222,1223] ) ,
            4183: new ig.Animation( animationSheet5, 0.25, [1225,1226,1227,1228,1229,1230,1231,1232] ) ,
            1438: new ig.Animation( animationSheet5, 0.25, [1234,1235,1236,1237,1238,1239,1240,1241] ) ,
            3401: new ig.Animation( animationSheet5, 0.25, [1243,1244,1245,1246,1247,1248,1249,1250] ) ,
            69: new ig.Animation( animationSheet5, 0.25, [1252,1253,1254,1255,1256,1257,1258,1259] ) ,
            779: new ig.Animation( animationSheet5, 0.25, [1261,1262,1263,1264,1265,1266,1267,1268] ) ,
            3955: new ig.Animation( animationSheet5, 0.25, [1270,1271,1272,1273,1274,1275,1276,1277] ) ,
            5857: new ig.Animation( animationSheet5, 0.25, [1279,1280,1281,1282,1283,1284,1285,1286] ) ,
            1592: new ig.Animation( animationSheet5, 0.25, [1288,1289,1290,1291,1292,1293,1294,1295] ) ,
            542: new ig.Animation( animationSheet5, 0.25, [1297,1298,1299,1300,1301,1302,1303,1304] ) ,
            4380: new ig.Animation( animationSheet5, 0.25, [1306,1307,1308,1309,1310,1311,1312,1313] ) ,
            1366: new ig.Animation( animationSheet5, 0.25, [1315,1316,1317,1318,1319,1320,1321,1322] ) ,
            1463: new ig.Animation( animationSheet5, 0.25, [1324,1325,1326,1327,1328,1329,1330,1331] ) ,
            100: new ig.Animation( animationSheet5, 0.25, [1333,1334,1335,1336,1337,1338,1339,1340] ) ,
            3694: new ig.Animation( animationSheet5, 0.25, [1342,1343,1344,1345,1346,1347,1348,1349] ) ,
            4723: new ig.Animation( animationSheet5, 0.25, [1351,1352,1353,1354,1355,1356,1357,1358] ) ,
            3292: new ig.Animation( animationSheet5, 0.25, [1360,1361,1362,1363,1364,1365,1366,1367] ) ,
            6194: new ig.Animation( animationSheet5, 0.25, [1369,1370,1371,1372,1373,1374,1375,1376] ) ,
            4752: new ig.Animation( animationSheet5, 0.25, [1378,1379,1380,1381,1382,1383,1384,1385] ) ,
            5081: new ig.Animation( animationSheet5, 0.25, [1387,1388,1389,1390,1391,1392,1393,1394] ) ,
            1201: new ig.Animation( animationSheet5, 0.25, [1396,1397,1398,1399,1400,1401,1402,1403] ) ,
            5: new ig.Animation( animationSheet5, 0.25, [1405,1406,1407,1408,1409,1410,1411,1412] ) ,
            1305: new ig.Animation( animationSheet5, 0.25, [1414,1415,1416,1417,1418,1419,1420,1421] ) ,
            6179: new ig.Animation( animationSheet5, 0.25, [1423,1424,1425,1426,1427,1428,1429,1430] ) ,
            2748: new ig.Animation( animationSheet5, 0.25, [1432,1433,1434,1435,1436,1437,1438,1439] ) ,
            6372: new ig.Animation( animationSheet5, 0.25, [1441,1442,1443,1444,1445,1446,1447,1448] ) ,
            3677: new ig.Animation( animationSheet5, 0.25, [1450,1451,1452,1453,1454,1455,1456,1457] ) ,
            4338: new ig.Animation( animationSheet5, 0.25, [1459,1460,1461,1462,1463,1464,1465,1466] ) ,
            4709: new ig.Animation( animationSheet5, 0.25, [1468,1469,1470,1471,1472,1473,1474,1475] ) ,
            2302: new ig.Animation( animationSheet5, 0.25, [1477,1478,1479,1480,1481,1482,1483,1484] ) ,
            1933: new ig.Animation( animationSheet5, 0.25, [1486,1487,1488,1489,1490,1491,1492,1493] ) ,
            6302: new ig.Animation( animationSheet5, 0.25, [1495,1496,1497,1498,1499,1500,1501,1502] ) ,
            6147: new ig.Animation( animationSheet5, 0.25, [1504,1505,1506,1507,1508,1509,1510,1511] ) ,
            4102: new ig.Animation( animationSheet5, 0.25, [1513,1514,1515,1516,1517,1518,1519,1520] ) ,
            5450: new ig.Animation( animationSheet5, 0.25, [1522,1523,1524,1525,1526,1527,1528,1529] ) ,
            4025: new ig.Animation( animationSheet5, 0.25, [1531,1532,1533,1534,1535,1536,1537,1538] ) ,
            1654: new ig.Animation( animationSheet5, 0.25, [1540,1541,1542,1543,1544,1545,1546,1547] ) ,
            6651: new ig.Animation( animationSheet5, 0.25, [1549,1550,1551,1552,1553,1554,1555,1556] ) ,
            6345: new ig.Animation( animationSheet5, 0.25, [1558,1559,1560,1561,1562,1563,1564,1565] ) ,
            3595: new ig.Animation( animationSheet5, 0.25, [1567,1568,1569,1570,1571,1572,1573,1574] ) ,
            2824: new ig.Animation( animationSheet5, 0.25, [1576,1577,1578,1579,1580,1581,1582,1583] ) ,
            640: new ig.Animation( animationSheet5, 0.25, [1585,1586,1587,1588,1589,1590,1591,1592] ) ,
            2977: new ig.Animation( animationSheet5, 0.25, [1594,1595,1596,1597,1598,1599,1600,1601] ) ,
            2239: new ig.Animation( animationSheet5, 0.25, [1603,1604,1605,1606,1607,1608,1609,1610] ) ,
            5939: new ig.Animation( animationSheet5, 0.25, [1612,1613,1614,1615,1616,1617,1618,1619] ) ,
            2842: new ig.Animation( animationSheet5, 0.25, [1621,1622,1623,1624,1625,1626,1627,1628] ) ,
            5964: new ig.Animation( animationSheet5, 0.25, [1630,1631,1632,1633,1634,1635,1636,1637] ) ,
            2638: new ig.Animation( animationSheet5, 0.25, [1639,1640,1641,1642,1643,1644,1645,1646] ) ,
            1540: new ig.Animation( animationSheet5, 0.25, [1648,1649,1650,1651,1652,1653,1654,1655] ) ,
            5138: new ig.Animation( animationSheet5, 0.25, [1657,1658,1659,1660,1661,1662,1663,1664] ) ,
            433: new ig.Animation( animationSheet5, 0.25, [1666,1667,1668,1669,1670,1671,1672,1673] ) ,
            773: new ig.Animation( animationSheet5, 0.25, [1675,1676,1677,1678,1679,1680,1681,1682] ) ,
            6020: new ig.Animation( animationSheet5, 0.25, [1684,1685,1686,1687,1688,1689,1690,1691] ) ,
            2003: new ig.Animation( animationSheet5, 0.25, [1693,1694,1695,1696,1697,1698,1699,1700] ) ,
            1674: new ig.Animation( animationSheet5, 0.25, [1702,1703,1704,1705,1706,1707,1708,1709] ) ,
            6611: new ig.Animation( animationSheet5, 0.25, [1711,1712,1713,1714,1715,1716,1717,1718] ) ,
            1842: new ig.Animation( animationSheet5, 0.25, [1720,1721,1722,1723,1724,1725,1726,1727] ) ,
            2615: new ig.Animation( animationSheet5, 0.25, [1729,1730,1731,1732,1733,1734,1735,1736] ) ,
            2816: new ig.Animation( animationSheet5, 0.25, [1738,1739,1740,1741,1742,1743,1744,1745] ) ,
            822: new ig.Animation( animationSheet5, 0.25, [1747,1748,1749,1750,1751,1752,1753,1754] ) ,
            1362: new ig.Animation( animationSheet5, 0.25, [1756,1757,1758,1759,1760,1761,1762,1763] ) ,
            2023: new ig.Animation( animationSheet5, 0.25, [1765,1766,1767,1768,1769,1770,1771,1772] ) ,
            3638: new ig.Animation( animationSheet5, 0.25, [1774,1775,1776,1777,1778,1779,1780,1781] ) ,
            120: new ig.Animation( animationSheet5, 0.25, [1783,1784,1785,1786,1787,1788,1789,1790] ) ,
            5490: new ig.Animation( animationSheet5, 0.25, [1792,1793,1794,1795,1796,1797,1798,1799] ) ,
            108: new ig.Animation( animationSheet5, 0.25, [1801,1802,1803,1804,1805,1806,1807,1808] ) ,
            2809: new ig.Animation( animationSheet5, 0.25, [1810,1811,1812,1813,1814,1815,1816,1817] ) ,
            431: new ig.Animation( animationSheet5, 0.25, [1819,1820,1821,1822,1823,1824,1825,1826] ) ,
            1893: new ig.Animation( animationSheet5, 0.25, [1828,1829,1830,1831,1832,1833,1834,1835] ) ,
            4727: new ig.Animation( animationSheet5, 0.25, [1837,1838,1839,1840,1841,1842,1843,1844] ) ,
            6633: new ig.Animation( animationSheet5, 0.25, [1846,1847,1848,1849,1850,1851,1852,1853] ) ,
            452: new ig.Animation( animationSheet5, 0.25, [1855,1856,1857,1858,1859,1860,1861,1862] ) ,
            5414: new ig.Animation( animationSheet5, 0.25, [1864,1865,1866,1867,1868,1869,1870,1871] ) ,
            6513: new ig.Animation( animationSheet5, 0.25, [1873,1874,1875,1876,1877,1878,1879,1880] ) ,
            1162: new ig.Animation( animationSheet5, 0.25, [1882,1883,1884,1885,1886,1887,1888,1889] ) ,
            1058: new ig.Animation( animationSheet5, 0.25, [1891,1892,1893,1894,1895,1896,1897,1898] ) ,
            2672: new ig.Animation( animationSheet5, 0.25, [1900,1901,1902,1903,1904,1905,1906,1907] ) ,
            1126: new ig.Animation( animationSheet5, 0.25, [1909,1910,1911,1912,1913,1914,1915,1916] ) ,
            4706: new ig.Animation( animationSheet5, 0.25, [1918,1919,1920,1921,1922,1923,1924,1925] ) ,
            1564: new ig.Animation( animationSheet5, 0.25, [1927,1928,1929,1930,1931,1932,1933,1934] ) ,
            418: new ig.Animation( animationSheet5, 0.25, [1936,1937,1938,1939,1940,1941,1942,1943] ) ,
            6053: new ig.Animation( animationSheet5, 0.25, [1945,1946,1947,1948,1949,1950,1951,1952] ) ,
            3100: new ig.Animation( animationSheet5, 0.25, [1954,1955,1956,1957,1958,1959,1960,1961] ) ,
            1186: new ig.Animation( animationSheet5, 0.25, [1963,1964,1965,1966,1967,1968,1969,1970] ) ,
            1014: new ig.Animation( animationSheet5, 0.25, [1972,1973,1974,1975,1976,1977,1978,1979] ) ,
            3823: new ig.Animation( animationSheet5, 0.25, [1981,1982,1983,1984,1985,1986,1987,1988] ) ,
            6500: new ig.Animation( animationSheet5, 0.25, [1990,1991,1992,1993,1994,1995,1996,1997] ) ,
            4947: new ig.Animation( animationSheet5, 0.25, [1999,2000,2001,2002,2003,2004,2005,2006] ) ,
            4048: new ig.Animation( animationSheet5, 0.25, [2008,2009,2010,2011,2012,2013,2014,2015] ) ,
            5560: new ig.Animation( animationSheet5, 0.25, [2017,2018,2019,2020,2021,2022,2023,2024] ) ,
            2355: new ig.Animation( animationSheet5, 0.25, [2026,2027,2028,2029,2030,2031,2032,2033] ) ,
            3125: new ig.Animation( animationSheet5, 0.25, [2035,2036,2037,2038,2039,2040,2041,2042] ) ,
            532: new ig.Animation( animationSheet5, 0.25, [2044,2045,2046,2047,2048,2049,2050,2051] ) ,
            2474: new ig.Animation( animationSheet5, 0.25, [2053,2054,2055,2056,2057,2058,2059,2060] ) ,
            2718: new ig.Animation( animationSheet5, 0.25, [2062,2063,2064,2065,2066,2067,2068,2069] ) ,
            858: new ig.Animation( animationSheet5, 0.25, [2071,2072,2073,2074,2075,2076,2077,2078] ) ,
            6328: new ig.Animation( animationSheet5, 0.25, [2080,2081,2082,2083,2084,2085,2086,2087] ) ,
            6524: new ig.Animation( animationSheet5, 0.25, [2089,2090,2091,2092,2093,2094,2095,2096] ) ,
            2078: new ig.Animation( animationSheet5, 0.25, [2098,2099,2100,2101,2102,2103,2104,2105] ) ,
            2830: new ig.Animation( animationSheet5, 0.25, [2107,2108,2109,2110,2111,2112,2113,2114] ) ,
            3444: new ig.Animation( animationSheet5, 0.25, [2116,2117,2118,2119,2120,2121,2122,2123] ) ,
            1557: new ig.Animation( animationSheet5, 0.25, [2125,2126,2127,2128,2129,2130,2131,2132] ) ,
            5640: new ig.Animation( animationSheet5, 0.25, [2134,2135,2136,2137,2138,2139,2140,2141] ) ,
            1292: new ig.Animation( animationSheet5, 0.25, [2143,2144,2145,2146,2147,2148,2149,2150] ) ,
            5177: new ig.Animation( animationSheet5, 0.25, [2152,2153,2154,2155,2156,2157,2158,2159] ) ,
            4300: new ig.Animation( animationSheet5, 0.25, [2161,2162,2163,2164,2165,2166,2167,2168] ) ,
            2427: new ig.Animation( animationSheet5, 0.25, [2170,2171,2172,2173,2174,2175,2176,2177] ) ,
            2166: new ig.Animation( animationSheet5, 0.25, [2179,2180,2181,2182,2183,2184,2185,2186] ) ,
            2406: new ig.Animation( animationSheet5, 0.25, [2188,2189,2190,2191,2192,2193,2194,2195] ) ,
            6609: new ig.Animation( animationSheet5, 0.25, [2197,2198,2199,2200,2201,2202,2203,2204] ) ,
            142: new ig.Animation( animationSheet5, 0.25, [2206,2207,2208,2209,2210,2211,2212,2213] ) ,
            107: new ig.Animation( animationSheet5, 0.25, [2215,2216,2217,2218,2219,2220,2221,2222] ) ,
            5446: new ig.Animation( animationSheet5, 0.25, [2224,2225,2226,2227,2228,2229,2230,2231] ) ,
            5932: new ig.Animation( animationSheet5, 0.25, [2233,2234,2235,2236,2237,2238,2239,2240] ) ,
            4932: new ig.Animation( animationSheet5, 0.25, [2242,2243,2244,2245,2246,2247,2248,2249] ) ,
            209: new ig.Animation( animationSheet5, 0.25, [2251,2252,2253,2254,2255,2256,2257,2258] ) ,
            6467: new ig.Animation( animationSheet5, 0.25, [2260,2261,2262,2263,2264,2265,2266,2267] ) ,
            6638: new ig.Animation( animationSheet5, 0.25, [2269,2270,2271,2272,2273,2274,2275,2276] ) ,
            5509: new ig.Animation( animationSheet5, 0.25, [2278,2279,2280,2281,2282,2283,2284,2285] ) ,
            1178: new ig.Animation( animationSheet5, 0.25, [2287,2288,2289,2290,2291,2292,2293,2294] ) ,
            5352: new ig.Animation( animationSheet5, 0.25, [2296,2297,2298,2299,2300,2301,2302,2303] ) ,
            860: new ig.Animation( animationSheet5, 0.25, [2305,2306,2307,2308,2309,2310,2311,2312] ) ,
            31: new ig.Animation( animationSheet5, 0.25, [2314,2315,2316,2317,2318,2319,2320,2321] ) ,
            3: new ig.Animation( animationSheet5, 0.25, [2323,2324,2325,2326,2327,2328,2329,2330] ) ,
            2739: new ig.Animation( animationSheet5, 0.25, [2332,2333,2334,2335,2336,2337,2338,2339] ) ,
            6137: new ig.Animation( animationSheet5, 0.25, [2341,2342,2343,2344,2345,2346,2347,2348] ) ,
            6061: new ig.Animation( animationSheet5, 0.25, [2350,2351,2352,2353,2354,2355,2356,2357] ) ,
            174: new ig.Animation( animationSheet5, 0.25, [2359,2360,2361,2362,2363,2364,2365,2366] ) ,
            2854: new ig.Animation( animationSheet5, 0.25, [2368,2369,2370,2371,2372,2373,2374,2375] ) ,
            3483: new ig.Animation( animationSheet5, 0.25, [2377,2378,2379,2380,2381,2382,2383,2384] ) ,
            5889: new ig.Animation( animationSheet5, 0.25, [2386,2387,2388,2389,2390,2391,2392,2393] ) ,
            6134: new ig.Animation( animationSheet5, 0.25, [2395,2396,2397,2398,2399,2400,2401,2402] ) ,
            253: new ig.Animation( animationSheet5, 0.25, [2404,2405,2406,2407,2408,2409,2410,2411] ) ,
            5599: new ig.Animation( animationSheet5, 0.25, [2413,2414,2415,2416,2417,2418,2419,2420] ) ,
            5943: new ig.Animation( animationSheet5, 0.25, [2422,2423,2424,2425,2426,2427,2428,2429] ) ,
            3376: new ig.Animation( animationSheet5, 0.25, [2431,2432,2433,2434,2435,2436,2437,2438] ) ,
            1554: new ig.Animation( animationSheet5, 0.25, [2440,2441,2442,2443,2444,2445,2446,2447] ) ,
            4982: new ig.Animation( animationSheet5, 0.25, [2449,2450,2451,2452,2453,2454,2455,2456] ) ,
            5670: new ig.Animation( animationSheet5, 0.25, [2458,2459,2460,2461,2462,2463,2464,2465] ) ,
            4548: new ig.Animation( animationSheet5, 0.25, [2467,2468,2469,2470,2471,2472,2473,2474] ) 
        } };

    }

})