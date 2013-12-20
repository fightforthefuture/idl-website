$(function() {
    var $form = $('form.action_form'),
        $button = $form.find('#gotime');

    $button.on('click', function(e) {
        // IE8 & 9.
        if (!$.support.cors) {
            var $input = $('<input type="hidden" name="redirect" />');
            $input.val('http://internetdefenseleague.org/confirm');
            return $form.append($input);
        }

        // Modern browsers.
        $.ajax({
            data: $form.serialize(),
            success: function(res) {
                location.href = '/confirm';
            },
            type: 'post',
            url: $form.attr('action')
        });

        e.preventDefault();
    })
});