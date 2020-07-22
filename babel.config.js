module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        paths: [
          {
            rootPathSuffix: "./src/pages",
            rootPathPrefix: "@pages",
          },
          {
            rootPathSuffix: "./src/components",
            rootPathPrefix: "@components",
          },
          {
            rootPathSuffix: "./src/constants",
            rootPathPrefix: "@constants",
          },
          {
            rootPathSuffix: "./src/constants",
            rootPathPrefix: "@constants",
          },
          {
            rootPathSuffix: "./src/system",
            rootPathPrefix: "@system",
          },
          {
            rootPathSuffix: "./src/reducers",
            rootPathPrefix: "@reducers",
          },
          {
            rootPathSuffix: "./src/assets",
            rootPathPrefix: "@assets",
          },
          {
            rootPathSuffix: "./src/actions",
            rootPathPrefix: "@actions",
          },
          {
            rootPathSuffix: "./src/utils",
            rootPathPrefix: "@utils",
          },
        ],
      },
    ],
  ],
};
