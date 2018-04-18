hexo.extend.tag.register('colorblock', function(args){
	var config = hexo.config.colorblock || {};
	config.width = config.width || 10;
	config.height = config.height || config.width;
	var color = args[0];
	var width = parseInt(args[1]) || config.width;
	var height = parseInt(args[2]) ||(width || config.height);
	return '<svg width="'
		+ width +'" height="'
		+ height +'"><rect width="'
		+ width + '" height="'
		+ height + '" fill="'
		+ color + '"/></svg>&nbsp;'
		+color;
  });