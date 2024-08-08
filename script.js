// script.js

// 获取汉堡菜单按钮和导航菜单
const menuToggle = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

// 添加点击事件监听器
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active'); // 切换导航菜单的显示状态
    menuToggle.classList.toggle('active'); // 切换汉堡菜单按钮的状态
    document.body.classList.toggle('no-scroll'); // 切换滚动锁定状态
});

/* 动画效果 */

// 选择所有的导航链接
const navLinks = document.querySelectorAll('nav ul li a');

// 为每个导航链接添加点击事件监听器
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active'); // 隐藏导航菜单
        menuToggle.classList.remove('active'); // 重置汉堡菜单按钮状态
        document.body.classList.remove('no-scroll'); // 允许滚动
    });
});
