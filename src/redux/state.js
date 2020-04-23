let store = {
  _state: {
    profilePage: {
      posts: [
        { message: "im petia", counter: "5" },
        { message: "im vasia", counter: "6" },
        { message: "im ivan", counter: "7" },
      ],
      newPostText: "petyh",
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Vasil",
          img: "https://www.gl5.ru/photos/f/face_real/face20181.jpg",
        },
        {
          id: 2,
          name: "Andrew",
          img:
            "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg",
        },
        {
          id: 3,
          name: "Petr",
          img:
            "https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg",
        },
        {
          id: 4,
          name: "Kate",
          img:
            "https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1",
        },
        {
          id: 5,
          name: "Evelyn",
          img:
            "https://www.caricature-art.com/wp-content/uploads/2019/01/%D0%A8%D0%B5%D1%80%D0%BB%D0%BE%D0%BA-785x785.jpg",
        },
      ],
      messages: [
        { id: 1, message: "Helloy" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Petushok" },
        { id: 4, message: "Haha" },
        { id: 5, message: "Whats" },
      ],
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("krya");
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      counter: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
