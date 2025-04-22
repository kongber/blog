---
title: adapter
createTime: 2025/04/21 17:12:10
permalink: /article/z46z6071/
---
# 适配器模式

## 概述

适配器模式是一种结构型设计模式，它作为两个不兼容接口之间的桥梁，将一个类的接口转换成客户希望的另外一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。

## 适配器类型

### 类适配器

- 通过继承来实现适配器功能
- 适配器类继承被适配类，实现目标接口

```java
// 目标接口
public interface Target {
    void request();
}

// 被适配类
public class Adaptee {
    public void specificRequest() {
        System.out.println("特殊请求");
    }
}

// 类适配器
public class ClassAdapter extends Adaptee implements Target {
    @Override
    public void request() {
        specificRequest();
    }
}
```

### 对象适配器

- 通过组合来实现适配器功能
- 适配器类持有被适配类的实例，实现目标接口

```java
// 对象适配器
public class ObjectAdapter implements Target {
    private Adaptee adaptee;
    
    public ObjectAdapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }
    
    @Override
    public void request() {
        adaptee.specificRequest();
    }
}
```

### 接口适配器

- 通过抽象类实现接口，其他类继承抽象类
- 适用于不想实现接口中所有方法的情况

```java
// 接口
public interface Target {
    void method1();
    void method2();
    void method3();
}

// 抽象适配器
public abstract class AbstractAdapter implements Target {
    @Override
    public void method1() {}
    
    @Override
    public void method2() {}
    
    @Override
    public void method3() {}
}

// 具体适配器
public class ConcreteAdapter extends AbstractAdapter {
    @Override
    public void method1() {
        System.out.println("实现方法1");
    }
}
```

## 使用场景

1. 系统需要使用现有的类，但接口不符合系统的需要
2. 想要建立一个可以重复使用的类，用于与一些彼此之间没有太大关联的类一起工作
3. 需要统一多个类的接口设计时
4. 旧接口和使用者不兼容时，需要对接口进行适配

## 优缺点

### 优点

1. 可以让任何两个没有关联的类一起运行
2. 提高了类的复用性
3. 增加了类的透明度
4. 灵活性好

### 缺点

1. 过多使用适配器会让系统变得凌乱
2. 类适配器使用继承，不符合组合复用原则

## 注意事项

1. 适配器不是在详细设计时添加的，而是解决正在服役的项目的问题
2. 适配器模式可以让旧代码和新代码共存
3. 适配器模式可能会增加系统的复杂性