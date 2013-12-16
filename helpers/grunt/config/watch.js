module.exports = {

  livereload: {
    files : [
      '<%= app.paths.dist %>/**/*.{html,css,js}'
    ],
    options: {
      livereload: '<%= connect.livereload.options.livereload %>'
    }    
  },

  //---

  index: {
    files : ['<%= app.paths.project %>/index.html'],
    tasks : [
      'template:index_dev', 
      'copy:index'
    ]
  },

  require_template: {
    files : ['<%= app.paths.project %>/scripts/main.template.js'],
    tasks : [
      'template:js_dev', 
      'copy:scripts'
    ]
  },

  views: {
    files : ['<%= app.paths.project %>/views/**/*.html'],
    tasks : [
      'template:views', 
      'copy:views'
    ]
  },

  scripts: {
    files : ['<%= app.paths.project %>/scripts/**'],
    tasks : [
      'copy:js', 
      'copy:scripts'
    ]
  },

  styles: {
    files : ['<%= app.paths.project %>/styles/**'],
    tasks : [ 
      'less:dev',
      'copy:styles'
    ]
  }

};