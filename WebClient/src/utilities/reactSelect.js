import key from '../i18n/key';
export function reactSelectCustomStyles(isValid) {
    let borderColor = isValid ? '1px solid #9b9fa3' : '1px solid #f86c6b';
    let borderColorFocused = isValid ? '1px solid #8ad4ee' : '1px solid #f86c6b';
    let borderHoverColor = isValid ? '0 0 0 0.2rem rgba(32, 168, 216, 0.25)' : '0 0 0 0.2rem rgba(248, 108, 107, 0.25)';
    return {
        control: (base, state) => ({
            ...base,
            minHeight: '35px',
            '&:hover': {},
            border: state.isFocused ? borderColorFocused : borderColor,
            boxShadow: state.isFocused ? borderHoverColor : 0,
        })
    }
}
export function reactSelectFormatOptions(fieldInput, model, t) {
    if (!fieldInput.SelectConfig) { return false; }
    if (fieldInput.Name === 'Status') {
        fieldInput.SelectConfig.options = [];
        fieldInput.SelectConfig.options.push(
            { value: 0, label: t(key.common.InActive) },
            { value: 1, label: t(key.common.Active) }
        );
    }
    else {
        if (!fieldInput.SelectConfig.options) { return false; }
    }
    return true;
}
export function reactSelectInputChange(text, action, callback, self) {
    if (action.action !== "input-blur" && action.action !== "menu-close" && text.length >= 1) {
        if (self.timeout) clearTimeout(self.timeout);
        self.timeout = setTimeout(() => {
            callback(text);
        }, 300);
    }
}
export function reactSelectGetCurrentValue(options, value) {
    var option = options.find(option => option.value === value);
    if (option) {
        return option;
    }
    else {
        return null;
    }
}

export function reactSelectCustomFilter(option, searchText) {
    if(searchText !==''){
        if (option.data.label.toLowerCase().includes(searchText.toLowerCase()) ) {
            return true;
        } else {
            return false;
        }
    }
    return true;
    
}
