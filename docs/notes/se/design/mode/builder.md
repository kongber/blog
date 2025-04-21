---
title: builder
createTime: 2025/04/21 17:11:28
permalink: /article/00llmew0/
---
# 建造者模式

## 概述

建造者模式是一种创建型设计模式，它可以让你分步骤创建复杂对象。该模式允许你使用相同的创建代码生成不同类型和形式的对象。

## 模式结构

- Director（指挥者）：调用建造者对象中的部件构造与装配方法完成复杂对象的创建
- Builder（抽象建造者）：创建一个Product对象的各个部件指定的抽象接口
- ConcreteBuilder（具体建造者）：实现抽象接口，构建和装配各个部件
- Product（产品）：被构建的复杂对象

## 实现示例

```java
// 产品类
public class Computer {
    private String cpu;
    private String ram;
    private String storage;
    
    public void setCpu(String cpu) {
        this.cpu = cpu;
    }
    
    public void setRam(String ram) {
        this.ram = ram;
    }
    
    public void setStorage(String storage) {
        this.storage = storage;
    }
}

// 抽象建造者
public interface ComputerBuilder {
    void buildCpu();
    void buildRam();
    void buildStorage();
    Computer getResult();
}

// 具体建造者
public class GamingComputerBuilder implements ComputerBuilder {
    private Computer computer = new Computer();
    
    @Override
    public void buildCpu() {
        computer.setCpu("高性能CPU");
    }
    
    @Override
    public void buildRam() {
        computer.setRam("32GB RAM");
    }
    
    @Override
    public void buildStorage() {
        computer.setStorage("2TB SSD");
    }
    
    @Override
    public Computer getResult() {
        return computer;
    }
}

// 指挥者
public class Director {
    private ComputerBuilder builder;
    
    public Director(ComputerBuilder builder) {
        this.builder = builder;
    }
    
    public void construct() {
        builder.buildCpu();
        builder.buildRam();
        builder.buildStorage();
    }
}
```

## 使用场景

1. 需要生成的对象具有复杂的内部结构
2. 需要生成的对象内部属性本身相互依赖
3. 对象的创建过程独立于创建该对象的类
4. 隔离复杂对象的创建和使用，并使得相同的创建过程可以创建不同的产品

## 优缺点

### 优点

1. 建造者独立，易扩展
2. 便于控制细节风险
3. 可以精细地控制产品的创建过程

### 缺点

1. 产品必须有共同点，范围有限制
2. 如果内部变化复杂，会有很多的建造类

## 与工厂模式的区别

1. 建造者模式更注重方法的调用顺序，工厂模式更注重创建对象
2. 建造者模式可以精细地控制产品的创建过程，工厂模式只关注产品的创建结果
3. 建造者模式对应的是多个部件或者复杂对象的创建，而工厂模式对应的是一个产品等级结构