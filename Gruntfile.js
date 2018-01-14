module.exports = function(grunt) {
  grunt.initConfig({
    mustache_render: {
      all: {
        files: [{
          data: "data.json", 
          template: "src/main.mustache",
          dest: "index.html"
        }]
      }
    },
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
			},
      template : {
        files : '**/*.mustache',
        tasks : ['mustache_render']
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
  grunt.loadNpmTasks('grunt-mustache-render');
  grunt.registerTask('default', ['less', 'watch', 'mustache_render']);
};