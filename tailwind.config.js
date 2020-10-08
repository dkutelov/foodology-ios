module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: ['./pages/**/*.js', './components/**/*.component.jsx'],
    theme: {
        colors: {
            primary: 'var(--color-primary)',
            primaryText: 'var(--color-primary-text)',
            secondary: 'var(--color-secondary)',
        },
        extend: {},
    },
    variants: {},
    plugins: [],
};
