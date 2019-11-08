const presets = [
    [
        "@babel/preset-env",
        {}
    ]
];

const plugins = [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": 3,
        "helpers": false,
        "regenerator": true,
        "useESModules": false
      }
    ]
    ];

module.exports = { presets, plugins };