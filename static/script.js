var currentDomain = window.location.hostname;

if (currentDomain.includes('peter267.github.io')) {
    var script = document.createElement('script');
    script.src = 'https://umami.peter267.dpdns.org/script.js'; // 请替换为您的实际脚本URL
    script.setAttribute('data-website-id', '812ba1be-85fb-4994-a4d0-fb2289eab28c');
    script.async = true; // 将script的async属性设置为true，实现异步加载
    document.head.appendChild(script);
    console.log('========成功加载 [站点1] 统计分析工具代码========');
} else { // 比如本地调试，就不需要统计了，要不然会发现统计页面很多来自本地localhost
    console.log('========当前网站不需要加载统计分析工具========');
}