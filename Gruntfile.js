module.exports = function(grunt) {

  grunt.initConfig({
		less : {
			dist : {
				files : {
					'css/main.css' : 'css/main.less'
				}
			}
		},
		watch : {
			css : {
				files : '**/*.less',
				tasks : ['less']
			}
		},
		connect: {
			server : {
				options : {
					port : 9090,
					keepalive : true
				}
			},
			keepalive : true
		}
	});
  
  grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less', 'watch']);
};