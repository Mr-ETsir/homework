document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const resetButton = document.getElementById("resetButton");
    const articles = document.querySelectorAll(".news article");
    const articlesPerPage = 3; // 每页显示的文章数量
    let currentPage = 1; // 当前页数
  
    // 初始化显示第一页的文章
    displayArticles(currentPage);
  
    // 监听搜索按钮点击事件
    searchButton.addEventListener("click", function () {
      const searchTerm = searchInput.value.trim().toLowerCase();
  
      // 根据搜索关键词显示匹配的文章
      articles.forEach((article) => {
        const titleElement = article.querySelector("h3, h4, h5, h6, h7, h8, h9, h10, h11");
        if (titleElement) {
          const title = titleElement.textContent.toLowerCase();
          if (title.includes(searchTerm)) {
            article.style.display = "block";
          } else {
            article.style.display = "none";
          }
        }
      });
  
      // 重置当前页数为第一页
      currentPage = 1;
      displayArticles(currentPage);
    });
  
    // 重置按钮点击事件
    resetButton.addEventListener("click", function () {
      // 显示所有文章
      articles.forEach((article) => {
        article.style.display = "block";
      });
      // 清空搜索输入框
      searchInput.value = "";
  
      // 重置当前页数为第一页
      currentPage = 1;
      displayArticles(currentPage);
    });
  
    // 显示指定页数的文章
    function displayArticles(page) {
      articles.forEach((article, index) => {
        const startIndex = (page - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage - 1;
        if (index >= startIndex && index <= endIndex) {
          article.style.display = "block";
        } else {
          article.style.display = "none";
        }
      });
    }
  
    // 翻页按钮点击事件（这里假设有“上一页”和“下一页”按钮）
    const prevPageButton = document.getElementById("prevPageButton");
    const nextPageButton = document.getElementById("nextPageButton");
  
    prevPageButton.addEventListener("click", function () {
      if (currentPage > 1) {
        currentPage--;
        displayArticles(currentPage);
      }
    });
  
    nextPageButton.addEventListener("click", function () {
      const totalPages = Math.ceil(articles.length / articlesPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        displayArticles(currentPage);
      }
    });
  });
  