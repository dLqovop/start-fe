const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({
    headless: true, // headless 모드로 설정 (창이 뜨지 않음)
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.melon.com/chart/index.htm');

  const chartItems = await page.$$eval('.lst50', rows => {
    return rows.map(row => {
      const rank = row.querySelector('.rank').innerText;
      const title = row.querySelector('.ellipsis.rank01 > span > a').innerText;
      return { rank, title };
    });
  });

  const chartData = JSON.stringify(chartItems, null, 2);
  fs.writeFileSync('melon_chart.json', chartData, 'utf-8');
  console.log('Melon 음악 차트 크롤링이 완료되었습니다.');

  await browser.close();
})();
