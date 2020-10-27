module.exports = api => {
    api.cache(true);
  
    return {
      presets: [
        [
          '@babel/preset-env',
          {
            debug: false,
            useBuiltIns: 'usage',
            corejs: { version: 3, proposals: true },
            targets: {
              browsers: ['last 2 versions', "IE >= 11"],
            },
            include: ['@babel/plugin-proposal-object-rest-spread'],
          },
        ],
        ['@babel/preset-react'],
        ['@babel/preset-typescript'],
      ],
      plugins: [
        '@babel/plugin-transform-spread',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties',
      ],
      // ignore all modules except for specific dependencies targeting >es5 syntax
      exclude: [
        /node_modules[\/\\](?!ansi-regex|strip-ansi|react-hook-form)/,
        /node_modules\/(?!(ansi-regex|strip-ansi|react-hook-form)\/)/
      ],
      sourceType: 'unambiguous'
    };
  };
  