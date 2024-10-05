document.addEventListener('DOMContentLoaded', function() {
    // 获取密码输入框
    const passwordInput = document.querySelector('.password input[type="password"]');
    // 获取眼睛图标
    const eyeIcon = document.querySelector('.password .ri-eye-off-line');

    // 切换密码可见性
    eyeIcon.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.classList.remove('ri-eye-off-line');
            eyeIcon.classList.add('ri-eye-line');
        } else {
            passwordInput.type = 'password';
            eyeIcon.classList.remove('ri-eye-line');
            eyeIcon.classList.add('ri-eye-off-line');
        }
    });

    // 模拟表单提交处理
    document.querySelector('.submit').addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认的表单提交行为

        // 获取表单数据
        const username = document.querySelector('input[type="username"]').value;
        const password = passwordInput.value;

        // 这里可以添加验证逻辑，例如检查用户名和密码是否为空等
        // 获取包含错误信息的p标签
        let loginError = document.querySelector('.login_error');
        if (!username || !password) {
            loginError.textContent = "请确保填写了用户名和密码！";
        }else if(username == "admin" && password == "admin")
        {
            // 假设这是你的登录逻辑，实际应用中应该发送到服务器进行验证
            loginError.textContent = `登录成功，欢迎 ${username} ！`;
        } else {
            loginError.textContent = "用户名或密码输入错误！";
        }
    });
});