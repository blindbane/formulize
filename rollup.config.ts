import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import camelCase from 'lodash.camelcase';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import scss from 'rollup-plugin-scss';
import nodeResolve from 'rollup-plugin-node-resolve';

const pkg = require('./package.json');
const libraryName = 'formulize';

export default {
    input: `src/${libraryName}.ts`,
    output: [
        { file: pkg.main, name: camelCase(libraryName), format: 'umd', sourcemap: true }
    ],
    external: [],
    watch: {
        include: 'src/**',
    },
    plugins: [

        scss({ output: `dist/${libraryName}.css` }),
        json(),
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    module: 'es2015'
                }
            },
            useTsconfigDeclarationDir: true
        }),
        nodeResolve({
            jsnext: true,
            main: true
        }),
        commonjs({
            // non-CommonJS modules will be ignored, but you can also
            // specifically include/exclude files
            include: 'node_modules/**',  // Default: undefined
            exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],  // Default: undefined
            // these values can also be regular expressions
            // include: /node_modules/

            // search for files other than .js files (must already
            // be transpiled by a previous plugin!)
            extensions: [ '.js', '.coffee' ],  // Default: [ '.js' ]

            // if true then uses of `global` won't be dealt with by this plugin
            ignoreGlobal: false,  // Default: false

            // if false then skip sourceMap generation for CommonJS modules
            // sourceMap: false,  // Default: true

            // explicitly specify unresolvable named exports
            // (see below for more details)
            // namedExports: { './module.js': ['foo', 'bar' ] },  // Default: undefined

        }),
        resolve(),
        sourceMaps(),
    ]
};
