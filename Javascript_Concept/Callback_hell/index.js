fs.readFile("file1.txt", "utf8", (err, data1) => {
  if (err) {
    console.log(err);
  } else {
    fs.readFile("file2.txt", "utf8", (err, data2) => {
      if (err) {
        console.log(err);
      } else {
        fs.readFile("file2.txt", "utf8", (err, data3) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data1 + data2 + data3);
          }
        });
      }
    });
  }
});
