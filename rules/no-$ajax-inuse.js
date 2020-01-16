module.exports = {
	meta: {
		type: "problem"
	},
	create(context) {
		// var sourceCode = context.getSourceCode();
		return {
			MemberExpression(node) {
				if (node.object.name && node.object.name === "$") {
					if (node.property&&node.property.name==="ajax") {
						context.report({
							node: node,
							message: "禁止调用{{ identifier }}方法,请使用ajaxRun方法",
							data: {
								identifier: node.object.name+"."+node.property.name
							}
						});
          }
				}
			}
		};
	}
};
