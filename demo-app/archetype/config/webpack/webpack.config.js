const Path = require("path");

const repoPackagesDir = Path.join(__dirname, "../../../../packages");

module.exports = {
  resolve: {
    alias: {
     
      "party-component": Path.join(repoPackagesDir, "party-component/src"),
      
    },
  modules: [
        
      Path.join(repoPackagesDir, "party-component"),
      Path.join(repoPackagesDir, "party-component/node_modules"),
      
    ]
  }
};
