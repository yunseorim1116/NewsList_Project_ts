import { InewsSearch } from "./../../type/type";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

interface IStateType {
  content: Iclips[];
  NewsClipid: Array<string>;
}

interface Iclips {
  uri: string;
  abstract: string;
  web_url: string;
  _id: string;
  pub_date: string;
}

export const userClipSlice = createSlice({
  name: "userClip",
  initialState: {
    content: [
      {
        uri: "",
        abstract: "",
        web_url: "",
        _id: "",
        pub_date: "",
      },
    ],
    NewsClipid: [],
  },
  reducers: {
    clipNews: (state: IStateType, action: PayloadAction<Iclips>) => {
      console.log("클립뉴스 함수로 들어왔다");

      state.content.push({ ...action.payload });
      state.NewsClipid.push(action.payload._id);
    },
    unclipNews: (state, action) => {
      console.log("언클립 뉴스 함스로 들어왔어요");
      console.log(action.payload._id);
      return {
        content: state.content.filter(
          (content) => content._id !== action.payload.id
        ),
        NewsClipid: state.NewsClipid.filter((id) => id !== action.payload._id),
      };
    },
  },
});

export default userClipSlice.reducer;
export const { clipNews, unclipNews } = userClipSlice.actions;
