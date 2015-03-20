module.exports = {
  description: '',

  afterInstall: function(options) {
    return this.addBowerPackageToProject("gss");
  },

  normalizeEntityName: function() {
    // Allows default blueprint without entity name
  }
};
