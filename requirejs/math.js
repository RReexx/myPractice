define([
    'require',
], function(require) {
    'use strict';
    var add = function (...x) {
        return x.reduce((m, n) => m + n);
    };
    return {
        add:add
    }
});