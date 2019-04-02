const plugins = [
    [
        require.resolve('babel-plugin-module-resolver'),
        {
            root: ["./"],
            alias: {
                "@sharedComponents": "./src/components/shared",
                "@common": "./src/common",
                "@images": "./src/assets/images",
                "@models": "./src/models",
                "@actions": "./src/actions",
                "@reducers": "./src/reducers",
                "@mocks": "./mocks",
            }
        }

    ]

];

module.exports = {
    plugins,
};