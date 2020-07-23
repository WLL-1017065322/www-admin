module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  pulgin: [
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'lib',
        style: 'css'
      }
    ]
  ]
}
