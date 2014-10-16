# ngMore directive

AngularJS directive to hide and show contents that are too long.

[Example](http://codepen.io/giatro/full/GJpln/) | See the Pen [ngMore directive](http://codepen.io/giatro/pen/GJpln/) on [CodePen](http://codepen.io).

[MIT License](http://codepen.io/giatro/pen/GJpln/license).

## Usage

```javascript
/* my-app.js */
angular.module('myApp',['ngMore']);
```

```html
<html ng-app="myApp">
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular.min.js"></script>
	<script src="my-app.js"></script>
	<script src="ng-more.js"></script>
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
	<link href="ng-more.min.css" rel="stylesheet">
</head>
<body>
<div ng-more max-height="140">
```