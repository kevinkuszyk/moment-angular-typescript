import * as moment from "moment";
import * as angular from "angular";

module Demo {
    class MomentController {
        theMoment: moment.Moment;

        constructor () {
            this.theMoment = moment();
            console.dir(this.theMoment);
        }
    }

    angular.module("app").controller("momentController", MomentController);
}