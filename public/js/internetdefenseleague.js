$(function() {
    var $form = $('form.action_form'),
        $button = $form.find('#gotime');

    $button.on('click', function(e) {
        e.preventDefault();

        var data = $form.serialize();

        $.ajax({
            success: function(res) {
                location.href = '/confirm';
            },
            data: data,
            type: 'post',
            url: $form.attr('action')
        });
    })
});