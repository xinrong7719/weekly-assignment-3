const path = require('path');

 

module.exports = {
   output: {
       path:path.join(__dirname, '/dist'),
       filename: 'index.bundle.js',
   },

   devServer: {
       port: 4000
   },

   module: {
       rules: [
           {
               test: /\.(js|jsx)$/,
               exclude: /node_modules/,
               use: {
                   loader: 'babel-loader'
               }
           }, 
       ]
   }
};

 