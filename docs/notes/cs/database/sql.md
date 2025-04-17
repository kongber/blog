---
title: sql
createTime: 2025/04/15 17:57:51
permalink: /article/psb0a95g/
---
# SQL 语言

## 1. SQL 体系结构

**SQL 语言按照用途可以分为如下 4 类：**

- DDL (Data Definition Language) 数据定义语言。
- DML（Data Manipulation Language）数据操作语言。
- DQL（Data Query Language）数据查询语言。
- DCL（Data Control Language）数据控制语言，数据库的权限管理和事务管理。

## 2. SQL 的数据定义语言 （DDL）

### 2.1  建立数据库

`CREATE DATEBASE 数据库名`

### 2.2 建立基本表

```sql
CREATE TABLE 表名
(
  列名 数据类型，
  ...
  完整性约束，
  ...
)
```

### 2.3 修改基本表结构

增加一个新列的基本语句为：`ALTER TABLE 表名 ADD 列名 类型`

修改一个新列的基本语句为：`ALTER TABLE 表名 ALTER COLUMN 列名 新类型`

删除一个列的语句为：     `ALTER TABLE 表名 DROP COLUMN 列名`

### 2.4 删除基本表

基本语句如下：`DROP TABLE 表名`

### 2.5 完整性约束条件

列级完整性约束

```sql
not null
unique
not null unique
default

CREATE TABLE STUDENT
{
	NUMBER int not null unique
	NAME VARCHAR(255) not null
}

```

表级完整性约束

```sql
PRIMARY KEY  | 主键子句
CHECK        | 检查子句
FOREIGN KEY  | 外键子句
```

## 3. 数据操作语言（DML）

### 3.1 插入（INSERT）

直接插入元组值

`INSERT INTO 表名 VALUES （元组值）eg: INSERT INTO STUDENT VALUES (1, "Alias")`

插入一个查询的结果值（从某个表中查询某个值，插入到当前表）

`INSERT INTO 表名 SELECT 查询语句`

### 3.2 删除（DELETE）

`DELETE FROM STUDENT WHERE NUMBER = 1`

### 3.3 更新（UPDATE）

`UPDATE STUDENT SET NAME = "Bob" WHERE NUMBER = 1`

## 4. 数据查询语言（DQL）

### 4.1 数据查询功能

SQL 数据查询功能是通过 SELECT （投影）语句实现的：SELECT 基本语法如下：

```sql
SELECT 列名
FROM   表名
[WHERE 行条件表达式]
[GROUP BY 列名序列]
[HAVING 组条件表达式]
[ORDER BY 列名[ASC | DESC] ... ]

```

- SELECT 子句的输出项可以是列名，或者由列名、常数和 `+、-、*、/` 运算符构成的算术表达式。（DISTINCT 去重）
- FROM： 子句中出现多个基本表或视图时，系统执行笛卡尔积操作。
- WHERE：子句中的条件表达式中可以使用的运算符有：
    - 比较运算符（<，<=，>，>=，=，<>）
    - 逻辑运算符：AND、OR、NOT
    - 集合成员运算符：IN、NOT IN
    - 字符串匹配运算符：LIKE
    - 谓词：EXISTS、ALL、SOME、UNIQUE
    - 聚合函数
        - 空值比较运算符（IS NULL、IS NOT NULL）
        - 集合运算符（UNION、INTERSECT、EXCEPT）

### 4.2 投影查询

使用 SELECT 命令可以选择查询表中的任意列。

```sql
SELECT DISTINCT NUMBER, NAME, SEX, CLASSNUMBER FROM STUDENT
SELECT DISTINCT NUMBER AS '学号', NAME AS '姓名', SEX AS '性别', CLASSNUMBER AS '班级号' FROM STUDENT

DISTINCT | 去重
AS       | 添加别名

```

### 4.3 选择查询

```sql
-- 使用 WHERE 命令选择查询结果
-- 条件表达式的比较运算
SELECT * FROM SCORE WHERE 分数 BETWEEN 60 and 80

-- 使用谓词 LIKE 可以进行字符串匹配运算
-- 字符串匹配运算 % 任意长度，_ 任意字符
SELECT * FROM NAME WHERE NAME LIKE ‘A%’
SELECT * FROM NAME WHERE NAME NOT LIKE ‘A_’

-- 集合的比较运算
SELECT * FROM SCORE WHERE 分数 IN (85, 86, 87)

-- 逻辑组合运算
SELECT * FROM STUDENT WHERE NUMBER = '0001' or SEX = '女'

```

### 4.4 排序查询

```sql
-- ASC：升序， DESC：降序。
SELECT * FROM STUDENT WHERE SEX = '男' ORDER BY NUNBER DESC, SCORE ASC

```

### 4.5 聚合函数

使用聚合函数实现数据统计等功能。WHERE 函数不能和聚合函数连用，应使用 HAVING 函数。

```sql
AVG：  平均值
COUNT：选择的项数
MIN：  表达式中的最小值
MAX：  表达式中的最大值
SUM：  表达式中的数值综合

SELECT MIN（分数） FROM SCORE

```

### 4.6 数据分组

增加 GROUP BY 子句进行数据分组

```sql

-- 只有 HAVING 函数可以结合聚合函数使用。
SELECT 学号
FROM SCORE
WHERE 分数 IS NOT NULL
GROUP BY 学号
HAVING MIN(分数) > 70 and MAX(分数) < 90

@1 执行 WHERE 子句，从表中进行取行。
@2 由 GROUP BY 对选取的行进行分组。
@3 执行聚合函数。
@4 执行 HAVING 子句选取满足条件的分组。

```

### 4.7 表的连接查询

```sql
-- 多个表进行连接
-- 内连接
-- 1）等值连接：表之间通过等于关系连接起来，产生一个临时连接的表。

SELECT *
FROM student, score
WHERE student.学号 = score.学号

等价于

SELECT *
FROM student inner join score on
student.学号 = score.学号

-- 2）非等值连接
SELECT *
FROM student, score
WHERE 分数 between low and up
order by 等级

-- 3）自连接：在数据查询中有时需要将同一个表进行连接，这种连接称为自连接。

-- 外连接
-- 1）左外连接
select xxx
FROM xxx LEFT JOIN xxx ON (a.xxx = b.xxx)

-- 2）右外连接
select xxx
FROM xxx RIGHT JOIN xxx ON (a.xxx = b.xxx)
-- 3）全外连接
select xxx
FROM xxx FULL JOIN xxx ON (a.xxx = b.xxx)

```

### 4.8 子查询

一般子查询

```sql
SELECT 学号，姓名，出生日期
FROM student
WHERE 出生日期 = (SELECT 出生日期 FROM student WHERE 学号 = "105")

```

相关子查询

```sql
-- 子查询次数不止一次
SELECT 学号，课程号，分数
FROM score a
WHERE 分数 <
   (SELECT AVG(分数)
	FROM score b
	WHERE A.课程号 = B.课程号 AND 分数 IS NOT NULL)

```

带 EXIST 测试的子查询

```sql
-- EXIST 代表存在量词，带有 EXIST 谓词的子查询不返回任何数据, 只返回逻辑真值与逻辑假值。
SELECT 姓名，系别
FROM teacher a
WHERE EXISTS
   (SELECT *
	FROM course b
	WHERE A. 教师编号 = B. 任课教师编号)

```

## 4.9 查询结果的并、交、差运算

```sql
UNION：并
INTERSECT：交
EXCEPT：差（R-S，将 R 中含有 S 的数据移除）

SELECT 姓名，性别
FROM teacher
UNION
SELECT 姓名，性别
FROM student
```

### 4.10 视图

视图是从一个或者多个基本表或视图中导出的表，视图是虚拟表。

```sql
CREATE VIEW 视图名
AS SELECT 查询子句
[WITH CHECK OPTION]

-- 创建视图
CREATE VIEW CS-STUDENT
	AS SELECT Sno, Sname, Sage, Sex
	FROM Student
	WHERE SD='SC'
	WITH CHECK OPTION; （对该视图进行修改，插入操作是 DBMS 会自动加上  SD = ‘CS’ 条件，保证该视图中只有计算机系的学生）

--- 删除视图
DROP VIEW CS-STUDENT

```

### 4.11 索引

数据库中的索引与书籍索引类似，利用索引可以快速地查找所需信息。
索引改变的是数据库的内模式。

## 5. 数据控制语言（DCL）

数据控制控制的是用户对数据的存储权限。

```sql
-- 授权语句格式
给数据库 S,P,J 中的供应商 S，零件 P，项目 J 表赋予各种权限。
GRANT ALL PRIVILEGES ON TABLE S,P,J TO User1, User2.

将对供应商 S 的插入权限付给用户 User1，并允许将此权限赋给其他用户。
GRANT INSERT ON TABLE S TO User1 WITH GRANT OPTION.

-- 收回权限语句格式
将用户 USER1 及 USER2 对供应商 S，零件 P，项目 J 表赋予各种权限收回。
REVOKE ALL PRIVILEGES ON TABLE S, P, J FROM User1, User2.
将所有用户对供应商 S 的所有查询条件收回
REVOKE SELECT ON TABLE S FROM PUBLIC

```