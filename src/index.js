const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName, fileContent, (error) => { console.log(error) })
}
myFileWriter("File.txt", "Hello")

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = await fs.readFile(fileName, { encoding: "utf-8" }, (error) => {
			console.log(error);
	})
	console.log(data);
}
myFileReader("File.txt");

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName, fileContent, (error) => { console.log(error) })
}
myFileUpdater("File.txt", " World")
const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName, (error) => { console.log(error) })
}
myFileDeleter("File.txt")


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }

// function findMissing(arr,N){
// 	let i;
// 	let temp = [];
// 	for (i = 0; i <= N; i++) {
// 			  temp[i] = 0;
// 		  }
   
// 		  for (i = 0; i < N; i++) {
// 			  temp[arr[i] - 1] = 1;
// 		  }
   
// 		  let ans = 0;
// 		  for (i = 0; i <= N; i++) {
// 			  if (temp[i] == 0)
// 				  ans = i + 1;
// 		  }
// 		  console.log(ans);
//   }