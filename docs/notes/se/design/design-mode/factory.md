# 工厂模式

## 概述

工厂模式是一种创建型设计模式，它提供了一种创建对象的最佳方式。在工厂模式中，我们在创建对象时不会对客户端暴露创建逻辑，并且是通过使用一个共同的接口来指向新创建的对象。

## 主要分类

### 简单工厂模式

- 定义：由一个工厂对象决定创建出哪一种产品类的实例
- 优点：只需要传入正确的参数，就可以获取所需要的对象
- 缺点：工厂类职责过重，增加新产品需要修改工厂类的判断逻辑

```java
public class SimpleFactory {
    public Product createProduct(String type) {
        if (type.equals("A")) {
            return new ProductA();
        } else if (type.equals("B")) {
            return new ProductB();
        }
        return null;
    }
}
```

### 工厂方法模式

- 定义：定义一个创建对象的接口，让子类决定实例化哪个产品类
- 优点：符合开闭原则，扩展性好
- 缺点：增加新产品时需要增加新的工厂类，导致系统类的个数增加

```java
public interface Factory {
    Product createProduct();
}

public class FactoryA implements Factory {
    @Override
    public Product createProduct() {
        return new ProductA();
    }
}
```

### 抽象工厂模式

- 定义：提供一个创建一系列相关或相互依赖对象的接口
- 优点：可以确保同一工厂生产的产品相互匹配
- 缺点：扩展新种类产品时需要修改所有的工厂类

```java
public interface AbstractFactory {
    ProductA createProductA();
    ProductB createProductB();
}

public class ConcreteFactory1 implements AbstractFactory {
    @Override
    public ProductA createProductA() {
        return new ProductA1();
    }
    
    @Override
    public ProductB createProductB() {
        return new ProductB1();
    }
}
```

## 使用场景

1. 需要根据环境变量创建不同的实例时
2. 处理大量具有相同属性的小对象时
3. 需要屏蔽产品的具体实现，只关心接口时

## 注意事项

1. 工厂类要做到职责单一，避免过度设计
2. 需要考虑系统的可扩展性，避免后续维护困难
3. 合理使用配置文件或反射机制来存储产品信息