fis.set('public', '/public'); //client编译后文件所在的目录
fis.set('project.ignore', [
    'mock/**',
    'node_modules/**',
    'server/**',
    '.idea.**',
    '.git/**',
    '.gitignore',
    'fis-conf.js',
    'node*.bat',
    'package.json',
    '**.md'
]);
fis.match('/client/assets/(**)', {
    release: '${public}/$1',
    url: '/$1'
});
fis.match('/client/views/(**)', {
    release: '/views/$1'
});
fis.match('/node_modules/(**)', {
    release: '${public}/node_modules/$1',
    url: '/node_modules/$1'
});

// 采用 commonjs 模块化方案。
fis.hook('commonjs', {
    baseUrl: './modules',
    extList: ['.js', '.jsx']
});

fis.match('{/client/assets/modules/**.js,*.jsx}', {
    // parser: fis.plugin('typescript'),

    // typescript 就是编译速度会很快，但是对一些 es7 的语法不支持，可以用 babel 来解决。用以下内容换掉 typescript 的parser配置就好了。
    parser: fis.plugin('babel-5.x', {
        sourceMaps: true,
        optional: ["es7.decorators", "es7.classProperties"]
    }),
    rExt: '.js'
});

// 改用 npm 方案，而不是用 fis-components
fis.hook('node_modules');

// 设置成是模块化 js
fis.match('/node_modules/**.{js,jsx}', {
    isMod: true
});
// 设置成是模块化 js
fis.match('/client/assets/modules/**.{js,jsx}', {
    isMod: true
});

fis.match('::package', {
    // 本项目为纯前段项目，所以用 loader 编译器加载，
    // 如果用后端运行时框架，请不要使用。
    postpackager: fis.plugin('loader', {
        useInlineMap: true
    })
});

