# 数据库
## 1. 概述
### 1.1 数据库
数据库 (Database) 是长期存储在计算机内的、有组织的、可共享的大量数据的集合。

### 1.2 数据库管理系统
数据库管理系统 (Database Management System) 是一种操纵和管理数据库的大型软件，用于建立、使用和维护数据库，简称 DBMS。
DBMS 按数据模型划分: 
 - 关系模型 DBMS：MySQL，Oracle，SQL Server。
 - 文档性 DBMS：MongoDB。
 - 键值型 DBMS：Redis。
 - 对象型 DBMS：ObjectDB，db4o。

### 1.3 数据库系统
数据库系统是由数据库、数据库管理系统、应用程序和数据库管理员组成的系统。 

## 2. 关数据库模式与范式

### 2.1 数据库模式

```mermaid
graph TD
    subgraph "外模式（用户视图层）"
        A1[用户视图1]
        A2[用户视图2]
        A3[用户视图3]
        style A1 fill:#e1f5fe
        style A2 fill:#e1f5fe
        style A3 fill:#e1f5fe
    end
    
    subgraph "概念模式（全局逻辑层）"
        B[概念模式]
        B1[实体]
        B2[属性]
        B3[联系]
        B --> B1
        B --> B2
        B --> B3
        style B fill:#fff3e0
        style B1 fill:#ffe0b2
        style B2 fill:#ffe0b2
        style B3 fill:#ffe0b2
    end
    
    subgraph "内模式（物理存储层）"
        C[内模式]
        C1[存储记录]
        C2[索引组织]
        C3[存取路径]
        C --> C1
        C --> C2
        C --> C3
        style C fill:#f3e5f5
        style C1 fill:#e1bee7
        style C2 fill:#e1bee7
        style C3 fill:#e1bee7
    end
    
    A1 -->|外模式/模式映像| B
    A2 -->|外模式/模式映像| B
    A3 -->|外模式/模式映像| B
    B -->|模式/内模式映像| C
```

## 4. 数据库设计

## 5. 数据库保护
数据库保护的 4 中措施：数据库的恢复、并发控制、完整性控制和安全控制。

## 6. SQL 语言
- 关系数据库
- [SQL 语言](./sql.md)
- 数据库设计
- 事务处理
- 并发控制
- 数据库恢复
- 数据库安全