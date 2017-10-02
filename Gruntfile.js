/**
 * Gruntfile.js
 */
module.exports = function(grunt) {

    var jsfiles = {
        'js/min/js_general.js': [
            '_js/jquery.1.11.3.min.js',
            '_js/scripts.js',
            '_js/fresco.js',
            '_js/photoswipe/photoswipe.min.js',
            '_js/photoswipe/photoswipe.default.min.js'            
        ]
    }

    var cssfiles = {                   
        'css/min/style.min.css' : [
            '_less/style.less',
            '_less/fresco.css',
            '_less/bootstrap/bootstrap.css',
            '_less/bootstrap/bootstrap-theme.css',
            'css/font-awesome-4.4.0/css/font-awesome.css',            
            '_js/photoswipe/photoswipe.css',
            '_js/photoswipe/default-skin/default-skin.css'
            ]
          

                            

    }

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
         cleanjs: "js/min/*",
         cleancss: "css/min/*"
        },
        uglify: {
            options: {
                preserveComments: false,
                compress        : {},
                mangle          : true,
                beautify        : {
                    beautify: false,
                    ascii_only: true,
                    quote_keys: true
                }
            },
            my_target: {
                files: jsfiles                
            }
        },
        less: {
            default: {
                options: {
                    paths: ["css/less"],
                    cleancss:true,
                    compress:true
                },
                files: cssfiles
            }
        },
        watch: {
            jschange: {
                files: [jsfiles['js/min/js_general.js']
                   
                    ],                
                tasks: ['clean:cleanjs','uglify'],
                options: {
                    interrupt: true
                }
            },
            csschange: {
                files: [cssfiles['css/min/style.min.css']
                   
                ],                
                tasks: ['clean:cleancss','less'],
                options: {
                    interrupt: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['clean', 'uglify','less']);
    grunt.registerTask('watchjscss', ['watch:jschange','watch:csschange']);
};