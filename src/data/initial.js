const initial = { 
  wordList : [
    {
        "id":"1",
        "word":"API",
        "liked":false
    },
    {
        "id":"2",
        "word":"Front end",
        "liked":false
    },
    {
        "id":"3",
        "word":"Back end",
        "liked":false
    }
],
  likedWordList: [
    {
      "id": "1",
      "word": "lah",
      "definition": "lah lah",
      "liked": true
    },
    {
        "id": "2",
        "word": "rah",
        "definition": "rah rah",
        "liked": false
    }
  ],
  wordCard :{
    "id": 9,
    "word": "Api",
    "definition": "ha ha",
    "liked": false,
    "links": [
      {
          "id": 6,
          "link": "www.funny.com"
      },
      {
          "id": 12,
          "link": "www.beans.com"
      },
      {
          "id": 13,
          "link": "www.beans.com"
      }
    ]
  },
  loadedWordCard: false,
  loadedWordList: false,
  loadedLikedWordList: false,
  userName: "",
};

export default initial;