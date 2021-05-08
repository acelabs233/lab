var sass = require('node-sass');

module.exports = function(grunt){
    //config
    grunt.initConfig({
        concat: {
            js:{
                src:'./src/js/*.js',
                dest:'./build/script.js'
            },
            css: {
                src:'./src/css/*.css',
                dest:'./build/style.css'
            }
        },
        uglify: {
            build:{
                files:[{
                    src:'build/script.js',
                    dest:'build/script.min.js'
                }]
            }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMaps:true
            },
            build:{
                files:[{
                    src:'src/css/style.scss',
                    dest:'src/css/styles.css'
                }]
            }
        },
        cssmin: {
            target:{
                files: [{
                    expand: true,
                    cwd: 'build',
                    src:['*.css','*.min.css'],
                    dest:'build',
                    ext:'.min.css'
                }]
            }
        }

    });
    //load
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //register
    
    grunt.registerTask('concat-js',['concat:js']);
    grunt.registerTask('concat-css',['concat:css']);
    grunt.registerTask('all',['concat:js','concat:css']);
}