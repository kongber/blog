---
title: DIP
createTime: 2025/05/14 16:43:44
permalink: /article/bl6wupav/
---

依赖倒置原则 (DIP)

违反依赖倒置原则的设计
```java
class EmailSender {
    public void send(String message) {
        System.out.println("发送邮件: " + message);
    }
}

class NotificationService {
    private EmailSender emailSender = new EmailSender(); // 高层模块直接依赖低层模块
    
    public void notify(String message) {
        emailSender.send(message);
    }
}
```

符合依赖倒置原则的设计

```java 
interface MessageSender {
    void send(String message);
}

class ImprovedEmailSender implements MessageSender {
    public void send(String message) {
        System.out.println("发送邮件: " + message);
    }
}

class SMSSender implements MessageSender {
    public void send(String message) {
        System.out.println("发送短信: " + message);
    }
}

class ImprovedNotificationService {
    private MessageSender messageSender; // 依赖抽象接口
    
    public ImprovedNotificationService(MessageSender sender) {
        this.messageSender = sender;
    }
    
    public void notify(String message) {
        messageSender.send(message);
    }
}

// 使用示例
public class Main {
    public static void main(String[] args) {
        // 可以灵活切换不同的消息发送方式
        MessageSender emailSender = new ImprovedEmailSender();
        MessageSender smsSender = new SMSSender();
        
        ImprovedNotificationService emailNotification = new ImprovedNotificationService(emailSender);
        ImprovedNotificationService smsNotification = new ImprovedNotificationService(smsSender);
        
        emailNotification.notify("测试消息");
        smsNotification.notify("测试消息");
    }
}
```

From: Claude-3.5