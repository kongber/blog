---
title: observer
createTime: 2025/04/21 17:13:27
permalink: /article/ps6eh1z3/
---
# 观察者模式

## 概述

观察者模式是一种行为型设计模式，它定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。这个主题对象在状态发生变化时，会通知所有观察者对象，使它们能够自动更新自己。

## 模式结构

- Subject（主题）：被观察的对象，包含观察者列表和通知方法
- Observer（观察者）：定义一个更新接口，使得在主题状态发生改变时能够得到通知
- ConcreteSubject（具体主题）：将有关状态存入具体观察者对象
- ConcreteObserver（具体观察者）：实现抽象观察者角色所要求的更新接口

## 实现示例

```java
// 观察者接口
public interface Observer {
    void update(String message);
}

// 主题接口
public interface Subject {
    void registerObserver(Observer observer);
    void removeObserver(Observer observer);
    void notifyObservers();
}

// 具体主题
public class ConcreteSubject implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private String message;
    
    @Override
    public void registerObserver(Observer observer) {
        observers.add(observer);
    }
    
    @Override
    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }
    
    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(message);
        }
    }
    
    public void setMessage(String message) {
        this.message = message;
        notifyObservers();
    }
}

// 具体观察者
public class ConcreteObserver implements Observer {
    private String name;
    
    public ConcreteObserver(String name) {
        this.name = name;
    }
    
    @Override
    public void update(String message) {
        System.out.println(name + "收到消息：" + message);
    }
}
```

## 使用场景

1. 当一个对象的改变需要同时改变其他对象时
2. 当一个对象必须通知其他对象，而它又不知道这些对象是谁时
3. 当一个抽象模型有两个方面，其中一个方面依赖于另一个方面时

## 优缺点

### 优点

1. 观察者和被观察者是抽象耦合的
2. 建立一套触发机制
3. 支持广播通信

### 缺点

1. 如果一个被观察者对象有很多的直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间
2. 如果观察者和观察目标之间有循环依赖的话，观察目标会触发它们之间进行循环调用，可能导致系统崩溃
3. 观察者模式没有相应的机制让观察者知道所观察的目标对象是怎么发生变化的

## 实际应用

1. 事件处理系统
2. GUI框架中的事件监听
3. 消息队列的订阅-发布系统
4. Spring框架中的事件机制

## 注意事项

1. 避免循环调用
2. 注意线程安全问题
3. 注意内存泄漏问题，在不需要观察者时要及时取消注册