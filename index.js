hexo.extend.tag.register('colorblock', function(args){
	var config = hexo.config.color_block || {};
	config.width = config.width || 10;
	var color = parseInt(args[0]);
	var width = parseInt(args[1]) || config.width;
	return '<svg width="'
		+ width +'" height="'
		+ width +'"><rect width="'
		+ width + '" height="'
		+ width + '" fill="'
		+ color + '"/></svg>&nbsp;'
		+color;
  });