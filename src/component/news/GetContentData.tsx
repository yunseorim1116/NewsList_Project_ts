import React, { useState, useEffect, MouseEventHandler, useRef } from "react";
import axios from "axios";
import { Idocs, InewsSearch, IAllData } from "../../type/type";

import NewsContent from "./NewsList";
import { Navigate, useNavigate } from "react-router-dom";
import Search from "./Search";
import { useSelector } from "react-redux";

const GetContentData = () => {
  const state: any = useSelector((state) => state);
  const ClipId = state.userClipSlice.NewsClipid;

  const [page, setPage] = useState(1);
  const throttle = useRef(false);

  const [isUserSearchIng, setIsUserSearchIng] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [news, setNews] = useState<InewsSearch[]>([]);

  const myKey = "53eyKNvMWqJg95NoF8JOU3rxu4Wf6XjX";

  const [userSearch, setUserSearch] = useState<string>(""); //유저 인풋값

  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("keywords") || "[]")
  );

  const checkClipNews = (firstFecthData: InewsSearch[]) => {
    firstFecthData.forEach((newsData: InewsSearch) => (newsData.clip = false)); //바뀔때마다 false로 초기세팅

    ClipId?.forEach((clipDataId: string) =>
      firstFecthData.forEach((newsData: InewsSearch) => {
        const newsId = newsData._id;
        if (newsId == clipDataId) newsData.clip = true;
      })
    );

    setNews((prev) => [...prev, ...firstFecthData]);
  };

  const getNews = async () => {
    console.log("겟뉴스 함수 실행");
    console.log(page); //얘도 잘 찍힘

    try {
      setIsUserSearchIng(true);
      let response: IAllData;

      userSearch //검색어가 있으면 검색어를 보여주고,없으면 전체를 보여줘.
        ? (response = await axios.get(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?&page=${page}&q=${userSearch}&api-key=${myKey}`
          ))
        : (response = await axios.get(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?&page=${page}&api-key=${myKey}`
          ));

      checkClipNews(response.data.response.docs);

      setIsLoading(true);
      setIsUserSearchIng(false);
    } catch (e) {
      console.log(e);
      setIsLoading(true);
      // Navigate("/err");
    }
  };

  const handleScroll = () => {
    //무한 스크롤 이벤트
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      console.log("계속 여기로 들어오나요");
      //끝에 닿았을때

      if (throttle.current) return; //트루면 넘어가고
      if (!throttle.current) {
        //기본 시작은 false..무조건 함수로 들어온다. 무조건 무조건 무조건
        throttle.current = true; //일단 트루로 바꿔주고 셋함수 시작
        setTimeout(() => {
          console.log("끝에닿았다");
          setPage((prev) => prev + 1); //state + 1 해주자,실행
          throttle.current = false;
        }, 500);
      }
    }
  };

  const handleAddHistory = (text: string | number) => {
    console.log("여기로 들어왔다");

    const newKeyWord = {
      //데이터 텍스트 만들어주기
      id: Date.now(),
      text: text,
    };

    let getHistory: any = JSON.parse(localStorage.getItem("keywords") || "[]");

    const NewLocalHistory = getHistory.filter(
      (history: any) => history.text !== newKeyWord.text
    ); //첫번째로 할일 : 중복제거

    if (getHistory && NewLocalHistory.length === 5) NewLocalHistory.pop(); //5개 이하 잘라주기

    setHistory([newKeyWord, ...NewLocalHistory]); //새 키워드와 기존 키워드를 셋 해준 뒤
  };

  ///유즈 이펙

  //클립 아이디
  useEffect(() => {
    checkClipNews(news);
  }, [ClipId]); //클립 바뀔때마다 할때마다 검증 함수 실행

  //로컬 히스토리
  useEffect(() => {
    localStorage.setItem("keywords", JSON.stringify(history)); //셋 해줍니다 !
  }, [history]);

  //무한스크롤용 페이지
  useEffect(() => {
    // console.log("page ? ", page); //페이지 바꼈으니까 잘찍히고
    getNews(); //함수 실행
  }, [page]); //페이지가 바뀔때마다 뉴스를 불러온다.

  useEffect(() => {
    setNews([]); //유저 서치가 바뀔때마다 검색어를 비워준다.
    if (userSearch) {
      //유저 검색어가 있을때 함수를 실행한다
      const getInputValue = setTimeout(() => {
        getNews(); //찐으로 데이터 불러오는 함수를 실행한다.
        handleAddHistory(userSearch); //로컬 스토레이지에 저장한다. userSearch정보를 넘기고..
      }, 1500);
      return () => {
        clearTimeout(getInputValue);
      };
    }
  }, [userSearch]); //검색어 디바운싱

  window.addEventListener("scroll", handleScroll); //무한 스크롤 이벤트

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSearch(e.target.value); //유저 검색어가 바뀔때마다 setState해주고
  };

  return (
    <>
      <Search onChange={onChange} setHistory={setHistory} />

      <ul>
        {isLoading && news ? <NewsContent news={news} /> : <div>로딩중..</div>}
      </ul>
    </>
  );
};

export default GetContentData;
