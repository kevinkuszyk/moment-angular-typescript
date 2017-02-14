import * as moment from "moment";

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