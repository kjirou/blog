---
publicId: learn-unity-1
lastUpdatedAt: 2025-08-07 10:10:17+0900
---

# Unityを学ぶ 1回目 - 3D Beginner Game: Roll-a-Ballチュートリアル完了までと結果をGit管理する

## 概要

- Unityを学ぶにあたり、以下を完了するまでに参考にした資料や発生した問題と解決をまとめる
- [3D Beginner Game: Roll-a-Ball](https://learn.unity.com/course/roll-a-ball?version=6.0)というUnity公式っぽいチュートリアル
- 上記で作成したUnityプロジェクトのディレクトリをGit管理しGitHubへ置く
  - 結果: [kjirou/Rollaball](https://github.com/kjirou/Rollaball)

## 作業環境

- Mac
  - Unityができる人にWindowsの方が良い？と聞いたら、その人もMacで困ってないという返答だったのでMacにした
  - MacBook Pro 16インチ 2021
    - Apple M1 Max

## 参考にした資料

- [Unity Learn - 3D Beginner Game: Roll-a-Ball](https://learn.unity.com/course/roll-a-ball?version=6.0)
  - これを完了することを開始点とした
- [Unity Learn - Project setup processes](https://learn.unity.com/tutorial/project-setup-processes?version=2022.3)
  - Unity EditorやUnity Hubのインストールや設定方法の解説
    - UnityバージョンはLTSの6.0を使ってる一方でこの記事のバージョンはそれより古いが、特に問題なかった
  - Roll-a-Ballのチュートリアルから参照されている
- [Get started with the Unity Editor](https://learn.unity.com/tutorial/get-started-with-the-unity-editor?version=6.0)
  - Unity Editorの基本的な操作の解説
  - Roll-a-Ballのチュートリアルから参照されている
- [TextMesh Pro ユーザーガイド](https://docs.unity3d.com/ja/Packages/com.unity.textmeshpro@3.0/manual/index.html)
  - チュートリアルの途中でTextMesh Proのインストールを求められた時に、チュートリアルの手順と異なりダイアログ的なものが出現しなかったので検索した記事
  - あまり覚えてないが、以下の箇所が参考になった記憶がある
    - > "TMP Essential Resources" をインポートするには、メニューを "Window -> TextMeshPro -> Import TMP Essential Resources" の順に選択してください。これらのリソースがプロジェクトのルートの "TextMesh Pro" フォルダーに加えられます。
- [\[Unity\]Input ManagerとInput Systemに初心者狩りされた話](https://qiita.com/KONTA2019/items/219732d07458dd9ebaba)
  - チュートリアルの手順でGame View上のテストプレイが動かなかった問題を解決した記事
  - 結論として、Edit > Project Settings > Active Input Handling > Both を選択すると解決という内容
  - 詳細は後述
- [Unityユーザーマニュアル - Configurable Enter Play Mode](https://docs.unity3d.com/ja/2019.4/Manual/ConfigurableEnterPlayMode.html)
  - Unityができる人に Edit > Project Settings > Editor > Enter Play Mode Settings > When entering Play Mode > Reload Scene only を選択すると、テストプレイ時のコンパイルが早くなるという話を聞き、その代償は何だろなというのを調べるために読んだ記事
  - ちゃんと概念を定義した上でレイヤーを分けて管理しているんだなぁ...以上のことはわからなかった
- [Unityユーザーマニュアル - Details of disabling domain and scene reload](https://docs.unity3d.com/6000.1/Documentation/Manual/configurable-enter-play-mode-details.html)
  - 上記のために追加で読んだ記事、更にわからなかった
  - 結論として得られた具体的なノウハウは、コンパイル時に何か同期してなかったらこの設定を疑おう、程度のこと
- [UnityのエディターとしてVSCodeを利用する](https://zenn.dev/iwatos/articles/6a19af30e4cad7)
  - 背景
    - コードを編集する際に、Unity Editor自体はテキストエディタを持たないため、外部のテキストエディタと連携する仕組みである
    - 連携をするにあたり、公式推奨のテキストエディタが Visual Studio Code(以下VSCode) である
  - チュートリアル上の設定だけでは、型やLintingなどの静的解析情報がテキストエディタへ出現しないので、その設定の解説
    - VSCodeのプラグインを入れただけでシュッとできた
- [PivotとAnchorsの違い](https://chatgpt.com/share/6891c2c7-4130-8004-816a-5a8f0d22f931)
  - チュートリアルの [Displaying Score and Text > Create a UI text element > Edit the text position.](https://learn.unity.com/course/roll-a-ball/tutorial/displaying-score-and-text?version=6.0#66f2d5b1edbc2a010453ac89) に、AnchiorsとPivotという概念が出てくるのだけど、それがわからないのでChatGPTへ聞いたもの
  - この記事を書いている時点で、レイアウティングの設定をするための概念である、以上のことを覚えてない
  - 確実に知らないとダメなやつなので、ちゃんと実装をする時には思い出しましょう
