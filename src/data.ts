/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GalleryItem, PlanItem, Testimonial } from './types';

// Use the exact generated image URLs
export const CUSTOM_IMAGES = {
  hero: '/src/assets/images/hokkaido-cinematic-grand-reel-nature-drone-photography.jpg',
  maternity: '/src/assets/images/furano-golden-sunset-hill-maternity-photography.jpg',
  bridal: '/src/assets/images/biei-white-birch-forest-wedding.jpg',
  otaruBridal: '/src/assets/images/otaru-canal-nostalgic-twilight-wedding-photography.jpg',
  studioMaternity: '/src/assets/images/sapporo-natural-wood-studio-maternity-photography.jpg',
  yoteiDrone: '/src/assets/images/yotei-mountain-drone-panorama-wedding-photography.jpg',
};

export const INSTALLED_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'b1',
    title: '美瑛の白樺林に溶け込む誓い',
    category: 'bridal',
    imageUrl: CUSTOM_IMAGES.bridal,
    description: '北海道ならではの凛とした美しい白樺林。柔らかい光線の中、ドラマチックなドレスの動きを捉えた至高の1枚。',
    location: '美瑛町',
    isCustomGenerated: true
  },
  {
    id: 'm1',
    title: '黄金の丘が祝福する新しい命',
    category: 'maternity',
    imageUrl: CUSTOM_IMAGES.maternity,
    description: '夕刻の優しい光が射し込む富良野の丘。生命の息吹を感じさせる温かでナチュラルなマタニティフォト。',
    location: '富良野市',
    isCustomGenerated: true
  },
  {
    id: 'v1',
    title: 'シネマティック・北海道グランドリール',
    category: 'video',
    imageUrl: CUSTOM_IMAGES.hero,
    description: 'ドローンとシネマカメラをシームレスに繋ぎ、一瞬の隙もない北海道の雄大な自然をドキュメント。',
    location: 'オール北海道',
    isCustomGenerated: true
  },
  {
    id: 'b2',
    title: '小樽運河のノスタルジック・トワイライト',
    category: 'bridal',
    imageUrl: CUSTOM_IMAGES.otaruBridal,
    description: '歴史あるガス灯が灯る薄暮の小樽運河。レトロモダンなドレスに身を包んだふたりの永遠の瞬間。',
    location: '小樽市'
  },
  {
    id: 'm2',
    title: 'ぬくもりあるスタジオ・マタニティ',
    category: 'maternity',
    imageUrl: CUSTOM_IMAGES.studioMaternity,
    description: '陽の光がたっぷり降り注ぐナチュラル木調スタジオ。お腹の赤ちゃんとの最初の家族写真を、リラックスした雰囲気で。',
    location: '札幌スタジオ'
  },
  {
    id: 'd1',
    title: '羊蹄山麓を仰ぐドローンパノラマ',
    category: 'drone',
    imageUrl: CUSTOM_IMAGES.yoteiDrone,
    description: '青空に突き抜ける蝦夷富士・羊蹄山。圧倒的なスケール感でおふたりのウェディングロケーションを描き出します。',
    location: 'ニセコ町'
  },
  {
    id: 'b3',
    title: '壮大な十勝連峰を背景に',
    category: 'bridal',
    imageUrl: 'https://picsum.photos/seed/tokachi_bridal/800/600',
    description: '遠くに望む十勝岳連峰の残雪と、広大な草原でのコントラスト。映画のラストシーンのような感動を与えます。',
    location: '上富良野町'
  },
  {
    id: 'm3',
    title: '森のなかの家族のポートレート',
    category: 'maternity',
    imageUrl: 'https://picsum.photos/seed/forest_maternity/800/600',
    description: '木洩れ日が美しい札幌の自然公園。パパとママ、そして未来の家族へ繋ぐ温かい絆。',
    location: '札幌市'
  },
  {
    id: 's1',
    title: '積丹ブルーの眩いウェディングロード',
    category: 'scenic',
    imageUrl: 'https://picsum.photos/seed/shakotan_bridal/800/600',
    description: '澄み渡る積丹ブルーをバックに誓い合う。雄大な海原が一望できるダイナミックなロケーション。',
    location: '積丹町'
  }
];

export const GOLD_SELECTION_PLANS: PlanItem[] = [
  {
    id: 'bri_full_gold',
    name: 'ルミナス・ドローン＆シネマ フルパッケージ',
    price: 109800,
    duration: '2時間撮影＋動画編集',
    description: '一生の誓いを映画のワンシーンへ。ブライダル撮影に、空から圧倒的スケールで奇跡の瞬間を描き出すドローン撮影と洗練された動画編集を加えた大本命パッケージ。',
    features: [
      'ブライダル基本写真撮影 ＆ シネマカラー現像スチールデータ',
      'DJI 4Kプレミアムドローン空撮（標準装備）による超大作ネイチャーアングル',
      'Film K 直伝「切れ目の無いシネマティック動画編集」（標準装備）',
      'ロケ地への完全クルーアシスト同行 ＆ 自由な希望カットの演出企画付',
      '納品データ全てをクラウドアカウントにて超高画質オンライン納品'
    ],
    recommended: true,
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'bri_luxury_gold',
    name: 'プレミアム北海道デスティネーションウエディング',
    price: 550000,
    duration: '一泊二日 / 完全送迎＆フルおもてなし',
    description: 'インバウンドや道外からお越しの方のための特別撮影旅プラン。北海道の圧倒的な大自然を贅沢に満喫しながら、高級ホテルでのペアディナーとご宿泊、専用移動車による完全送迎アテンドを一括した一泊二日の最高位パッケージ。',
    features: [
      '高級ホテル宿泊 ＆ 極上ペアディナーを完全標準セット（撮影クルー一式の手配込み）',
      '地方北海道（富良野・美瑛・ニセコ・阿寒等）の雄大極まるネイチャーロケーション特別撮影',
      '専用ハイヤー/送迎アテンド付の一泊二日ツアー（千歳空港または指定場所より完全動線）',
      'DJI Inspire 3 / Mavic 3 Pro Cine プロドローン4K空撮映像、FX3複数カメラ体制の究極シネマトグラフィ'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=85'
  }
];

export const BRIDAL_PLANS: PlanItem[] = [
  {
    id: 'bri_basic',
    name: 'ブライダル基本プラン',
    price: 39800,
    duration: '2時間撮影スタート',
    description: '美しい北海道の景色やお好みの情緒あるロケ地でおふたりだけの永遠 of ドキュメントを綴る、2時間スタートの本格ブライダル。',
    features: [
      '基本写真撮影：約100カット以上（高光量照明アシスト／シネマティックスチール仕上げ）',
      'ヘアメイクチェンジ・お召替え等の合間時間も考慮した2時間スタート',
      'お持ち込みドレス、または提携ブランドの多様なレトロモダン衣裳対応',
      '延長料金：10,000円 / 1時間毎のシンプルなオプションシステム',
      '小樽運河、美瑛白樺林、富良野の丘などの有名スポットへの出張サポート可能'
    ]
  },
  {
    id: 'bri_full',
    name: 'ルミナス・ドローン＆シネマ フルパッケージ',
    price: 109800,
    duration: '2時間撮影＋動画編集',
    description: '一生の誓いを映画のワンシーンへ。ブライダル撮影に、空から圧倒的スケールで奇跡の瞬間を描き出すドローン撮影と洗練された動画編集を加えた大本命パッケージ。',
    features: [
      'ブライダル基本写真撮影 ＆ シネマカラー現像スチールデータ',
      'DJI 4Kプレミアムドローン空撮（標準装備）による超大作ネイチャーアングル',
      'Film K 直伝「切れ目の無いシネマティック動画編集」（標準装備）',
      'ロケ地への完全クルーアシスト同行 ＆ 自由な希望カットの演出企画付',
      '納品データ全てをクラウドアカウントにて超高画質オンライン納品'
    ],
    recommended: true
  }
];

export const MATERNITY_PLANS: PlanItem[] = [
  {
    id: 'mat_studio',
    name: 'マタニティ基本スタジオプラン',
    price: 29800,
    duration: '約1時間（スタジオ撮影）',
    description: '陽の光がたっぷり入る優しい木調ナチュラルなスタジオで、お腹の赤ちゃんとママ・パパのあたたかいポートレートを。',
    features: [
      'スチール写真撮影：約50カット（全データ丁寧なレタッチ仕上げ）',
      'セレクトレンタル衣装：ナチュラルドレスやカジュアルなシャツ等、1点セレクト無料',
      '撮影風景のショートメッセージビデオ作成（スマホ記録用無料プレゼント）',
      'ご家族（パパ、お兄ちゃん、お姉ちゃん）との追加撮影も追加料金なし'
    ]
  },
  {
    id: 'mat_location',
    name: 'プレミアム富良野ロケーションマタニティ',
    price: 49800,
    duration: '約2時間（ロケーション撮影）',
    description: '季節の花々や黄金に輝く夕陽の丘を背景に、北海道の広大な自然のなかで紡ぐ神秘的でプレミアムなマタニティフォト。',
    features: [
      'ロケ地でのスチール撮影：約100カット（シネマ風グラデーションカラーレタッチ仕上げ）',
      '富良野・美瑛エリアへのロケーション出張アシスト(撮影クルー1名同行)',
      '衣装2パターン（お持ち込み衣装＆スタジオ推奨ドレスから1点）対応可能',
      '出来上がり全カットをダウンロードしやすい超高画質オンラインアルバム納品'
    ],
    recommended: true
  }
];

export const GENERAL_PLANS: PlanItem[] = [
  {
    id: 'corp_interview',
    name: '1. インタビュー動画撮影',
    price: 150000,
    duration: '撮影半日 / 編集1週間',
    description: '役員や社員、専門家の想いやストーリーを引き出す対談・インタビュー特化型ムービー。高音質ピンマイクとFX3の最高峰ボケ表現で構築。',
    features: [
      '対談者1〜2名の4K撮影（シネマ照明器具セット込み）',
      '話者の声を聞き取りやすくするノイズリダクション＆イコライザー処理',
      '字幕テロップ、会社ロゴカード、要点ダイジェストの挿入編集',
      '出張スタッフ2名での盤石な収録（札幌含む道内駆けつけ）'
    ],
    imageUrl: 'https://img.youtube.com/vi/eM_c0nR7h84/maxresdefault.jpg'
  },
  {
    id: 'corp_pv_short',
    name: '2. 企業PV（2分未満）',
    price: 250000,
    duration: '撮影1日 / 編集1.5週間',
    description: 'ホームページのトップ背景やSNS広告、デジタルサイネージ等で最高の視覚インパクトを与える「短尺プロモーションビデオ（2分未満）」。',
    features: [
      '短尺だからこそ、視聴者を離脱させない高密度。切れ目の無いトランジションを多用',
      'スピードランピング、カラーグレーディング（ハリウッド・シンプルトーン）',
      'ライセンス契約済みの映画用スタイリッシュBGM of フル活用',
      '納品形式：16:9 ＆ スマホ用縦型 2アスペクト両対応可能'
    ],
    recommended: true,
    imageUrl: 'https://img.youtube.com/vi/cAY9KSCXSjk/maxresdefault.jpg'
  },
  {
    id: 'corp_pv_long',
    name: '3. 企業PV（5分未満）',
    price: 400000,
    duration: '撮影1〜2日 / 編集2.5週間',
    description: '企業の歴史、ビジョン、事業モデルを1つの重厚なストーリーとして伝える、構成考案・コンテ作成込みの本格企業プロモーションCM。',
    features: [
      'ディレクターによる丁寧なヒアリングをベースにしたオリジナル構成案の策定',
      '社内作業シーン、現場稼働、お客様とのやりとりなど複層的なダイナミック撮影',
      '洗練されたテロップ文字デザイン、会社HPと親和性をとったブランディング仕上げ',
      '中間テスト再生による最大2回までの無償カラー/タイムライン微修正フィードバック'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'corp_pv_composite',
    name: '4. インタビュー＋企業PV撮影',
    price: 650000,
    duration: '撮影2日間スケジュール',
    description: '企業のブランディングを究極の完成度に引き上げる、インタビューと本編企業PVを組み合わせたスペシャリスト用2日間ロケ撮影。',
    features: [
      'ドキュメンタリータッチで描く「熱き想い」と「日々の真摯な稼働シーン」のシンクロ',
      '2日間に分けた入念なシーン撮影（天候の影響やシフトサイクルもしっかりカバー）',
      'プロ用ナレーション（他言語・ナレーター）または高品位キャプション対応（オプショナル）',
      'WEB掲載から大画面プロジェクター・展示会でも圧倒的に際立つ美しさを約束'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1485686531765-ba63b07845a7?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'corp_stills',
    name: '5. 写真撮影',
    price: 30000,
    duration: '基本撮影（別途御見積）',
    description: '企業のホームページ、会社案内、パンフレット等で使用するためのプロ仕様スチール写真素材。オフィス風景や職務シーンを美麗に。',
    features: [
      '基本スチール点数：約50枚〜の潤沢写真ファイル（社内利用・SNS自由二次配布可能）',
      'ホームページや冊子デザインの比率（ヨコ・タテ・正方形）を意識したフレーミング',
      '素材としての使いやすさを重視した、自然できれいな調色・補正対応',
      '代表者プロフィールなどと合わせたトータルスチールパッケージも最適'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'corp_exec',
    name: '6. 代表者撮影（出張プロフィール）',
    price: 50000,
    duration: '撮影2時間程度',
    description: '代表取締役、役員、SNS発信リーダーの「品格と信頼感」が引き立つポートレート。札幌スタジオ、またはご指定 of オフィスへ出張します。',
    features: [
      '背景バック紙、または実際の役員室・窓から入る自然光を活かしたプロライティング撮影',
      'スーツや表情、目線の向け方などをアドバイスしながら撮影するコーチング体制',
      'SNS、プレスリリース、メディア掲載等でマルチユース。複数着替えパターン可能',
      '美肌デジタルレタッチを標準装備、いつでも清潔で輝かしい印象を届けます'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85'
  }
];

export const HOKKAIDO_LOCATIONS = [
  { value: 'sapporo', label: '札幌エリア / 石狩市（出張費: 0円）', fee: 0 },
  { value: 'otaru', label: '札幌南区 / 小樽市（出張費: 5,000円）', fee: 5000 },
  { value: 'furano_biei', label: '富良野 / 美瑛エリア（出張費: 10,000円）', fee: 10000 },
  { value: 'niseko', label: 'ニセコエリア（出張費: 13,000円）', fee: 13000 },
  { value: 'shakotan', label: '積丹エリア（出張費: 25,000円）', fee: 25000 },
  { value: 'hakodate', label: '函館市（出張費: 30,000円）', fee: 30000 }
];

export const REVIEWS: Testimonial[] = [
  {
    id: 'r1',
    name: '高橋 瑠璃子 様 (34歳)',
    role: 'マタニティプランご利用',
    comment: '最初は少し緊張していましたが、とっても優しいカメラマンさんが細かく休憩を挟んで下さり、体力的にも全く無理ありませんでした。LifeStudioさんのような温かみがありつつ、北海道の雄大な景色が入った写真は宝物です！お腹の中にいる時から、あたたかい光に包まれて幸せな気分をずっと残せました。',
    rating: 5,
    category: 'maternity'
  },
  {
    id: 'r2',
    name: '瀬戸 健太・麻衣 様',
    role: 'ルミナス・シネマプランご利用（ブライダル）',
    comment: '動画と写真を両方同時に撮影して頂けるのが「Film K」さんを選んだ最大の理由です。ドローン空撮のシームレスなカットから、目の前の笑顔の写真まで、繋ぎ目がまったく感じられない滑らかさ！友達に見せたら「まるでラグジュアリー映画のティーザー予告編のよう」と大絶賛されました。ヘアメイクも最高でした。',
    rating: 5,
    category: 'bridal'
  },
  {
    id: 'r3',
    name: '株式会社サッポロフューチャー 代表取締役',
    role: 'プロモーション動画＆スチール撮影依頼',
    comment: '企業の紹介用にプロモーション動画とスタッフスチールをお願いしました。一連の撮影から編集まで本当にスピーディー。撮影カメラのジンバルの動きがもの凄く滑らかで、出来上がった動画のトランジション（切り替え）の美しさには驚嘆しました。次回のブランディングフィルムも必ずお願いしたいと思います。',
    rating: 5,
    category: 'corporate'
  }
];

export const FILM_K_PROFILE = {
  name: '合同会社 Film K',
  representative: '岩城 圭佑',
  postalCode: '060-0001',
  address: '北海道札幌市中央区北1条西3丁目3番地 敷島北一条ビル 5F',
  phone: '011-234-5678',
  email: 'info@hokkaidofilmk.com',
  concept1: '「切れ目の無い、美しき一瞬と時の流れを」',
  concept2: '私たちは、単なる記録としての「撮影」をしません。カメラを回し始めた瞬間の空気感から、滑らかに繋がる編集トランジション、そこで映し出される奇跡のような大自然やビジネスの価値。これら全てをひとつの「物語」として仕立て上げます。',
  businessContents: [
    '企業プロモーションビデオの企画・制作',
    '採用向け動画、Web用ヒーロー動画の制作',
    'SNS特化型縦型ショート動画の制作',
    'ドローンによる空撮業務（二等無人航空機操縦士）'
  ],
  equipment: [
    'Sony ILME-FX3 (フルサイズ・シネマカメラ)',
    'DJI Inspire 3 / Mavic 3 Pro Cine (高画質ドローン空撮)',
    'DJI Ronin 4D / RS3 Pro (3軸ジンバルスタビライザー群)',
    'Zeiss Supreme Prime / G Master シネレンズシリーズ',
    'DaVinci Resolve Studio (完全シネマカラーグレーディング)',
  ]
};
