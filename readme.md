## 参考記事
https://qiita.com/riversun/items/6c30a0d0897194677a37

## Jestを使うにあたり
jestはcommonJSに従っていない構文は解釈できない＝ES6とか使えない。
最近、node側で対応されたとかも見た気がするが・・・<br>
そのため今回は、jest実行時にBabelでCommonJSに対応する形に変換して
テストを通す。