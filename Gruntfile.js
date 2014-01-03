'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: {
					'src/css/style.css' : 'dev/css/app.scss'
	      }
			}
		},

		haml: {
			dist: {
				files: {
					'src/index.html' : 'dev/index.haml',
					'src/main.html'  : 'dev/main.haml',
					'src/page1.html' : 'dev/page1.haml',
					'src/page2.html' : 'dev/page2.haml',
					'src/page3.html' : 'dev/page3.haml'
				}
			}
		},

		coffee: {
			dist: {
				files: [{
					src: ['dev/js/*.coffee'],
					dest: 'src/js/app.js'
				}]
		  }
		},

		uglify: {
			js: {
				files: {
					'src/js/app.min.js' : 'src/js/app.js'
				}
			}
		},

		watch: {
			sass: {
				files: 'dev/css/*.scss',
				tasks: ['sass']
			},

			haml: {
				files: 'dev/*.haml',
				tasks: ['haml']
			},

			scripts: {
				files: 'dev/js/*.coffee',
				tasks: ['coffee', 'uglify:js']
			},

			options: {
				livereload: true
			}
		},

		connect: {
      server: {
        options: {
          port: 8000,
          base: './src'
        }
      }
    }

	});

	grunt.loadNpmTasks('grunt-contrib-haml');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('dev', ['connect', 'watch']);

};