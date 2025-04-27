---
title: singleton
createTime: 2025/04/21 17:11:10
permalink: /article/ryv6o5hp/
---
# 单例模式

## 概述

单例模式是一种创建型设计模式，它保证一个类仅有一个实例，并提供一个访问它的全局访问点。单例模式是最简单的设计模式之一，但也是最常用的设计模式之一。

## 实现方式

### 懒汉式（线程不安全）

```java
public class Singleton {
    private static Singleton instance;
    private Singleton() {}
    
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

### 懒汉式（线程安全）

```java
public class Singleton {
    private static Singleton instance;
    private Singleton() {}
    
    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

### 饿汉式

```java
public class Singleton {
    private static Singleton instance = new Singleton();
    private Singleton() {}
    
    public static Singleton getInstance() {
        return instance;
    }
}
```

### 双重检查锁

```java
public class Singleton {
    private volatile static Singleton instance;
    private Singleton() {}
    
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```

### 静态内部类

```java
public class Singleton {
    private Singleton() {}
    
    private static class SingletonHolder {
        private static final Singleton INSTANCE = new Singleton();
    }
    
    public static Singleton getInstance() {
        return SingletonHolder.INSTANCE;
    }
}
```

## 应用场景

1. 需要频繁实例化然后销毁的对象
2. 创建对象时耗时过多或耗费资源过多，但又经常用到的对象
3. 有状态的工具类对象
4. 频繁访问数据库或文件的对象

## 优缺点

### 优点

1. 内存中只有一个实例，减少了内存开销
2. 避免对资源的多重占用
3. 设置全局访问点，严格控制访问

### 缺点

1. 没有接口，扩展困难
2. 如果实例化的对象长期不被利用，会造成内存的浪费

## 注意事项

1. 多线程环境下需要特别注意线程安全问题
2. 注意延迟加载带来的性能问题
3. 注意序列化可能破坏单例的问题