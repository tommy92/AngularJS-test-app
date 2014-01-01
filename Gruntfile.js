'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: {
					'src/css/style.css' : 'dev/css/style.scss'
	      }
			}
		},

		haml: {
			dist: {
				files: {
					'src/index.html' : 'dev/index.haml'
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
				tasks: ['coffee']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-haml');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('dev', ['watch']);
};