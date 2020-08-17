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
        '^@app': '<rootDir>/src/app.ts',
        '^@config': '<rootDir>/src/config.ts',
        '^@database': '<rootDir>/src/database',
        '^@database/(.*)$': '<rootDir>/src/database/$1',
        '^@repository/(.*)$': '<rootDir>/src/database/repository/$1',
        '^@core/(.*)$': '<rootDir>/src/core/$1',
        '^@jwt': '<rootDir>/src/core/jwt/JWT.ts',
        '^@logger': '<rootDir>/src/core/logger.ts',
        '^@routes': '<rootDir>/src/routes/index.ts',
        '^@security/(.*)$': '<rootDir>/src/security/$1',
        '^@authentication/(.*)$': '<rootDir>/src/security/authentication/$1',
        '^@authorization/(.*)$': '<rootDir>/src/security/authorization/$1',
        '^@authUtils': '<rootDir>/src/security/authUtils/index.ts',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
        'app-request': '<rootDir>/src/types/app-request.d.ts',
    },
    watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname"
    ]
};