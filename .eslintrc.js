module.exports = {
	extends:["@vue/prettier","@vue/typescript"],
	env:{
		node:true
	},
	parserOptions: {
    sourceType: "module",
		ecmaVersion: 2015
		// parser:"@typescript-eslint/parser"
	},
	extends: "eslint:recommended",
	rules: {
		// "no-hello-in-identifier": 2,
		// "no-console": 2,
		"no-undef": "off",
		"no-$ajax-inuse": 1,
		"no-reqlocal":1
	}
};
