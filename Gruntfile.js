/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "www/assets/css/style.css": "www/assets/css/main.less" // destination file and source file
        }
      }
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['www/<%= pkg.name %>.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        devel: true,
        globals: {
          // iScroll Globals
          "IScroll": true,
          //jQuery Globals
          "jQuery": true,
          "$": true,
          //GSAP Globals
          "TimelineLite" : false,
          "TimelineMax" : false,
          "TweenLite" : false,
          "TweenMax" : false,
          "Back" : false,
          "Bounce" : false,
          "Circ" : false,
          "Cubic" : false,
          "Ease" : false,
          "EaseLookup" : false,
          "Elastic" : false,
          "Expo" : false,
          "Linear" : false,
          "Power0" : false,
          "Power1" : false,
          "Power2" : false,
          "Power3" : false,
          "Power4" : false,
          "Quad" : false,
          "Quart" : false,
          "Quint" : false,
          "RoughEase" : false,
          "Sine" : false,
          "SlowMo" : false,
          "SteppedEase" : false,
          "Strong" : false,
          "Draggable" : false,
          "SplitText" : false,
          "VelocityTracker" : false, 
          "CSSPlugin" : false,
          "ThrowPropsPlugin" : false, 
          "BezierPlugin" : false
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      scripts: {
        src: ['www/assets/scripts/**/*.js', 'www/assets/scripts/**/**/*.js', 'www/assets/scripts/*.js']
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      styles: {
        files: ['www/assets/css/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      },
      scripts: {
        files: ['www/assets/scripts/**/*.js', 'www/assets/scripts/**/**/*.js', 'www/assets/scripts/*.js'],
        tasks: ['jshint']
      },
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
  grunt.registerTask('test', ['jshint', 'qunit']);
};
