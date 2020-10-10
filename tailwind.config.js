module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: ['./pages/**/*.js', './components/**/*.component.jsx'],
    theme: {
        colors: {
            primary: 'var(--blendForeground)',
            primaryText: 'var(--color-primary-text)',
            secondary: 'var(--color-secondary)',
            accentLight: 'var(--color-accent-light)',
            accentDark: 'var(--color-accent-dark)',
            white: '#fff',
            black: '#000',
            greyLight: '#6f738c',
            greyDark: '#4D5061',

            sectionBorderColor: 'var(--cardBorderColor)',
            sectionBackgroundColor: '#fff',
            backgroundColor: 'var(--backgroundColor)',

            headerBackgroundColor: '#fff',
            footerBackgroundColor: 'var(--footerBackgroundColor)',
        },
        extend: {},
    },
    variants: {},
    plugins: [],
};
