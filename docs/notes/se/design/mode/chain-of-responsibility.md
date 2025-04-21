# 责任链模式

## 概述

责任链模式是一种行为型设计模式，它为请求创建了一个接收者对象的链。这种模式让多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系。将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止。

## 模式结构

- Handler（抽象处理者）：定义一个处理请求的接口，包含抽象处理方法和一个后继连接
- ConcreteHandler（具体处理者）：实现抽象处理者的处理方法，判断能否处理该请求，如果可以处理请求则处理，否则将该请求转给它的后继者
- Client（客户类）：创建处理链，并向链头的具体处理者对象提交请求

## 实现示例

```java
// 抽象处理者
public abstract class Handler {
    protected Handler successor;
    
    public void setSuccessor(Handler successor) {
        this.successor = successor;
    }
    
    public abstract void handleRequest(int request);
}

// 具体处理者A
public class ConcreteHandlerA extends Handler {
    @Override
    public void handleRequest(int request) {
        if (request >= 0 && request < 10) {
            System.out.println("处理者A处理请求：" + request);
        } else if (successor != null) {
            successor.handleRequest(request);
        }
    }
}

// 具体处理者B
public class ConcreteHandlerB extends Handler {
    @Override
    public void handleRequest(int request) {
        if (request >= 10 && request < 20) {
            System.out.println("处理者B处理请求：" + request);
        } else if (successor != null) {
            successor.handleRequest(request);
        }
    }
}

// 具体处理者C
public class ConcreteHandlerC extends Handler {
    @Override
    public void handleRequest(int request) {
        if (request >= 20 && request < 30) {
            System.out.println("处理者C处理请求：" + request);
        } else if (successor != null) {
            successor.handleRequest(request);
        }
    }
}

// 客户端使用
public class Client {
    public static void main(String[] args) {
        // 组装责任链
        Handler handlerA = new ConcreteHandlerA();
        Handler handlerB = new ConcreteHandlerB();
        Handler handlerC = new ConcreteHandlerC();
        
        handlerA.setSuccessor(handlerB);
        handlerB.setSuccessor(handlerC);
        
        // 提交请求
        handlerA.handleRequest(5);    // 由处理者A处理
        handlerA.handleRequest(15);   // 由处理者B处理
        handlerA.handleRequest(25);   // 由处理者C处理
        handlerA.handleRequest(35);   // 无人处理
    }
}
```

## 使用场景

1. 有多个对象可以处理一个请求，哪个对象处理该请求由运行时刻自动确定
2. 想在不明确指定接收者的情况下，向多个对象中的一个提交一个请求
3. 可动态指定一组对象处理请求，或添加新的处理者

## 优缺点

### 优点

1. 降低耦合度，一个对象无需知道是其他哪一个对象处理其请求
2. 增强了系统的可扩展性，可以根据需要增加新的处理类
3. 增强了给对象指派职责的灵活性

### 缺点

1. 不能保证请求一定被处理
2. 系统性能将受到一定影响，而且在进行代码调试时不太方便
3. 可能会造成循环调用

## 实际应用

1. Java Web中的Filter过滤器
2. Spring Security的权限验证
3. 日志级别的处理
4. 异常处理机制

## 注意事项

1. 避免责任链过长，造成系统性能下降
2. 注意设置合适的终止条件，避免循环调用
3. 责任链的顺序很重要，需要合理设置处理者的先后顺序