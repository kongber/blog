---
title: CARP
createTime: 2025/05/14 16:47:02
permalink: /article/i7jkm8a1/
---

组合/聚合复用原则 (CARP)

违反组合/聚合复用原则的设计 - 使用继承
```java
class Database {
    protected void connect() {
        System.out.println("连接数据库");
    }
    
    protected void disconnect() {
        System.out.println("断开数据库连接");
    }
}

class UserService extends Database {  // 通过继承复用数据库功能
    public void saveUser() {
        connect();
        System.out.println("保存用户数据");
        disconnect();
    }
}
```
符合组合/聚合复用原则的设计 - 使用组合
```java 
class ImprovedDatabase {
    public void connect() {
        System.out.println("连接数据库");
    }
    
    public void disconnect() {
        System.out.println("断开数据库连接");
    }
}

class ImprovedUserService {
    private ImprovedDatabase database;  // 通过组合方式使用数据库功能
    
    public ImprovedUserService(ImprovedDatabase database) {
        this.database = database;
    }
    
    public void saveUser() {
        database.connect();
        System.out.println("保存用户数据");
        database.disconnect();
    }
}

// 使用示例
public class Main {
    public static void main(String[] args) {
        // 使用继承方式
        UserService userService = new UserService();
        userService.saveUser();
        
        // 使用组合方式
        ImprovedDatabase database = new ImprovedDatabase();
        ImprovedUserService improvedService = new ImprovedUserService(database);
        improvedService.saveUser();
    }
}
```

From: Claude-3.5