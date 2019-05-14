# dev steps

## 设计

### 配置文件

* 使用`ts`文件作为配置文件，在配置时还能校验类型。

### 输出两个文件

* 所有数据结构定义，输出到`definitions.d.ts`.

* 所有fetch函数，输入到`fetch.ts`.

## 解析本工具依赖的配置文件

* 获取远程swagger获取json地址

* 获取用户配置的输出路径

## 通过swagger地址fetch swagger的schema.

## 先解析所有的definitions

## 将所有definitions写入`interface.d.ts`.

## TODO

* 在用户配置文件中添加一些其他的可配置参数，目前还没设计
