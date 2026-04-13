const fs = require('fs');
const path = require('path');

// 测试间接引用处理
function testIndirectRefs() {
  console.log('测试间接引用处理...');
  
  // 检查collectRefsInRequestAndPatchDefinition.ts是否包含递归收集函数
  const collectRefsPath = '/mnt/sda1/projects/ts-gear/src/step/collectRefsInRequestAndPatchDefinition.ts';
  if (fs.existsSync(collectRefsPath)) {
    const content = fs.readFileSync(collectRefsPath, 'utf8');
    
    if (content.includes('collectAllReferencedTypes')) {
      console.log('✓ collectRefsInRequestAndPatchDefinition.ts 已添加递归收集函数');
    } else {
      console.log('✗ collectRefsInRequestAndPatchDefinition.ts 缺少递归收集函数');
    }
    
    if (content.includes('allReferencedTypes')) {
      console.log('✓ collectRefsInRequestAndPatchDefinition.ts 已添加完整引用集合');
    } else {
      console.log('✗ collectRefsInRequestAndPatchDefinition.ts 缺少完整引用集合');
    }
  }
  
  // 检查prepareWriteContent.ts是否正确使用引用集合
  const prepareWritePath = '/mnt/sda1/projects/ts-gear/src/step/prepareWriteContent.ts';
  if (fs.existsSync(prepareWritePath)) {
    const content = fs.readFileSync(prepareWritePath, 'utf8');
    
    if (content.includes('requestRefSet.has(typeName)')) {
      console.log('✓ prepareWriteContent.ts 正确使用requestRefSet进行过滤');
    } else {
      console.log('✗ prepareWriteContent.ts 过滤逻辑不正确');
    }
    
    if (!content.includes('requiredTypeNames')) {
      console.log('✓ prepareWriteContent.ts 已移除冗余的requiredTypeNames逻辑');
    } else {
      console.log('✗ prepareWriteContent.ts 仍包含冗余逻辑');
    }
  }
}

testIndirectRefs();