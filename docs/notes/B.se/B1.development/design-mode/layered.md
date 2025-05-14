---
title: layered
createTime: 2025/04/21 17:15:37
permalink: /article/k3buy4rc/
---
# 分层架构

## 概述

分层架构是一种将软件系统按照不同的职责划分为多个层次的架构模式。每一层都有其特定的职责，层与层之间通过接口进行通信。这种架构模式有助于降低系统复杂度，提高代码的可维护性和可扩展性。

## 常见的分层架构

### 三层架构

1. 表现层（Presentation Layer）
   - 负责用户界面
   - 处理用户输入
   - 展示数据

2. 业务逻辑层（Business Layer）
   - 实现业务规则
   - 处理业务流程
   - 协调数据访问

3. 数据访问层（Data Access Layer）
   - 与数据库交互
   - 执行CRUD操作
   - 处理数据持久化

## 代码示例

### 数据访问层

```java
// 数据访问接口
public interface UserDAO {
    User getById(Long id);
    void save(User user);
    void update(User user);
    void delete(Long id);
}

// 数据访问实现
public class UserDAOImpl implements UserDAO {
    @Override
    public User getById(Long id) {
        // 实现数据库查询逻辑
        return user;
    }
    
    @Override
    public void save(User user) {
        // 实现保存逻辑
    }
    
    // 其他方法实现...
}
```

### 业务逻辑层

```java
// 业务服务接口
public interface UserService {
    User getUserInfo(Long id);
    void registerUser(User user);
    void updateUserInfo(User user);
}

// 业务服务实现
public class UserServiceImpl implements UserService {
    private UserDAO userDAO;
    
    public UserServiceImpl(UserDAO userDAO) {
        this.userDAO = userDAO;
    }
    
    @Override
    public User getUserInfo(Long id) {
        // 实现业务逻辑
        return userDAO.getById(id);
    }
    
    @Override
    public void registerUser(User user) {
        // 实现注册业务逻辑
        validateUser(user);
        userDAO.save(user);
    }
    
    // 其他方法实现...
}
```

### 表现层

```java
// 控制器
@RestController
@RequestMapping("/api/users")
public class UserController {
    private UserService userService;
    
    public UserController(UserService userService) {
        this.userService = userService;
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        User user = userService.getUserInfo(id);
        return ResponseEntity.ok(user);
    }
    
    @PostMapping
    public ResponseEntity<Void> createUser(@RequestBody User user) {
        userService.registerUser(user);
        return ResponseEntity.ok().build();
    }
    
    // 其他接口实现...
}
```

## 分层原则

1. 单向依赖
   - 上层依赖下层
   - 下层不能依赖上层

2. 层内高内聚
   - 相关功能放在同一层
   - 层内组件紧密协作

3. 层间低耦合
   - 通过接口通信
   - 避免跨层调用

## 优缺点

### 优点

1. 结构清晰，职责分明
2. 利于团队协作开发
3. 方便维护和扩展
4. 支持代码复用

### 缺点

1. 可能增加系统复杂度
2. 可能影响系统性能
3. 过度分层可能导致代码冗余

## 使用场景

1. 企业级应用系统
2. 需要清晰职责划分的系统
3. 团队协作开发的项目
4. 需要良好可维护性的系统

## 最佳实践

1. 合理划分层次
2. 遵循单向依赖原则
3. 使用依赖注入
4. 合理使用设计模式
5. 注意性能优化

## 扩展

1. 领域驱动设计（DDD）
2. 洋葱架构
3. 六边形架构
4. 清洁架构