import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const userClipSlice = createSlice({
  name: "userClip",
  initialState: {
    content: [

      {
        id: "",
        title: "",
        name: "",
        date: "",
        content: "",
        url: "",
      },
    ],
    NewsClipid: [], 
  },
  reducers: {
    clipNews: (state: any, action: any): any => {
      console.log("클립뉴스 함수로 들어왔다");
      state.content.push({ ...action.payload });
      state.NewsClipid.push(action.payload._id);
    },
    unclipNews: (state, action): any => {
      console.log("언클립 뉴스 함스로 들어왔어요");
      console.log(action.payload._id);
      return {
        content: state.content.filter(
          (content) => content.id !== action.payload.id
        ),
        NewsClipid: state.NewsClipid.filter((id) => id !== action.payload._id),
      };
    },
  },
});

export default userClipSlice.reducer;
export const { clipNews, unclipNews } = userClipSlice.actions;
