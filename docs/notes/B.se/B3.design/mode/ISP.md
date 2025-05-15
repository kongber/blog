---
title: ISP
createTime: 2025/05/14 16:40:59
permalink: /article/yk8c5b8n/
---

# 接口隔离原则 (ISP)

违反接口隔离原则的设计

```java
interface Worker {
    void work();
    void eat();
    void sleep();
}

class Robot implements Worker {
    public void work() {
        System.out.println("Robot is working");
    }
    
    public void eat() {
        // 机器人不需要吃饭，但被迫实现这个方法
        throw new UnsupportedOperationException();
    }
    
    public void sleep() {
        // 机器人不需要睡觉，但被迫实现这个方法
        throw new UnsupportedOperationException();
    }
}
```

符合接口隔离原则的设计

```java 
interface Workable {
    void work();
}

interface Eatable {
    void eat();
}

interface Sleepable {
    void sleep();
}

// 人类需要实现所有接口
class Human implements Workable, Eatable, Sleepable {
    public void work() {
        System.out.println("Human is working");
    }
    
    public void eat() {
        System.out.println("Human is eating");
    }
    
    public void sleep() {
        System.out.println("Human is sleeping");
    }
}

// 机器人只需要实现工作接口
class ImprovedRobot implements Workable {
    public void work() {
        System.out.println("Robot is working");
    }
}
```

From: Claude-3.5