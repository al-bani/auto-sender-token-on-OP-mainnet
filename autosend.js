const _0xa84d5d = _0x1a9b;
(function (_0x53b45a, _0x591880) {
  const _0x248511 = _0x1a9b,
    _0x42bd36 = _0x53b45a();
  while (!![]) {
    try {
      const _0x2b87e4 =
        (-parseInt(_0x248511(0xd0)) / 0x1) * (parseInt(_0x248511(0xbc)) / 0x2) +
        (-parseInt(_0x248511(0xc3)) / 0x3) *
          (-parseInt(_0x248511(0xd1)) / 0x4) +
        (parseInt(_0x248511(0xb5)) / 0x5) * (parseInt(_0x248511(0xd4)) / 0x6) +
        (parseInt(_0x248511(0xb8)) / 0x7) * (-parseInt(_0x248511(0xb0)) / 0x8) +
        -parseInt(_0x248511(0xd2)) / 0x9 +
        -parseInt(_0x248511(0xc8)) / 0xa +
        parseInt(_0x248511(0xb7)) / 0xb;
      if (_0x2b87e4 === _0x591880) break;
      else _0x42bd36["push"](_0x42bd36["shift"]());
    } catch (_0xc2d7b5) {
      _0x42bd36["push"](_0x42bd36["shift"]());
    }
  }
})(_0x4bd9, 0xde55c);
const ethers = require(_0xa84d5d(0xb6));
require("dotenv")["config"]();
const PRIVATE_KEY = process[_0xa84d5d(0xc9)][_0xa84d5d(0xd6)],
  RECIPIENT_ADDRESS = process[_0xa84d5d(0xc9)][_0xa84d5d(0xb9)],
  TOKEN_CONTRACT_ADDRESS = process[_0xa84d5d(0xc9)]["TOKEN_CONTRACT_ADDRESS"],
  PROVIDER_URL = process[_0xa84d5d(0xc9)][_0xa84d5d(0xce)],
  INTERVAL = process[_0xa84d5d(0xc9)][_0xa84d5d(0xb3)];
(!PRIVATE_KEY ||
  !RECIPIENT_ADDRESS ||
  !TOKEN_CONTRACT_ADDRESS ||
  !PROVIDER_URL) &&
  (console[_0xa84d5d(0xc6)](_0xa84d5d(0xb2)), process[_0xa84d5d(0xca)](0x1));
const provider = new ethers[_0xa84d5d(0xbb)](PROVIDER_URL),
  wallet = new ethers[_0xa84d5d(0xc0)](PRIVATE_KEY, provider),
  abi = [_0xa84d5d(0xad), _0xa84d5d(0xac), _0xa84d5d(0xae)],
  tokenContract = new ethers[_0xa84d5d(0xc1)](
    TOKEN_CONTRACT_ADDRESS,
    abi,
    wallet
  );
async function autoSendTokens() {
  const _0x3a829f = _0xa84d5d;
  try {
    const _0x5a0cd0 = await tokenContract[_0x3a829f(0xc7)](
        wallet[_0x3a829f(0xcd)]
      ),
      _0x3ed465 = await tokenContract[_0x3a829f(0xba)]();
    console[_0x3a829f(0xc2)](
      _0x3a829f(0xaf) +
        ethers["formatUnits"](_0x5a0cd0, 0x12) +
        "\x20" +
        _0x3ed465
    );
    if (_0x5a0cd0 == 0x0) {
      console["log"](
        "Transaction\x20canceled:\x20wallet\x20has\x200\x20" + _0x3ed465
      );
      return;
    }
    const _0x595595 = await tokenContract["transfer"]["estimateGas"](
        RECIPIENT_ADDRESS,
        _0x5a0cd0
      ),
      _0x13d379 = await provider[_0x3a829f(0xd3)](),
      _0x48d9bd = _0x13d379["gasPrice"],
      _0x4a3521 = _0x595595 * _0x48d9bd,
      _0x583903 = await provider[_0x3a829f(0xc4)](wallet[_0x3a829f(0xcd)]);
    console["log"](
      _0x3a829f(0xb1) + ethers[_0x3a829f(0xb4)](_0x4a3521) + "\x20ETH"
    ),
      console[_0x3a829f(0xc2)](
        _0x3a829f(0xbe) + ethers[_0x3a829f(0xb4)](_0x583903) + _0x3a829f(0xcb)
      );
    if (_0x583903 < _0x4a3521) {
      console[_0x3a829f(0xc2)](_0x3a829f(0xcc));
      return;
    }
    const _0xb1467c = await tokenContract["transfer"](
      RECIPIENT_ADDRESS,
      _0x5a0cd0
    );
    console[_0x3a829f(0xc2)](_0x3a829f(0xbd), _0xb1467c[_0x3a829f(0xbf)]),
      await _0xb1467c[_0x3a829f(0xc5)](),
      console[_0x3a829f(0xc2)](_0x3a829f(0xd5), _0xb1467c[_0x3a829f(0xbf)]);
  } catch (_0x4d4e33) {
    console["error"]("Error\x20while\x20sending\x20tokens:", _0x4d4e33);
  }
}
function _0x4bd9() {
  const _0x4d50b9 = [
    "JsonRpcProvider",
    "2261862hbBdfl",
    "Transaction\x20sent.\x20Hash:",
    "Current\x20ETH\x20balance:\x20",
    "hash",
    "Wallet",
    "Contract",
    "log",
    "3dHkZZu",
    "getBalance",
    "wait",
    "error",
    "balanceOf",
    "12835990BhXOOg",
    "env",
    "exit",
    "\x20ETH",
    "Transaction\x20canceled:\x20insufficient\x20ETH\x20for\x20gas\x20fee",
    "address",
    "PROVIDER_URL",
    "Starting\x20auto-send\x20tool...",
    "1AHcjCO",
    "2278640oqzXRO",
    "1723842NFikZA",
    "getFeeData",
    "681924YbMpzY",
    "Transaction\x20confirmed.\x20Hash:",
    "PRIVATE_KEY",
    "function\x20transfer(address\x20to,\x20uint256\x20value)\x20returns\x20(bool)",
    "function\x20balanceOf(address\x20owner)\x20view\x20returns\x20(uint256)",
    "function\x20symbol()\x20view\x20returns\x20(string)",
    "Current\x20token\x20balance:\x20",
    "6488KrUBGu",
    "Estimated\x20gas\x20cost:\x20",
    "Please\x20set\x20PRIVATE_KEY,\x20RECIPIENT_ADDRESS,\x20TOKEN_CONTRACT_ADDRESS,\x20and\x20PROVIDER_URL\x20in\x20your\x20.env\x20file.",
    "INTERVAL",
    "formatEther",
    "50PZVgVB",
    "ethers",
    "36170134aePvET",
    "12754hPjMbw",
    "RECIPIENT_ADDRESS",
    "symbol",
  ];
  _0x4bd9 = function () {
    return _0x4d50b9;
  };
  return _0x4bd9();
}
function _0x1a9b(_0x750714, _0x628272) {
  const _0x4bd946 = _0x4bd9();
  return (
    (_0x1a9b = function (_0x1a9bc3, _0x1e025f) {
      _0x1a9bc3 = _0x1a9bc3 - 0xac;
      let _0x17fb8e = _0x4bd946[_0x1a9bc3];
      return _0x17fb8e;
    }),
    _0x1a9b(_0x750714, _0x628272)
  );
}
function startAutoSend(_0x566d54 = INTERVAL) {
  const _0x1fd0d5 = _0xa84d5d;
  console[_0x1fd0d5(0xc2)](_0x1fd0d5(0xcf)),
    setInterval(async () => {
      const _0x3f03d8 = _0x1fd0d5;
      console[_0x3f03d8(0xc2)]("Checking\x20balance..."),
        await autoSendTokens();
    }, _0x566d54);
}
startAutoSend();
