//I use chatGPT to assist in creating and building this p5 sketch. I have made improvements and adjustments to the code as necessary
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); // 设置背景色为黑色
}

function draw() {
  // 绘制背景形状（脸部背景）
  noStroke(); // 禁用描边
  for (let x = -width * 3; x < width * 6; x += 50) {
    for (let y = -height * 3; y < height * 6; y += 50) {
      let size = sin(frameCount / 50 + x / 50 + y / 50) * 20 + 30; // 根据正弦函数计算动态大小
      let colorValue = map(size, 10, 50, 100, 255); // 将大小映射到颜色值
      fill(colorValue); // 设置填充颜色
      ellipse(x, y, size, size); // 绘制椭圆
    }
  }

  // 绘制脸部
  fill(255, 200, 150); // 皮肤色
  ellipse(width / 2, height / 2, 300, 300); // 脸部形状

  // 绘制眼睛
  fill(255); // 白色
  ellipse(width / 2 - 50, height / 2 - 30, 60, 40); // 左眼
  ellipse(width / 2 + 50, height / 2 - 30, 60, 40); // 右眼

  // 绘制瞳孔
  fill(0); // 黑色
  ellipse(width / 2 - 50, height / 2 - 30, 20, 20); // 左瞳孔
  ellipse(width / 2 + 50, height / 2 - 30, 20, 20); // 右瞳孔

  // 绘制鼻子
  fill(255, 150, 150); // 粉色
  triangle(width / 2, height / 2, width / 2 - 20, height / 2 + 50, width / 2 + 20, height / 2 + 50); // 鼻子

  // 绘制嘴巴
  fill(255, 0, 0); // 红色
  rect(width / 2 - 50, height / 2 + 80, 100, 20, 20); // 嘴巴
}