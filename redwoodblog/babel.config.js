module.exports = {

  "plugins": [
  ["module-resolver", {
    "root": ["./src"],
    "alias": {
      "test": "./test",
      "underscore": "lodash"
    }
  }]
]
}
