export interface IAllData {
    data: Iresponse;
  }
  
  export interface Iresponse {
    response: Idocs;
  }
  export interface Idocs {
    docs: InewsSearch[];
   
  }
  
  export interface InewsSearch {
    //어떤걸 인터페이스로 받아올건지
  
    clip?: boolean;
    uri: string;
    abstract: string;
    web_url: string;
    id: string;
    _id: string;
    pub_date: string;
    keywords: IkeyWords[];
    byline: IbyLine;
    headline: IheadLine;
    multimedia: Imultimdeia[];
  }
  
  export interface IheadLine {
    content_kicker: string;
    kicker: string;
    main: string;
    name: string;
    print_headline: string;
    sub: string;
  }
  
  export interface Imultimdeia {
    rank: number;
    type: string;
    url: string;
    width: number;
  }
  
  export interface IbyLine {
    document_type: string;
    original: string;
    person: Iperson;
  }
  
  export interface Iperson {
    firstname: string;
    lastname: string;
    middlename: null;
    rank: number;
  }
  
  export interface IkeyWords {
    name: string;
    value: string;
    rank: number;
  }