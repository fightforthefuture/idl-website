function twitterModal() {
    var url = 'https://mothership-js.fightforthefuture.org/connect/twitter?tag=idl';
    var properties = 'width=600,height=500,toolbar=no,status=no,menubar=no';

    window.open(url, 'idl_connect', properties);
}

(function (doc, win) {
    "use strict";

    function triggerComponents() {
        win.components = win.components || {};
        var
            i = 0,
            components = doc.getElementsByTagName('body')[0].dataset.components;

        if (components !== undefined) {
            components = components.split(' ');
            i = components.length;

            while (i--) {
                if (components[i] !== '' && win.components[components[i]] !== undefined) {
                    win.components[components[i]](doc, win);
                }
            }
        }
    }

    triggerComponents();

    var volunteer = doc.querySelector('input[name="volunteer"]');
    if (volunteer) {
        volunteer.addEventListener('click', function(e) {
            var commentBox = doc.querySelector("section.comment");
            if (e.target.checked) {
                commentBox.classList.remove('hidden');
            } else {
                commentBox.classList.add('hidden');
            }
        });
    }

})(document, window);

/*
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

*/