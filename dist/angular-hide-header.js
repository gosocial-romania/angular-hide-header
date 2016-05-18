(function(){
	'use strict';
	angular.module('angularHideHeader',[]).directive('hideHeader',['$timeout','$window',function($timeout,$window){
		return{
			restrict:'A',
		  	link: function (scope, element, attrs) {
				var scrollposition = 0,scroll_time;
				var hideOffset = attrs.hideOffset;
				angular.element($window).bind("scroll", function() {
					var body = angular.element(document.getElementsByTagName('body'));
					var current_scroll = body[0].scrollTop;
					var hheight = element[0].scrollHeight;
					var pxOffset = parseInt(hideOffset);
					$timeout.cancel(scroll_time);
					if(current_scroll >= hheight+pxOffset){
						if (current_scroll <= scrollposition) {
					 		element.removeClass('hideh');
							element.css({'top':"80px"});
							angular.element('#sf-fixed-left-menu').css({'top': "164px"});
						}
						else{
					  		element.addClass('hideh');
							console.log(hheight);
							element.css({
								'top':-hheight+"px",
								'transition':'top 0.25s',
								'-webkit-transition': 'top 0.25s',
								'-moz-transition': 'top 0.25s',
								'-ms-transition': 'top 0.25s',
								'-o-transition': 'top 0.25s',
							});
							angular.element('#sf-fixed-left-menu').css({'top': "84px"});
						}
					}
					else if(current_scroll >= hheight){
						element.removeClass('hideh');
						element.css({
							'top':"80px"});
						angular.element('#sf-fixed-left-menu').css({'top': "164px"});
					}
					scroll_time = $timeout(function(){
						scrollposition = body[0].scrollTop;
						console.log(scrollposition);
					},60);
				});
			}
		}		
	}]);
}());
