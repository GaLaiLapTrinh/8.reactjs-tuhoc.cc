import QUESTIONS from "../src/questions.js";

// thuật toán Fisher–Yates Shuffle
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

/*
  Ví dụ với mảng arr = [A, B, C, D]:
  Bắt đầu từ phần tử cuối i = 3 (D)
  Chọn ngẫu nhiên j ∈ [0,3], ví dụ j = 1
  Swap arr[3] và arr[1]: [A, D, C, B]
  Tiếp tục với i = 2, chọn j ∈ [0,2] ...
  Kết thúc khi i = 1
  */
// debugger;
function shuffleArray(array) {
  for (let i = array.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//tạo bản sao mảng gốc 0 để xáo trộn (0 làm thay đổi mảng gốc) -
const shuffledAnswers = [...QUESTIONS[1].answers];
const outPutAns = shuffleArray(shuffledAnswers);
console.log(outPutAns);
