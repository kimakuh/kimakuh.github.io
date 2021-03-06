/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function () {

        var $window = $(window),
            $body = $('body');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function () {
            window.setTimeout(function () {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Touch?
        if (skel.vars.mobile)
            $body.addClass('is-touch');

        // Forms.
        var $form = $('form');

        // Auto-resizing textareas.
        $form.find('textarea').each(function () {

            var $this = $(this),
                $wrapper = $('<div class="textarea-wrapper"></div>'),
                $submits = $this.find('input[type="submit"]');

            $this
                .wrap($wrapper)
                .attr('rows', 1)
                .css('overflow', 'hidden')
                .css('resize', 'none')
                .on('keydown', function (event) {

                    if (event.keyCode == 13 &&
                        event.ctrlKey) {

                        event.preventDefault();
                        event.stopPropagation();

                        $(this).blur();

                    }

                })
                .on('blur focus', function () {
                    $this.val($.trim($this.val()));
                })
                .on('input blur focus --init', function () {

                    $wrapper
                        .css('height', $this.height());

                    $this
                        .css('height', 'auto')
                        .css('height', $this.prop('scrollHeight') + 'px');

                })
                .on('keyup', function (event) {

                    if (event.keyCode == 9)
                        $this
                        .select();

                })
                .triggerHandler('--init');

            // Fix.
            if (skel.vars.browser == 'ie' ||
                skel.vars.mobile)
                $this
                .css('max-height', '10em')
                .css('overflow-y', 'auto');

        });

        // Fix: Placeholder polyfill.
        $form.placeholder();

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function () {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });
    });

})(jQuery);
