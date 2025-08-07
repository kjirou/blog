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
