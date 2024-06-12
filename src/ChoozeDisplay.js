export const ChoozeDisplay = function (options = {}) {

    const defaultOptions = {
        triggerControls: []
    };
    let settings = $.extend(
        defaultOptions,
        options
    );

    function getConditionsFromAttrs(element) {
        const conditions = [];
        $(element).find('[data-condition]').each(function() {
            const conditionType = $(this).data('condition');
            const conditionId = $(this).attr('id') || $(this).attr('name');
            const conditionState = $(this).data('state') || $(this).val();

            if (conditionType === 'checkbox' || conditionType === 'radio') {
                conditions.push({
                    type: conditionType,
                    id: conditionId,
                    state: conditionState
                });
            } else if (conditionType === 'select') {
                conditions.push({
                    type: conditionType,
                    id: conditionId,
                    value: conditionState
                });
            }
        });
        return conditions;
    }

    function checkCondition(condition) {
        if (condition.type === 'checkbox') {
            const checkbox = document.getElementById(condition.id);
            return checkbox && ((condition.state === 'checked' && checkbox.checked) || (condition.state === 'unchecked' && !checkbox.checked));
        } else if (condition.type === 'radio') {
            const radio = document.querySelector(`input[name="${condition.name}"][value="${condition.value}"]`);
            return radio && radio.checked;
        } else if (condition.type === 'select') {
            const select = document.getElementById(condition.id);
            return select && select.value === condition.value;
        }
        return false;
    }

    function evaluateConditions(conditions) {
        return conditions.every(checkCondition);
    }

    function handleCases() {
        let matched = false;
        settings.triggerControls.forEach(entry => {
            const targetDiv = $(entry.target);
            if (evaluateConditions(entry.conditions)) {
                targetDiv.show();
                matched = true;
            } else {
                targetDiv.hide();
            }
        });
    }

    this.each(function() {
        const element = $(this);
        const triggerControls = getConditionsFromAttrs(this);

        if (triggerControls.length) {
            settings.triggerControls = settings.triggerControls.concat({
                conditions: triggerControls,
                action: element.data('action') || 'show',
                target: element.data('target')
            });
        }

        // Bind event listener to input changes
        element.on('change', 'input, select', () => {
            handleCases();
        });

        // Initial check
        handleCases();
    });

    return this;
}
