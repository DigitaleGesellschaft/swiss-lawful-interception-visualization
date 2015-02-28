function Tracker(params){
	var self = this;
	self.year = null;

	function init(){
		return Promise.resolve();
	}

	function controller(){
		function track(...segments){
			var $img = $('<img>').attr('id', 'tracker').attr('src', '//piwik.xiala.net/piwik.php?idsite=2&rec=1&action_name='+ segments.join('-'));
			$('#tracker').remove();
			$('body').append($img);
		}
		function paramsChanged(state){
			if(self.year !== state.year){
				track('SLIV', state.year, state.locale);
				self.year = state.year;
			}
		}
		if(params.env === 'prod'){
			params.emitter.on('pathChanged', paramsChanged);
			$('#slir a').click(()=>{
				track('SLIV', 'openSLIR');
			});
		}
	}

	init.call(this)
		.then(controller.bind(this))
		.catch((err) => {
			console.error(err);
		});
}

module.exports = Tracker;