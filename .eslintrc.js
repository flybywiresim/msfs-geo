module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        "@flybywiresim/eslint-config"
    ],
    rules: {
        "no-undef": "off",
        "import/no-unresolved": "off",
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": "warn"
    }
};
