function Params(Emitter, _location, _window){
	var self = this;
	self.emitter = new Emitter();
	self.location = _location;
	self.window = _window;

	function getEnv(host){
		if (host.indexOf('digitale-gesellschaft.ch') !== -1){
			return 'prod';
		}
		if(host.indexOf('localhost') !== -1){
			return 'dev';
		}
		return 'staging';
	}

	self.window.onpopstate = function onPopstate(ev){
		if(!ev.state){
			return;
		}
		self.update(ev.state, false);
		self.emitter.emit('pathChanged', ev.state);
		self.window.setTimeout(function(){
			self.window.scrollTo(0, ev.state.scrollY);
		}, 50);
	};

	self.init = function init(defaultLocale){
		// domain.x/#lang/#year/#canton
	    // de
	    // de/2014
	    // de/2014/gr
	    // 2014
	    // 2014/gr
		var path = self.location.pathname;
		var host = self.location.hostname;
		var regex = /^\/(sliv\/)?([a-z]{2}\/?)?(\d{4}\/?)?(\/[a-z]{2}\/?)?$/;
		var devLocale = self.location.search.match(/locale=(.*)$/);
		var matches = path.match(regex);
		var prefix, locale, year, canton;
		prefix = matches[1];
		prefix = prefix ? prefix.replace(/\//g, '') : undefined;
		locale = matches[2];
		locale = locale ? locale.replace(/\//g, '') : defaultLocale;
		year = matches[3];
		year = year ? +year.replace(/\//g, '') : undefined;
		canton = matches[4];
		canton = canton ? canton.replace(/\//g, '').toLowerCase() : undefined;

		locale = devLocale ? devLocale[1] : locale;

		self.prefix = prefix;
		self.year = year;
		self.canton = canton;
		self.locale = locale;
		self.env = getEnv(host);
	};

	self.update = function update(values, newState = true){
		if(values.year){
			self.year = values.year;
		}
		if(values.canton){
			self.canton = values.canton;
		}
		if(values.locale){
			self.locale = values.locale;
		}
		if(newState === true && self.env !== 'dev'){
			values.scrollY = self.window.scrollY;
			var path = [self.prefix, self.locale, self.year, self.canton].filter(function(v){return !!v;}).join('/');
			history.pushState(values, '', '/'+path);
			self.emitter.emit('pathChanged', {prefix: self.prefix, locale: self.locale, year: self.year, canton: self.canton, env: self.env});
		}
	};
}

module.exports = Params;