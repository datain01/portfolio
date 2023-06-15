const fs = require('fs');


// ========================================================
//                        영어 번역
// ========================================================
fs.readFile('./locales/en.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const jsonData = JSON.parse(data);

  fs.readFile('index-template.html', 'utf8', (err, htmlData) => {
    if (err) {
      console.error(err);
      return;
    }

    // directive와 값을 치환
    for (const key in jsonData) {
      const value = jsonData[key];
      const keyReplace = new RegExp(`{{${key}}}`, 'g');
      htmlData = htmlData.replace(keyReplace, value);
    }
// 영어 index-en.html /dist에 만들기
    fs.writeFile('../dist/index-en.html', htmlData, 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('File written successfully.');
    });
  });
});



// ========================================================
//                        한국어 번역
// ========================================================
  fs.readFile('./locales/kr.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

  const jsonData = JSON.parse(data);

  fs.readFile('index-template.html', 'utf8', (err, htmlData) => {
    if (err) {
      console.error(err);
      return;
    }

    // directive와 값을 치환
    for (const key in jsonData) {
      const value = jsonData[key];
      const keyReplace = new RegExp(`{{${key}}}`, 'g');
      htmlData = htmlData.replace(keyReplace, value);
    }

// 한국어 index-kr.html /dist에 만들기
fs.writeFile('../dist/index.html', htmlData, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully.');
});
});
});
