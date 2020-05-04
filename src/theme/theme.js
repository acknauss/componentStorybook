
export const theme = {
    // Primaries
    navy: '#1c2431',
    green: '#1c7337',
    greenMuted: '#ace7bf',
    greenBackground: '#f7fdf0',
    BrightBlue: '#369cc8',
    BrightBlueMuted: '#ade3fb',
    BrightBlueBackground: '#f7fcff',
    white: '#ffffff',
    smoke: '#eeeeee',
    lightGray: '#f4f4f4',
    mediumGray: '#b8b8b8',
    gray: '#999999',
    darkGray: '#262626',
    red: '#f65f5f',
    redMuted: '#fccfcf',
    redBackground: '#fffafa',
    borderGray: '#dddddd',
    purple: '#6d4092',

    // Typography
    baseTextColor: '#262626',
    helperTextColor: '#999999',
    reverseTextColor: '#ffffff',
    alertRed: '#f65f5f',

    // Role variables
    primaryCta: '#00b437',
    inlineLink: '#369cc8',
    blueLink: '#369cc8',
    darkBlueLink: '#0177aa',
    darkerBlueLink: '#0288c2',
    alert: '#f65f5f',
    success: '#00b437',
    info: '#369cc8',
    overlay: '#eeeeeecc',
    callout: '#6d4092',

    // States
    darkGreen: '#0ea83d',
    darkerGreen: '#007e26',
};

export const hoverTheme = {
    primary: {
        green: '#0ea83d',
        BrightBlue: '#0177aa',
    },
    secondary: {
        green: '#00b437',
        BrightBlue: '#369cc8',
    },
};

export const getTheme = (hierarchy, color) => {
    if (!hierarchy) return;
    return hoverTheme[hierarchy][color] ? hoverTheme[hierarchy][color] : '';
};