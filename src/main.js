//导入css文件
import './css/index.css'
//导入less文件
import './css/index.less';
//导入scss文件
import './css/index.scss';
//导入bootstrap
import 'bootstrap/dist/css/bootstrap.css'

class Person {
    //使用static定义静态属性，可以使用类名直接访问，与之相对的是实例属性
    //在WEBPACK中只能处理一部分ES6的语法，需要借助于第三方的loader
    //1通过Babel可以将ES6高级语法转换为低级的语法 需要安装两套包：
    //1.1第一套：cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
    //1.2第二套：cnpm i babel-preset-env babel-preset-stage-0 -D
    //注意：安装babel-loader的版本为babel-loader@7.1.5
    //2.在配置文件的module节点下的rules数组中添加一个新的匹配规则：
    //2.1{ test:/\.js$/,use:['babel-loader'],exclude:/node_modules/}
    //注意：需要把node_modules排除在外
    //3.在项目根目录下新建一个.babelrc的配置文件，配置文件时json格式的
    //3.1在配置文件中写入下列代码：
    //{ "presets":['env','stage-0'],"plugins":['transform-runtime']}
    static info = {name:'xsy',age:23}
}



console.log("Hello VSCode" + Person.info.name + Person.info.age)