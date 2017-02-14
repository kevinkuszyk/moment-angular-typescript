/// <reference path="../node_modules/moment/moment.d.ts" />
var Demo;
(function (Demo) {
    var MomentController = (function () {
        function MomentController() {
            this.theMoment = moment();
            console.dir(this.theMoment);
        }
        return MomentController;
    }());
    angular.module("app").controller("momentController", MomentController);
})(Demo || (Demo = {}));
