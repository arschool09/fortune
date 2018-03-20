/****************
 * おみくじアプリで使うJavaScript
 ***************/

// 画面を初期設定する
let shokiSettei = () => {
  
  // おみくじ結果パネルを隠す
  kakusuPanel(kekkaPanel);

  // 戻るボタンを隠す
  kakusuPanel(modoruButton);

  // タイトル画面のおみくじ画像を設定する
  setteiHomeImage('gachagacha.png');

}

// おみくじの中身
let omikujiNakami = [
  { 
    kekkaTitle: 'ネコ', // おみくじの結果のタイトル文
    kekkaSetsumei: '当たり。ミャ〜オ', // おみくじの結果につける説明文
    kekkaImage: 'neko.png' //おみくじの結果に表示する画像
  },
  { 
    kekkaTitle: 'ネコ', // おみくじの結果のタイトル文
    kekkaSetsumei: '当たり。ミャ〜オ', // おみくじの結果につける説明文
    kekkaImage: 'neko.png' //おみくじの結果に表示する画像
  },
  { 
    kekkaTitle: 'ネコ', // おみくじの結果のタイトル文
    kekkaSetsumei: '当たり。ミャ〜オ', // おみくじの結果につける説明文
    kekkaImage: 'neko.png' //おみくじの結果に表示する画像
  },
  { 
    kekkaTitle: 'ネコ', // おみくじの結果のタイトル文
    kekkaSetsumei: '当たり。ミャ〜オ', // おみくじの結果につける説明文
    kekkaImage: 'neko.png' //おみくじの結果に表示する画像
  },
  { 
    kekkaTitle: 'ネコ', // おみくじの結果のタイトル文
    kekkaSetsumei: '当たり。ミャ〜オ', // おみくじの結果につける説明文
    kekkaImage: 'neko.png' //おみくじの結果に表示する画像
  },
  { 
    kekkaTitle: 'ネコ', // おみくじの結果のタイトル文
    kekkaSetsumei: '当たり。ミャ〜オ', // おみくじの結果につける説明文
    kekkaImage: 'neko.png' //おみくじの結果に表示する画像
  },
  { 
    kekkaTitle: 'ネコ', // おみくじの結果のタイトル文
    kekkaSetsumei: '当たり。ミャ〜オ', // おみくじの結果につける説明文
    kekkaImage: 'neko.png' //おみくじの結果に表示する画像
  },
  { 
    kekkaTitle: 'ネコ', // おみくじの結果のタイトル文
    kekkaSetsumei: '当たり。ミャ〜オ', // おみくじの結果につける説明文
    kekkaImage: 'neko.png' //おみくじの結果に表示する画像
  },
  { 
    kekkaTitle: 'ネコ', // おみくじの結果のタイトル文
    kekkaSetsumei: '当たり。ミャ〜オ', // おみくじの結果につける説明文
    kekkaImage: 'neko.png' //おみくじの結果に表示する画像
  },
  { 
    kekkaTitle: 'ネコ', // おみくじの結果のタイトル文
    kekkaSetsumei: '当たり。ミャ〜オ', // おみくじの結果につける説明文
    kekkaImage: 'neko.png' //おみくじの結果に表示する画像
  },
  { 
    kekkaTitle: 'イヌ', // おみくじの結果のタイトル文
    kekkaSetsumei: '大当たり！ワオーン！', // おみくじの結果につける説明文
    kekkaImage: 'inu.png' //おみくじの結果に表示する画像
  },
  { 
    kekkaTitle: 'イヌ', // おみくじの結果のタイトル文
    kekkaSetsumei: '大当たり！ワオーン！', // おみくじの結果につける説明文
    kekkaImage: 'inu.png' //おみくじの結果に表示する画像
  },
  { 
    kekkaTitle: 'イヌ', // おみくじの結果のタイトル文
    kekkaSetsumei: '大当たり！ワオーン！', // おみくじの結果につける説明文
    kekkaImage: 'inu.png' //おみくじの結果に表示する画像
  },
  { 
    kekkaTitle: 'イヌ', // おみくじの結果のタイトル文
    kekkaSetsumei: '大当たり！ワオーン！', // おみくじの結果につける説明文
    kekkaImage: 'inu.png' //おみくじの結果に表示する画像
  },
  { 
    kekkaTitle: 'イヌ', // おみくじの結果のタイトル文
    kekkaSetsumei: '大当たり！ワオーン！', // おみくじの結果につける説明文
    kekkaImage: 'inu.png' //おみくじの結果に表示する画像
  },
  { 
    kekkaTitle: 'イヌ', // おみくじの結果のタイトル文
    kekkaSetsumei: '大当たり！ワオーン！', // おみくじの結果につける説明文
    kekkaImage: 'inu.png' //おみくじの結果に表示する画像
  },
  { 
    kekkaTitle: 'イヌ', // おみくじの結果のタイトル文
    kekkaSetsumei: '大当たり！ワオーン！', // おみくじの結果につける説明文
    kekkaImage: 'inu.png' //おみくじの結果に表示する画像
  },
  { 
    kekkaTitle: 'イヌ', // おみくじの結果のタイトル文
    kekkaSetsumei: '大当たり！ワオーン！', // おみくじの結果につける説明文
    kekkaImage: 'inu.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ゴキブリくん', // おみくじの結果のタイトル文
    kekkaSetsumei: 'ハズレ。残念！', // おみくじの結果につける説明文
    kekkaImage: 'gokiburi.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ゴキブリくん', // おみくじの結果のタイトル文
    kekkaSetsumei: 'ハズレ。残念！', // おみくじの結果につける説明文
    kekkaImage: 'gokiburi.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ゴキブリくん', // おみくじの結果のタイトル文
    kekkaSetsumei: 'ハズレ。残念！', // おみくじの結果につける説明文
    kekkaImage: 'gokiburi.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ゴキブリくん', // おみくじの結果のタイトル文
    kekkaSetsumei: 'ハズレ。残念！', // おみくじの結果につける説明文
    kekkaImage: 'gokiburi.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ゴキブリくん', // おみくじの結果のタイトル文
    kekkaSetsumei: 'ハズレ。残念！', // おみくじの結果につける説明文
    kekkaImage: 'gokiburi.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ゴキブリくん', // おみくじの結果のタイトル文
    kekkaSetsumei: 'ハズレ。残念！', // おみくじの結果につける説明文
    kekkaImage: 'gokiburi.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ゴキブリくん', // おみくじの結果のタイトル文
    kekkaSetsumei: 'ハズレ。残念！', // おみくじの結果につける説明文
    kekkaImage: 'gokiburi.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ゴキブリくん', // おみくじの結果のタイトル文
    kekkaSetsumei: 'ハズレ。残念！', // おみくじの結果につける説明文
    kekkaImage: 'gokiburi.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ゴキブリくん', // おみくじの結果のタイトル文
    kekkaSetsumei: 'ハズレ。残念！', // おみくじの結果につける説明文
    kekkaImage: 'gokiburi.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ゴキブリくん', // おみくじの結果のタイトル文
    kekkaSetsumei: 'ハズレ。残念！', // おみくじの結果につける説明文
    kekkaImage: 'gokiburi.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ゴキブリくん', // おみくじの結果のタイトル文
    kekkaSetsumei: 'ハズレ。残念！', // おみくじの結果につける説明文
    kekkaImage: 'gokiburi.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ゴキブリくん', // おみくじの結果のタイトル文
    kekkaSetsumei: 'ハズレ。残念！', // おみくじの結果につける説明文
    kekkaImage: 'gokiburi.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ゴキブリくん', // おみくじの結果のタイトル文
    kekkaSetsumei: 'ハズレ。残念！', // おみくじの結果につける説明文
    kekkaImage: 'gokiburi.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ゴキブリくん', // おみくじの結果のタイトル文
    kekkaSetsumei: 'ハズレ。残念！', // おみくじの結果につける説明文
    kekkaImage: 'gokiburi.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ゴキブリくん', // おみくじの結果のタイトル文
    kekkaSetsumei: 'ハズレ。残念！', // おみくじの結果につける説明文
    kekkaImage: 'gokiburi.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ムカデ', // おみくじの結果のタイトル文
    kekkaSetsumei: '大ハズレ！また次がある！', // おみくじの結果につける説明文
    kekkaImage: 'mukade.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ムカデ', // おみくじの結果のタイトル文
    kekkaSetsumei: '大ハズレ！また次がある！', // おみくじの結果につける説明文
    kekkaImage: 'mukade.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'パンダ！', // おみくじの結果のタイトル文
    kekkaSetsumei: '超当たり！！かわいい❤️', // おみくじの結果につける説明文
    kekkaImage: 'panda.jpg' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'パンダ！', // おみくじの結果のタイトル文
    kekkaSetsumei: '超当たり！！かわいい❤️', // おみくじの結果につける説明文
    kekkaImage: 'panda.jpg' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'パンダ！', // おみくじの結果のタイトル文
    kekkaSetsumei: '超当たり！！かわいい❤️', // おみくじの結果につける説明文
    kekkaImage: 'panda.jpg' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ムカデ', // おみくじの結果のタイトル文
    kekkaSetsumei: '大ハズレ！また次がある！', // おみくじの結果につける説明文
    kekkaImage: 'mukade.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ムカデ', // おみくじの結果のタイトル文
    kekkaSetsumei: '大ハズレ！また次がある！', // おみくじの結果につける説明文
    kekkaImage: 'mukade.png' //おみくじの結果に表示する画像
  },
  {
    kekkaTitle: 'ユニコーン！！！',
    kekkaSetsumei: '激レア！！これを引いたあなたはとんでもなく運がいい…。',
    kekkaImage: 'yunikon.png'
  }
];

let omikujiRoulette = [
  'gokiburi.png',
  'inu.png',
  'mukade.png',
  'neko.png',
  'panda.jpg'
];

// ルーレットを表示する関数
let miseruRoulette = () => {
  // 出目がアニメーションの画像数だけあるサイコロを振る
  let saikoroKekka = furuSaikoro(omikujiRoulette.length);
  // サイコロを振って出た番号の画像を表示させる。
  setteiHomeImage(omikujiRoulette[saikoroKekka]);
}


// おみくじを引く
let miseruOmikujiKekka = () => {

  // 始めの画面のおみくじ画像を隠す
  kakusuPanel(omikujiImage);

  // 「おみくじを引く」ボタンを隠す
  kakusuPanel(hikuButton);

  // おみくじの中身の数までが出るサイコロをふる
  let saikoroKekka = furuSaikoro(omikujiNakami.length);

  let omikujiKekka = omikujiNakami[saikoroKekka];

  // おみくじの結果からタイトルを画面に貼り付ける
  setteiKekkaTitle(omikujiKekka.kekkaTitle);

  // おみくじの結果から説明を画面に貼り付ける
  setteiKekkaSetsumei(omikujiKekka.kekkaSetsumei);

  // おみくじの結果から画像を画面に貼り付ける
  setteiKekkaImage(omikujiKekka.kekkaImage);

  // おみくじの結果画面を表示する
  miseruPanel(kekkaPanel);

  // 「戻る」ボタンを表示する
  miseruPanel(modoruButton);

}

let hikuOmikuji = () => {

  
  // 0.1秒で画像を変えるルーレットのアニメーションを開始する
  let rouletteTimer = kurikaesuTimer(miseruRoulette,200);
  
// 3秒待って結果を表示する
matsuTimer(()=>{
    // ルーレットのタイマーを止める
    tomeruTimer(rouletteTimer);

    // おみくじの結果を見せる
    miseruOmikujiKekka();

    setteiHomeImage('gachagacha.png')

  },3000); // 3000ミリ秒=3秒に設定

}

// 読み込み終わったら初期設定を実行する
shokiSettei();
