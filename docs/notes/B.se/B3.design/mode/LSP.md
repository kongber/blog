---
title: LSP
createTime: 2025/05/14 16:49:49
permalink: /article/yitq56iq/
---
# 里氏替换原则 (LSP)

违反里氏替换原则的设计
```java
class Rectangle {
    protected int width;
    protected int height;
    
    public void setWidth(int width) {
        this.width = width;
    }
    
    public void setHeight(int height) {
        this.height = height;
    }
    
    public int getArea() {
        return width * height;
    }
}

class Square extends Rectangle {
    // 正方形的宽高必须相等，所以重写了设置方法
    @Override
    public void setWidth(int width) {
        this.width = width;
        this.height = width;  // 违反LSP，改变了父类的行为
    }
    
    @Override
    public void setHeight(int height) {
        this.height = height;
        this.width = height;  // 违反LSP，改变了父类的行为
    }
}
``` 

符合里氏替换原则的设计
```java
interface Shape {
    int getArea();
}

class ImprovedRectangle implements Shape {
    private int width;
    private int height;
    
    public void setWidth(int width) {
        this.width = width;
    }
    
    public void setHeight(int height) {
        this.height = height;
    }
    
    public int getArea() {
        return width * height;
    }
}

class ImprovedSquare implements Shape {
    private int side;
    
    public void setSide(int side) {
        this.side = side;
    }
    
    public int getArea() {
        return side * side;
    }
}
```