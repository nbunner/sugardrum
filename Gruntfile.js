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

        // 'httpdocs/css/min/css_general_2.min.css' : [
        //     'httpdocs/css/less/style.less',
        //     'httpdocs/css/less/forms.less',
        //     'httpdocs/css/less/commerce.less'],

                            

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
                    // .concat(jsfiles['httpdocs/js/min/js_general_1.js'],
                    //     jsfiles['httpdocs/js/min/js_general_2.js'],
                    //     jsfiles['httpdocs/js/min/js_general_3.js'],
                    //     jsfiles['httpdocs/js/min/js_mobile_general.js'],
                    //     jsfiles['httpdocs/js/min/js_mobile_jquery.js'],
                    //     jsfiles['httpdocs/js/min/js_mobile_accommodationtemplate.js'],
                    //     jsfiles['httpdocs/js/min/js_mobilesearchtemplate.js'],
                    //     jsfiles['httpdocs/js/min/js_mobilehometemplate.js'],
                    //     jsfiles['httpdocs/js/min/js_mobile_location.js'],
                    //     jsfiles['httpdocs/js/min/js_accommodationtemplate.js'],
                    //     jsfiles['httpdocs/js/min/js_submitreviewtemplate.js'],
                    //     jsfiles['httpdocs/js/min/js_resorttemplate.js'],                        
                    //     jsfiles['httpdocs/js/min/js_beachtemplate.js'],                        
                    //     jsfiles['httpdocs/js/min/js_hotellandertemplate.js'],                        
                    //     jsfiles['httpdocs/js/min/js_maptemplate.js'],                        
                    //     jsfiles['httpdocs/js/min/js_locationtemplate.js'],                        
                    //     jsfiles['httpdocs/js/min/js_cruiseline.js'],                        
                    //     jsfiles['httpdocs/js/min/js_hometemplate.js'],                        
                    //     jsfiles['httpdocs/js/min/js_addphotostemplate.js'],                        
                    //     jsfiles['httpdocs/js/min/js_adminviewreviewtemplate.js'],                        
                    //     jsfiles['httpdocs/js/min/js_searchtemplate.js'],                        
                    //     jsfiles['httpdocs/js/min/js_popundertemplate.js'],                        
                    //     jsfiles['httpdocs/js/min/js_submitmanagementresponsetemplate.js'],                        
                    //     jsfiles['httpdocs/js/min/js_affiliatewidgettemplate.js']                        
                    //     )
                    ],                
                tasks: ['clean:cleanjs','uglify'],
                options: {
                    interrupt: true
                }
            },
            csschange: {
                files: [cssfiles['css/min/style.min.css']
                    // .concat(cssfiles['httpdocs/css/min/css_general_2.min.css'],
                    //     cssfiles['httpdocs/css/min/css_general_3.min.css'],
                    //     cssfiles['httpdocs/css/min/css_mobile_general.min.css'],
                    //     cssfiles['httpdocs/css/min/css_mobile_general_2.min.css'],
                    //     cssfiles['httpdocs/css/min/css_submitreviewtemplate.min.css'],
                    //     cssfiles['httpdocs/css/min/css_searchtemplate.min.css'],
                    //     cssfiles['httpdocs/css/min/css_affiliatewidgettemplate_holidayweather.min.css'],
                    //     cssfiles['httpdocs/css/min/css_affiliatewidgettemplate_virtualtourist.min.css'],
                    //     cssfiles['httpdocs/css/min/css_affiliatewidgettemplate_worldweatheronline.min.css']
                    // )
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