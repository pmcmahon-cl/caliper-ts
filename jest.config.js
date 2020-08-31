module.exports = {
	coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/index.ts', '<rootDir>/src/test/'],
	moduleNameMapper: {
		// Need to map to the UMD build of ky for tests, since Jest can't properly handle ES modules
		'^ky$': require.resolve('ky').replace('index.js', 'umd.js')
	},
	setupFiles: ['<rootDir>/setupTests']
};
