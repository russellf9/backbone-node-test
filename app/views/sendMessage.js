define([
    'jquery',
    'lodash',
    'backbone',
    'vm',
    'events',
    'text!templates/modules/sendMessage.html'
], function(_, $, Backbone, Vm, Events, template) {
    var SendMessageView = Backbone.View.extend({
        el: '.content',

        initialize: function() {
        },
        render: function() {
            this.$el.html(template);
            // note: could re-order the injections and use the `$` alias
            jQuery('#sendButton').on('click', function(event) {
                jQuery('#result').html("You sent '" + jQuery('#messageText').val() + "' to this view");
            });
        }
    });

    return SendMessageView;
});
