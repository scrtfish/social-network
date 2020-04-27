const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
