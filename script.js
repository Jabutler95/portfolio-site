function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// function findMedian(arr) {
//     // Write your code here
//     // divide the length of the array by 2
//     let dividedLength = arr.length / 2
//     // if the length divided is a whole number, that is the median
//     if (dividedLength % 1 == 0) {
//         console.log(arr[dividedLength])
//     } else {
//         console.log((arr[dividedLength] + (arr[dividedLength + 1])) / 2)
//     }
// }