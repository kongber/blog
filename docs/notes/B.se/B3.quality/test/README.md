
# 1. Valgrind

## 1.1 安装

```bash
// 安装 valgrind 
CentOS: yum install valgrind
Ubuntu: apt-get install valgrind

// 安装 KCacheGrind 性能分析
CentOS: yum install kcachegrind
Ubuntu: apt-get install kcachegrind

// 安装 massif-visualizer 堆栈检测
CentOS: yum install massif-visualizer
Ubuntu: apt-get install massif-visualizer
```

## 1.2 常规检测

```c
// 内存泄漏检测
valgrind --tool=memcheck  --leak-check=full ./[bin]

// 性能分析数据
valgrind --tool=callgrind ./[bin] （生成 callgrind.out 文件）
kcachegrind callgrind.out.13789

// 堆栈检测
valgrind --tool=massif ./[bin]（生成massif.out.pid 文件）
ms_print massif.out.pid
```

| **参数** | **含义** |
| --- | --- |
| -h --help | 显示此消息 |
| --help-debug | 显示此消息以及调试选项 |
| --help-dyn-options | 显示动态可更改的选项 |
| --version | 显示版本 |
| -q --quiet | 静默运行； 只打印错误消息 |
| -v --verbose | 更详细 -- 显示其他额外信息 |
| --trace-children=no|yes | Valgrind-ise |
| --trace-children-skip=patt1,patt2,... | 指定可执行文件列表 --trace-children=yes 不应该追踪到 |
| --trace-children-skip-by-arg=patt1,patt2,... | 与 --trace-children-sk ip= 相同, 但检查孩子的 argv[] 条目，而不是 exe 名称，做出关注/不关注决定 |
| --child-silent-after-fork=no|yes | 省略 fork 和 exec 之间的子输出？ [不] |
| --vgdb=no|yes|full | 激活gdbserver？ [是的] 。full 速度较慢，但提供精确的观察点/步骤 |
| --vgdb-error=<number> | 在 <number> 错误后调用 gdbserver [999999999] 要快速开始，请使用 --vgdb-error=0 并按照屏幕上的说明进行操作 |
| --vgdb-stop-at=event1,event2,... | 为给定事件调用 gdbserver [无] , 其中事件是以下之一：startup exit abexit valgrindabexit all none |
| --track-fds=no|yes| | 所有跟踪打开的文件描述符？ [不]. 全部包括报告 stdin、stdout 和 stderr |
| --time-stamp=no|yes | 添加时间戳到日志消息？ [不] |
| --log-fd=<number> | 将消息记录到文件描述符 [2=stderr] |
| --log-file=<文件> | 将消息记录到 <文件> |
| --log-socket=ipaddr:port | 将日志消息发送到套接字 ipaddr:port |
| --enable-debuginfod=no|yes | 查询 debuginfod 服务器是否丢失,调试信息[是] |

## 1.3 其他工具

- **Memcheck**‌：内存错误检测器，用于发现使用未初始化的内存、使用已经释放的内存、内存访问越界等问题‌。
- ‌**Cachegrind**‌：缓存和分支预测分析器，用于检查程序中的缓存使用问题，提供缓存丢失和命中信息‌。
- ‌**Callgrind**‌：调用图生成器，收集函数调用过程中的信息，与Cachegrind有重叠但收集更多信息‌。
- ‌**Helgrind**‌：线程错误检测器，用于检查多线程程序中的竞争条件‌。
- ‌**DRD**‌：另一个线程错误检测器，使用不同的分析技术，可能发现Helgrind未发现的问题‌。
- ‌**Massif**‌：堆分析器，用于减少程序使用的内存‌。

**参考链接：**

官方：https://valgrind.org/

Valgrind 使用：https://zhuanlan.zhihu.com/p/663837179

内存泄漏检测：https://zhuanlan.zhihu.com/p/643271982

Massif 堆栈工具：https://zhuanlan.zhihu.com/p/662636244

# 2. Sanitizer

## 2.1 检测方法

```c
cmake_minimum_required (VERSION 2.8)                                                                 
project (sanitizer)                                                                                  
set(CMAKE_CXX_FLAGS "-g -fsanitize=leak -fsanitize=address -fno-omit-frame-pointer")                    
add_executable(sanitizer_stack_overflow src/sanitizer_stack_overflow.cpp) 
```

| 参数 | 含义 |
| --- | --- |
| fsanitize=address | 检测野指针问题 |
| fsanitize=leak | 检测内存泄漏问题 |
| fno-omit-frame-pointer | 检测到内存错误时打印函数调用栈 |

**参考链接：**

Sanitizers：https://github.com/google/sanitizers

C/C++ Sanitizer工具：https://www.cnblogs.com/xiaohuidi/p/17611771.html