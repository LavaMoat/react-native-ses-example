/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  serializer: {
    // We can include multiple copies of InitializeCore here because metro will
    // only add ones that are already part of the bundle
    getModulesRunBeforeMainModule: () => []
  },
};
