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
            $('#sendButton').on('click',function(event)
            {
                $('#result').html("You sent '"+ $('#messageText').val() + "' to this view");
            });
        }
    });

    return SendMessageView;
});
