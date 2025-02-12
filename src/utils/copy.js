export default function (txt) {
    let Word = document.createElement("textarea");
    Word.value = txt;
    document.body.appendChild(Word);
    Word.select();
    // 调用浏览器的复制命令
    document.execCommand("Copy");
    // 将input元素隐藏，通知操作完成！
    document.body.appendChild(Word);
    document.body.removeChild(Word);
    this.$message.success("复制成功！");
}
