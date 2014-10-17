angular.module('ngMore',[])
.directive('ngMore',function($window){
	return {
		restrict: 'A',
		scope: {
			sm: "@showMore",
			mh: "@maxHeight"
		},
		link: function(scope, elm, attrs) {
			elm.addClass('ng-more');
			var more = angular.element('<div>').addClass('ng-more-more');
			elm.append(more);
			scope.$watch('sm',function(sm) {
				showMore(scope.sm,scope.mh);
			});
			scope.$watch('mh',function(mh) {
				showMore(scope.sm,scope.mh);
			});
			scope.$watch(function(){
				return elm.html();
			},function() {
				showMore(scope.sm,scope.mh);
			});
			angular.element(window).bind('resize',function(){
				if (elm[0].offsetHeight < scope.mh) {
					more.addClass('ng-more-hide');
				} else {
					more.removeClass('ng-more-hide');
				}
			});
			function showMore(sm,mh) {
				scope.sm = sm = sm === true || sm === "true" || sm === "1";
				elm.css({'max-height': sm ? '99999em' : mh + 'px'});
				if(!sm) {
					elm.removeClass('ng-more-expanded').addClass('ng-more-collapsed');
					more.html('<i class="fa fa-chevron-down fa-lg"></i>');
				} else {
					elm.removeClass('ng-more-collapsed').addClass('ng-more-expanded');
					more.html('<i class="fa fa-chevron-up fa-lg"></i>');
				}
				if (elm[0].offsetHeight < scope.mh) {
					more.addClass('ng-more-hide');
				} else {
					more.removeClass('ng-more-hide');
				}
			}
			more.bind('click',function(){
				scope.$apply(function(){
					scope.sm = !scope.sm;
				});
			});
		}
	}
});