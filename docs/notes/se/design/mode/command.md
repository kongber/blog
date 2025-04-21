# 命令模式

## 概述

命令模式是一种行为型设计模式，它将一个请求封装成一个对象，从而使你可用不同的请求对客户进行参数化，对请求排队或记录请求日志，以及支持可撤销的操作。

## 模式结构

- Command（命令）：声明执行操作的接口
- ConcreteCommand（具体命令）：将一个接收者对象绑定于一个动作
- Invoker（调用者）：要求该命令执行这个请求
- Receiver（接收者）：知道如何实施与执行一个请求相关的操作

## 实现示例

```java
// 命令接口
public interface Command {
    void execute();
    void undo();
}

// 接收者
public class Light {
    public void turnOn() {
        System.out.println("灯打开了");
    }
    
    public void turnOff() {
        System.out.println("灯关闭了");
    }
}

// 具体命令
public class LightOnCommand implements Command {
    private Light light;
    
    public LightOnCommand(Light light) {
        this.light = light;
    }
    
    @Override
    public void execute() {
        light.turnOn();
    }
    
    @Override
    public void undo() {
        light.turnOff();
    }
}

public class LightOffCommand implements Command {
    private Light light;
    
    public LightOffCommand(Light light) {
        this.light = light;
    }
    
    @Override
    public void execute() {
        light.turnOff();
    }
    
    @Override
    public void undo() {
        light.turnOn();
    }
}

// 调用者
public class RemoteControl {
    private Command command;
    
    public void setCommand(Command command) {
        this.command = command;
    }
    
    public void pressButton() {
        command.execute();
    }
    
    public void pressUndo() {
        command.undo();
    }
}

// 客户端使用
public class Client {
    public static void main(String[] args) {
        // 创建接收者
        Light light = new Light();
        
        // 创建命令
        Command lightOn = new LightOnCommand(light);
        Command lightOff = new LightOffCommand(light);
        
        // 创建调用者
        RemoteControl remote = new RemoteControl();
        
        // 执行命令
        remote.setCommand(lightOn);
        remote.pressButton();  // 开灯
        remote.pressUndo();    // 撤销开灯
        
        remote.setCommand(lightOff);
        remote.pressButton();  // 关灯
        remote.pressUndo();    // 撤销关灯
    }
}
```

## 使用场景

1. 需要抽象出待执行的动作，然后以参数的形式提供出来
2. 需要在不同的时间指定请求、将请求排队和执行请求
3. 需要支持取消操作
4. 需要支持修改日志功能

## 优缺点

### 优点

1. 降低系统的耦合度
2. 新的命令可以很容易地加入到系统中
3. 可以比较容易地设计一个命令队列和宏命令
4. 可以方便地实现对请求的撤销和重做

### 缺点

1. 可能会导致某些系统有过多的具体命令类
2. 系统需要支持命令的撤销功能，需要实现每个命令的撤销操作

## 实际应用

1. GUI中的命令按钮和菜单项
2. 数据库事务管理
3. 文本编辑器的撤销重做功能
4. 宏命令功能

## 注意事项

1. 命令模式的本质是对命令进行封装，将发出命令的责任和执行命令的责任分割开
2. 命令模式使用的时候可以考虑使用原型模式，避免重复创建命令对象
3. 命令模式可以结合组合模式来实现宏命令