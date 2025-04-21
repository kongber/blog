# 外观模式

## 概述

外观模式是一种结构型设计模式，它提供了一个统一的接口，用来访问子系统中的一群接口。外观模式定义了一个高层接口，让子系统更容易使用。这种模式隐藏系统的复杂性，并向客户端提供了一个可以访问系统的接口。

## 模式结构

- Facade（外观角色）：知道哪些子系统负责处理请求，将客户的请求代理给适当的子系统对象
- SubSystem（子系统角色）：实现子系统的功能，处理外观对象指派的任务
- Client（客户角色）：通过外观接口访问各个子系统

## 实现示例

```java
// 子系统类
public class SubSystemA {
    public void operationA() {
        System.out.println("子系统A的操作");
    }
}

public class SubSystemB {
    public void operationB() {
        System.out.println("子系统B的操作");
    }
}

public class SubSystemC {
    public void operationC() {
        System.out.println("子系统C的操作");
    }
}

// 外观类
public class Facade {
    private SubSystemA systemA;
    private SubSystemB systemB;
    private SubSystemC systemC;
    
    public Facade() {
        systemA = new SubSystemA();
        systemB = new SubSystemB();
        systemC = new SubSystemC();
    }
    
    // 对外接口
    public void operationWrapper() {
        systemA.operationA();
        systemB.operationB();
        systemC.operationC();
    }
}

// 客户端使用
public class Client {
    public static void main(String[] args) {
        Facade facade = new Facade();
        facade.operationWrapper();
    }
}
```

## 使用场景

1. 需要为复杂的子系统提供一个简单的接口时
2. 客户程序与多个子系统之间存在很大的依赖性
3. 需要构建一个层次结构的子系统时
4. 系统需要提供给客户端一个简单的接口，同时又不影响子系统的功能

## 优缺点

### 优点

1. 减少系统的相互依赖，提高灵活性
2. 提高了安全性，隐藏了子系统的具体实现细节
3. 简化了客户端的调用过程

### 缺点

1. 不符合开闭原则，修改子系统需要修改外观类
2. 可能产生一个很大的外观类
3. 增加子系统可能需要修改外观类的源代码

## 实际应用

1. SLF4J日志门面
2. JDBC的封装
3. Spring框架中的JdbcTemplate
4. 各种第三方SDK的封装API

## 注意事项

1. 外观模式主要是解决易用性问题，而不是可维护性问题
2. 外观模式通常只需要一个外观类，并且此外观类只有一个实例，所以可以结合单例模式
3. 外观模式与中介者模式的区别：外观模式是单向的，而中介者模式是多向的