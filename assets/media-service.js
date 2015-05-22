angular.module('matchMedia', []) 
.service('testMedia',["$rootScope", function testMedia($rootScope) {
  'use strict';

  var defaultRules = {
    lg : '(min-width: 1200px)',
    md : '(min-width: 992px) and (max-width: 1199px)',
    sm : '(min-width: 768px) and (max-width: 991px)',
    xs : '(min-width: 361px) and (max-width: 767px)',
    xxs : '(max-width: 360px)',
    portrait         : '( orientation: portrait)  ',
    landscape        : '( orientation: landscape) ',
     
    vcinema          : '( min-aspect-ratio: 16/9 ) ',
    vlandscape       : '( min-aspect-ratio: 6/5  ) and ( max-aspect-ratio: 16/9 )',
    vsquare          : '( min-aspect-ratio: 5/6  ) and ( max-aspect-ratio: 6/5  ) ',
    vportrait        : '( min-aspect-ratio: 9/16 ) and ( max-aspect-ratio: 5/6  ) ',
    vcinemavertical  : '( max-aspect-ratio: 9/16 ) ',
    
  };
  
  var that = this;
  
  // Executes Angular $apply in a safe way
  var safeApply = function(fn, scope) {
    scope = scope || $rootScope;
    var phase = scope.$root.$$phase;
    if(phase === '$apply' || phase === '$digest') {
        if(fn && (typeof(fn) === 'function')) {
          fn();
        }
    } else {
       scope.$apply(fn);
    }
  };
  
  this.is = function (list) {
    var rules = this.rules || defaultRules;

    // validate that we're getting a string or array.
    if (typeof list !== 'string' && typeof list !== 'array') {
      throw new Error('screenSize requires array or comma-separated list');
    }

    // if it's a string, convert to array.
    if (typeof list === 'string') {
      list = list.split(/\s*,\s*/);
    }

    return list.some(function (size, index, arr) {
      if ( window.matchMedia(rules[size]).matches ) {
        return true;
      }
    });
  };

  // Returns the result of calling 'is' AND executes the 'callback' function with
  // the result of calling 'is' on window resize. The 'scope' parameter
  // is optional. If it's not passed in, '$rootScope' is used.
  this.on = function (list, callback, scope) {
    window.addEventListener('resize', function(event){
        safeApply(callback(that.is(list)), scope);
    });
    
    return that.is(list);
  };
}])
 
.directive('matchMedia', function ( testMedia ){
  return {
    restrict : 'A',
    link : function (scope, el, attrs){
      testMedia.on( 'lg', function (match){ if(match) el.addClass('lg'); else el.removeClass('lg');  });
      testMedia.on( 'md', function (match){ if(match) el.addClass('md'); else el.removeClass('md');  });
      testMedia.on( 'sm', function (match){ if(match) el.addClass('sm'); else el.removeClass('sm');  });
      testMedia.on( 'xs', function (match){ if(match) el.addClass('xs'); else el.removeClass('xs');  });
      testMedia.on( 'xxs', function (match){ if(match) el.addClass('xxs'); else el.removeClass('xxs');  });
      testMedia.on( 'portrait', function (match){ if(match) el.addClass('portrait'); else el.removeClass('portrait');  });
      testMedia.on( 'landscape', function (match){ if(match) el.addClass('landscape'); else el.removeClass('landscape');  });
      testMedia.on( 'vcinemavertical', function (match){ if(match) el.addClass('vcinemavertical'); else el.removeClass('vcinemavertical');  });
      testMedia.on( 'vportrait', function (match){ if(match) el.addClass('vportrait'); else el.removeClass('vportrait');  });
      testMedia.on( 'vsquare', function (match){ if(match) el.addClass('vsquare'); else el.removeClass('vsquare');  });
      testMedia.on( 'vlandscape', function (match){ if(match) el.addClass('vlandscape'); else el.removeClass('vlandscape');  });
      testMedia.on( 'vcinema', function (match){ if(match) el.addClass('vcinema'); else el.removeClass('vcinema');  });

      if( testMedia.is( 'lg' ) ) el.addClass('lg');
      else if( testMedia.is( 'md' ) ) el.addClass('md');
      else if( testMedia.is( 'sm' ) ) el.addClass('sm');
      else if( testMedia.is( 'xs' ) ) el.addClass('xs');
      else if( testMedia.is( 'xxs' ) ) el.addClass('xxs');
      
      if( testMedia.is( 'portrait' ) ) el.addClass('portrait');
      else if( testMedia.is( 'landscape' ) ) el.addClass('landscape');
 
      if( testMedia.is( 'vcinemavertical' ) ) el.addClass('vcinemavertical');
      else if( testMedia.is( 'vportrait' ) ) el.addClass('vportrait');
      else if( testMedia.is( 'vsquare' ) ) el.addClass('vsquare');
      else if( testMedia.is( 'vlandscape' ) ) el.addClass('vlandscape');
      else if( testMedia.is( 'vcinema' ) ) el.addClass('vcinema');

    }
  };
});
