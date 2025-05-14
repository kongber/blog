---
title: singleton
createTime: 2025/04/21 17:11:10
permalink: /article/ryv6o5hp/
---
# 单例模式

### 1. 核心思想
- 保证一个类仅有一个实例，并提供一个访问它的全局访问点
- 构造函数私有化，禁止外部直接创建对象
- 提供一个静态方法获取唯一实例
- 确保线程安全（在多线程环境下）
### 2. 适用场景
- 需要频繁实例化然后销毁的对象
- 创建对象时耗时过多或耗费资源过多，但又经常用到的对象
- 系统只需要一个实例对象，如系统配置信息类
- 需要频繁访问数据库或文件的对象
### 3. 优缺点分析
优点：

- 内存中只有一个实例，减少了内存开销
- 避免对资源的多重占用
- 提供了对唯一实例的全局访问点
- 实例的创建时机可控
缺点：

- 单例模式一般没有接口，扩展困难
- 单例类的职责过重，在一定程度上违背了单一职责原则
- 滥用单例可能造成模块间的强耦合
- 单例模式的测试可能比较困难
### 4. 实践示例
```
// 懒汉式（线程安全）
public class Singleton {
    // 私有构造函数
    private Singleton() {}
    
    // 私有静态实例
    private static volatile 
    Singleton instance;
    
    // 公共静态获取方法
    public static Singleton 
    getInstance() {
        if (instance == null) {
            synchronized 
            (Singleton.class) {
                if (instance == 
                null) {
                    instance = new 
                    Singleton();
                }
            }
        }
        return instance;
    }
}

// 饿汉式
public class EagerSingleton {
    // 私有构造函数
    private EagerSingleton() {}
    
    // 在类加载时就创建实例
    private static final 
    EagerSingleton instance = new 
    EagerSingleton();
    
    // 公共静态获取方法
    public static EagerSingleton 
    getInstance() {
        return instance;
    }
}

// 使用示例
public class SingletonDemo {
    public void demo() {
        // 获取单例实例
        Singleton singleton1 = 
        Singleton.getInstance();
        Singleton singleton2 = 
        Singleton.getInstance();
        
        // 验证是否是同一个实例
        System.out.println
        (singleton1 == 
        singleton2);  // 输出：true
    }
}
```
### 5. 实践建议
- 在确实需要单例的场景下才使用单例模式
- 注意线程安全问题，选择合适的实现方式
- 考虑使用枚举实现单例，可以防止反序列化重新创建新的对象
- 注意单例类的职责单一，不要让单例类负责太多功能
- 考虑到单例类的可测试性，可以为其设计接口或抽象类