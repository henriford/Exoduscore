let util = require('../signature')
var objectHash = require('../object_hash.js');
let str = {"fromAddress":"EXO24M2OK47GM4U66NSQEGIC5S5VOWSQMIW","toAddress":"EXOFODALDEJMW5YIMUNPBCYB7P5QQPXQZ73","amount":"3000000000000000000","timestamp":1594366925783,"remark":"","vers":"2.0","pubkey":"Awd8eISe/iQ8ukEiDLVzWvcDBo636o+q4PW9Q2KK46rq","type":1,"fee":"500000","nrgPrice":"1000000000","signature":"32TWwPix9nFshRD0N4d+CFyvnepmHU64YsOW1RV6CSuINUo7cXa8pkWBM6HiHeDtNujyBSOI0e2Vs/A+go0k6Siw=="}
//hash, b64_sig, b64_pub_key
function tt() {
    let sig = str.signature;
    delete str.signature
    var buf_to_sign = objectHash.getUnitHashToSign(str);
    let a = util.verify(buf_to_sign,sig,str.pubkey)
    console.log(a)
}

tt()