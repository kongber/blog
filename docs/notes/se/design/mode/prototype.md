# 原型模式

## 概述

原型模式是一种创建型设计模式，它允许你复制已有对象，而又无需使代码依赖它们所属的类。原型模式使用克隆方法来复制对象，这种方式比使用 new 操作符创建对象更加高效。

## 实现方式

### 浅克隆

```java
public class Prototype implements Cloneable {
    private String field;
    
    public Prototype(String field) {
        this.field = field;
    }
    
    @Override
    public Prototype clone() {
        try {
            return (Prototype) super.clone();
        } catch (CloneNotSupportedException e) {
            return null;
        }
    }
}
```

### 深克隆

```java
public class DeepPrototype implements Serializable {
    private String field;
    private Reference reference;
    
    public DeepPrototype deepClone() {
        try {
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            ObjectOutputStream oos = new ObjectOutputStream(bos);
            oos.writeObject(this);
            
            ByteArrayInputStream bis = new ByteArrayInputStream(bos.toByteArray());
            ObjectInputStream ois = new ObjectInputStream(bis);
            return (DeepPrototype) ois.readObject();
        } catch (Exception e) {
            return null;
        }
    }
}
```

## 使用场景

1. 当一个系统应该独立于它的产品创建、构成和表示时
2. 当要实例化的类是在运行时刻指定时
3. 当对象的创建成本比克隆更高时
4. 当一个类的实例只能有几个不同状态组合中的一种时

## 优缺点

### 优点

1. 性能提高，避免了构造函数的约束
2. 简化对象的创建，无需知道对象创建的细节
3. 逃避构造函数的约束

### 缺点

1. 配备克隆方法需要对类的功能进行通盘考虑
2. 必须实现 Cloneable 接口
3. 深拷贝和浅拷贝的问题需要考虑

## 注意事项

1. 注意深克隆和浅克隆的使用场景
2. 注意克隆破坏单例模式
3. 注意克隆对象的构造函数是否会被执行

## 实际应用示例

```java
// 原型管理器
public class PrototypeManager {
    private static Map<String, Prototype> prototypes = new HashMap<>();
    
    static {
        prototypes.put("type1", new ConcretePrototype1());
        prototypes.put("type2", new ConcretePrototype2());
    }
    
    public static Prototype getPrototype(String type) {
        Prototype prototype = prototypes.get(type);
        return prototype != null ? prototype.clone() : null;
    }
}
```

## 与其他模式的关系

1. 抽象工厂模式中常用原型模式来实现具体产品的创建
2. 原型模式可以帮助命令模式存储命令的历史记录
3. 原型模式可以作为备忘录模式的一个替代方案