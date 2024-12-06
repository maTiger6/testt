import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    ignores: ['coverage/']
  },
  ...compat
    .extends(
      'plugin:@angular-eslint/recommended',
      'plugin:@angular-eslint/template/process-inline-templates',
      'plugin:prettier/recommended'
    )
    .map((config) => ({
      ...config,
      files: ['**/*.ts']
    })),
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true
      }
    },

    rules: {
      '@angular-eslint/no-empty-lifecycle-method': 'error',
      'prefer-const': 'warn',
      'no-console': 'warn',
      semi: ['error', 'always'],
      'no-warning-comments': ['error', { 'terms': ['todo', 'fixme'], 'location': 'anywhere' }]
    }
  },
  ...compat
    .extends('plugin:@angular-eslint/template/recommended')
    .map((config) => ({
      ...config,
      files: ['**/*.html']
    })),
  {
    files: ['**/*.html'],
    rules: {
      'max-len': [
        'error',
        {
          code: 80
        }
      ]
    }
  }
];
