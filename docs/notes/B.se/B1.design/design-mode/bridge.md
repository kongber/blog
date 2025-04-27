---
title: bridge
createTime: 2025/04/21 17:12:29
permalink: /article/vjscxipd/
---
# 桥接模式

## 概述

桥接模式是一种结构型设计模式，它将抽象部分与实现部分分离，使它们都可以独立地变化。这种模式通过组合的方式建立两个类之间的联系，而不是继承。

## 模式结构

- Abstraction（抽象类）：定义抽象类的接口
- RefinedAbstraction（扩充抽象类）：扩充由Abstraction定义的接口
- Implementor（实现类接口）：定义实现类的接口
- ConcreteImplementor（具体实现类）：实现Implementor接口

## 实现示例

```java
// 实现类接口
public interface DrawAPI {
    void drawCircle(int radius, int x, int y);
}

// 具体实现类
public class RedCircle implements DrawAPI {
    @Override
    public void drawCircle(int radius, int x, int y) {
        System.out.println("Drawing Circle[ color: red, radius: " + radius + ", x: " + x + ", y: " + y + "]");
    }
}

public class GreenCircle implements DrawAPI {
    @Override
    public void drawCircle(int radius, int x, int y) {
        System.out.println("Drawing Circle[ color: green, radius: " + radius + ", x: " + x + ", y: " + y + "]");
    }
}

// 抽象类
public abstract class Shape {
    protected DrawAPI drawAPI;
    
    protected Shape(DrawAPI drawAPI) {
        this.drawAPI = drawAPI;
    }
    
    public abstract void draw();
}

// 扩充抽象类
public class Circle extends Shape {
    private int x, y, radius;
    
    public Circle(int x, int y, int radius, DrawAPI drawAPI) {
        super(drawAPI);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        drawAPI.drawCircle(radius, x, y);
    }
}
```

## 使用场景

1. 需要在抽象和实现之间增加更多灵活性的场景
2. 一个类存在多个独立变化的维度，且这些维度都需要进行扩展
3. 不希望使用继承或因为多层继承导致系统类的个数急剧增加的系统

## 优缺点

### 优点

1. 分离抽象接口及其实现部分
2. 提高可扩充性
3. 实现细节对客户透明
4. 可以取代多层继承方案

### 缺点

1. 增加了系统的理解与设计难度
2. 需要正确地识别系统中两个独立变化的维度

## 实际应用

1. JDBC驱动程序
2. 跨平台图形库
3. 不同数据库的统一接口
4. 跨平台的GUI系统

## 注意事项

1. 桥接模式要求正确识别出系统中的两个独立变化的维度
2. 桥接模式的引入会增加系统的理解与设计难度
3. 桥接模式的使用需要在系统的很早期就进行设计，否则重构成本较高