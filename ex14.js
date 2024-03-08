function getFileExtension(filename) {
  const dotIndex = filename.lastIndexOf('.');

  if (dotIndex !== -1) {
    const extension = filename.substring(dotIndex + 1);
    return extension;
  } else {
    return "No extension found";
  }
}

const filename1 = "example.txt";


const extension1 = getFileExtension(filename1);


console.log(`File extension of ${filename1}: ${extension1}`);
