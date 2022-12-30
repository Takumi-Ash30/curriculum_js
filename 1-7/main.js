class Taiyaki {
  constructor(guzai) {
    this.guzai = guzai;
  }

  confirm(){
    console.log("中身は" + this.guzai + "です");
  }
};

let anko = new Taiyaki("あんこ");
let cream = new Taiyaki("クリーム");
let cheese = new Taiyaki("チーズ");

anko.confirm();
cream.confirm();
cheese.confirm();