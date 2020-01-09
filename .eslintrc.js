// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential'],
  // required to lint *.vue files
  plugins: [
    'vue',
    // 此插件用来识别.html 和 .vue文件中的js代码
    'html',
  ],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'error',  // 定义后未使用的变量
    // 数组的 map、filter、sort 等方法，回调函数必须有返回值
    'array-callback-return': 2,
    // 不能在块外使用块作用域内 var 定义的变量
    'block-scoped-var': 2,
    // 变量名必须使用驼峰式
    // @off 暂不限制
    'camelcase': 0,
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    "comma-dangle": [2, "never"],
    // 控制逗号前后的空格
    "comma-spacing": [2, { "before": false, "after": true }],
    // 禁止函数 if ... else if ... else 的复杂度超过 20
    'complexity': 2,
    // this 的别名规则，只允许 self 或 that
    'consistent-this': [2, 'self', 'that'],
    // if 后必须包含 { ，单行 if 除外
    'curly': [2, 'multi-line', 'consistent'],
    // switch 语句必须包含 default
    'default-case': 2,
    // 必须使用 === 和 !== ，和 null 对比时除外
    'eqeqeq': [2, 'always', { 'null': 'ignore' }],
    // for 循环不得因方向错误造成死循环
    'for-direction': 2,
    // for in 时需检测 hasOwnProperty
    'guard-for-in': 2,
    // 对象字面量冒号前后的空格使用规则
    'key-spacing': 2,
    // 关键字前后必须有空格
    'keyword-spacing': 2,
    // 最大块嵌套深度为 5 层
    'max-depth': [2, 5],
    // 禁止将 await 写在循环里, 如果写了后提示开发者下
    'no-await-in-loop': 1,
    // 禁止与 -0 做比较
    'no-compare-neg-zero': 2,
    // 禁止在 if、for、while 中出现赋值语句，除非用圆括号括起来
    'no-cond-assign': [2, 'except-parens'],
    // 禁止出现难以理解的箭头函数，除非用圆括号括起来
    'no-confusing-arrow': [2, { 'allowParens': true }],
    // 禁止使用常量作为判断条件
    'no-constant-condition': [2, { 'checkLoops': false }],
    // 禁止对 const 定义重新赋值
    'no-const-assign': 2,
    // 函数参数禁止重名
    'no-dupe-args': 2,
    // 禁止对象出现重名键值
    'no-dupe-keys': 2,
    // 类方法禁止重名
    'no-dupe-class-members': 2,
    // 禁止 switch 中出现相同的 case
    'no-duplicate-case': 2,
    // 禁止重复 import
    'no-duplicate-imports': 2,
    // 禁止空的 function
    // 包含注释的情况下允许
    'no-empty-function': 2,

    // 禁止解构中出现空 {} 或 []
    'no-empty-pattern': 2,

    // 禁止出现空代码块
    'no-empty': [2, { 'allowEmptyCatch': true }],

    // 禁止 == 和 != 与 null 做比较，必须用 === 或 !==
    // @off 非严格相等可以同时判断 null 和 undefined
    'no-eq-null': 0,

    // 禁止使用 eval
    'no-eval': 2,
    // 禁止额外的括号，仅针对函数体
    'no-extra-parens': [2, 'functions'],
    // 禁止额外的分号
    'no-extra-semi': 2,
    // 每一个 switch 的 case 都需要有 break, return 或 throw
    // 包含注释的情况下允许
    'no-fallthrough': [2, { 'commentPattern': '.' }],

    // 不允许使用 2. 或 .5 来表示数字，需要用 2、2.0、0.5 的格式
    'no-floating-decimal': 2,

    // 禁止对函数声明重新赋值
    'no-func-assign': 2,

    // 禁止对全局变量赋值
    'no-global-assign': 2,
    // 禁止在块作用域内使用 var 或函数声明
    'no-inner-declarations': [2, 'both'],
    // 禁止使用不规范空格
    'no-irregular-whitespace': [2, {
      'skipStrings': true, // 允许在字符串中使用
      'skipComments': true, // 允许在注释中使用
      'skipRegExps': true, // 允许在正则表达式中使用
      'skipTemplates': true, // 允许在模板字符串中使用
    }],
    // 禁止 for (var i) { function() { use i } }，使用 let 则可以
    'no-loop-func': 2,
    // 禁止使用混合的逻辑判断，必须把不同的逻辑用圆括号括起来
    'no-mixed-operators': [2, {
      "groups": [
        ["&&", "||"]
      ]
    }],
    // 禁止连等赋值
    'no-multi-assign': 2,

    // 禁止使用连续的空格
    'no-multi-spaces': 2,
    // 连续空行的数量限制
    'no-multiple-empty-lines': [2, {
      max: 1, // 文件内最多连续 3 个
      maxEOF: 1, // 文件末尾最多连续 1 个
      maxBOF: 1 // 文件头最多连续 1 个
    }],
    // 禁止重复声明
    'no-redeclare': 2,
    // 禁止 location.href = 'javascript:void'
    'no-script-url': 2,

    // 禁止将自己赋值给自己
    'no-self-assign': 2,

    // 禁止自己与自己作比较
    'no-self-compare': 2,
    // 禁止将 undefined 赋值给变量
    'no-undef-init': 2,

    // 禁止访问未定义的变量或方法
    'no-undef': 0,

    // 禁止使用 undefined，如需判断一个变量是否为 undefined，请使用 typeof a === 'undefined'
    'no-undefined': 2,
    // 禁止在变量被定义之前使用它
    'no-use-before-define': [2,
      {
        'functions': false, // 允许函数在定义之前被调用
        'classes': false, // 允许类在定义之前被引用
      }
    ],
    // 禁止使用 var，必须用 let 或 const
    'no-var': 2,
    // 禁止 if 语句在没有花括号的情况下换行
    'nonblock-statement-body-position': 2,
    // 是否允许使用逗号一次声明多个变量
    'one-var': [2, {
      'const': 'never' // 所有 const 声明必须独占一行，不允许用逗号定义多个
    }],
    // 操作符前后要加空格
    'space-infix-ops': 2,

    // new, delete, typeof, void, yield 等表达式前后必须有空格，-, +, --, ++, !, !! 等表达式前后不许有空格
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false,
    }],
    // typeof 判断条件只能是 "undefined", "object", "boolean", "number", "string", "function" 或 "symbol"
    'valid-typeof': 2,
    // @fixable 禁止在行首写逗号
    'comma-style': ['error', 'last'],
    'no-trailing-spaces': 2, // 大括号前不允许惠车
  }
}
