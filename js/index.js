const carouselContainer = document.querySelector(".carousel-container"); // 获取轮播容器
const images = document.querySelectorAll(".carousel img"); // 获取所有轮播图片
const indicators = document.querySelectorAll(".indicator"); // 获取所有指示器
const totalImages = images.length; // 图片总数
var urlN = new Array()
urlN[0] = "https://azurpromilia.manjuu.com/home/";
urlN[1] =  "https://www.heishenhua.com/";
urlN[2] =  "https://zzz.mihoyo.com/?utm_source=pcadbdsem001";
urlN[3] =  "https://projectmugen.163.com/";

let currentIndex = 0; // 当前显示图片的索引
let translateValue = 0; // 轮播容器的位移量
let interval; // 定时器

// 设置初始活动指示器
indicators[currentIndex].classList.add("active");

// 下一个图片展示
function nextSlide() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
        translateValue -= 100; // 向左移动一个图片的宽度
    } else {
        currentIndex = 0;
        translateValue = 0; // 回到第一张图片
    }
    updateCarousel();
}

// 上一个图片展示
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        translateValue += 100; // 向右移动一个图片的宽度
    } else {
        currentIndex = totalImages - 1;
        translateValue = -100 * (totalImages - 1); // 回到最后一张图片
    }
    updateCarousel();
}

// 更新轮播容器的位置
function updateCarousel() {
    carouselContainer.style.transform = `translateX(${translateValue}%)`;

    // 更新活动指示器
    indicators.forEach((indicator, index) => {
        indicator.classList.remove("active");
        if (index === currentIndex) {
            indicator.classList.add("active");
        }
    });
}

// 自动轮播
interval = setInterval(nextSlide, 3000);

//点击跳转
carouselContainer.addEventListener("click", () => {
    console.log(urlN[currentIndex])
    window.open(urlN[currentIndex]);
})
// 鼠标悬停时暂停轮播
carouselContainer.addEventListener("mouseenter", () => {
    clearInterval(interval);
});

carouselContainer.addEventListener("mouseleave", () => {
    interval = setInterval(nextSlide, 3000);
});

// 点击指示器切换图片
indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        currentIndex = index;
        translateValue = -100 * index;
        updateCarousel();
    });
});

// 键盘导航
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        prevSlide();
    } else if (event.key === "ArrowRight") {
        nextSlide();
    }
});

// 下拉菜单功能
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
let timeout;

dropdown.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
    dropdownContent.style.display = "block";
});

dropdown.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
        dropdownContent.style.display = "none";
    }, 200); // 添加延迟以防止意外的鼠标移出
});

// 视频全屏切换功能
function toggleFullscreen(video) {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        /* IE/Edge */
        video.msRequestFullscreen();
    }
}
