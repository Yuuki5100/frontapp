const grammarCardsData = [
  {
    "section": "セクション1",
    "phrase": "I am ~.",
    "meaning": "私は〜です",
    "example": "I am busy today.",
    "translation": "私は今日忙しいです"
  },
  {
    "section": "セクション1",
    "phrase": "You are ~.",
    "meaning": "あなたは〜です",
    "example": "You are very kind.",
    "translation": "あなたはとても親切です"
  },
  {
    "section": "セクション1",
    "phrase": "This is ~.",
    "meaning": "これは〜です",
    "example": "This is my bag.",
    "translation": "これは私のかばんです"
  },
  {
    "section": "セクション1",
    "phrase": "That is ~.",
    "meaning": "あれは〜です",
    "example": "That is her car.",
    "translation": "あれは彼女の車です"
  },
  {
    "section": "セクション1",
    "phrase": "Is this ~?",
    "meaning": "これは〜ですか？",
    "example": "Is this your seat?",
    "translation": "これはあなたの席ですか？"
  },
  {
    "section": "セクション1",
    "phrase": "What is ~?",
    "meaning": "〜は何ですか？",
    "example": "What is this machine?",
    "translation": "この機械は何ですか？"
  },
  {
    "section": "セクション1",
    "phrase": "I like ~.",
    "meaning": "私は〜が好きです",
    "example": "I like music.",
    "translation": "私は音楽が好きです"
  },
  {
    "section": "セクション1",
    "phrase": "Do you like ~?",
    "meaning": "〜は好きですか？",
    "example": "Do you like sushi?",
    "translation": "寿司は好きですか？"
  },
  {
    "section": "セクション1",
    "phrase": "I want ~.",
    "meaning": "私は〜が欲しいです",
    "example": "I want some water.",
    "translation": "私は水が欲しいです"
  },
  {
    "section": "セクション1",
    "phrase": "Can you ~?",
    "meaning": "〜できますか？ / 〜してくれますか？",
    "example": "Can you help me?",
    "translation": "手伝ってくれますか？"
  },

  {
    "section": "セクション2",
    "phrase": "I want to ~.",
    "meaning": "私は〜したいです",
    "example": "I want to go home.",
    "translation": "私は家に帰りたいです"
  },
  {
    "section": "セクション2",
    "phrase": "I have to ~.",
    "meaning": "私は〜しなければならない",
    "example": "I have to study tonight.",
    "translation": "私は今夜勉強しなければならない"
  },
  {
    "section": "セクション2",
    "phrase": "I can ~.",
    "meaning": "私は〜できる",
    "example": "I can swim well.",
    "translation": "私は上手に泳げます"
  },
  {
    "section": "セクション2",
    "phrase": "I cannot ~.",
    "meaning": "私は〜できない",
    "example": "I cannot drive a car.",
    "translation": "私は車を運転できません"
  },
  {
    "section": "セクション2",
    "phrase": "Would you like ~?",
    "meaning": "〜はいかがですか？",
    "example": "Would you like some tea?",
    "translation": "お茶はいかがですか？"
  },
  {
    "section": "セクション2",
    "phrase": "Would you like to ~?",
    "meaning": "〜しませんか？",
    "example": "Would you like to join us?",
    "translation": "私たちと一緒に来ませんか？"
  },
  {
    "section": "セクション2",
    "phrase": "Please ~.",
    "meaning": "どうぞ〜してください",
    "example": "Please sit down.",
    "translation": "どうぞ座ってください"
  },
  {
    "section": "セクション2",
    "phrase": "Let's ~.",
    "meaning": "〜しましょう",
    "example": "Let's start the meeting.",
    "translation": "会議を始めましょう"
  },
  {
    "section": "セクション2",
    "phrase": "Do you want to ~?",
    "meaning": "〜したいですか？",
    "example": "Do you want to eat now?",
    "translation": "今食べたいですか？"
  },
  {
    "section": "セクション2",
    "phrase": "How about ~ing?",
    "meaning": "〜するのはどうですか？",
    "example": "How about taking a break?",
    "translation": "休憩するのはどうですか？"
  },

  {
    "section": "セクション3",
    "phrase": "be going to ~",
    "meaning": "〜するつもりだ / 〜しそうだ",
    "example": "I am going to visit Osaka tomorrow.",
    "translation": "私は明日大阪を訪れるつもりです"
  },
  {
    "section": "セクション3",
    "phrase": "will ~",
    "meaning": "〜するつもりだ / 未来のこと",
    "example": "I will call you later.",
    "translation": "あとで電話します"
  },
  {
    "section": "セクション3",
    "phrase": "There is ~.",
    "meaning": "〜がある",
    "example": "There is a park near my house.",
    "translation": "私の家の近くに公園があります"
  },
  {
    "section": "セクション3",
    "phrase": "There are ~.",
    "meaning": "〜がある（複数）",
    "example": "There are many books on the desk.",
    "translation": "机の上にたくさんの本があります"
  },
  {
    "section": "セクション3",
    "phrase": "I am ~ing.",
    "meaning": "私は今〜している",
    "example": "I am reading a book.",
    "translation": "私は本を読んでいます"
  },
  {
    "section": "セクション3",
    "phrase": "Are you ~ing?",
    "meaning": "今〜していますか？",
    "example": "Are you waiting for someone?",
    "translation": "誰かを待っていますか？"
  },
  {
    "section": "セクション3",
    "phrase": "Do you have ~?",
    "meaning": "〜を持っていますか？",
    "example": "Do you have a pen?",
    "translation": "ペンを持っていますか？"
  },
  {
    "section": "セクション3",
    "phrase": "I don't have ~.",
    "meaning": "私は〜を持っていない",
    "example": "I don't have enough time.",
    "translation": "私は十分な時間がありません"
  },
  {
    "section": "セクション3",
    "phrase": "What do you ~?",
    "meaning": "あなたは何を〜しますか？",
    "example": "What do you want?",
    "translation": "あなたは何が欲しいですか？"
  },
  {
    "section": "セクション3",
    "phrase": "Where do you ~?",
    "meaning": "どこで / どこへ 〜しますか？",
    "example": "Where do you work?",
    "translation": "あなたはどこで働いていますか？"
  },

  {
    "section": "セクション4",
    "phrase": "as ~ as ...",
    "meaning": "...と同じくらい〜",
    "example": "This restaurant is as popular as that one.",
    "translation": "このレストランはあの店と同じくらい人気です"
  },
  {
    "section": "セクション4",
    "phrase": "more ~ than ...",
    "meaning": "...よりもっと〜",
    "example": "This book is more useful than I expected.",
    "translation": "この本は思ったより役に立つ"
  },
  {
    "section": "セクション4",
    "phrase": "-er than ...",
    "meaning": "...より〜",
    "example": "My brother is taller than me.",
    "translation": "私の兄は私より背が高い"
  },
  {
    "section": "セクション4",
    "phrase": "the most ~",
    "meaning": "最も〜",
    "example": "She is the most careful person here.",
    "translation": "彼女はここで最も注意深い人です"
  },
  {
    "section": "セクション4",
    "phrase": "too ~ to ...",
    "meaning": "...するには〜すぎる",
    "example": "I am too busy to go out.",
    "translation": "私は忙しすぎて出かけられない"
  },
  {
    "section": "セクション4",
    "phrase": "enough to ~",
    "meaning": "〜するのに十分な",
    "example": "She is old enough to travel alone.",
    "translation": "彼女は一人で旅行できる年齢です"
  },
  {
    "section": "セクション4",
    "phrase": "so ~ that ...",
    "meaning": "とても〜なので...",
    "example": "He was so tired that he fell asleep quickly.",
    "translation": "彼はとても疲れていたので、すぐ眠ってしまった"
  },
  {
    "section": "セクション4",
    "phrase": "want + 人 + to ~",
    "meaning": "人に〜してほしい",
    "example": "I want you to be careful.",
    "translation": "私はあなたに気をつけてほしい"
  },
  {
    "section": "セクション4",
    "phrase": "tell + 人 + to ~",
    "meaning": "人に〜するように言う",
    "example": "She told me to wait outside.",
    "translation": "彼女は私に外で待つよう言った"
  },
  {
    "section": "セクション4",
    "phrase": "ask + 人 + to ~",
    "meaning": "人に〜するよう頼む",
    "example": "I asked him to open the door.",
    "translation": "私は彼にドアを開けるよう頼んだ"
  },

  {
    "section": "セクション5",
    "phrase": "have been to ~",
    "meaning": "〜へ行ったことがある",
    "example": "I have been to Kyoto twice.",
    "translation": "私は京都に2回行ったことがある"
  },
  {
    "section": "セクション5",
    "phrase": "have never ~",
    "meaning": "一度も〜したことがない",
    "example": "I have never seen that movie.",
    "translation": "私はその映画を一度も見たことがない"
  },
  {
    "section": "セクション5",
    "phrase": "Have you ever ~?",
    "meaning": "今までに〜したことがありますか？",
    "example": "Have you ever tried natto?",
    "translation": "納豆を食べたことがありますか？"
  },
  {
    "section": "セクション5",
    "phrase": "be interested in ~",
    "meaning": "〜に興味がある",
    "example": "I am interested in Japanese history.",
    "translation": "私は日本の歴史に興味があります"
  },
  {
    "section": "セクション5",
    "phrase": "be good at ~",
    "meaning": "〜が得意である",
    "example": "She is good at math.",
    "translation": "彼女は数学が得意です"
  },
  {
    "section": "セクション5",
    "phrase": "be afraid of ~",
    "meaning": "〜を怖がる",
    "example": "My child is afraid of dogs.",
    "translation": "私の子どもは犬を怖がります"
  },
  {
    "section": "セクション5",
    "phrase": "Would you mind ~ing?",
    "meaning": "〜していただけますか？",
    "example": "Would you mind closing the window?",
    "translation": "窓を閉めていただけますか？"
  },
  {
    "section": "セクション5",
    "phrase": "Do you mind ~ing?",
    "meaning": "〜しても構いませんか？ / 〜は嫌ですか？",
    "example": "Do you mind waiting a few minutes?",
    "translation": "数分待っていただいても構いませんか？"
  },
  {
    "section": "セクション5",
    "phrase": "If I were you, I would ~.",
    "meaning": "もし私があなたなら、〜するでしょう",
    "example": "If I were you, I would take some rest.",
    "translation": "もし私があなたなら、少し休みます"
  },
  {
    "section": "セクション5",
    "phrase": "It is important to ~.",
    "meaning": "〜することは大切だ",
    "example": "It is important to keep learning.",
    "translation": "学び続けることは大切だ"
  }
];