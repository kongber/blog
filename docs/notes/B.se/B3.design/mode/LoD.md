---
title: LoD
createTime: 2025/05/14 16:37:28
permalink: /article/nvap5fui/
---

# 迪米特法则 (LoD)

违反迪米特法则的代码

```java 
public class Button {
    public void Click() {
        // 直接访问和修改其他控件，违反迪米特法则
        Label label = new Label();
        label.Text = "Clicked";
        label.ForeColor = Color.Red;
        
        TextBox textBox = new TextBox();
        textBox.BackColor = Color.Yellow;
        textBox.Text = "Button Clicked";
    }
}
```

符合迪米特法则的代码

```java 
// 1. 引入中间层 UIController
public class UIController {
    private Label label;
    private TextBox textBox;
    
    public UIController(Label label, TextBox textBox) {
        this.label = label;
        this.textBox = textBox;
    }
    
    public void UpdateUI() {
        UpdateLabel();
        UpdateTextBox();
    }
    
    private void UpdateLabel() {
        label.Text = "Clicked";
        label.ForeColor = Color.Red;
    }
    
    private void UpdateTextBox() {
        textBox.BackColor = Color.Yellow;
        textBox.Text = "Button Clicked";
    }
}

// 2. Button类只需要知道UIController
public class Button {
    private UIController uiController;
    
    public Button(UIController uiController) {
        this.uiController = uiController;
    }
    
    public void Click() {
        // Button只需要知道UIController，不需要知道Label和TextBox的存在
        uiController.UpdateUI();
    }
}
```

From: Claude-3.5