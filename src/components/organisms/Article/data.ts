// KYOTO LIFE
import mainImage1 from "/images/articles/01_kyoto_life/articleMain.webp";
import imageFigure1_1 from "/images/articles/01_kyoto_life/imageFigures/imageFigure1.webp";
import imageFigure1_2 from "/images/articles/01_kyoto_life/imageFigures/imageFigure2.webp";
import imageFigure1_3 from "/images/articles/01_kyoto_life/imageFigures/imageFigure3.webp";
import imageFigure1_4 from "/images/articles/01_kyoto_life/imageFigures/imageFigure4.webp";
import imageFigure1_5 from "/images/articles/01_kyoto_life/imageFigures/imageFigure5.webp";
import imageFigure1_6 from "/images/articles/01_kyoto_life/imageFigures/imageFigure6.webp";
// DESIGN ENGINEER
import mainImage2 from "/images/articles/02_design_engineer/articleMain.webp";
import imageFigure2_1 from "/images/articles/02_design_engineer/imageFigures/imageFigure1.webp";
import imageFigure2_2 from "/images/articles/02_design_engineer/imageFigures/imageFigure2.webp";
import imageFigure2_3 from "/images/articles/02_design_engineer/imageFigures/imageFigure3.webp";
import imageFigure2_4 from "/images/articles/02_design_engineer/imageFigures/imageFigure4.webp";
import imageFigure2_5 from "/images/articles/02_design_engineer/imageFigures/imageFigure5.webp";
// NEW LIFE
import mainImage3 from "/images/articles/03_new_life_tokyo/articleMain.webp";
import imageFigure3_1 from "/images/articles/03_new_life_tokyo/imageFigures/imageFigure_1.webp";
import imageFigure3_2 from "/images/articles/03_new_life_tokyo/imageFigures/imageFigure2.webp";
import imageFigure3_3 from "/images/articles/03_new_life_tokyo/imageFigures/imageFigure3.webp";
import imageFigure3_4 from "/images/articles/03_new_life_tokyo/imageFigures/imageFigure4.webp";
// MIDORI
import mainImage4 from "/images/articles/04_midori/articleMain.webp";
import imageFigure4_1 from "/images/articles/04_midori/imageFigures/imageFigure1.webp";
import imageFigure4_2 from "/images/articles/04_midori/imageFigures/imageFigure2.webp";
import imageFigure4_3 from "/images/articles/04_midori/imageFigures/imageFigure3.webp";
import imageFigure4_4 from "/images/articles/04_midori/imageFigures/imageFigure4.webp";
import imageFigure4_5 from "/images/articles/04_midori/imageFigures/imageFigure5.webp";
// ACID COFFEE TOKYO
import mainImage5 from "/images/articles/05_acid/articleMain.webp";
import imageFigure5_1 from "/images/articles/05_acid/imageFigures/imageFigure1.webp";
import imageFigure5_2 from "/images/articles/05_acid/imageFigures/imageFigure2.webp";
import imageFigure5_3 from "/images/articles/05_acid/imageFigures/imageFigure3.webp";
import imageFigure5_4 from "/images/articles/05_acid/imageFigures/imageFigure4.webp";
// FIRST VISITING
import mainImage6 from "/images/articles/06_kumamoto/articleMain.webp";
import imageFigure6_1 from "/images/articles/06_kumamoto/imageFigures/imageFigure1.webp";
import imageFigure6_2 from "/images/articles/06_kumamoto/imageFigures/imageFigure2.webp";
import imageFigure6_3 from "/images/articles/06_kumamoto/imageFigures/imageFigure3.webp";
import imageFigure6_4 from "/images/articles/06_kumamoto/imageFigures/imageFigure4.webp";
// HISTORICAL SCIENCE
import mainImage7 from "/images/articles/07_history/articleMain.webp";
import imageFigure7_1 from "/images/articles/07_history/imageFigures/imageFigure1.webp";
import imageFigure7_2 from "/images/articles/07_history/imageFigures/imageFigure2.webp";
import imageFigure7_3 from "/images/articles/07_history/imageFigures/imageFigure3.jpeg";
// LOOK BACK SUMMARY
import mainImage8 from "/images/articles/08_summary/articleMain.webp";
import imageFigure8_1 from "/images/articles/08_summary/imageFigures/imageFigure1.webp";
import imageFigure8_2 from "/images/articles/08_summary/imageFigures/imageFigure2.webp";
import imageFigure8_3 from "/images/articles/08_summary/imageFigures/imageFigure3.webp";

export enum ARTICLE_TYPE {
  KYOTO_LIFE = "kyoto-life",
  DESIGN_ENGINEER = "design-engineer",
  NEW_LIFE = "new-life",
  MIDORI = "midori",
  ACID_COFFEE_TOKYO = "acid-coffee-tokyo",
  FIRST_VISITING = "first-visiting",
  HISTORICAL_SCIENCE = "historical-science",
  LOOK_BACK_SUMMARY = "look-back-summary",
}

type ImageInterface = {
  url: string;
  alt: string;
};

type ArticleInterface = {
  title: string;
  month: string;
  date: string;
  mainImage: ImageInterface;
  text: string;
  textEnglish: string;
  tag: string;
  imageFigures: ImageInterface[];
};

type ArticlesInterface = {
  [key in ARTICLE_TYPE]: ArticleInterface;
};

export const Articles: ArticlesInterface = {
  [ARTICLE_TYPE.KYOTO_LIFE]: {
    title: "HOTEL LIFE + KYOTO",
    month: "February",
    date: "2022.02.01",
    mainImage: {
      url: mainImage1,
      alt: "記事1のメイン画像",
    },
    text: `2022年は勢いを持ち越し、住んでいた富小路三条下ルにあるホテルで新年を迎えた。つまりホームレスとして一年が始まった。なぜホテルに住んでいたかは割愛しよう。
    京都の新年はそれまでとは違い、どの神社に初詣に行こうか、選り取り緑な雰囲気で満ちていた。縁も様々、酸いも甘いも想い出があり、選ばれたのは下鴨神社であった。
    
    さて、振り返るとホテル暮らし生活も長くなり、1年以上このスタイルで生活をしていた。賃貸に住むのとは違って、気軽に住む場所を変えられるというのは二十数年間の人生でもかなり前衛的な試みになった。東京に暮らしていたら出会えなかった人間との出会いを考えると感慨深い。地元の人々、コーヒー屋、KYOTO GRAPHIE、蒸留士、バーテンダー、学生、パン屋、ギャラリーの人たち、怪しげな芸術家等、さまざまである。京都には、好きなことを生業にしている面白可笑しい人たちが多いように思えた。そのおかげもあってか、商店街に活気があって、個人店が乱立し、大きな複合施設みたいなものはあまり見られない。それが心地よかった。たまに現れる複合施設も、その背景の中で新鮮味を醸し出していた。出会った人々はしきりに、「京都は田舎だからね」と言ったが、田舎では済まない何かが京都にはあるなと思った。
    
    一番大きく価値観が変わったのは、根無草としてではなく京都のどこかに定住するのも良い。と思えたところであった。それは京都で出会った人たちが、自分を快く迎え入れてくれたところに起因するだろう。きっとこの先ホテル暮らしを辞めたとして、京都に訪れる時は行くではなく帰るになるだろうな、と。`,
    textEnglish: `In 2022, I carried the momentum forward and welcomed the new year in a hotel located on Tominokoji-Sanjo-Sagaru where I had been residing. In other words, the year began with me living as a homeless individual. Let's skip the details of why I was living in a hotel.

      New Year in Kyoto was different from before, with an atmosphere filled with choices of which shrine to visit for the first prayers. There were various connections, both bitter and sweet memories, and the chosen shrine was Shimogamo Shrine.
      
      Now, looking back, my life in a hotel had become quite extended, and I had been living in this style for over a year. Unlike living in a regular rental, the ability to easily change one's place of residence became a rather avant-garde experiment in my life of over twenty years. Reflecting on the encounters with people I wouldn't have met if I had been living in Tokyo, it's quite moving. The local people, coffee shop owners, KYOTO GRAPHIE staff, distillers, bartenders, students, bakers, gallery people, and even enigmatic artists – there was a diverse array of individuals. It seemed that Kyoto had many interesting and eccentric people pursuing their passions. Thanks to this, there was vibrancy in the shopping streets, with numerous small individual shops, and you wouldn't find many large complex facilities. It was quite pleasant. Even the occasional appearance of such complexes added a touch of freshness to the backdrop. People I met frequently said, "Kyoto is a countryside," but I thought that there was something in Kyoto that transcended the typical rural experience.
      
      The most significant shift in my perspective was the realization that it would be a good idea to settle somewhere in Kyoto, not just as a transient. This probably stems from the fact that the people I met in Kyoto warmly welcomed me. I'm sure that if I ever decide to leave the hotel lifestyle in the future, when I visit Kyoto, it will feel like returning rather than just going there.`,
    tag: "LIFE",
    imageFigures: [
      { url: imageFigure1_1, alt: "" },
      { url: imageFigure1_2, alt: "" },
      { url: imageFigure1_3, alt: "" },
      { url: imageFigure1_4, alt: "" },
      { url: imageFigure1_5, alt: "" },
      { url: imageFigure1_6, alt: "" },
    ],
  },
  [ARTICLE_TYPE.DESIGN_ENGINEER]: {
    title: "BECOME A DESIGN ENGINEER",
    month: "April",
    date: "2022.04.01",
    mainImage: {
      url: mainImage2,
      alt: "記事1のメイン画像",
    },
    text: `4月になって、会社員歴も3年になった。会社員らしからぬ暮らしぶりに驚く者もいよう、私だってそうである。職種が変わり、デザインエンジニアという名誉ありそうな、一方で奴隷のような役回りになった。デザインもエンジニアリングもするポジションである。
    尊敬するtakramという会社の田川欣哉氏がデザインエンジニアという仕事を語る記事を読んだのを覚えている。多分10年前くらいの記事だったと思う。
    この時は、「デザインもエンジニアリングもする」というよりは目的があってそのために必要なことをこなす人、みたいな形だろう…と解釈した。webの会社なのでwebだけを作っているが、web以外のことにもデザインエンジニア的に取り組みたいという気持ちのブーストをする機会だった。実際は「デザインもエンジニアリングもする」人になっていた。目的を見失わないように気をつけたい。
    ‘21年から始めた個人事業ではそこそこ色んなデザインやモノづくりができているので、会社とプライベートを完全に分断しないような生き方ができればいいと感じた。会社の経験はその外に活かして、外の経験は会社で活きる、みたいな形が理想である。実際には、あっちにこっちにてんやわんやだった。`,
    textEnglish: `In April, I reached three years in my career as a corporate employee. Some people might be surprised by the unconventional way I live my life as a corporate worker, and I'm no exception. My role has changed, and I've taken on the role of a design engineer, which sounds quite honorable but can feel somewhat like a slave. This position involves both design and engineering.

      I remember reading an article about the job of a design engineer, given by Mr. Kin-ya Tagawa, who I greatly respect and who works at the company "takram." This was probably about ten years ago. At that time, I interpreted the role as someone who works toward a specific goal and does whatever is necessary to achieve it, rather than simply "doing both design and engineering." Since our company is web-based, we primarily create things for the web. However, this was an opportunity to boost my desire to approach things from a design engineering perspective beyond the web. In reality, I became someone who does both design and engineering. I want to make sure I don't lose sight of the purpose.
      
      In my personal business, which I started in 2021, I've been able to engage in various design and creative projects. I hope to live a life where I can seamlessly integrate my work and personal life, leveraging the experiences from one side to enhance the other. Ideally, my experiences in the corporate world should benefit my personal ventures, and my external experiences should enrich my corporate role. In practice, it's been a bit chaotic, trying to juggle both sides.`,
    tag: "NEW",
    imageFigures: [
      { url: imageFigure2_1, alt: "" },
      { url: imageFigure2_2, alt: "" },
      { url: imageFigure2_3, alt: "" },
      { url: imageFigure2_4, alt: "" },
      { url: imageFigure2_5, alt: "" },
    ],
  },
  [ARTICLE_TYPE.NEW_LIFE]: {
    title: "NEW LIFE IN TOKYO",
    month: "June",
    date: "2022.06.05",
    mainImage: {
      url: mainImage3,
      alt: "記事1のメイン画像",
    },
    text: `1年半ほど続けたホテル暮らしは6月で幕とした。京都から離れるときは10年前の上京したてのような寂しさがあり、京都に対しては故郷のような気持ちが生まれていた。きっとまたいつか帰るであろう。友人たちとは離れるが、その心許なさはSNSのありがたみを心底思い知ることで幾らか解消した。
    久々に東京定住、憧れた谷尻建築の賃貸を借りて自分だけしか居ない家での生活が始まった。三軒茶屋という東京の中でもかなりの未体験ゾーンは、新生活には相応しい期待感を演出してくれたのであった。朝から晩まで通して誰にも会わないという生活に、もの哀しさと新鮮味を感じつつ本を読む、デザインツールを弄る、プログラムを書く等、一人でないと到達しないであろう集中の時間を、とにかく量産した。そのうち一人が寂しくなる気もしていたが、孤独の時間を守ることは現代では輪をかけて難しいので、このあと数ヶ月はこの心地よい時間をひっそり過ごした。
    
    自分の部屋なので当たり前だが、家具も自分で揃える。これが意外と面白く、ミニマルなデザインのものを探して回った。出会ったモノの一つにGUBIという会社のPedreraというローテーブルがあり、シームレスな脚ベースと有機的な形のガラス天板というミニマルモダンな造形に心を燃やす。これまでプロダクトデザインはなんとなくで見てきたが、深掘りしていくとそこには大きな沼が待ち構えていそうで、これもまた人生を面白くしていきそうな予感がした。`,
    textEnglish: `I ended my one-and-a-half-year hotel stay in June. When leaving Kyoto, I felt a sense of loneliness similar to when I first moved to this city a decade ago. Kyoto had become like a hometown to me. I'm sure I'll return someday. Although I had to leave behind friends, I found some solace in the value of social media to stay connected.

      Returning to Tokyo after a long time, I started living in a rental space designed by the renowned architect Tadao Ando. Having a place to myself was a significant change. Three Mita, a neighborhood in Tokyo I hadn't experienced before, added a sense of anticipation to this new chapter in my life. Living a life where I didn't encounter anyone from morning till night brought both a sense of melancholy and freshness. During this time, I read books, tinkered with design tools, wrote code, and dedicated extended periods of solitary concentration that are hard to achieve in a crowd. I thought I might start feeling lonely at some point, but preserving moments of solitude is exceedingly challenging in the modern world. So, I quietly enjoyed this time for a few months.
      
      Since it's my own space, I had to furnish it myself. Surprisingly, this turned out to be quite interesting. I explored minimalistic product designs and came across a low table from a company called GUBI, called "Pedrera." Its seamless leg base and organic-shaped glass tabletop captivated me with its minimalistic modern design. I've casually observed product design in the past, but delving deeper into it, I have a hunch that there might be a vast world to explore, making life even more interesting.`,
    tag: "LIFE",
    imageFigures: [
      { url: imageFigure3_1, alt: "" },
      { url: imageFigure3_2, alt: "" },
      { url: imageFigure3_3, alt: "" },
      { url: imageFigure3_4, alt: "" },
    ],
  },
  [ARTICLE_TYPE.MIDORI]: {
    title: "MIDORI WO WATARU OTO",
    month: "June",
    date: "2022.06.22",
    mainImage: {
      url: mainImage4,
      alt: "記事1のメイン画像",
    },
    text: `京都で出会った男「硲 真人」は、先の京都生活を語る上で欠かせない男である。そもそもの出会いには全くコンテクストはなく偶然の巡り合わせだったが、おそらく人生レベルの関わりになるであろう気の合い方だった。大学を数ヶ月で辞めコーヒーを生業にし、ドラムを叩き、さまざまなものを蒸留し、自由に生きている。
    その彼の実家は福井にあり、watotoという名前の古民家カフェである。ということを、旅の音という北白川にある珈琲焙煎所で出会った梶本良司という男から聞いた。真人くんの父である。苗字は違うが。
    
    良司さんもまたおもしろ人間で、フリーランスのお坊さんと聞いた。当初は意味がわからなかったが、枠の外的挙動で面白い。その際に、watotoがオーガナイズする「みどりを渡る音」というイベントでコーヒーを淹れないか？と誘いを受け、そのまま話が進み福井県は小浜市へ。3人組音楽家「みどり」の演奏の横でコーヒーを淹れるというありがたい経験をした。
    兼ねてからみどりのメンバー田辺玄さんのアルバムを聴いていた自分は感動、その後もwatotoで食卓を囲んだ。
    
    偶然の出会いからwatoto、ひいては田辺玄さんというところまで、想像を遥かに超えていく出会いが溢れていた。人生には二つ返事で引き受けるということも、重要な瞬間がありそうである。
    おもしろきことは良きことなり。`,
    textEnglish: `The man I met in Kyoto, Mahito Hazama is an indispensable figure when it comes to talking about my time in Kyoto. Our initial meeting had no particular context; it was a chance encounter. However, it seemed that we instantly connected on a life-altering level. He left university after a few months to pursue a career in coffee, played the drums, distilled various things, and lived freely.

    His family home is in Fukui, and it's a traditional house cafe called "Watoto." I learned this from a man named Ryoji Kajimoto, whom I met at "Tabi-no-Ne," a coffee roastery in Kitashirakawa. He is Mahito's father, though they have different last names.
    
    Mr.Kajimoto is an interesting character too, and I heard he's a freelance monk. I didn't understand what that meant at first, but his unconventional behavior was fascinating. During that time, he invited me to brew coffee at an event organized by Watoto called "Midori wo Wataru Oto" (Sounds Crossing Over Green), and that led to a journey to Obama City in Fukui. I had the privilege of brewing coffee beside a performance by the trio of musicians known as "Midori."
    
    I had been listening to Midori member Gen Tanabe's album for some time, and I was deeply moved. Afterward, I continued to share meals at Watoto.
    
    From a chance encounter to Watoto, and even to Gen Tanabe, my life was filled with unexpected connections that far exceeded my imagination. Sometimes, accepting opportunities with an open heart can lead to important moments in life. Indeed, interesting things can also be good things.`,
    tag: "EVENT",
    imageFigures: [
      { url: imageFigure4_1, alt: "" },
      { url: imageFigure4_2, alt: "" },
      { url: imageFigure4_3, alt: "" },
      { url: imageFigure4_4, alt: "" },
      { url: imageFigure4_5, alt: "" },
    ],
  },
  [ARTICLE_TYPE.ACID_COFFEE_TOKYO]: {
    title: "ACID COFFEE TOKYO",
    month: "July",
    date: "2022.07.15",
    mainImage: {
      url: mainImage5,
      alt: "記事1のメイン画像",
    },
    text: `渋谷の公園通りを上るか上がらないかの煮え切らない辺りにコーヒースタンドがあった。名をアシッドコーヒートウキョウと言い、その怪しげな名前とアナーキーな様子とは裏腹に、出てくるコーヒーは至高であった。自分は足繁くこの店に通い、7月15日もそのうちの一日であった。
    スタッフと話しながらコーヒーを飲んでいると、駅方面から黒い上着にフードを被った金髪オールバックの男が歩いてきて、「君誰？バリスタやんない？」と言った。この傍若無人かつ唯我独尊味に溢れた男こそアシッドコーヒートウキョウのオーナー、Mr.塚田である。
    
    兼ねてからどこかコーヒーロースターで働きたいと思っていた自分にはこれ以上ないチャンス。もちろん答えは二つ返事で「やります」であった。そのままグアテマラのカップオブエクセレンスのカッピングをして、本気でやるなら履歴書送って？と言われ、その日のうちに履歴書を送り面接をし、こうしてまた数奇な方向に人生を寄せていった。
    
    Mr.塚田は、ファンキーかつアナーキーでエキセントリックだが、それ以上にエレガンスな人間であり、端的に言えば面白く魅力の宝庫のような人間であった。有り体に言えば、自分はこの男がすごく好きになっていた。読者諸賢、ここだけの話にしていただこう、沽券に関わる。
    コーヒーもそれ以外も様々学び、多大なる恩がある。アシッドで働くことがその恩返しになるようにしていきたい。`,
    textEnglish: `There was a coffee stand on the undecided stretch of Park Street in Shibuya, whether to go up or not. Its name was "Acid Coffee Tokyo," and despite its dubious name and anarchic appearance, the coffee it served was sublime. I frequented this shop and July 15th was one of those days.

    While sipping coffee and chatting with the staff, a blond man with a black jacket and a hood from the station side approached and said, "Who are you? Interested in being a barista?" This brazen and self-assured man was none other than the owner of Acid Coffee Tokyo, Mr. Tsukada.
    
    I had long wanted to work as a coffee roaster somewhere, and this was the perfect opportunity for me. Of course, I answered with an immediate "I'll do it." We went on to cup some Guatemalan coffees, and he asked, "If you're serious, send in your resume." I sent in my resume the same day, had an interview, and that's how my life took a strange turn.
    
    Mr. Tsukada was funky, anarchic, and eccentric, but more than that, he was an elegant individual, in a nutshell, he was an interesting and captivating person. To be frank, I had become quite fond of this man. To the readers, let's keep this just between us, it's a matter of pride.
    
    I learned a lot about coffee and much more, and I owe him a great deal. I want to make my work at Acid Coffee a way to pay back that debt.`,
    tag: "NEW",
    imageFigures: [
      { url: imageFigure5_1, alt: "" },
      { url: imageFigure5_2, alt: "" },
      { url: imageFigure5_3, alt: "" },
      { url: imageFigure5_4, alt: "" },
    ],
  },
  [ARTICLE_TYPE.FIRST_VISITING]: {
    title: "FIRST VISITING TO KYUSHU",
    month: "September",
    date: "2022.09.13",
    mainImage: {
      url: mainImage6,
      alt: "記事1のメイン画像",
    },
    text: `機会があり、28年間の人生で初めて九州の地を踏んだ。別府や黒川温泉に行きながらガレリア御堂原というホテルに行き着く。九州というよりはこの建築を見に訪れたと言っても過言ではないところあり。DABURA.mという建築事務所が設計していて、かなり特徴的な建物、丘の上でブイブイ言わせている。エントランスやレストランまでの道のりは割とラビリンス感があり、個人的には興奮した。使い勝手に関してはわからない。部屋にも温泉があり、テラスからは別府の街と海が一望できる。
    だいぶと豪勢な感じで、これもまたあまりやったことのないタイプのお金の使い方だが、年に数回はやってみてもいいかなという所感であった。ドミニクチェンさん的なコンテクストで言えば、リトリートというやつかもしれない。普段の生活から抜け出して、何か違うものに対面するという。これを機に、とりあえずは日本で気に入った建築のホテルに出かけるというのをやってみようと思った。
    
    その次の日は熊本、阿蘇への大移動。阿蘇山のテッペンまでは車で移動し、展望台のあるエリアに脚を運ぶ。展望台の向かい側には草原が広がっていた。そこには馬が放されていて、相当近くまで馬に近寄るというアグレッシブな体験もできた。まともに山に来たのは小学校低学年の時に富士山に行ったきりで、阿蘇の広大さが気持ちよかった。
    
    細々訪れた場所も心地よく、とてもよい九州旅になった。`,
    textEnglish: `I had the opportunity to set foot in Kyushu for the first time in my 28 years of life. While I visited Beppu and Kurokawa Onsen, I ended up at a hotel called "Galleria Midobaru." It wouldn't be an overstatement to say that I visited more for the architecture than for Kyushu itself. It was designed by an architectural firm called DABURA.m and was quite a distinctive building, proudly situated on top of a hill. The path from the entrance to the restaurant had a somewhat labyrinthine quality, and personally, I was excited by it. As for its practicality, I'm not sure. The rooms also had hot springs, and from the terrace, you could enjoy a panoramic view of Beppu city and the sea.

    It felt quite luxurious, and this was a type of spending I hadn't done much before. However, I felt that it might be worth trying a few times a year. In the context of someone like Dominic Chen, it might be considered a retreat - a way to step out of your everyday life and encounter something different. With this in mind, I thought I would try venturing to architecturally interesting hotels in Japan, at least for now.
    
    The next day was a significant journey to Kumamoto and Aso. We traveled by car to the peak of Mount Aso, and visited the area with an observatory. On the other side of the observatory, there was a vast grassy plain. Horses roamed freely, and I even had the chance for an aggressive experience of getting quite close to them. The last time I had visited a proper mountain was when I went to Mount Fuji in the early years of elementary school, so the vastness of Aso was refreshing.
    
    The places I visited along the way were enjoyable, and it turned out to be a very pleasant journey in Kyushu.`,
    tag: "LIFE",
    imageFigures: [
      { url: imageFigure6_1, alt: "" },
      { url: imageFigure6_2, alt: "" },
      { url: imageFigure6_3, alt: "" },
      { url: imageFigure6_4, alt: "" },
    ],
  },
  [ARTICLE_TYPE.HISTORICAL_SCIENCE]: {
    title: "HISTORICAL SCIENCE",
    month: "October",
    date: "2022.10.10",
    mainImage: {
      url: mainImage7,
      alt: "記事1のメイン画像",
    },
    text: `10月になり、本を読んで歴史を勉強することが面白いと思うようになった。その大きなきっかけはCOTEN RADIO。COTEN RADIOは株式会社COTENという会社が配信しているポッドキャストで、それとは別のメディアでCEOの深井龍之介さんが話しているのを聞いて、「今まで知ってきたこととなんか違う」という印象を受けた。特定の歴史上の人物等の小さなことから国の成り立ちのような大きなものまでの歴史の話をしながらメタ認知のきっかけにしていくというコンセプトが興味深い。逆に今まで学校で勉強してきた歴史は、節と節、章と章の間に区切りがあって、なんとなく他人事の話をぶつ切りに聞かされている感があった。時代の間の話とか、テスト範囲の向こう側は無意味、みたいなことがあったように思う。天動説的な思い込みを持ってしまっていたのかもしれない。

    その、「間」とか「向こう側」への知的好奇心から始まり、人間、道具、コミュニケーションを学んでいくと世界がひと続きになっていることの実感が出てきた。例えば歴史から始まって、哲学が発生して数学になったり、国が生まれて言語が発生したり、みたいな、学問だと思っていたものが様々歴史から始まってシームレスに繋がっているようにも見えて、他人事だったことが自分に繋がってることを実感した。見えてなかった枠を取り去った。
    それ自体が自分にとってとても面白い気づきであった。なんとなく生きていくために理系学問ないしは情報工学を勉強したが、人文学/社会学とか、哲学や美術みたいなこれまで触れようと思ったことがない学問を学びたいと思った。
    
    ここまで来ると、社会構造的に選択させられていることが膨大にあることに気がつく。そこそこ勉強がわかりお金も稼げそうだから大学に行き企業に入って週5日は働いて…云々。もちろん楽しい時は楽しかったしそうやって出会ってきた友人たちも好きだが、社会に飲み込まれているという感覚もある。
    完全に枠の外に出るのもどうかと思うが、上述の通り社会的な基準を持ちすぎてもいけない。歴史の勉強から入り、果ては思想と思想の線の上に居続けようという哲学に辿り着いたのであった。`,
    textEnglish: `In October, I became interested in studying history by reading books. The major catalyst for this was COTEN RADIO, a podcast distributed by a company called COTEN. I heard CEO Ryunosuke Fukai speaking on a different media platform, and it left an impression of "something different from what I've known so far." The concept of using historical stories, ranging from small details about specific figures to the formation of nations, as a trigger for metacognition was intriguing. Conversely, the history I had studied in school seemed fragmented, with divisions between sections and chapters, making it feel like I was passively absorbing disjointed stories that were somewhat detached. There might have been a tendency to hold onto geocentric beliefs.

    Starting from intellectual curiosity about the "gaps" or the "other side," as I delved into the study of human beings, tools, and communication, I began to sense the interconnectedness of the world. For example, starting from history, philosophy emerged and turned into mathematics, nations were born leading to the development of languages, and what I thought were separate fields of study appeared seamlessly connected through various historical threads. I realized that things I had considered unrelated were, in fact, connected to me. It was an intriguing revelation to remove the invisible boundaries.
    
    This realization itself was fascinating for me. Although I had studied scientific disciplines or information technology somewhat arbitrarily to live my life, I now wanted to explore academic disciplines such as humanities, sociology, philosophy, and art that I had never considered before.
    
    By this point, I became aware of the vast array of choices dictated by social structures. Going to university, joining a company, working five days a week, and so on, seemed like a plausible path because it involved understanding and earning money. Of course, there were enjoyable moments, and I liked the friends I had met along the way, but there was also a sense of being swallowed up by society. While I didn't necessarily want to completely break free from societal norms, I also didn't want to adhere too strictly to social standards, as mentioned earlier. Starting from the study of history and eventually arriving at the philosophy of staying on the line between different ideologies, that became my chosen path.`,
    tag: "LIFE",
    imageFigures: [
      { url: imageFigure7_1, alt: "" },
      { url: imageFigure7_2, alt: "" },
      { url: imageFigure7_3, alt: "" },
    ],
  },
  [ARTICLE_TYPE.LOOK_BACK_SUMMARY]: {
    title: "LOOK BACK SUMMARY",
    month: "December",
    date: "2022.12.31",
    mainImage: {
      url: mainImage8,
      alt: "記事1のメイン画像",
    },
    text: `約1.5年に渡ったホテル暮らしをやめて東京に暮らし始めたことが、大きな2022年のトピックだった。この1.5年で考えなかったことを考え、孤独の時間が確保でき、本を読んだり勉強したりの時間が増えた。人といる時間も嫌いではないが、孤独の時間を寂しいと思えるのは孤独の時間が確保されているからだとわかった。
    もちろん、ホテル暮らしをしていても東京に戻ってきても、人との出会いは様々、みんなとても面白い人であり、そこは本当に尊い。バランスを考えながら生活できる環境になったので、現状ではもう少しひとりの時間を増やせるようにしていけるとよいなと感じている。
    
    もう一つ、ロースターでバリスタをやるという野望が達成できた。これも自分の中ではかなり大きな出来事で、コーヒー好きな人である時には知らなかったことを様々知ることができた。友人や知り合いとコーヒーを飲みながらその良さを話すという根本スタイルは変わらないが、接客/マーケティングのような、自分が関わってこなかった業種の仕事を前のめりにやってみるのも面白い。
    
    再スタートのような1年として受け取ると、申し分ないのではないだろうか。振り返りはここで終わりにして、来年をどんな年にするのか考えていこう。`,
    textEnglish: `One of the significant topics of 2022 was the decision to end my approximately 1.5-year hotel lifestyle and start living in Tokyo. During this 1.5 years, I pondered on things I hadn't considered before, secured moments of solitude, and increased the time for reading and studying. While I don't dislike time spent with others, I realized that feeling lonely during moments of solitude is possible because those moments are intentionally carved out.

    Certainly, whether living in hotels or back in Tokyo, encounters with people were diverse, and everyone I met was genuinely interesting. That aspect is truly precious. Given the ability to balance my life, I now feel that I can afford a bit more time alone.
    
    Another achievement was fulfilling the ambition of working as a barista in a coffee roastery. This was a significant event for me, allowing me to learn various things I didn't know when I was just a coffee enthusiast. While the fundamental style of enjoying coffee with friends and acquaintances remains unchanged, delving into professions like customer service and marketing, which I hadn't been involved in before, proved to be interesting.
    
    Considering this year as a kind of restart, it seems quite satisfactory. Let's conclude the reflection here and think about what kind of year we want to make the coming one.`,
    tag: "LIFE",
    imageFigures: [
      { url: imageFigure8_1, alt: "" },
      { url: imageFigure8_2, alt: "" },
      { url: imageFigure8_3, alt: "" },
    ],
  },
};
