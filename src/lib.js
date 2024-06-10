import {isDefined} from "npm-jquery-plugin-helpers/src/helpers";
export const LIBRARY_FUNCTION_NAME = function (options = {}, ...args) {
    let results = [];

    // noinspection JSUnusedGlobalSymbols
    const methods = {
        option: function (results, data, args) {
            if (typeof data.settings === 'undefined') {
                data.settings = {};
            }
            if (!isDefined(args) || args.length < 1 || args.length > 2) {
                console.error('Arguments number not valid');
            }
            else if (args.length === 1) {
                results.push(data.settings[args[0]]);
            }
            else if (args.length === 2) {
                data.settings[args[0]] = args[1];
                updateData(data);
            }
            return results;
        },
        destroy: function (results, data) {
            //TODO: remove elements created by the plugin
            //...
            $('[data-LIBRARY_FUNCTION_NAME-id="'+data.idSuffix+'"]').data('LIBRARY_FUNCTION_NAME', null);
            return results;
        },
    };

    $(this).each(function() {
        let data = $(this).data('LIBRARY_FUNCTION_NAME');
        let idSuffix = Math.floor((Math.random() * 1000) + 100);
        if (!data) {
            let settings = $.extend(
                {

                },
                options
            );
            let $parent = $(this);

            data = {
                idSuffix: idSuffix,
                settings: settings
            };
            //save the settings of the element
            $(this).data('LIBRARY_FUNCTION_NAME', data);
            $(this).attr('data-LIBRARY_FUNCTION_NAME-id', idSuffix);
        }
        else{
            if (typeof options === 'string' && typeof methods[options] !== 'undefined') {
                results = methods[options](results, data, [...args]);
            }
        }
    });
    return results.length > 1 ? results : (results.length === 0 ? null : results[0]);
}

const updateData = (data) => {
    let $element = $('[data-LIBRARY_FUNCTION_NAME-id="'+data.idSuffix+'"]');
    $element.data('LIBRARY_FUNCTION_NAME', data);
}