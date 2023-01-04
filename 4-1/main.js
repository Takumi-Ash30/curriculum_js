var app = new Vue({
  el: '#app',
  data: {
      list: [],
      addText: '',
      show: false,
      keyword: '',
  },
  //watchでlistの変更を監視
  watch: {
      list: {
          handler: function() {
              //localStorageにデータを保存
              localStorage.setItem("list", JSON.stringify(this.list));
          },
          deep: true
      }
  },
  //マウントされた時にlocalStorageからデータを取得
  mounted: function() {
      this.list = JSON.parse(localStorage.getItem("list")) || [];
  },
  methods: {
      addToDo: function() {
          if (this.addText !== '') {
              this.list.push({
                  text: this.addText, 
                  isChecked: false,
              });
              this.show = true;
              console.log(this.show);
          }
          this.addText = '';
      },

      deleteBtn: function() {
          this.list = this.list.filter(function(todo) {
              return !todo.isChecked;
          });
          console.log(this.show)
          if(this.list.length === 0){
            this.show = false;
            console.log(this.show);
          }
      }
  },
  computed: {
    task: function() {
      let num=0;
      for(let i=0;i<this.list.length;++i){
        if(this.list[i].isChecked) ++num;
      }
      return (this.list.length-num) + '/' + this.list.length
    },

    searchTodo: function() {
      list.indexOf(keyword)
      if(todo.text == keyword){
        return 
      }
    }
  }
});