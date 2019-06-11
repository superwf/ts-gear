# 开发过程

以下部分是一些开发记录，理解源码用。

## 设计

### 配置文件

* 使用`ts`文件作为配置文件，用户填写配置时还能校验配置数据的类型。

* 通过ts-node直接调用`src/run.ts`运行。

## 每个项目的swagger schema支持两种获取方式

* 获取远程swagger获取json地址，source以http开头。

* 获取本地json文件schema。

## 格式化

* 将所有`$ref`与`definitions`中的键的名称统一化

  * pont的fixture中有中文definitions的情况，添加翻译中文部分为英文。

  * 去除所有空格。

  * 找到没有definitions中对应值的$ref的type，标记为any。

  * 生成新的schema对象数，其中所有的`$ref`与`definitions`的key都是转换好的，之后的操作在该新对象上进行，原始数据不需要再访问。

## 输出

* 将所有`definitions`写入`definitions.ts`。

* 将所有`paths`写入`paths.ts`，包括每个请求方法，参数与返回值结构。

* 收集所有`paths`中的$ref依赖
  开发过程中发现有些$ref在definitions没有对应项，都按any别名处理。
  在每个请求函数中，将baseURL与接口url拼接。因为考虑跨域问题，没有将host也自动加上。

* 最初想用fxios或axios作为请求库，但感觉尽量少依赖工具，直接用原生`fetch`依赖更少。

   interceptRequest，负责处理请求前的数据加工
   * 将请求参数中的路由参数替换到url中
   * 如果请求体是普通对象，用json格式化并添加json的http header
   * 如果请求体有formData项，自动添加成FormData

   interceptResponse，负责处理请求前的数据加工

* 每个项目配套一个独立的`interceptor.ts`，起到每个请求方法请求前、后的数据加工作用。
