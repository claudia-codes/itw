module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      compile: {
        files: {
          'style/css/main.css' : 'style/scss/main.scss'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
}