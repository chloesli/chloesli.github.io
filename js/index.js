new fullpage('#fullpage', {
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    sectionsColor: ['white', 'white'],
    menu: '#menu',
    lockAnchors: false,
    anchors:['page1', 'page2','page3','page4'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'Projects'],  showActiveTooltip: false,
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
