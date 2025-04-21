# 策略模式

## 概述

策略模式是一种行为型设计模式，它定义了一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。策略模式让算法独立于使用它的客户而变化，也称为政策模式（Policy）。

## 模式结构

- Context（上下文）：持有一个策略类的引用，最终给客户端调用
- Strategy（抽象策略类）：定义了一个公共接口，各种不同的算法以不同的方式实现这个接口
- ConcreteStrategy（具体策略类）：实现了抽象策略定义的接口，提供具体的算法实现

## 实现示例

```java
// 策略接口
public interface Strategy {
    int doOperation(int num1, int num2);
}

// 具体策略实现
public class OperationAdd implements Strategy {
    @Override
    public int doOperation(int num1, int num2) {
        return num1 + num2;
    }
}

public class OperationSubtract implements Strategy {
    @Override
    public int doOperation(int num1, int num2) {
        return num1 - num2;
    }
}

public class OperationMultiply implements Strategy {
    @Override
    public int doOperation(int num1, int num2) {
        return num1 * num2;
    }
}

// 上下文
public class Context {
    private Strategy strategy;
    
    public Context(Strategy strategy) {
        this.strategy = strategy;
    }
    
    public int executeStrategy(int num1, int num2) {
        return strategy.doOperation(num1, num2);
    }
}

// 客户端使用
public class Client {
    public static void main(String[] args) {
        Context context = new Context(new OperationAdd());
        System.out.println("10 + 5 = " + context.executeStrategy(10, 5));
        
        context = new Context(new OperationSubtract());
        System.out.println("10 - 5 = " + context.executeStrategy(10, 5));
        
        context = new Context(new OperationMultiply());
        System.out.println("10 * 5 = " + context.executeStrategy(10, 5));
    }
}
```

## 使用场景

1. 一个系统需要动态地在几种算法中选择一种
2. 一个类定义了多种行为，并且这些行为在这个类的操作中以多个条件语句的形式出现
3. 系统中各算法彼此完全独立，且要求对客户隐藏具体算法的实现细节

## 优缺点

### 优点

1. 算法可以自由切换
2. 避免使用多重条件判断
3. 扩展性良好，增加新的策略很方便

### 缺点

1. 策略类会增多
2. 所有策略类都需要对外暴露
3. 客户端必须知道所有的策略类，并自行决定使用哪一个策略类

## 实际应用

1. 商场促销策略
2. 旅行路线规划
3. 支付方式选择
4. 文件压缩算法选择

## 与其他模式的关系

1. 工厂模式：工厂模式是创建型模式，关注对象的创建；策略模式是行为型模式，关注行为的封装
2. 状态模式：状态模式的行为是平行的，不可相互替换；策略模式的行为是彼此独立的，可以相互替换
3. 命令模式：命令模式中的命令可以组合使用；策略模式中的策略通常是单一的算法

## 注意事项

1. 策略模式的使用场景是算法的自由切换
2. 策略模式是一种替代继承的方法，可以通过组合来实现算法的切换
3. 在策略较少的情况下，可以考虑使用枚举类型来实现策略模式