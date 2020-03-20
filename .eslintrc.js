module.exports = {
	extends:["@vue/prettier","@vue/typescript"],
	env:{
		node:true
	},
	parserOptions: {
    sourceType: "module",
		ecmaVersion: 2015,
		parser:"@typescript-eslint/parser"
	},
	plugins:["fnlint"],
	extends: ["plugin:vue/essential"],
	rules: {
		// "no-hello-in-identifier": 2,
		"no-console": 2,
		"no-undef": "off",
		"fnlint/no-xmlrequest":"error"
		// "no-$ajax-inuse": 1,
		// "no-reqlocal":1
	}
};
