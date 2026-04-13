const fs = require('fs');
const path = require('path');

// 测试优化效果
function testOptimization() {
  const nullableDefPath = '/mnt/sda1/projects/ts-gear/example/petProject/src/service/nullable/definition.ts';
  const petDefPath = '/mnt/sda1/projects/ts-gear/example/petProject/src/service/pet/definition.ts';
  
  if (fs.existsSync(nullableDefPath)) {
    const content = fs.readFileSync(nullableDefPath, 'utf8');
    const exportCount = (content.match(/^export /gm) || []).length;
    console.log(`nullable definition.ts 中导出的类型数量: ${exportCount}`);
  }
  
  if (fs.existsSync(petDefPath)) {
    const content = fs.readFileSync(petDefPath, 'utf8');
    const exportCount = (content.match(/^export /gm) || []).length;
    console.log(`pet definition.ts 中导出的类型数量: ${exportCount}`);
  }
}

testOptimization();