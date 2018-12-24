module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'transform-imports',
      {
        '@/components': {
          transform: '@/components/${member}',
          preventFullImport: true,
        },
      },
    ],
  ],
};
