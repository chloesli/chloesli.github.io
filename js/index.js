new fullpage('#fullpage', {
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    sectionsColor: ['white', '#f7cac9', '#91A8d0', '#ADD8E6'],
    menu: '#menu',  
    lockAnchors: false,  
    anchors:['page1', 'page2','page3','page4'],  
    navigation: false,  
    navigationPosition: 'right',  
    navigationTooltips: ['firstSlide', 'secondSlide'],  showActiveTooltip: false,  
    slidesNavigation: true,  
    slidesNavPosition: 'bottom',

    lazyLoading: true,

    onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}

});

