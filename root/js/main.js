;(function(self) {
	'use strict'

	var editor
	var lastText
	var ast
	var astDom

	$(function() {
		editor = ace.edit("source-code")
		editor.setTheme("ace/theme/idle_fingers")
		editor.getSession().setMode("ace/mode/javascript")
		editor.setValue('')

		self.compile = compile

		// $.get('js/translate.js', function(text) {
		// 	editor.setValue(text)
		// 	$('a[href="#after"]').click()
		// })
	})

	function compile() {
		var text = editor.getValue()
		if (text === lastText) return
		try {
			ast = parse(text)
		} catch (err) {
			throw err
		}
		astDom = self.render(ast).dom
		$('#ast-view').empty().append(astDom)
	}

})(window);