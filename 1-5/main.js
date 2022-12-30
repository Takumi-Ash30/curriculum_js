function createJuice(fruits) {
  console.log(fruits + "を受け取りました。ジュースにして返します。");

  return fruits + "Juice";
}

let Juice = createJuice(
  "orange");
console.log(Juice + "が届きました。")