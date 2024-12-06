export default [
  {
    // file include eslint config
    "files": ["src/**/*.js"],

    // file exclude eslint config
    "ignores": [
      "src/person.js"
    ],

    // rules atau aturan yang akan dijalankan oleh eslint
    "rules": {
      "semi": "error",
      "prefer-const": "error",
      "require-await": "error",
    }
  }
]