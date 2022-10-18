const path = require('path');
const version = require('./package.json').version;
const { VueLoaderPlugin } = require('vue-loader');

// Custom webpack rules
const rules = [
  {
    test: /\.ts$/,
    loader: 'ts-loader',
    options: { appendTsSuffixTo: [/\.vue$/] },
    exclude: /node_modules/,
  },
  { test: /\.js$/, loader: 'source-map-loader' },
  { test: /\.css$/, use: ['vue-style-loader', 'style-loader', 'css-loader'] },
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      esModule: true,
    },
  },
  {
    test: /\.pug$/,
    loader: 'pug-plain-loader'
  },
  {
    test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/,
    use: [
      {
        loader: "file-loader"
      }
    ]
  }
];

const plugins = [new VueLoaderPlugin()];

// Packages that shouldn't be bundled but loaded at runtime
const externals = ['@jupyter-widgets/base'];

const resolve = {
  // Add '.ts' and '.tsx' as resolvable extensions.
  extensions: ['.webpack.js', '.web.js', '.ts', '.js', '.vue'],
  mainFields: ['vue', 'browser', 'module', 'main'],
  alias: {
    vue: 'vue/dist/vue.esm-bundler.js',
  },
};

module.exports = [
  /**
   * Lab extension
   *
   * This builds the lib/ folder with the JupyterLab extension.
   */
  {
    entry: './src/plugin.ts',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'lib'),
      libraryTarget: 'amd',
      publicPath: '',
    },
    module: {
      rules: rules,
    },
    plugins,
    externals,
    resolve,
  },

  /**
   * Notebook extension
   *
   * This bundle only contains the part of the JavaScript that is run on load of
   * the notebook.
   */
  {
    mode: 'production',
    entry: './src/extension.ts',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'vuewidget', 'nbextension'),
      libraryTarget: 'amd',
      publicPath: '',
    },
    module: {
      rules: rules,
    },
    plugins,
    devtool: 'source-map',
    externals,
    resolve,
  },

  /**
   * Embeddable vuewidget bundle
   *
   * This bundle is almost identical to the notebook extension bundle. The only
   * difference is in the configuration of the webpack public path for the
   * static assets.
   *
   * The target bundle is always `dist/index.js`, which is the path required by
   * the custom widget embedder.
   */
  {
    entry: './src/index.ts',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'amd',
      library: 'vuewidget',
      publicPath: 'https://unpkg.com/vuewidget@' + version + '/dist/',
    },
    devtool: 'source-map',
    module: {
      rules: rules,
    },
    plugins,
    externals,
    resolve,
  },

  /**
   * Documentation widget bundle
   *
   * This bundle is used to embed widgets in the package documentation.
   */
  {
    entry: './src/index.ts',
    output: {
      filename: 'embed-bundle.js',
      path: path.resolve(__dirname, 'docs', 'source', '_static'),
      library: 'vuewidget',
      libraryTarget: 'amd',
    },
    module: {
      rules: rules,
    },
    plugins,
    devtool: 'source-map',
    externals,
    resolve,
  },
];
