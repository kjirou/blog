---
publicId: learn-unity-1
lastUpdatedAt: 2025-08-07 10:10:17+0900
---

# Unityを学ぶ 1回目 - 3D Beginner Game: Roll-a-Ballチュートリアル完了とディレクトリをGit管理する

## 概要

- 以下の目的を達成するまでに、得た知識をまとめる
  - [3D Beginner Game: Roll-a-Ball](https://learn.unity.com/course/roll-a-ball?version=6.0)というUnity公式っぽいチュートリアルを完了する
  - 上記で作成したUnityプロジェクトのディレクトリをGit管理しGitHubへ置く
    - 結果: [kjirou/Rollaball](https://github.com/kjirou/Rollaball)
- 環境
  - PCは MacBook Pro 16インチ 2021 / Apple M1 Max
    - Windowsの方が良い？と人に聞いたら、その人はMacで困ってないという返答だったのでMacにした
  - UnityのバージョンはLTSの6.0

## 参考にした資料

- [Unity Learn - 3D Beginner Game: Roll-a-Ball](https://learn.unity.com/course/roll-a-ball?version=6.0)
  - これを完了することが目的のひとつ
- [Unity Learn - Project setup processes](https://learn.unity.com/tutorial/project-setup-processes?version=2022.3)
  - Unity EditorやUnity Hubのインストールや設定方法の解説
    - この記事のUnityバージョンは6.0より古いが、特に問題なかった
  - Roll-a-Ballのチュートリアルから参照されている
- [Get started with the Unity Editor](https://learn.unity.com/tutorial/get-started-with-the-unity-editor?version=6.0)
  - Unity Editorの基本的な操作の解説
  - Roll-a-Ballのチュートリアルから参照されている
- [TextMesh Pro ユーザーガイド](https://docs.unity3d.com/ja/Packages/com.unity.textmeshpro@3.0/manual/index.html)
  - チュートリアルの途中でTextMesh Proのインストールを求められた時に、チュートリアルの手順と異なりダイアログ的なものが出現しなかったので検索した記事
  - あまり覚えてないが、以下の箇所が参考になった記憶がある
    - > "TMP Essential Resources" をインポートするには、メニューを "Window -> TextMeshPro -> Import TMP Essential Resources" の順に選択してください。これらのリソースがプロジェクトのルートの "TextMesh Pro" フォルダーに加えられます。
- [\[Unity\]Input ManagerとInput Systemに初心者狩りされた話](https://qiita.com/KONTA2019/items/219732d07458dd9ebaba)
  - チュートリアルの[Add prefabs and other assets to the scene](https://learn.unity.com/tutorial/get-started-with-the-unity-editor#wltML2VnrJcA3t6tcxDKtE)の手順で"If you enter Play mode now, the character should be able to walk around,"と書いている部分が動かなかった
    - つまり、テストプレイ時にWASDでキャラクターが動くはずが動かなかった
  - それを解決するために参考にした記事
    - 結論として、Edit > Project Settings > Active Input Handling > Both を選択すると解決するとのこと
  - おそらくは、チュートリアルが用意しているスクリプトの不備だと思う
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
  - 知らないとダメなやつなので、実装をする時には学びましょう
- [github/gitignore/Unity.gitignore](https://github.com/github/gitignore/blob/9255d4cfe4bb357f6598a1ec252543900ca89d4e/Unity.gitignore)
  - GitHubによるUnity用の.gitignoreのサンプル
  - 今のところは、概ね正常にGit管理できているように見える
    - ディレクトリ名を変更すると.vscodeに差分が出たりするので、調整は必要そう
- [is8r/example-Ray/.gitattributes](https://github.com/is8r/example-Ray/blob/da1d373e50bf75ba708e9f9de12bc6242b453c9e/.gitattributes)
  - 人様のUnity用の.gitattributesの設定例
    - 主たる設定は、Unity作業ならではの設定と、重い素材をGit LFSで管理するため設定
  - 知らない書式があるので調査
    - `merge=unityyamlmerge`
      - [UnityYAMLMerge](https://docs.unity3d.com/ja/2019.4/Manual/SmartMerge.html)
        - 現時点でちゃんと検証してないけど、きっと良い感じにマージしてくれるのでしょう
    - `-text`
      - テキストとして扱わない == バイナリとして扱う、ことを明示する
      - 画像系には不要そうに見えつつ、知らないファイル拡張子も多いのでそれらち一緒に付与しておいて良さそう

## その他の知識
