---
title: decorator
createTime: 2025/04/21 17:12:50
permalink: /article/pqq7cmzr/
---
# 装饰器模式

## 概述

装饰器模式是一种结构型设计模式，它允许向一个现有的对象添加新的功能，同时又不改变其结构。这种模式创建了一个装饰类，用来包装原有的类，并在保持类方法签名完整性的前提下，提供了额外的功能。

## 模式结构

- Component（抽象构件）：定义一个抽象接口以规范准备接收附加责任的对象
- ConcreteComponent（具体构件）：实现抽象构件，装饰器可以给它增加额外的责任
- Decorator（抽象装饰类）：维持一个指向构件对象的引用，并定义一个与抽象构件接口一致的接口
- ConcreteDecorator（具体装饰类）：具体的装饰对象，给构件对象增加附加的责任

## 实现示例

```java
// 抽象构件
public interface Component {
    void operation();
}

// 具体构件
public class ConcreteComponent implements Component {
    @Override
    public void operation() {
        System.out.println("具体构件的操作");
    }
}

// 抽象装饰类
public abstract class Decorator implements Component {
    protected Component component;
    
    public Decorator(Component component) {
        this.component = component;
    }
    
    @Override
    public void operation() {
        component.operation();
    }
}

// 具体装饰类A
public class ConcreteDecoratorA extends Decorator {
    public ConcreteDecoratorA(Component component) {
        super(component);
    }
    
    @Override
    public void operation() {
        super.operation();
        addedBehavior();
    }
    
    private void addedBehavior() {
        System.out.println("具体装饰对象A的附加操作");
    }
}

// 具体装饰类B
public class ConcreteDecoratorB extends Decorator {
    public ConcreteDecoratorB(Component component) {
        super(component);
    }
    
    @Override
    public void operation() {
        super.operation();
        addedBehavior();
    }
    
    private void addedBehavior() {
        System.out.println("具体装饰对象B的附加操作");
    }
}
```

## 使用场景

1. 需要在不影响其他对象的情况下，动态地给一个对象添加职责
2. 不适合使用继承来扩展功能的场景
3. 需要动态地添加功能，这些功能可以动态地撤销

## 优缺点

### 优点

1. 装饰类和被装饰类可以独立发展，互不耦合
2. 装饰模式是继承关系的一个替代方案
3. 装饰模式可以动态地扩展一个实现类的功能

### 缺点

1. 多层装饰会增加系统的复杂度
2. 装饰模式会导致设计中出现许多小对象

## 实际应用

1. Java I/O 流的设计
2. Servlet 中的 HttpServletRequestWrapper 类
3. Spring 中的 TransactionAwareCacheDecorator 类
4. UI组件的附加功能实现

## 注意事项

1. 装饰类不应该改变原有对象的接口
2. 尽量保持装饰类的接口与被装饰类简单一致
3. 注意装饰链的顺序，因为可能会影响最终的结果