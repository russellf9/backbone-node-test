define([
    'lodash',
    'backbone',
    'jquery',
    'text!templates/modules/daysOfWeek.html'
], function( _, Backbone, $, template) {
    var DaysOfWeekView = Backbone.View.extend({
        el: '.content',

        initialize : function () {

        this.daysOfTheWeek = ['monday','tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

        },

        nextSevenDays : function () {
        	//Task 3 - Complete this function efficiently

            var date = new Date();
            var index = date.getDay();

            // create two arrays
            var firstArray = (index === 0) ? this.daysOfTheWeek : this.daysOfTheWeek.slice(index -1);
            var secondArray = (index === 0) ? [] : this.daysOfTheWeek.slice(0, index -1);
            // and join
            var dayArray = firstArray.concat(secondArray);

            // use lodash to add to a string
            var sevenDays = '';

            _.forEach(dayArray, function(day, key) {
                // make the initial letter CAP
                day = day.substr(0,1).toUpperCase().concat(day.substr(1));
                sevenDays = sevenDays +  day;
                // add some proper punctuation style
                if(key < 5) {
                    sevenDays = sevenDays + ", ";
                } else if(key === 5) {
                    sevenDays = sevenDays + " and ";
                }
                else {
                    sevenDays = sevenDays + ".";
                }
            });

            return sevenDays;
        },

        render: function () {
            $(this.el).html(template);
            $('#days').html(this.nextSevenDays());
        }
    });

    return DaysOfWeekView;
});
