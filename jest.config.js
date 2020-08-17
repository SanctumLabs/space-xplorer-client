module.exports = {
    testEnvironment: "jest-environment-jsdom-fourteen",
    displayName: {
        name: 'SpaceXplorerClient',
        color: 'yellow',
    },
    roots: [
        "<rootDir>/src"
    ],
    moduleFileExtensions: [
        "web.js",
        "js",
        "web.ts",
        "ts",
        "web.tsx",
        "tsx",
        "json",
        "web.jsx",
        "jsx",
        "node"],
    testMatch: [
        '<rootDir>/__tests__/**/*.{js,ts,tsx,jsx,mjs}',
        '<rootDir>/?(*.)(spec|test).{js,jsx,ts,tsx,mjs}',
        '<rootDir>/src/**/__tests__/**/*.{js,ts,tsx,jsx,mjs}',
        '<rootDir>/src/**/?(*.)(spec|test).{js,ts,tsx,jsx,mjs}',
    ],
    setupFiles: ['react-app-polyfill/jsdom'],
    setupFilesAfterEnv: ['<rootDir>/scripts/setup-tests.ts'],
    collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!**/node_modules/**'],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/src/app.ts',
        '<rootDir>/src/types',
        '<rootDir>/src/config.ts',
        '<rootDir>/src/server.ts',
        '<rootDir>/src/database/index.ts',
        '<rootDir>/src/database/repository/([A-Za-z]+)/([A-Za-z]*Model.ts)',
        '<rootDir>/src/core/logger.ts',
        '<rootDir>/src/core/ApiError.ts',
        '<rootDir>/src/core/ApiResponse.ts',
        '<rootDir>/src/core/jwt/mock.ts',
        '<rootDir>/src/core/jwt/exceptions.ts',
        '<rootDir>/src/security/([A-Za-z]+)/mock.ts',
        '<rootDir>/src/routes/([A-Za-z]+)/mock.ts',
        '<rootDir>/src/routes/auth/([A-Za-z]+)/mock.ts',
        '<rootDir>/src/routes/([A-Za-z]+)/schema.ts',
        '<rootDir>/src/routes/([A-Za-z]+)/([A-Za-z]+)/schema.ts',
        '<rootDir>/src/routes/index.ts',
        '<rootDir>/src/utils/',
        '<rootDir>/src/security/schema.ts',
    ],
    // TODO: setup coverageThreshold once bug on testing has been fixed
    // coverageThreshold: {
    //   global: {
    //     lines: 90,
    //     statements: 90,
    //   },
    // },
    transform: {
        '^.+\\.ts$': 'ts-jest',
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
        "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
    },
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
        "^.+\\.module\\.(css|sass|scss)$"
    ],
    moduleNameMapper: {
        "^react-native$": "react-native-web",
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
        "^@storage/(.*)$" : "<rootDir>/src/storage/*",
        "^@cache": "<rootDir>/src/storage/cache/cache.ts",
        "^@localStorage": "<rootDir>/src/storage/local/local.ts",
        '^@gqlClient': '<rootDir>/api/gql/GqlClient.ts',
        '^@restClient': '<rootDir>/api/rest/RestClient.ts',
        '^@schemas': '<rootDir>/api/gql/schemas.ts',
        '^@components/(.*)$': '<rootDir>/components/$1',
        '^@styles': '<rootDir>/styles.js',
        '^@logger': '<rootDir>/src/core/logger.ts',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
        'app-request': '<rootDir>/src/types/app-request.d.ts',
    },
    watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname"
    ]
};