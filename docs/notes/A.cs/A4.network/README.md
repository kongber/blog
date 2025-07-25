# 计算机网络

## 1. 计算机网络技术概述
### 1.1 计算机网络的功能
计算机网络的功能：数据通信，资源共享，管理集中化，分布式处理，负载均衡。

### 1.2 计算机网络的分类
- 按照网络的范围分类：局域网（LAN），城域网（MAN），广域网（WAN），因特网。
- 按照网络的拓扑结构分类：总线型，星型，环型，树型。

### 1.3 计算机网络的性能指标
- 带宽（bps）：单位时间内网络传输数据的最大能力。
- 吞吐量（bps）：单位时间内网络传输数据的量。
- 延迟（ms）：数据从网络的一端到另一端所需要的时间。（路由器发送延迟大于交换机）
- 丢包率（%）：数据传输过程中丢失的数据包占总数据包的比例。

## 2. 组网技术

### 2.1 网络分层模型
- OSI 七层模型（理论）

| 层次 | 名称      | 主要功能             | 主要设备及协议                                          |
| ---- | -------- | ------------------ | ----------------------------------------------------- |
| 7    | 应用层   | 实现具体的应用功能     | POP3、FTP、HTTP、Telnet、SMTP                           |
| 6    | 表示层   | 数据的格式与表达、加密、压缩 | DHCP、TFTP、SNMP、DNS                                       |
| 5    | 会话层   | 建立、管理和终止会话   |                                                             |
| 4    | 传输层   | 端到端的连接          | TCP、UDP                                                    |
| 3    | 网络层   | 分组传输和路由选择     | 三层交换机、路由器<br>ARP、RARP、IP、ICMP、IGMP             |
| 2    | 数据链路层 | 传送以帧为单位的信息  | 网桥、交换机 (多端口网桥)、网卡<br>PPTP、L2TP、SLIP、PPP    |
| 1    | 物理层   | 二进制传输            | 中继器、集线器 (多端口中继器)                               |

**补充说明:**
* Internet网络核心采取 **分组交换**
* 网络中检测冲突的最长时间决定以太网帧最小长度为 **64字节** 
* 交换机是一种基于 MAC 地址识别，能完成封装转发数据包功能的网络设备。
* 中继器是一种简单的重复器，用于延长信号的传播距离。

- TCP/IP 四层模型（实践）

![网络四层模型](/images/cs/网络四层模型.png){width="50%"}


### 2.2 TCP/IP 协议簇

![网络数据流](/images/cs/网络协议-协议类型.png){width=50%}

* POP3: Post Office Protocol 3, 邮局协议, 用于接收邮件。
* FTP: File Transfer Protocol, 文件传输协议, 用于传输文件。
* HTTP: Hypertext Transfer Protocol, 超文本传输协议, 用于传输超文本。
* SMTP: Simple Mail Transfer Protocol, 简单邮件传输协议, 用于发送邮件。

* DHCP: Dynamic Host Configuration Protocol, 动态主机配置协议, 用于动态分配 IP 地址。
* TFTP: Trivial File Transfer Protocol, 简单文件传输协议, 用于传输文件。
* SNMP: Simple Network Management Protocol, 简单网络管理协议, 用于管理和监控网络设备。
* DNS: Domain Name System, 域名系统, 用于将域名转换为 IP 地址。
* ICMP: Internet Control Message Protocol, 互联网控制消息协议, 用于错误报告和调试。
* IGMP: Internet Group Management Protocol, 互联网组管理协议, 用于组播通信。
* ARP: Address Resolution Protocol, 地址解析协议, 用于将 IP 地址转换为 MAC 地址。
* RARP: Reverse Address Resolution Protocol, 反向地址解析协议, 用于将 MAC 地址转换为 IP 地址。

#### 2.2.1 DHCP 服务应用

一个 DHCP 服务器


### 2.3 TCP 与 UDP 协议对比

| 特性        | TCP                          | UDP                          |
|-----------|-----------------------------|-----------------------------|
| 连接方式     | 面向连接 (三次握手建立连接)           | 无连接                        |
| 可靠性      | 可靠传输 (确认、重传、排序机制)         | 不可靠传输                      |
| 流量控制     | 有 (滑动窗口机制)                | 无                          |
| 传输效率     | 较低 (由于控制机制)                | 较高                         |
| 数据顺序     | 保证数据顺序                     | 不保证顺序                     |
| 头部大小     | 20字节 (较大)                   | 8字节 (较小)                  |
| 适用场景     | 文件传输、网页浏览、邮件等需要可靠性的应用     | 视频流、在线游戏、DNS查询等实时性要求高的应用 |
| 拥塞控制     | 有 (慢启动、拥塞避免等算法)           | 无                          |
| 传输方式     | 字节流                        | 数据报文                      |
| 多路复用     | 通过端口号实现                   | 通过端口号实现                   |

![网络数据流](/images/cs/网络数据流.png)
