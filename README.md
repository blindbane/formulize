# Formula
Javscript WYSWYG formula builder.

[![npm version](https://badge.fury.io/js/jquery-formula.svg)](https://badge.fury.io/js/jquery-formula) [![Join the chat at https://gitter.im/KennethanCeyer/PIGNOSE](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/KennethanCeyer/PIGNOSE?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

----

### Getting start

his plugin helps you to make formulas.

It's a stable version on IE8 higher and any most browsers.

[Check demo page](http://www.pigno.se/barn/PIGNOSE-Formula)

![Sample](http://www.nhpcw.com/upload/%25EB%258B%25A4%25EC%259A%25B4%25EB%25A1%259C%25EB%2593%259C%2B%25284%2529_032116101121.png)

----

### Usage

This plugin has a dependency on jQuery library.

So first of all, you need to import formula css, js file (check src or dist folder in this repository) after jQuery imported.

And try to write this snippet in your html file.

```html
<head>
	...
	<script type="text/javascript">
		$(function() {
			var $formula = $('.formula').formula();
		});
	</script>
</head>
<body>
	<div class="formula"></div>
</body>
```

----

#### Advanced usage

If you want a result from the formula, you can call getFormula() method.

Check the sample below.

```html
<head>
	...
	<script type="text/javascript">
		$(function() {
			var $formula = $('.formula').formula();
			$formula.getFormula(); // Get formula as a string type.
			
			//=====================================
			
			var $formulaCustom = $('.formula-custom').formula({
				filter: function(data) {
				// filter option is called when getFormula() method is called.
				// this option helps you to customize the formula data.
				// data parameter on this function are about formula (object type).
					return data;
				}
			});
			
			// if filter option is used, getFormula() will return data as an object type. 
			console.log($formulaCustom.getFormula());
		});
	</script>
</head>
<body>
	<div class="formula"></div>
	<div class="formula-custom"></div>
</body>
```

----

### Notes

This plugin is made for a purpose of the below exhibition.

1. The textarea can be included HTML markup text which rendered.
2. It must be supported the validation check about formula expression.
3. Numbers or other operators in a formula, its ui must be cool and easy.

----

### Library

This project is related with https://github.com/KennethanCeyer/FormulaParser (built-in)

----

### Question

If you found something problem of this plugin, or you have some question.

Please send me a message on gitter. (gitter url is on the top of the menual)
