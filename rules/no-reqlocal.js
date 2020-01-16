module.exports = {
	meta: {
		type: "problem"
	},
	create(context) {
		// var sourceCode = context.getSourceCode();
		return {
			Literal(node) {
				if (node.value.indexOf&&node.value.indexOf("/reqlocal") != -1) {
					context.report({
						node: node,
						message: "禁止调用{{ identifier }}请求",
						data: {
							identifier: 'reqlocal'
						}
					});
				};
				if (node.value.indexOf&&node.value.indexOf("/reqreadfile") != -1) {
					context.report({
						node: node,
						message: "禁止调用{{ identifier }}请求",
						data: {
							identifier: 'reqreadfile'
						}
					});
				};
				if (node.value.indexOf&&node.value.indexOf("/reqreadmap") != -1) {
					context.report({
						node: node,
						message: "禁止调用{{ identifier }}请求",
						data: {
							identifier: 'reqreadmap'
						}
					});
				}
			}
		};
	}
};
