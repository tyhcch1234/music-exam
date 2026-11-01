/* Music Exam — 課程內容
   資料來源：P3 音樂課堂教學影片（柏斯音樂教育平台畫面）
   兩個單元 · 每單元三課 */

const COURSE = {
  kicker: "P3 音樂 · 兩個單元 · 六節課",
  title: "Music Exam",
  intro:
    "把課堂影片裡的兩個單元拆成六節課：每節課先看學習重點（影片、樂譜、圖片與錄音），再做測試。測試即時對答案並講解，成績會自動記錄在你的瀏覽器。",
  sourceLabel: "P3 音樂課堂錄影（51 分鐘）",
  units: [
    {
      id: "u1",
      num: "單元一",
      short: "U1",
      title: "Music and Atmosphere",
      subtitle:
        "音樂的氣氛從哪裡來？先由「力度」入手：大聲與細聲怎樣改變一首歌的感覺；再看拍子怎樣給音樂一個穩定的腳步；最後認識管弦樂團的四個樂器家族。",
      lessons: [
        {
          id: "l1",
          title: "大聲與細聲：力度",
          lede:
            "同一個音，用力彈和輕輕彈，感覺完全不同。這一課學 forte 與 piano，並用《Sleep Baby Sleep》看樂譜上的力度記號。",
          tags: ["力度 dynamics", "forte / piano", "Sleep Baby Sleep"],
          media: {
            video: "assets/media/u1l1-loud.mp4",
            poster: "assets/media/u1l1-poster.webp",
            caption:
              "課堂影片：鋼琴家演奏。留意他何時用力按下琴鍵、何時放輕——聲音的大小就是這樣做出來的。",
          },
          focus: "力度（dynamics）就是音樂的大細聲；它決定一首樂曲的氣氛。",
          points: [
            {
              t: "聲音有大聲，也有細聲。",
              note: "有人大叫是「大聲」，有人耳語是「細聲」；音樂一樣，只是我們用「力度」這個詞。",
            },
            {
              t: "forte（f）＝ 強。",
              note: "意大利文，意思是「用力」。用力按下琴鍵，聲音就響亮，像一聲叫喊。",
            },
            {
              t: "piano（p）＝ 弱。",
              note: "意大利文，意思是「輕輕地」。輕柔觸鍵，聲音就細，像在耳邊說話。",
            },
            {
              t: "力度記號寫在樂譜上，告訴演奏者要幾大聲。",
              note: "常見的有 pp（很弱）、p（弱）、mf（中強）、f（強）、ff（很強）。",
            },
            {
              t: "同一首樂曲，改變力度，氣氛就完全不同。",
              note: "所以「Music and Atmosphere」——音樂的氣氛，第一件事就是力度。",
            },
            {
              t: "《Sleep Baby Sleep》是搖籃曲，譜上標了 pp。",
              note: "要用很弱、很輕的聲音唱，才像哄嬰兒睡覺；如果用力唱，就不像搖籃曲了。",
            },
          ],
          keypoint: "f 是強、p 是弱；力度一變，音樂的氣氛就變。",
          figures: [
            {
              src: "assets/media/u1l1-sleepbabysleep.webp",
              wide: true,
              alt: "Sleep Baby Sleep 樂譜",
              caption: "《Sleep Baby Sleep》（Traditional Song from Germany）樂譜：3/4 拍，第一小節下方標著 pp——很弱，因為它是哄嬰兒睡的搖籃曲。",
            },
            {
              src: "assets/media/u1l1-piano.webp",
              alt: "鋼琴家演奏",
              caption: "同一段音樂，用力與放輕的分別，就是 forte 與 piano。",
            },
          ],
          terms: [
            { en: "dynamics", zh: "力度", note: "音樂的大細聲" },
            { en: "forte (f)", zh: "強", note: "用力奏，聲音響亮" },
            { en: "piano (p)", zh: "弱", note: "輕柔奏，聲音細" },
            { en: "pp", zh: "很弱", note: "pianissimo" },
            { en: "ff", zh: "很強", note: "fortissimo" },
            { en: "lullaby", zh: "搖籃曲", note: "哄嬰兒睡的歌曲" },
          ],
          quiz: [
            {
              type: "mcq",
              q: "樂譜上的「f」代表甚麼？",
              en: "What does “f” mean in a score?",
              options: ["強（forte）", "弱（piano）", "快（fast）", "慢（slow）"],
              answer: 0,
              explain: "f 是 forte 的簡寫，意大利文意思是「用力」，即是要奏得大聲。",
            },
            {
              type: "mcq",
              q: "鋼琴家輕輕觸鍵，聲音會變成怎樣？",
              options: ["很響亮，像叫喊", "很細，像耳語", "完全沒有聲音", "會變成鼓聲"],
              answer: 1,
              explain: "輕柔觸鍵＝弱（piano），聲音細，像在耳邊說話。",
            },
            {
              type: "tf",
              q: "同一首樂曲，只要改變力度，聽起來的氣氛也會不同。",
              answer: true,
              explain: "力度是營造氣氛最直接的方法：同一段旋律，用 f 演奏會變得有力量，用 p 就變得溫柔。",
            },
            {
              type: "fill",
              q: "意大利文 “piano” 表示樂曲要奏得 ______。",
              placeholder: "例：弱 / 細聲",
              accept: ["弱", "細聲", "小聲", "輕聲", "quiet", "soft"],
              explain: "piano 即「弱」——輕輕地奏，聲音要細。",
            },
            {
              type: "match",
              q: "把力度記號與意思配對。",
              left: ["pp", "p", "f", "ff"],
              right: ["很強", "很弱", "強", "弱"],
              answer: [1, 3, 2, 0],
              explain: "pp 很弱、p 弱、f 強、ff 很強；由細到大：pp → p → f → ff。",
            },
            {
              type: "mcq",
              q: "《Sleep Baby Sleep》譜上標了 pp，最適合用怎樣的力度唱？",
              options: [
                "很弱、輕柔地唱",
                "很強、用力地唱",
                "一時很強一時很弱，越快越好",
                "不用理會力度",
              ],
              answer: 0,
              explain: "它是搖籃曲，pp 就是要很弱很輕，才有哄嬰兒入睡的感覺。",
            },
          ],
        },
        {
          id: "l2",
          title: "二拍子：2/4 拍",
          lede:
            "2/4 拍每小節兩拍，強—弱規律清清楚楚。這一課讀懂拍號上下兩個數字的意思，並用《Pitter Patter》拍出 2/4 的節奏。",
          tags: ["拍號", "2/4 拍", "Pitter Patter"],
          media: {
            image: "assets/media/u1l2-pitterpatter.webp",
            alt: "Pitter Patter 樂譜",
            caption:
              "《Pitter Patter》（English Nursery Rhymes）樂譜：拍號是 2/4，速度 ♩ = 110，音符上面印了唱名 d r m f s l t。",
          },
          focus: "2/4 拍＝每小節 2 個四分音符，強弱規律是「強—弱」，屬於單二拍子。",
          points: [
            {
              t: "拍號寫在譜號後面，上面的數字是「每小節幾拍」。",
              note: "2/4 的 2，代表每小節含有 2 個四分音符。",
            },
            {
              t: "下面的數字是「用哪一種音符做一拍」。",
              note: "4 代表四分音符（crotchet）。所以 2/4 就是：以四分音符為一拍，每小節兩拍。",
            },
            {
              t: "2/4 拍又叫「單二拍子」，強弱規律是「強—弱」。",
              note: "第一拍強、第二拍弱，一直重複，像行路的左右腳。",
            },
            {
              t: "《Pitter Patter》是 2/4 拍的兒歌。",
              note: "歌詞唱 “pitter patter, listen to the rain”，雨聲滴滴答答，正好用兩拍一組的腳步來模仿。",
            },
            {
              t: "不是所有歌都是 2/4 拍。",
              note: "《Sleep Baby Sleep》譜上是 3/4 拍，每小節三拍；把它和 2/4 拍並排唱，就聽得出「兩拍一組」與「三拍一組」的分別。",
            },
            {
              t: "在創作工具的小節裡放音符，就做出自己的節奏型。",
              note: "先把一小節填滿兩拍（例如兩個四分音符），再加休止符或八分音符變化。",
            },
          ],
          keypoint: "2/4：上面 2＝每小節兩拍，下面 4＝四分音符為一拍；強—弱。",
          figures: [
            {
              src: "assets/media/u1l2-24page.webp",
              wide: true,
              alt: "2/4 拍說明頁",
              caption: "課堂的 2/4 拍說明頁：上面 2 代表每小節 2 個四分音符，下面 4 代表以四分音符為一拍；右邊是 2/4 拍的樂譜例子。",
            },
          ],
          terms: [
            { en: "time signature", zh: "拍號", note: "寫在譜號後面" },
            { en: "2/4", zh: "二四拍", note: "每小節 2 拍，四分音符為一拍" },
            { en: "crotchet", zh: "四分音符", note: "2/4 拍中算一拍" },
            { en: "simple duple time", zh: "單二拍子", note: "每小節兩拍" },
            { en: "bar / measure", zh: "小節", note: "兩條小節線之間" },
          ],
          listen: [
            {
              src: "assets/media/u1l2-pitter.mp3",
              note: "Pitter Patter：一邊聽一邊數「1、2 / 1、2」。",
            },
          ],
          quiz: [
            {
              type: "mcq",
              q: "2/4 拍每小節有幾拍？",
              options: ["2 拍", "3 拍", "4 拍", "6 拍"],
              answer: 0,
              explain: "2/4 上面那個 2 就是每小節的拍數——每小節 2 拍。",
            },
            {
              type: "fill",
              q: "2/4 拍中，下面的「4」代表以 ______ 音符為一拍。",
              placeholder: "例：四分",
              accept: ["四分", "四分音符", "crotchet", "quarter", "4"],
              explain: "4 代表四分音符（crotchet）：以四分音符為一拍。",
            },
            {
              type: "tf",
              q: "2/4 拍屬於單二拍子，強弱規律是「強—弱」。",
              answer: true,
              explain: "每小節兩拍、第一拍強第二拍弱，所以叫單二拍子。",
            },
            {
              type: "match",
              q: "拍號裡兩個數字各自代表甚麼？",
              left: ["上面的 2", "下面的 4"],
              right: ["以四分音符為一拍", "每小節有 2 拍"],
              answer: [1, 0],
              explain: "上面＝每小節拍數，下面＝用哪種音符做一拍。",
            },
            {
              type: "mcq",
              q: "《Pitter Patter》的拍號是？",
              options: ["2/4", "3/4", "4/4", "6/8"],
              answer: 0,
              explain: "樂譜開頭寫著 2/4；歌詞的雨聲「pit-ter pat-ter」正好是兩拍一組。",
            },
            {
              type: "listen",
              audio: "assets/media/u1l2-pitter.mp3",
              audioNote: "聽一次，選出這是哪一首歌。",
              q: "聽這段音樂，這是哪一首歌？",
              options: ["《Sleep Baby Sleep》", "《Pitter Patter》", "《Yankee Doodle》", "《一閃一閃小星星》"],
              answer: 1,
              explain: "歌詞唱 “pitter patter, listen to the rain”，就是 2/4 拍的《Pitter Patter》。",
            },
          ],
        },
        {
          id: "l3",
          title: "管弦樂團的樂器家族",
          lede:
            "木管、銅管、弦樂、敲擊——四大家族，各有自己的聲音。這一課把樂器分類，並看它們在音樂會裡坐哪裡。",
          tags: ["樂器家族", "管弦樂團", "聆聽"],
          media: {
            video: "assets/media/u1l3-woodwind.mp4",
            poster: "assets/media/u1l3-poster.webp",
            caption:
              "課堂影片：介紹管弦樂團的樂器（Clarinet 單簧管）。影片逐一示範每件樂器的外型和聲音。",
          },
          focus: "管弦樂團的樂器分四大家族：木管、銅管、弦樂、敲擊。",
          points: [
            {
              t: "木管家族 woodwind：長笛 flute、單簧管 clarinet、雙簧管 oboe、巴松管 bassoon。",
              note: "靠吹氣發聲；雙簧管用兩片蘆葦片振動，聲音帶鼻音。",
            },
            {
              t: "銅管家族 brass：小號 trumpet、法國號 french horn、長號 trombone、大號 tuba。",
              note: "金屬管身、用杯形吹嘴；長號用伸縮管改變音高。",
            },
            {
              t: "弦樂家族 strings：小提琴 violin、中提琴 viola、大提琴 cello、低音大提琴 double bass。",
              note: "用弓拉弦（也可撥弦）；由小提琴到低音大提琴，體積越大、聲音越低。",
            },
            {
              t: "敲擊家族 percussion：小鼓 snare drum、牛鈴 cowbell……還有很多。",
              note: "打、搖、刮都會發聲，負責節奏與氣氛。",
            },
            {
              t: "音樂會上，四大家族按固定位置排列，由指揮帶領。",
              note: "弦樂最靠近指揮，木管在中間，銅管在後，敲擊在最後方——聲音才平衡。",
            },
          ],
          keypoint: "四大家族：木管、銅管、弦樂、敲擊；每件樂器都要認得名字和樣子。",
          figures: [
            {
              src: "assets/media/u1l3-clarinet.webp",
              alt: "單簧管 Clarinet",
              caption: "單簧管 Clarinet——木管家族。",
            },
            {
              src: "assets/media/u1l3-trumpet.webp",
              alt: "小號 Trumpet",
              caption: "小號 Trumpet——銅管家族。",
            },
            {
              src: "assets/media/u1l3-violin.webp",
              alt: "小提琴 Violin",
              caption: "小提琴 Violin——弦樂家族，用弓拉弦。",
            },
          ],
          terms: [
            { en: "woodwind", zh: "木管", note: "flute / clarinet / oboe / bassoon" },
            { en: "brass", zh: "銅管", note: "trumpet / french horn / trombone / tuba" },
            { en: "strings", zh: "弦樂", note: "violin / viola / cello / double bass" },
            { en: "percussion", zh: "敲擊", note: "snare drum / cowbell" },
            { en: "conductor", zh: "指揮", note: "帶領整個樂團" },
            { en: "orchestra", zh: "管弦樂團", note: "四大家族合奏" },
          ],
          listen: [
            {
              src: "assets/media/u1l3-orchestra.mp3",
              note: "音樂會片段：聽聽整個樂團合奏的聲音。",
            },
          ],
          quiz: [
            {
              type: "match",
              q: "把樂器配到正確的家族。",
              left: ["小提琴 violin", "長號 trombone", "單簧管 clarinet", "小鼓 snare drum"],
              right: ["銅管", "敲擊", "弦樂", "木管"],
              answer: [2, 0, 3, 1],
              explain: "小提琴＝弦樂；長號＝銅管；單簧管＝木管；小鼓＝敲擊。",
            },
            {
              type: "mcq",
              q: "以下哪一件不是銅管樂器？",
              options: ["小號 trumpet", "長號 trombone", "雙簧管 oboe", "大號 tuba"],
              answer: 2,
              explain: "雙簧管是木管樂器，用蘆葦片發聲；其餘三件都是銅管。",
            },
            {
              type: "tf",
              q: "低音大提琴（double bass）屬於弦樂家族。",
              answer: true,
              explain: "弦樂四件：小提琴、中提琴、大提琴、低音大提琴；低音大提琴最大、聲音最低。",
            },
            {
              type: "fill",
              q: "木管家族中，用蘆葦片振動、聲音帶鼻音的樂器是 ______。",
              placeholder: "中文或英文皆可",
              accept: ["雙簧管", "oboe"],
              explain: "雙簧管 oboe 用兩片蘆葦片（double reed）發聲，聲音帶有鼻音。",
            },
            {
              type: "order",
              q: "把弦樂家族由高音到低音排列。",
              hint: "依次點選：最高音 → 最低音",
              items: ["低音大提琴 double bass", "小提琴 violin", "大提琴 cello", "中提琴 viola"],
              answer: [1, 3, 2, 0],
              explain: "小提琴 → 中提琴 → 大提琴 → 低音大提琴：體積越大，聲音越低。",
            },
            {
              type: "mcq",
              q: "音樂會上，站在樂團前面帶領全體演奏的是誰？",
              options: ["指揮 conductor", "首席小提琴手", "作曲家 composer", "聽眾"],
              answer: 0,
              explain: "指揮用雙手控制速度、力度和進出，是整個樂團的領袖。",
            },
          ],
        },
      ],
    },
    {
      id: "u2",
      num: "單元二",
      short: "U2",
      title: "World Music",
      subtitle:
        "世界各地的童謠，藏著同一套音樂語言：唱名、固定音型、曲式與記號。這一單元用美國、英格蘭、威爾斯的歌曲，學會聽出 A、B、A。",
      lessons: [
        {
          id: "l1",
          title: "唱名、Yankee Doodle 與固定音型",
          lede:
            "用 d r m f s l t 唱旋律，再學 ostinato（固定音型）——一段不停重複的短句，如何為歌曲建立伴奏。",
          tags: ["唱名 solfège", "Yankee Doodle", "ostinato"],
          media: {
            video: "assets/media/u2l1-yankeedoodle.mp4",
            poster: "assets/media/u2l1-poster.webp",
            caption:
              "課堂影片：《Yankee Doodle》樂譜（Traditional Song from America），音符上印了唱名，可邊聽邊唱。",
          },
          focus: "唱名幫我們唱準音高；ostinato（固定音型）用重複的短句做伴奏。",
          points: [
            {
              t: "唱名 solfège：d r m f s l t＝do re mi fa so la ti。",
              note: "樂譜上把 d r m f s l t 印在音符上方，就用唱名把旋律唱出來。",
            },
            {
              t: "《Yankee Doodle》是美國傳統歌曲。",
              note: "旋律簡單、節奏明快，常用來練唱名和拍子；歌詞講一個叫 Yankee Doodle 的小伙子騎小馬進城。",
            },
            {
              t: "ostinato＝固定音型：一段短音型不停重複。",
              note: "它可以做低音、做節奏伴奏；因為一直重複，聽起來很穩，也容易跟。",
            },
            {
              t: "「Clap and compose ostinato」：先拍，再創作自己的固定音型。",
              note: "例如每小節都拍「拍—拍—（休）」，重複四次，就成為一段伴奏。",
            },
            {
              t: "《綠袖子》Greensleeves 是 16 世紀的英格蘭民謠。",
              note: "旋律浪漫抒情、簡易上口，常被用作配樂；在香港，它也是公開試聆聽卷的背景音樂，很多年代的學生都聽過。",
            },
            {
              t: "這一課開始接觸「曲式」：二段體。",
              note: "曲式就是樂曲的結構，例如 A、B 兩部分怎樣排列。",
            },
          ],
          keypoint: "唱名 d r m f s l t 用來唱準音高；ostinato 是重複的短音型，用來做伴奏。",
          figures: [
            {
              src: "assets/media/u2l1-yankeedoodle.webp",
              wide: true,
              alt: "Yankee Doodle 樂譜",
              caption: "《Yankee Doodle》（Traditional Song from America）樂譜，音符上方印了唱名，可以邊看邊唱。",
            },
            {
              src: "assets/media/u2l1-greensleeves.webp",
              wide: true,
              alt: "綠袖子介紹頁",
              caption: "《綠袖子》Greensleeves：16 世紀英格蘭民謠，旋律浪漫抒情，也是香港公開試聆聽卷常用的背景音樂。",
            },
            {
              src: "assets/media/u2l1-binary.webp",
              wide: true,
              alt: "二段體 A B",
              caption: "二段體：兩個不同部分 A 與 B，各自反覆。",
            },
          ],
          terms: [
            { en: "solfège", zh: "唱名", note: "do re mi fa so la ti" },
            { en: "Yankee Doodle", zh: "美國傳統歌曲", note: "旋律用唱名唱" },
            { en: "ostinato", zh: "固定音型", note: "不停重複的短音型" },
            { en: "Greensleeves", zh: "綠袖子", note: "16 世紀英格蘭民謠" },
            { en: "folk song", zh: "民謠", note: "民間流傳的歌曲" },
          ],
          listen: [
            {
              src: "assets/media/u2l1-yankee.mp3",
              note: "Yankee Doodle：跟著唱名 d r m f s l t 唱一次。",
            },
            {
              src: "assets/media/u2l1-greensleeves.mp3",
              note: "Greensleeves 綠袖子：留意它抒情、緩慢的旋律。",
            },
          ],
          quiz: [
            {
              type: "mcq",
              q: "唱名 “s” 對應哪一個音？",
              options: ["so", "mi", "la", "ti"],
              answer: 0,
              explain: "d r m f s l t＝do re mi fa so la ti，所以 s 是 so。",
            },
            {
              type: "mcq",
              q: "《Yankee Doodle》是哪個地方的傳統歌曲？",
              options: ["美國", "英格蘭", "德國", "威爾斯"],
              answer: 0,
              explain: "樂譜右上寫著 Traditional Song from America，即美國傳統歌曲。",
            },
            {
              type: "tf",
              q: "ostinato（固定音型）是一段不停重複的短音型，常用作伴奏。",
              answer: true,
              explain: "不停重複是它的關鍵：穩定、易記，可以疊在旋律下面做伴奏。",
            },
            {
              type: "mcq",
              q: "《綠袖子》Greensleeves 是怎樣的樂曲？",
              options: ["16 世紀英格蘭民謠", "20 世紀美國流行曲", "德國搖籃曲", "威爾斯舞曲"],
              answer: 0,
              explain: "它在 16 世紀開始流行於英格蘭民間，旋律浪漫抒情，常被用作配樂。",
            },
            {
              type: "match",
              q: "把歌曲配到它的來源。",
              left: ["Yankee Doodle", "Greensleeves", "Sleep Baby Sleep"],
              right: ["英格蘭", "德國", "美國"],
              answer: [2, 0, 1],
              explain: "Yankee Doodle 美國、Greensleeves 英格蘭、Sleep Baby Sleep 德國（Traditional Song from Germany）。",
            },
            {
              type: "mcq",
              q: "「Clap and compose ostinato」這個活動要做甚麼？",
              options: [
                "拍出並創作一段重複的伴奏音型",
                "把整首歌的歌詞背下來",
                "畫出樂器的外形",
                "把歌曲改編成三段體",
              ],
              answer: 0,
              explain: "clap＝拍手，compose＝創作，ostinato＝固定音型：拍出並創作一段不停重複的短音型。",
            },
          ],
        },
        {
          id: "l2",
          title: "二段體、休止符與延音記號",
          lede:
            "A 加 B 就是二段體。這一課用《The Riddle》聽出兩個不同的段落，並認識四分休止符與 fermata 這兩個譜上記號。",
          tags: ["二段體 binary form", "四分休止符", "fermata"],
          media: {
            video: "assets/media/u2l2-riddle.mp4",
            poster: "assets/media/u2l2-poster.webp",
            caption:
              "課堂影片：《The Riddle》（English Folk Song）樂譜。留意旋律前半與後半的分別——那就是 A 部與 B 部。",
          },
          focus: "二段體＝A＋B 兩個不同部分，通常各自反覆；四分休止符＝靜默一拍。",
          points: [
            {
              t: "二段體（binary form，又叫單二部曲式）只有兩個部分：A 和 B。",
              note: "兩個部分旋律不同，形成對比；通常每段都會反覆，所以聽起來像 A A B B。",
            },
            {
              t: "民間音樂很多都是二部曲式。",
              note: "課堂例子：Smiling Dickey's Hornpipe——先聽 A 段，再聽 B 段，兩段各自重複。",
            },
            {
              t: "四分休止符（crotchet rest / quarter note rest）＝靜默一拍。",
              note: "它不是「細聲」，而是完全不出聲，讓句子呼吸。",
            },
            {
              t: "休止符常常出現在樂句的結尾。",
              note: "課堂用莫扎特《C大調鋼琴奏鳴曲》做例子：四分休止符就寫在兩小節樂句的結尾處。",
            },
            {
              t: "延音記號（fermata）＝把音或休止自由延長。",
              note: "符號是半圓加一點，寫在音符或休止符上方；看到它就可以拖長，通常出現在樂段結尾。",
            },
            {
              t: "同一單元還會唱《一閃一閃小星星》和《Rain Rain Go Away》。",
              note: "用它們練習：哪裡是 A 部、哪裡是 B 部、哪裡有休止。",
            },
          ],
          keypoint: "二段體＝A＋B（各自反覆）；四分休止符＝靜默一拍；fermata＝自由延長。",
          figures: [
            {
              src: "assets/media/u2l2-riddle.webp",
              wide: true,
              alt: "The Riddle 樂譜",
              caption: "《The Riddle》（English Folk Song）樂譜：前半與後半旋律不同，就是 A 部與 B 部。",
            },
            {
              src: "assets/media/u2l2-crotchetrest.webp",
              wide: true,
              alt: "四分休止符說明頁",
              caption: "四分休止符（crotchet rest）：紅色的休止符寫在兩小節樂句的結尾，讓句子呼吸。",
            },
            {
              src: "assets/media/u2l2-ternary.webp",
              wide: true,
              alt: "三段體 A B A",
              caption: "下一課會學的三段體：A → B → A。",
            },
          ],
          terms: [
            { en: "binary form", zh: "二段體", note: "A + B，單二部曲式" },
            { en: "crotchet rest", zh: "四分休止符", note: "靜默一拍" },
            { en: "fermata", zh: "延音記號", note: "自由延長" },
            { en: "section", zh: "樂段", note: "A 部、B 部" },
            { en: "The Riddle", zh: "英格蘭民歌", note: "二段體例子" },
          ],
          listen: [
            {
              src: "assets/media/u2l2-twinkle.mp3",
              note: "《一閃一閃小星星》：邊聽邊找出段落的分界。",
            },
          ],
          quiz: [
            {
              type: "mcq",
              q: "二段體（binary form）的結構是？",
              options: ["A + B", "A + B + A", "只有 A", "A + A + A"],
              answer: 0,
              explain: "二段體只有兩個不同部分：A 和 B（A + B + A 是三段體）。",
            },
            {
              type: "tf",
              q: "二段體的兩個部分通常會各自反覆。",
              answer: true,
              explain: "譜上會有反覆記號，所以實際聽到的次序常是 A A B B。",
            },
            {
              type: "mcq",
              q: "四分休止符代表甚麼？",
              options: ["靜默一拍", "很細聲地唱一拍", "把音拖長一拍", "停一整首樂曲"],
              answer: 0,
              explain: "休止符是完全不出聲；四分休止符就是靜默一拍。",
            },
            {
              type: "fill",
              q: "寫在音符上方、表示可以把音自由延長的記號叫 ______。",
              placeholder: "中文或英文皆可",
              accept: ["延音記號", "延音", "fermata", "pause"],
              explain: "fermata（延音記號）是半圓加一點，看到它就可以把音或休止拖長。",
            },
            {
              type: "match",
              q: "把樂曲結構與記號配到正確的意思。",
              left: ["二段體", "三段體", "四分休止符", "延音記號"],
              right: ["A B A", "自由延長", "A B", "靜默一拍"],
              answer: [2, 0, 3, 1],
              explain: "二段體 A B、三段體 A B A、四分休止符靜默一拍、延音記號自由延長。",
            },
            {
              type: "mcq",
              q: "課堂用莫扎特《C大調鋼琴奏鳴曲》做例子，四分休止符出現在哪裡？",
              options: [
                "兩小節樂句的結尾處",
                "樂曲最開頭的第一拍",
                "每一小節的中間",
                "樂譜最後一頁的標題",
              ],
              answer: 0,
              explain: "它寫在兩小節樂句的結尾，讓句子有一個呼吸位。",
            },
          ],
        },
        {
          id: "l3",
          title: "三段體與弱起拍",
          lede:
            "A 走了，B 來對比，然後 A 回來——這就是三段體。再加上「弱起拍」：樂句不一定由第一拍開始。",
          tags: ["三段體 ternary form", "弱起拍 anacrusis", "世界童謠"],
          media: {
            video: "assets/media/u2l3-twinkle.mp4",
            poster: "assets/media/u2l3-poster.webp",
            caption:
              "課堂影片：《一閃一閃小星星》動畫版。留意旋律一次又一次回到同一個樂句——那就是 A 部回來。",
          },
          focus: "三段體＝A＋B＋A，B 部負責對比；弱起拍＝樂句由弱拍開始。",
          points: [
            {
              t: "三段體（ternary form，又叫三部曲式）是最常見的結構之一：A → B → A。",
              note: "先主部 A，然後對比部 B，最後回到主部 A。",
            },
            {
              t: "B 部要「對比」：節奏、力度、音區都可以不同。",
              note: "課堂例子是柴可夫斯基《圓舞曲》op.39：中間部分音符多以兩拍為一組，而不是三拍一組，力度標記是 forte，一聽就聽得出換了部分。",
            },
            {
              t: "弱起拍（anacrusis / pick up）＝樂句由弱拍開始。",
              note: "通常是上一小節的最後一拍，所以第一小節往往不完整；數拍時要由那一個弱拍數起。",
            },
            {
              t: "課堂例子：海頓 E 小調奏鳴曲（Haydn – Sonata in E minor）由弱起拍開始。",
              note: "唱歌時也一樣：《Home on the Range》開頭的 “Oh, give me a home” 就是弱起。",
            },
            {
              t: "這一課的歌曲：《The Riddle》《There was a Crooked Man》《一閃一閃小星星》《Home on the Range》。",
              note: "四首都是世界各地的童謠，用來練三段體與弱起拍。",
            },
            {
              t: "《一閃一閃小星星》的旋律來自法國民謠《媽媽請聽我說》。",
              note: "歌詞來自珍·泰勒的英文詩《小星星》；莫扎特後來依此寫了《小星星變奏曲》。旋律簡單，也常當搖籃曲。",
            },
          ],
          keypoint: "A B A＝三段體；B 部做對比。樂句由弱拍開始就是弱起拍。",
          figures: [
            {
              src: "assets/media/u2l3-anacrusis.webp",
              wide: true,
              alt: "弱起拍說明頁",
              caption: "弱起拍（pick up / anacrusis）：樂句由弱拍開始，一般是小節中的最後一拍；例子是海頓 E 小調奏鳴曲。",
            },
            {
              src: "assets/media/u2l3-crookedman.webp",
              wide: true,
              alt: "There was a Crooked Man 樂譜",
              caption: "《There was a Crooked Man》（English Nursery Rhyme）樂譜：本課的其中一首世界童謠。",
            },
          ],
          terms: [
            { en: "ternary form", zh: "三段體", note: "A B A，三部曲式" },
            { en: "anacrusis", zh: "弱起拍", note: "pick up / upbeat" },
            { en: "contrast", zh: "對比", note: "B 部與 A 部不同" },
            { en: "Home on the Range", zh: "美國歌曲", note: "弱起拍例子" },
            { en: "Twinkle Twinkle", zh: "一閃一閃小星星", note: "旋律源自法國民謠" },
          ],
          listen: [
            {
              src: "assets/media/u2l3-homeontherange.mp3",
              note: "Home on the Range：留意開頭由弱拍起唱。",
            },
          ],
          quiz: [
            {
              type: "mcq",
              q: "三段體的結構是？",
              options: ["A + B + A", "A + B", "A + A + B", "A + B + C"],
              answer: 0,
              explain: "三段體（三部曲式）＝A B A：主部、對比部、再回到主部。",
            },
            {
              type: "tf",
              q: "三段體中間的 B 部，通常會與 A 部形成對比。",
              answer: true,
              explain: "對比可以來自節奏、力度、音區或樂器；柴可夫斯基《圓舞曲》就用「兩拍一組」對比「三拍一組」。",
            },
            {
              type: "mcq",
              q: "柴可夫斯基《圓舞曲》op.39 的中間部分，音符多以幾拍為一組？",
              options: ["兩拍", "三拍", "四拍", "六拍"],
              answer: 0,
              explain: "原本是三拍子的圓舞曲，中間部分改成兩拍一組，形成明顯對比，力度是 forte。",
            },
            {
              type: "fill",
              q: "樂句由弱拍開始，這種寫法叫 ______。",
              placeholder: "中文或英文皆可",
              accept: ["弱起拍", "弱起", "anacrusis", "pick up", "upbeat"],
              explain: "弱起拍（anacrusis / pick up）一般是小節中的最後一拍，所以第一小節不完整。",
            },
            {
              type: "mcq",
              q: "《一閃一閃小星星》的旋律來自哪裡？",
              options: [
                "法國民謠《媽媽請聽我說》",
                "德國搖籃曲",
                "英格蘭民謠《綠袖子》",
                "美國歌曲《Yankee Doodle》",
              ],
              answer: 0,
              explain: "旋律出自法國民謠《媽媽請聽我說》，歌詞來自珍·泰勒的英文詩《小星星》。",
            },
            {
              type: "order",
              q: "把三段體聆聽時出現的次序排好。",
              hint: "依次點選你會聽到的部分",
              items: ["B 部（對比）", "A 部（主部）", "A 部再現"],
              answer: [1, 0, 2],
              explain: "先 A 部，再 B 部對比，最後 A 部回來——A B A。",
            },
          ],
        },
      ],
    },
  ],
};
