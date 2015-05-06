define([
    'lodash',
    'backbone',
    'jquery',
    'text!templates/modules/calculate.html'
], function(_, Backbone, $, template) {
    var CalculateView = Backbone.View.extend({
        el: '.content',
        events : {'click #sendButton' : 'renderResults'},
        dividend : 5,

        calculate : function (dividend)
        {
            // need the `inputNumber`
            var divisor =  $('#inputNumber').val();

            return dividend / divisor;
        },

        renderResults: function () {
            console.log('calculate::renderResults');
        	$('#result').html('The answer is ' + this.calculate(this.dividend));
        },

        render: function () {

            $(this.el).html(template);

            $('.dividend-value').html(this.dividend);
        }
    });

    return CalculateView;
});
