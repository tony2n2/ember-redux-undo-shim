module.exports = {
	afterInstall: function() {
		return this.addPackageToProject('redux-undo', '1.0.0-beta9-8');
	},
  afterUninstall: function() {
    return this.removePackageToProject('redux-undo', '1.0.0-beta9-8');
  },

	normalizeEntityName: function() {
		// this prevents an error when the entityName is not specified
	}
}
