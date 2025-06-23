import { Translations } from "./en";

const th: Translations = {
  common: {
    ok: "OK!",
    cancel: "ยกเลิก",
    back: "Back",
    logOut: "Log Out",
    filter: "Filter",
    none: "None",
    multiple: "Multiple",
    undo: "Undo",
    save: "บันทึก",
    delete: "ลบ",
    graph: "กราฟ",
    table: "ตาราง",
    asOf: "ข้อมูล ณ",
    source: "ที่มา",
    updatedOn: "ข้อมูล ณ",
    days: "วัน",
    item: {
      zero: "รายการ",
      one: "รายการ",
      other: "รายการ",
    },
    input: {
      email: "Email",
      password: "Password",
      newPassword: "New Password",
      confirmPassword: "Confirm password",
    },
    button: {
      next: "Next",
      send: "Send",
      login: "Log In",
    },
    period: {
      "1M": "1 เดือน",
    },
  },
  error: {
    toast: {
      somethingWentWrong: "Something went wrong. Please try again.",
    },
  },
  bestOfYourCollection: {
    title: "คอลเลกชันที่ดีที่สุดของคุณ",
    description:
      "Discover the top-performing funds in your collection. Swipe up to explore and learn more.",
    emptyCollection: {
      title: "ไม่มีการ์ดกองทุนในคอลเลกชันของคุณ",
      description: "เริ่มต้นสำรวจและเพิ่มการ์ดกองทุนเพื่อสร้างคอลเลกชันของคุณ",
      button: "สำรวจ",
    },
  },
  feed: {
    title: "ข่าว",
  },
  welcomeScreen: {
    postscript:
      "psst  — This probably isn't what your app looks like. (Unless your designer handed you these screens, and in that case, ship it!)",
    readyForLaunch: "Your app, almost ready for launch!",
    exciting: "(ohh, this is exciting!)",
    letsGo: "Let's go!",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
    traceTitle: "Error from %{name} stack",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content:
        "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
  errors: {
    invalidEmail: "Invalid email address.",
  },
  loginScreen: {
    signIn: "Sign In",
    enterDetails:
      "Enter your details below to unlock top secret info. You'll never guess what we've got waiting. Or maybe you will; it's not rocket science here.",
    emailFieldLabel: "Email",
    passwordFieldLabel: "Password",
    emailFieldPlaceholder: "Enter your email address",
    passwordFieldPlaceholder: "Super secret password here",
    tapToSignIn: "Tap to sign in!",
    hint: "Hint: you can use any email address and your favorite password :)",
  },
  demoNavigator: {
    componentsTab: "Components",
    debugTab: "Debug",
    communityTab: "Community",
    podcastListTab: "Podcast",
  },
  demoCommunityScreen: {
    title: "Connect with the community",
    tagLine:
      "Plug in to Infinite Red's community of React Native engineers and level up your app development with us!",
    joinUsOnSlackTitle: "Join us on Slack",
    joinUsOnSlack:
      "Wish there was a place to connect with React Native engineers around the world? Join the conversation in the Infinite Red Community Slack! Our growing community is a safe space to ask questions, learn from others, and grow your network.",
    joinSlackLink: "Join the Slack Community",
    makeIgniteEvenBetterTitle: "Make Ignite even better",
    makeIgniteEvenBetter:
      "Have an idea to make Ignite even better? We're happy to hear that! We're always looking for others who want to help us build the best React Native tooling out there. Join us over on GitHub to join us in building the future of Ignite.",
    contributeToIgniteLink: "Contribute to Ignite",
    theLatestInReactNativeTitle: "The latest in React Native",
    theLatestInReactNative:
      "We're here to keep you current on all React Native has to offer.",
    reactNativeRadioLink: "React Native Radio",
    reactNativeNewsletterLink: "React Native Newsletter",
    reactNativeLiveLink: "React Native Live",
    chainReactConferenceLink: "Chain React Conference",
    hireUsTitle: "Hire Infinite Red for your next project",
    hireUs:
      "Whether it's running a full project or getting teams up to speed with our hands-on training, Infinite Red can help with just about any React Native project.",
    hireUsLink: "Send us a message",
  },
  demoShowroomScreen: {
    jumpStart: "Components to jump start your project!",
    lorem2Sentences:
      "Nulla cupidatat deserunt amet quis aliquip nostrud do adipisicing. Adipisicing excepteur elit laborum Lorem adipisicing do duis.",
    demoHeaderTxExample: "Yay",
    demoViaTxProp: "Via `tx` Prop",
    demoViaSpecifiedTxProp: "Via `{{prop}}Tx` Prop",
  },
  demoDebugScreen: {
    howTo: "HOW TO",
    title: "Debug",
    tagLine:
      "Congratulations, you've got a very advanced React Native app template here.  Take advantage of this boilerplate!",
    reactotron: "Send to Reactotron",
    reportBugs: "Report Bugs",
    demoList: "Demo List",
    demoPodcastList: "Demo Podcast List",
    androidReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running, run adb reverse tcp:9090 tcp:9090 from your terminal, and reload the app.",
    iosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    macosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    webReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    windowsReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
  },
  demoPodcastListScreen: {
    title: "React Native Radio episodes",
    onlyFavorites: "Only Show Favorites",
    favoriteButton: "Favorite",
    unfavoriteButton: "Unfavorite",
    accessibility: {
      cardHint:
        "Double tap to listen to the episode. Double tap and hold to {{action}} this episode.",
      switch: "Switch on to only show favorites",
      favoriteAction: "Toggle Favorite",
      favoriteIcon: "Episode not favorited",
      unfavoriteIcon: "Episode favorited",
      publishLabel: "Published {{date}}",
      durationLabel:
        "Duration: {{hours}} hours {{minutes}} minutes {{seconds}} seconds",
    },
    noFavoritesEmptyState: {
      heading: "This looks a bit empty",
      content:
        "No favorites have been added yet. Tap the heart on an episode to add it to your favorites!",
    },
  },
  Discover: {
    fundList: "รายการกองทุน",
    discoverFunds: "Discover Funds",
    placeholderSearch: "Search Funds, Allocated Stocks, Investment Themes.",
    topPerformingCategories: "Top Performing Categories",
    PersonalQuiz: {
      skipForNow: "Skip for now",
      completeQuiz: "Complete Quiz",
      titleIntro: "Personalize your Discover experience.",
      subTitleIntro:
        "A quick personality quiz helps us fine-tune fund collections to match your style.",
      letsGo: "Let’s go!",
      chooseMoreThanOne: "You can choose more than one",
      calibratingYourResults: "Calibrating your results",
    },
  },
  FundHome: {
    textSearchPlaceholder: "Search Mutual Funds, Filters, Investment Themes..",
    buttonSeeAll: "ดูทั้งหมด",
    buttonMore: "ดูเพิ่มเติม",
    watchlist: "รายการที่ติดตาม",
    funds: "กองทุน",
    announcements: "ข่าวสาร",
    fundCode: "รหัสกองทุน",
    return1D: "Return (1D)",
    addFund: "เพิ่มกองทุน",
    noNewsYet: "ไม่พบข่าวสาร",
    GlobalMarketUpdate: {
      title: "สถานการณ์ตลาดโลก",
      indices: "ดัชนี",
      indexes: "ดัชนี",
      stocks: "หุ้น",
      alternatives: "สินทรัพย์ทางเลือก",
      currencies: "สกุลเงิน",
      dailyMarketSummary: {
        title: "สรุปสภาวะตลาดประจำวัน",
        aiAnalyzed: "AI-Analyzed",
      },
    },
    portfolio: {
      portEmpty: {
        title: "มาสร้างพอร์ตกันเถอะ",
        detail:
          "เพิ่มกองทุนเพื่อเริ่มติดตามมูลค่าพอร์ต และผลการดำเนินงานของกองทุน",
        button: "เริ่มเลย",
      },
    },
    upcomingDividend: {
      title: "ที่กำลังจะเกิดขึ้น: การจ่ายเงินปันผล",
      payment: "การจ่ายเงิน",
      thbUnit: "บาท/หน่วย",
    },
  },
  FundSearchScreen: {
    textSearchPlaceholder: "ค้นหา",
    textSearchButtonPlaceholder: "Try searching for “NVDA”",
    textOtherStockSearchButtonPlaceholder: "Search for stock names or codes",
    recentlySearch: "การค้นหาล่าสุด",
    popularSearch: "คำค้นหายอดนิยม",
    more: "ดูเพิ่มเติม",
    less: "ดูน้อยลง",
    searchNotFound: "We Couldn't Find Any Matches",
    searchNotFoundDetail:
      "It looks like we couldn't find what you're \nsearching for. Please try a different search term",
    tryAgain: "กรุณาลองใหม่อีกครั้ง",
    noInternet: "ไม่มีสัญญาณอินเทอร์เน็ต",
    pleaseCheckInternet: "กรุณาตรวจสอบสัญญาณอินเทอร์เน็ตอีกครั้ง",
    refresh: "รีเฟรชข้อมูล",
    others: "Other",
    deleteHistory: "Delete History",
    modal: {
      titleModalDel: "Delete Search History?",
      messageModalDel: "This will permanently delete all search history.",
      cancelText: "ยกเลิก",
      confirmText: "ลบ",
    },
    sellAll: "See All",
    cancel: "ยกเลิก",
  },
  fundiiNavigator: {
    homeTab: "หน้าหลัก",
    discoverTab: "สำรวจ",
    socialTradeTab: "โซเชียลเทรด",
    AmcTab: "บลจ.",
    MeTab: "ฉัน",
    toolTab: "เครื่องมือ",
    portfolio: "พอร์ต",
    settings: "ตั้งค่า",
    fantasy: "Fantasy",
  },
  FundCard: {
    tag: {
      Risk: "ความเสี่ยง",
      Recommended: "แนะนำ",
      Popular: "ยอดนิยม",
      TopReturn: "ผลตอบแทนดี",
      Promo: "โปรโมชัน",
      RMF: "RMF",
      SSF: "SSF",
      SSFX: "SSFX",
      ThaiESG: "ThaiESG",
      TESGTESGX: "TESG/TESGX",
      LTF: "LTF",
    },
  },
  OtherFundListItem: {
    tag: {
      ALLOCATED_STOCK: "Allocated Stock",
      MASTER_FUND: "Master Fund",
      FILTER: "Filter",
    },
  },
  banner: {
    title: "Try our Stock Search",
    detail:
      "Search stock names or codes to find funds that contain those stocks",
  },
  filters: {
    title: "ตัวกรองค้นหากองทุน",
    shortcuts: {
      Search: "ค้นหา",
      AssetClass: "กลุ่มสินทรัพย์",
      Geography: "ภูมิศาสตร์",
      Theme: "ธีมการลงทุน",
      TaxSaving: "สิทธิประโยชน์ทางภาษี",
      AMC: "บลจ.",
    },
    category: {
      Announcements: {
        scheme: "การแก้ไขโครงการ",
        autoRedemption: "การรับซื้อคืนหน่วยลงทุน",
        fees: "ค่าธรรมเนียม",
        termination: "การเลิกกองทุน",
        ipo: "การเสนอขายกองทุน",
        fundHolidays: "วันหยุดกองทุน",
        buySellSuspension: "ประกาศหยุดรับการซื้อ ขายคืนหน่วยลงทุน",
        dividend: "การจ่ายเงินปันผล",
        holdingsOverOneThird: "ข้อมูลการถือหน่วยลงทุนเกิน 1 ใน 3",
        lmts: "ประกาศการใช้เครื่องมือบริหารสภาพคล่อง",
        promotions: "โปรโมชั่น",
        others: "อื่นๆ",
      },
      TaxSaving: { title: "สิทธิประโยชน์ทางภาษี" },
      AMC: {
        title: "บริษัทหลักทรัพย์จัดการกองทุน (บลจ.)",
        ABERDEEN: "อเบอร์ดีน",
        ASSETFUND: "แอสเซท พลัส",
        AXA: "แอกซ่า",
        BBLAM: "บัวหลวง",
        BCAP: "บางกอกแคปปิตอล",
        DAOLINV: "ดาโอ",
        EASTSPRING: "อีสท์สปริง",
        KASSET: "กสิกรไทย",
        KKPAM: "เกียรตินาคินภัทร",
        KSAM: "กรุงศรี",
        KTAM: "กรุงไทย",
        KWIAM: "เคดับบลิวไอ",
        LHFUND: "แลนด์ แอนด์ เฮ้าส์",
        MFC: "เอ็มเอฟซี",
        ONEAM: "วรรณ",
        PAMC: "ฟิลลิป",
        PRINCIPAL: "พรินซิเพิล",
        SCBAM: "ไทยพาณิชย์",
        SAWAKAMI: "ซาวาคามิ",
        TALISAM: "ทาลิส",
        TISCOASSET: "ทิสโก้",
        UOBAM: "ยูโอบี",
        XSpringAM: "เอ็กซ์สปริง",
      },
      Tags: {
        title: "Tags",
        InWatchlist: "กำลังติดตาม",
        Reccommend: "แนะนำ",
        Popular: "ยอดนิยม",
        TopReturn: "ผลตอบแทนดี",
        Promotion: "โปรโมชัน",
      },
      TaxSavingsType: {
        title: "สิทธิประโยชน์ทางภาษี",
        Nontax: "ไม่มี",
        SSFSSFX: "SSF/SSFX",
        ThaiESG: "ThaiESG",
        TESGTESGX: "TESG/TESGX",
        RMF: "RMF",
        LTF: "LTF",
      },
      AssetClass: {
        title: "กลุ่มสินทรัพย์",
        MoneyMarket: "ตลาดเงิน",
        FixedIncome: "ตราสารหนี้",
        Mixed: "สินทรัพย์ผสม",
        Equity: "ตราสารทุน",
        Alternative: "สินทรัพย์ทางเลือก",
      },
      ManagementStyle: {
        title: "รูปแบบการบริหารกองทุน",
        Any: "ทั้งหมด",
        Active: "เชิงรุก",
        Passive: "เชิงรับ",
      },
      GrowthStyle: {
        title: "Growth Style",
        Any: "Any",
        Accumulated: "Accumulated",
        Dividend: "Dividend",
      },
      InvestmentStrategy: {
        title: "กลยุทธ์การลงทุน",
        Any: "ทั้งหมด",
        DirectInvestment: "ลงทุนโดยตรง",
        FeederFund: "กองทุนฟีดเดอร์",
        FundOfFunds: "กองทุนฟันด์ออฟฟันด์",
      },
      SpecialFundType: {
        title: "ชนิดกองทุนพิเศษ",
        IPO: "กองทุน IPO",
        TermFund: "กองทุนเทอมฟันด์",
        AutoRedemption: "ขายคืนอัตโนมัติ",
        ComplexFund: "กองทุนตราสารซับซ้อน",
      },
      Geography: {
        title: "ภูมิศาสตร์",
        Country: {
          title: "ประเทศ",
          Thailand: "ไทย",
          USA: "สหรัฐอเมริกา",
          ChinaASharesMainland: "จีนแผ่นดินใหญ่",
          ChinaHSharesHK: "จีนฮ่องกง",
          ChinaAllShares: "จีนทั้งหมด",
          India: "อินเดีย",
          Vietnam: "เวียดนาม",
          Indonesia: "อินโดนีเซีย",
          Japan: "ญี่ปุ่น",
          SouthKorea: "เกาหลีใต้",
          Germany: "เยอรมนี",
        },
        Regions: {
          title: "ภูมิภาค",
          Global: "ทั่วโลก",
          Europe: "ยุโรป",
          EmergingMarket: "ตลาดเกิดใหม่",
          Asia: "เอเชีย",
          ASEAN: "อาเซียน",
        },
      },
      Theme: {
        title: "ธีมลงทุน",
        Blockchain: "บล็อกเชน",
        Cannabis: "กัญชา",
        Cybersecurity: "ไซเบอร์ซีเคียวริตี้",
        EliteBrands: "อีลิทแบรนด์",
        Brands: "Brands",
        ESG: "ESG",
        EV: "EV",
        HealthcareBiotech: "สุขภาพและไบโอเทค",
        LeisureLifestyle: "กิจกรรมยามว่างและไลฟ์สไตล์",
        PlanetFriendlySustainability: "รักษ์โลกและความยั่งยืน",
        RoboticsAI: "หุ่นยนต์และ AI",
        Semiconductor: "เซมิคอนดักเตอร์",
        TechnologyDisruptiveInnovation: "เทคโนโลยีและดิสรัปทีฟอินโนเวชัน",
        Gold: "ทองคำ",
        Energy: "พลังงาน",
        PropertyInfra: "อสังหาฯและโครงสร้างพื้นฐาน",
      },
      AssetManagementCompany: {
        title: "บริษัทหลักทรัพย์จัดการกองทุน",
        ABERDEEN: "อเบอร์ดีน",
        ASSETFUND: "แอสเซท พลัส",
        AXA: "แอกซ่า",
        BBLAM: "บัวหลวง",
        BCAP: "บางกอกแคปปิตอล",
        DAOLINV: "ดาโอ",
        EASTSPRING: "อีสท์สปริง",
        KASSET: "กสิกรไทย",
        KKPAM: "เกียรตินาคินภัทร",
        KSAM: "กรุงศรี",
        KTAM: "กรุงไทย",
        KWIAM: "เคดับบลิวไอ",
        LHFUND: "แลนด์ แอนด์ เฮ้าส์",
        MFC: "เอ็มเอฟซี",
        ONEAM: "วรรณ",
        PAMC: "ฟิลลิป",
        PRINCIPAL: "พรินซิเพิล",
        SCBAM: "ไทยพาณิชย์",
        SAWAKAMI: "ซาวาคามิ",
        TALISAM: "ทาลิส",
        TISCOASSET: "ทิสโก้",
        UOBAM: "ยูโอบี",
        XSpringAM: "เอ็กซ์สปริง",
      },
      Risk: {
        title: "ระดับความเสี่ยง",
      },
      HedgingPolicy: {
        title: "นโยบายป้องกันความเสี่ยงจากอัตราแลกเปลี่ยน",
        Unhedged: "ไม่ป้องกัน",
        Partial: "ป้องกันบางส่วน",
        Discretion: "ตามดุลยพินิจของผู้จัดการกองทุน",
        AllAlmost: "ป้องกันทั้งหมด / เกือบทั้งหมด",
      },
      DividendPolicy: {
        title: "นโยบายการจ่ายเงินปันผล",
        Any: "ทั้งหมด",
        No: "ไม่จ่าย",
        Yes: "จ่าย",
      },
      MinimumBuy: {
        title: "ยอดลงทุนขั้นต่ำ",
        Any: "ทั้งหมด",
        thb1: "≤ 1 บาท",
        thb100: "≤ 100 บาท",
        thb500: "≤ 500 บาท",
        thb1000: "≤ 1000 บาท",
      },
      SettlementDate: {
        title: "ระยะเวลาการรับเงินค่าขายคืน",
      },
    },
    button: {
      apply: "นำไปใช้",
      reset: "ล้างค่า",
    },
  },
  viewFundBy: {
    button: {
      viewTotalReturn: "มุมมอง : ผลตอบแทนรวม",
      viewAnnualized: "มุมมอง : ผลตอบแทนรวมต่อปี",
      viewNetFlow: "View : Net Flow",
      viewAllocated: "View : Percent Allocated",
      topTotalReturn: "ผลตอบแทนรวมสูงสุด",
      topNetFlow: "กระแสเงินสุทธิสูงสุด",
    },
    title: "มุมมองค้นหากองทุน",
    options: {
      totalReturn: {
        title: "ผลตอบแทนรวม",
        detail: "ค้นหากองทุนด้วยผลตอบแทนที่ดีที่สุด",
      },
      annualizedTotalReturn: {
        title: "ผลตอบแทนรวมต่อปี",
        detail: "ค้นหากองทุนด้วยผลตอบแทนเฉลี่ยต่อปีที่น่าประทับใจ",
      },
      netflow: {
        title: "Net Flow",
        detail:
          "See where money's flowing to uncover market trends and investor sentiment.",
      },
      allocated: {
        title: "Percent Allocated",
        detail:
          "See the percentage of each mutual fund invested in a specific stock for a clearer view of its holdings.",
      },
    },
  },
  toolsButton: {
    compare: "เปรียบเทียบ",
    priceAlert: "แจ้งเตือนราคา",
    watchlist: "รายการติดตาม",
  },
  fundInfo: {
    actualValue: "*Actual Value",
    perYear: "*Per Year",
    options: {
      createPriceAlert: "Create Price Alert",
      managePriceAlert: "Manage Price Alerts",
    },
    button: {
      addToWatchlist: "Add to Watchlist",
      removeFromWatchlist: "Remove from Watchlist",
    },
    bookClosing: "วันปิดสมุด",
    subHeader: {
      risk: "ความเสี่ยง {{risk}}",
    },
    YTD: "YTD",
    buy: "ซื้อ",
    sell: "ขาย",
    fundSummary: {
      summary: "สรุป",
      masterFund: "กองทุนหลัก",
      inceptionDate: "วันที่จัดตั้งกองทุน",
      aum: "มูลค่าทรัพย์สินสุทธิ",
      risk: "ความเสี่ยง",
      hedgingPolicy: "นโยบายเฮดจิ้ง",
      dividendPolicy: "นโยบายปันผล",
      settlementDay: "ระยะเวลารับเงินค่าขายคืน",
      minimumBuy: "ยอดลงทุนขั้นต่ำ",
      frontEndFee: "ค่าธรรมเนียมขาซื้อ",
      totalFee: "ค่าธรรมเนียมรวม",
      fundFactSheet: "Fund Factsheet",
      ai: "AI-Generated",
    },
    fundAssetAllocation: {
      assetAllocation: "สัดส่วนการลงทุน",
    },

    fundTopHolding: {
      topHolding: "สินทรัพย์หลักที่ลงทุน",
    },
    fundDividend: {
      dividendHistory: "ประวัติการจ่ายเงินปันผล",
      bookClosing: "วันปิดสมุด",
      payment: "วันจ่ายเงินปันผล",
      THBUnit: "THB/หน่วย",
    },
    fundFee: {
      fee: "ค่าธรรมเนียม",
      annualOperatingExpenses: "Annual Operating Expenses",
      managementFee: "Management Fee",
      totalFee: "ค่าธรรมเนียมรวม",
      peer: "Peers",
      fund: "Fund",
      transactionFee: "Transaction Fees",
      frontEnd: "Front-end",
      backEnd: "Back-end",
      switchingOut: "Switching Out",
      switchingIn: "Switching In",
    },
    transactionCondition: {
      transactionCondition: "เงื่อนไขการทำรายการ",
      buyCutoffTime: "เวลาปิดรับคำสั่งซื้อ",
      sellCutoffTime: "เวลาปิดรับคำสั่งขาย",
      minimumBuy: "ยอดลงทุนขั้นต่ำ",
      firstTime: "ครั้งแรก",
      nextTime: "ครั้งถัดไป",
      minimumSell: "การขายคืนหน่วยขั้นต่ำ",
      value: "มูลค่า",
      unit: "หน่วย",
      minimumBalance: "ยอดคงเหลือขั้นต่ำ",
      settlementDay: "ระยะเวลารับเงินค่าขายคืน",
    },
    announcements: {
      emptyAnnoucements: {
        title: "No Annoucements Yet",
        detail:
          "Stay tuned! Check back later or add this\nfund to your watchlist to get updates.",
      },
    },
    bottomSheet: {
      filter: {
        title: "Announcements Category Filter",
      },
    },
  },
  viewReturnBy: {
    button: {
      calendarYear: "Calendar Year Total Return",
      trailing: "Trailing Total Return",
    },
    title: "View Return By",
    options: {
      calendarYear: {
        title: "Calendar Year Total Return",
      },
      trailing: {
        title: "Trailing Total Return",
      },
    },
  },
  watchlist: {
    title: "รายการติดตาม",
    buttonOptions: {
      edit: "แก้ไข",
      settings: "ตั้งค่า",
    },
    emptyList: {
      title: "ถึงเวลาสร้างรายการติดตามของคุณแล้ว",
      detail:
        "เริ่มเพิ่มกองทุนที่คุณสนใจ\nและติดตามผลการดำเนินการของกองทุนนั้น.",
    },
    emptyNews: {
      title: "ยังไม่มีข่าวสาร",
      detail:
        "เริ่มเพิ่มกองทุนที่คุณสนใจ\nและติดตามผลการดำเนินการของกองทุนนั้น.",
    },
    button: {
      addfund: "เพิ่มกองทุน",
      delete: "ลบ",
    },
    updated: "อัปเดตล่าสุด",
    taps: {
      funds: "กองทุน",
      announcements: "ข่าวสาร",
    },
    card: {
      today: "วันนี้",
      earlier: "ก่อนหน้านี้",
    },
    toast: {
      watchlistLimit: "คุณมีกองทุนที่ติดตามเกิน 30 กองทุนแล้ว",
    },
  },
  priceAlert: {
    title: "การแจ้งเตือนราคา",
    nav: "NAV/หน่วย",
    fundCode: "กองทุน",
    current: "ราคาปัจจุบัน",
    target: "ราคาเป้าหมาย",
    setPriceAlert: "ตั้งค่าการแจ้งเตือนราคา",
    editPriceAlert: "แก้ไขการแจ้งเตือนราคา",
    manangePriceAlert: {
      targetNavUnit: "ราคาเป้าหมาย",
    },
    button: {
      create: "สร้างการแจ้งเตือน",
      delete: "ลบ",
      setAlert: "ตั้งค่าการแจ้งเตือน",
    },
    emptyList: {
      title: "ยังไม่มีการแจ้งเตือนราคา",
      detail:
        "ตั้งค่าการแจ้งเตือนเพื่อรับทราบข้อมูล\nเมื่อราคามีการเปลี่ยนแปลง",
    },
    toast: {
      saved:
        "ตั้งค่าการแจ้งเตือนแล้ว เราจะแจ้งให้คุณทราบเมื่อราคา NAV/หน่วย ถึงเป้าหมายของคุณ",
      deleted: "ลบการแจ้งเตือนแล้ว",
      error: "เกิดข้อผิดพลาด: ไม่สามารถบันทึกได้ กรุณาลองใหม่อีกครั้ง",
    },
    alert: {
      inputNavUnit: "แจ้งเตือนเมื่อ NAV/หน่วย ถึงราคาที่กำหนด",
      inputNavChange: "%การเปลี่ยนแปลง",
    },
  },
  compare: {
    title: "เปรียบเทียบ",
    header: "เปรียบเทียบกองทุน",
    button: {
      create: "เพิ่มกองทุน",
    },
    emptyList: {
      title: "ยังไม่มีกองทุนทุนที่จะเปรียบเทียบ",
      detail: "เพิ่มสองกองทุนหรือมากกว่าเพื่อเริ่มต้น",
    },
    result: {
      summary: "สรุป",
      data: "ข้อมูล",
      assetAllication: "สัดส่วนการลงทุน",
      topHoldings: "สินทรัพย์หลักที่ลงทุน",
      dividend: "ประวัติการจ่ายเงินปันผล",
      settlementDay: "T+{{days}}",
      days: "Days",
      transactionConditions: "เงื่อนไขการทำรายการ",
      minimumBuy: "ยอดลงทุนขั้นต่ำ",
      minimumSell: "การขายคืนหน่วยขั้นต่ำ",
      minimumBalance: "ยอดคงเหลือขั้นต่ำ",
    },
    bottomSheetRadar: {
      headline: "ทำความเข้าใจเรดาร์",
      subHeadline:
        "พื้นที่เงาที่ใหญ่กว่าหมายถึงกองทุนที่ดีกว่า — ให้ผลตอบแทนสูงกว่า ความเสี่ยงต่ำกว่า การรักษาเงินต้นได้ดีกว่า และมีค่าธรรมเนียมน้อยกว่า",
      body: "องค์ประกอบของเรดาร์",
      bodySubHeadline1:
        "ผลตอบแทน: กองทุนทำเงินได้มากแค่ไหนในช่วงเวลาใดเวลาหนึ่ง ยิ่งสูงยิ่งดี!",
      bodySubHeadline2:
        "ความเสี่ยง: มูลค่าของกองทุนมีความผันผวนมากแค่ไหน ยิ่งต่ำยิ่งนิ่ง",
      bodySubHeadline3:
        "ผลตอบแทนต่อความเสี่ยง: กองทุนสร้างกำไรได้มากแค่ไหนเมื่อเทียบกับความเสี่ยง ยิ่งสูงยิ่งดี",
      bodySubHeadline4:
        "การรักษาเงินต้น: กองทุนสามารถปกป้องเงินของคุณในช่วงเวลาที่ตลาดแย่ได้ดีแค่ไหน การรักษาเงินต้นที่ดีหมายถึงความปลอดภัยที่มากขึ้น",
      bodySubHeadline5:
        "ค่าธรรมเนียมการซื้อขาย: ค่าธรรมเนียมซื้อขายกองทุน ค่าธรรมเนียมยิ่งต่ำยิ่งดี!",
    },
  },
  compareFeeChart: {
    fontendFee: "ค่าธรรมเนียมขาซื้อ",
    backEndFee: "ค่าธรรมเนียมขาขาย",
    totalFee: "ค่าธรรมเนียมรวม",
  },
  compareFeeBarChart: {
    fontendFee: "ค่าธรรมเนียม\nขาซื้อ",
    backEndFee: "ค่าธรรมเนียม\nขาขาย",
    totalFee: "ค่าธรรมเนียม\nรวม",
  },
  compareSearch: {
    fromYourPortfolioAndSaves: "จากพอร์ตกองทุนและบันทึกของคุณ",
    toast: {
      reach10limit: "คุณมีกองทุนเกินกว่าที่กำหนด 10 กองทุนแล้ว",
    },
  },
  me: {
    hiName: "Hi, {{name}}",
    hi: "Hi",
    button: {
      loginCreate: "Login / Create Profile",
      signOut: "Log out",
      saveChanges: "Save Changes",
    },
    profile: "Profile",
    input: {
      name: "Name",
    },
    section: {
      myActivity: {
        main: "My Activity",
        myCollection: "My Collection",
      },
      manage: {
        main: "Account",
        account: "Account",
        privacyAndData: "Privacy & Data",
        nofications: "การแจ้งเตือน",
        preferences: "Preferences",
      },
      support: {
        main: "Support",
        language: "Language",
        contact: "Contact & Support",
        about: "About",
      },
      myCollection: {
        emptyCollection: {
          title: "No Fund Cards in Your Collection",
          description:
            "Start exploring and add fund cards to build your collection.",
          buttonDiscoverFundCard: "Discover Funds Card",
        },
      },
    },
  },
  contactAndSupport: {
    pageTitle: "Contact & Support",
    contactUs: {
      title: "Contact Us",
      facebook: "Facebook: fundii",
      line: "Line: @fundiiapp",
      phone: "Phone: 02 026 6222",
      email: "Email: support@fundiiapp.com",
      website: "Website: https://www.fundiiapp.com",
    },
    feedBack: {
      feedback: "Feedback",
      feedbackPlaceHolder: "Give us your feedback",
      sentReport: "Send Report",
      feedbackSuccessText:
        "Thanks for helping us improve! Your feedback means a lot to us.",
      feedbackFailText: "Something went wrong. Please try again.",
    },
    SupportRequests: {
      title: "Support Requests",
    },
  },
  language: {
    language: "Language",
  },
  loginWall: {
    title: "Unlock Smart Tools for\nSmarter Investing!",
    description:
      "Create a FUNDii profile to get unlimited\naccess to even more smart features.",
    button: {
      createProfile: "Create Profile",
      login: "Have an account? Login",
    },
  },
  blurBoxUnlock: {
    title: "Unlock Smart Tools for Smarter Investing.",
    description:
      "Create a profile now to get unlimited access to powerful features",
  },
  createPassword: {
    header: "Create a secure password",
    hint: {
      character: "Must be at least 8 characters.",
      number: "Must contain a number.",
      upperCase: "Must contain an uppercase letter.",
      special: "Must contain a special character (eg. !@#$%^&*).",
      match: "Your passwords don’t match",
    },
  },
  topReturn: {
    headerTable: {
      fund: "Fund",
      totalReturn: "Return (1Y)",
      netFlow: "Net Flow (1Y)",
    },
  },
  createProfile: {
    title: "Create a profile now to get the best\ntools to invest.",
    userName: {
      title: "Username",
      hint: "Must be 4-20 characters.",
      error: {
        taken: "This username has been taken.",
        atLeast: "Must be at least 4 characters.",
        invalid:
          "Use only letters, numbers, underscores (_), periods (.), and hyphens (-).",
      },
    },
    button: {
      next: "Next",
      create: "Create Profile with {{source}}",
      login: "Login",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
    },
    or: "or",
    alreadyHaveAccount: "Already have an account?",
    agree: "By signing up you agree to our",
    whiteSpace: " ",
    and: "and",
    success: {
      title: "You're All Set!",
      detail:
        "Your profile has been created. Start exploring smart tools, tracking funds, and making informed investment decisions.",
    },
  },
  otp: {
    validation: {
      incorrect: "The code was incorrect. Please try again.",
      expired: "The code has expired. Please request a new one to continue.",
    },
    email: "email",
    phone: "phone",
    verificationCodeSent: "Verification Code Sent!",
    description:
      "We've sent a one-time passcode to your\r\n{{channel}}: {{contact}}",
    notYourEmail: "Not your email?",
    notYourPhone: "Not your phone?",
    oneTimePasscode: "One-time Passcode",
    oneTimePasscodeSent: "One-time Passcode Sent!",
    resendCode: "Resend Code",
  },
  verifyEmailPhone: {
    title: "One Last Step to Stay Informed!",
    titleForPhone: "One Last Step to Enter!",
    description:
      "Add your email to receive important updates and backup your account.",
    descriptionForPhone: "Add your phone to verify your account.",
    input: {
      email: "Email",
      phone: "Phone Number (Thai)",
    },
    placeholder: {
      phone: "Phone Number",
    },
    button: {
      usePhone: "Use phone number instead",
      useEmail: "Use email instead",
      verify: "Verify",
      skip: "Skip",
    },
    error: {
      email:
        "Please enter a valid email address in the format: example@mail.com.",
      emailDuplicated: "This email is already connected to an account.",
      phone: "Your Thai phone number should be a 10-digit number.",
      phoneDuplicated: "This phone number is already connected to an account.",
      other: "Something went wrong. Please try again.",
    },
    success: {
      text: "Email updated!",
    },
  },
  login: {
    title: "Welcome Back!",
    newUser: "New User?",
    input: {
      usernameOrEmailOrPhone: "Username or Email",
      password: "Password",
    },
    button: {
      forgotPassword: "Forgot Password?",
      login: "Login",
      createProfile: "Create Profile",
    },
    error: "Incorrect username or password. Please Try again.",
  },
  FundSwipe: {
    tutorial: {
      step1: {
        title: "Swipe Up to Explore!",
        description:
          "See what’s inside this collection. Swipe up to view your first fund card.",
      },
      step2: {
        title: "Tap to Flip & Learn More",
        description:
          "Want details? Tap the card to flip it and see more fund insights.",
      },
      step3: {
        title: "Swipe Up or Down to Browse Cards",
        description:
          "Looking for the right fund? Swipe up or down to explore different fund cards in this collection.",
      },
      step4: {
        title: "Swipe Left for a New Collection",
        description:
          "Swipe left to jump to the next collection and discover more fund options.",
      },
      step5: {
        title: "Double Tap to Save and Add to Your Collection!",
        description:
          "Double tap any fund card to add it to your personal collection in the 'Me' tab.",
      },
      step6: {
        title: "This Fund is Now in Your Collection!",
        description:
          "This fund is saved! You can find it anytime in the 'Me' tab.",
      },
    },
    cover: {
      swipeUp: "Swipe up",
    },
    cardFront: {
      region: "Region",
      theme: "Theme",
      style: "Style",
      strategy: "Strategy",
      hedgingPolicy: "นโยบายเฮดจิ้ง",
      dividend: "Dividend",
    },
    cardBack: {
      goToFundInfo: "Go to Fund Info",
      notInterested: "Not Interested",
      fundSummary: "Fund Summary",
    },
    bottomSheetDislike: {
      modalTitle: "Why didn’t you like this summary?",
      tellUsMore: "Tell us more",
      tellUsMoreTitle: "What can we do better?",
      tellUsMoreReasonPlaceholder:
        "Tell us the reason you didn’t like the AI Summary...",
      unhelpful: "Unhelpful / Not relevant",
      incorrectSummary: "Incorrect summary",
    },
    toast: {
      notInterested: "We’ll show you fewer funds like this.",
      feedbackSuccess:
        "Thanks for helping us improve! Your feedback means a lot to us.",
      cardDeletedFromMyCollection: "Card deleted from ‘My Collection’.",
      reachCollectionLimit: "You’ve reached the 100 card collection limit.",
      imageSavedSuccessFully: "Image saved successfully.",
      linkCopied: "Link copied.",
      imageSavedFailed: "Save image failed.",
    },
  },
  performancePeriod: {
    period: "ผลตอบแทนรวม (ตามช่วงเวลา)",
    annualized: "ผลตอบแทนรวม (เฉลี่ยต่อปี)",
    calendar: "ผลตอบแทนรายปี",
  },
  sortCollectionBy: {
    title: "Sort Collection By",
    button: {
      lastDateAdded: "Sort By: Date Added (Latest)",
      highestReturn_1M: "Sort By: Highest Return (1M)",
      highestReturn_1Y: "Sort By: Highest Return (1Y)",
      highestReturnSd_1Y: "Sort By: Highest Return/SD (1Y)",
    },
    options: {
      lastDateAdded: {
        title: "Date Added (Latest)",
      },
      highestReturn_1M: {
        title: "Highest Return (1M)",
      },
      highestReturn_1Y: {
        title: "Highest Return (1Y)",
      },
      highestReturnSd_1Y: {
        title: "Highest Return/SD (1Y)",
        description:
          "Funds with the highest returns for the risk taken over the past year.",
      },
    },
  },
  forgotPassword: {
    title: "Forgot Password",
    input: {
      EmailOrPhoneNumber: "Email or Phone Number",
      error:
        "Account not found. Please make sure your email or phone number is correct and linked to your account.",
    },
    toast: {
      success: "Password reset instructions sent!",
    },
  },
  changePassword: {
    title: "Change Password",
    oldPassword: {
      title: "Old Password",
    },
    newPassword: {
      title: "New Password",
      saveChange: "Save Changes",
    },
    incorrectPassword: "Incorrect password. Please Try again.",
  },
  forgotNewPassword: {
    sessionExpired: "Session Expired",
    toast: {
      passwordUpdate: "Password Updated!",
    },
  },
  accountChangeFirstLastName: {
    firstLastName: "First & Last Name",
    input: {
      firstName: "First Name",
      lastName: "Last Name",
    },
    button: {
      saveChanges: "Save Changes",
    },
    error: {
      message: "Something went wrong. Please try again.",
    },
    toast: {
      success: "First & last name updated!",
    },
  },
  Account: {
    set: "Set",
    accountInformation: {
      label: "Account Information",
      profilePicture: "Profile Picture",
      username: "Username",
      changePassword: "Change Password",
      loginWithBiometic: "Login with Biometic",
      changeImage: "Choose Image",
    },
    personalInformation: {
      label: "Personal Information",
      firstLastName: "First & Last Name",
      dateOfBirth: "Date of Birth",
      gender: "Gender",
    },
    contactInformation: {
      label: "Contact Information",
      email: "Email",
      phoneNumber: "Phone Number",
    },
    deleteAccount: {
      label: "Delete Account",
      detail:
        "Deleting your account is permanent. This action cannot be undone",
      modalConfirm: {
        title: "Are you sure you want to delete your account?",
        detail:
          "Deleting your account is permanent and cannot be undone. All your data will be lost.",
        cancel: "ยกเลิก",
        delete: "ลบ",
      },
      toast: {
        accountDeleted: "Account Deleted.",
        somethingWentWrong: "Something went wrong. Please try again.",
      },
    },
    toast: {
      passwordUpdated: "Password updated!",
      profilePictureUpdated: "Profile picture updated!",
    },
  },
  ChangeGender: {
    gender: "Gender",
    female: "Female",
    male: "Male",
    NonBinary: "Non-binary",
    PreferNotToSay: "Prefer not to say",
    toast: {
      success: "Gender updated!",
    },
  },
  ChangeDateOfBirth: {
    dateOfBirth: "Date of Birth",
    input: {
      label: "Date of Birth (DD/MM/YYYY)",
      placeholder: "DD/MM/YYYY",
    },
    toast: {
      success: "Date of birth updated!",
    },
  },
  Onboarding: {
    welcomeQuestion: {
      firstLine: "Hi! What should",
      secondLine: "we call you?",
      nameInput: "Your name",
    },
    endScreen: {
      question: {
        firstLine: "Hi {{firstName}}, Ready to",
        secondLine: "have fun? Let's go!",
      },
    },
    appIntroduction: {
      button: {
        letsGetStarted: "Let’s Get Started",
      },
      firstPage: {
        caption: "Swipe to Explore",
        description:
          "No more endless searching or overwhelming lists. Get personalized fund suggestions for you in seconds.",
      },
      secondPage: {
        caption: "Smarter Investing, Simplified",
        description:
          "Smarter investing made simple: compare funds, track prices, and build custom watchlists, all in one place.",
      },
      thirdPage: {
        caption: "Stock Hunting",
        description:
          "Wanna invest in stocks around the world? Uncover which funds have them in their treasure chest!",
      },
      fourthPage: {
        caption: "It’s Where Fund is Fun!",
        description:
          "Whether you’re a beginner or a pro, we help you discover, compare, and track top-performing funds effortlessly. ",
      },
    },
  },
  ProfilePicture: {
    error: {
      fileTooBig:
        "File is bigger than the 2 MB limit. Please choose a different image.",
    },
  },
  CompareSelect: {
    title: "Select to Compare",
    button: {
      cancel: "ยกเลิก",
      compare: "เปรียบเทียบ",
      battle: "เริ่มได้!",
    },
  },
  CompareList: {
    compareItem: {
      zero: "เปรียบเทียบ {{count}} กองทุน`",
      one: "เปรียบเทียบ {{count}} กองทุน",
      other: "เปรียบเทียบ {{count}} กองทุน",
    },
    change: "เปลี่ยน",
    addFund: "เพิ่มกองทุน",
    item: "กองทุน",
    toast: {
      added: "เพิ่มกองทุนแล้ว",
      deleted: "ลบกองทุนสำเร็จ",
      duplicated: "กองทุนนี้ถูกเพิ่มไปแล้ว",
    },
  },
  CompareListEdit: {
    button: {
      selectAll: "เลือกทั้งหมด",
      clearAll: "ล้างทั้งหมด",
    },
  },
  CompareGraph: {
    nodata:
      "Line charts cannot be displayed for comparison or visualization from the funds you selected.",
  },
  Notification: {
    filterTab: {
      all: "ทั้งหมด",
      fundiiUpdates: "อัปเดตโดย fundii",
      recommendations: "แนะนำ",
      market: "ตลาด",
      stock: "หุ้น",
      newsFeed: "Newsfeed",
      ipo: "IPO",
      priceAlert: "แจ้งเตือนราคา",
      watchList: "รายการที่ติดตาม",
      collection: "คอลเลกชัน",
    },
    emptyNotification: {
      title: "ยังไม่มีการแจ้งเตือน",
      detail: "เราจะแจ้งคุณทันทีเมื่อมีข่าวสารใหม่ ๆ",
    },
    today: "วันนี้",
    earlier: "ก่อนหน้านี้",
  },
  NotificationSetting: {
    title: "Notifications",
    fundiiSection: {
      header: "FUNDii",
      fundiiUpdatesPerk: {
        label: "fundii Updates & Perks",
        detail:
          "Stay updated on new features, campaigns, promotions, and the latest from FUNDii",
      },
    },
    investingSection: {
      header: "Investing",
      personalizedRecommendations: {
        label: "Personalized Recommendations",
        detail:
          "Stay informed with the latest fund updates, price movements, and personalized recommendations",
      },
      marketUpdates: {
        label: "Daily Market Updates",
      },
      stockUpdates: {
        label: "Newsfeed Updates",
      },
      iPOUpdates: "IPO Updates",
      normalFund: {
        label: "Normal Fund",
      },
      termFund: {
        label: "Term Fund",
      },
      triggerFund: {
        label: "Trigger Fund",
      },
    },
    toolsSection: {
      header: "เครื่องมือ",
      priceAlerts: {
        label: "แจ้งเตือนราคา",
      },
      watchlist: {
        label: "รายการติดตาม",
      },
      priceUpdates: {
        label: "อัปเดตราคา",
        detail:
          "เราจะแจ้งให้คุณทราบถึงการอัปเดต NAV/หน่วย ของกองทุนที่คุณติดตาม",
      },
      newHighsAndLows: {
        label: "จุดสูงสุดและจุดต่ำสุดใหม่ของราคา",
        detail:
          "อัปเดตเมื่อราคากองทุนทำจุดสูงสุดและจุดต่ำสุดใหม่ในทุกช่วงเวลาที่เคยมีมา และในรอบ 52 สัปดาห์ล่าสุดอย่างรวดเร็ว",
      },
      significantPriceChange: {
        label: "การเปลี่ยนแปลงราคาอย่างมีนัยสำคัญ",
      },
      fundPromotions: {
        label: "โปรโมชันกองทุน",
      },
      announcementsUpdates: {
        label: "อัปเดตประกาศ",
      },
    },
    othersSection: {
      header: "Others",
      collection: {
        label: "Collection",
      },
    },
  },
  WatchlistSettings: {
    title: "การตั้งค่าการติดตาม",
    allNotificationTopics: {
      label: "การแจ้งเตือนทั้งหมด",
    },
  },
  PortComplete: {
    title: "Port Complete!",
    detail:
      "You’ve built your fund dream team.\nNow let the games begin! Track your picks\nand see if your strategy shines.",
    note: "You can still make changes until the deadline.",
    button: "Okay",
    toast: {
      success:
        "Your port is submitted, but you can still\nmake changes until the deadline.",
    },
  },
  Fantasy: {
    title: "Decks. Portfolios. Competition. Glory.",
    comingSoon: "Coming Soon!",
    detail:
      "Get ready to flex your financial creativity. Build custom decks using our powerful Fund Cards and compete to see who ranks supreme.",
    buttonNotify: "Notify Me",
    banner: {
      title: "Win Big Cash!",
      detail:
        "Enter now for your chance to win\nexciting prizes up to 200,000 baht!!",
    },
    weeklyBanner: {
      title: "{{round}} Chance!",
      detail:
        "Enter now  for your chance to win small prizes up to {{amount}} baht*!!",
    },
    beating: {
      description:
        "Goal: Beat inflation (0.25%) and play amongst yourselves to be the best portfolio manager",
      detail: "Details",
      deadLine: "Deadline in:",
      end: "End: {{date}}",
    },
    seasonCard: {
      beatingInflation: "You're beating inflation!",
      rankDetail: "You're in the {{rankNumber}}{{rankSuffix}} Place!",
      targetPercent: "Target {{amount}}",
    },
    button: {
      createPort: "Create Your Port",
      yourPort: "Your Port",
      confirmPort: "Confirm Port",
      mange: "Manage",
      save: "บันทึก",
      randomPick: "Random Pick",
    },
    stats: {
      title: "Stats",
    },
    createYourPort: {
      title: "Create Your Port",
      cash: "Cash:",
      clear: "Clear",
    },
    editPort: {
      title: "Your Port",
    },
    modal: {
      title: "Unsaved changes will be lost.",
      subTitle:
        "Your adjustments haven’t been saved. Going back will cancel them.",
      back: "Go Back",
      stay: "Stay",
    },
    totalAssetsAndyourBestFighter: {
      urBestFighter: "Your Best Fighter",
      urBestFighterDesc: "Since the start, {{fundCode}} has given you a",
      totalAssets: "Total Assets",
      totalReturn: "Total Return",
      totalReturnWithUnit: "{{number}} FND ",
      decimalWithUnit: ".{{decimal}} FND",
      return: "Return",
    },
    yourRanking: {
      title: "Your Ranking",
      leaderBoard: "Leaderboard",
      rank: "Rank",
      completed: "Completed",
    },
    toast: {
      noMatch: "Can’t add fund: asset type doesn’t match",
    },
  },
  fantasyStat: {
    header: {
      mostPicked: "Most Picked",
      highestFlow: "Highest Flow",
      positiveReturn: "Positive Return Streak",
      bestPerformer: "Best Performer",
    },
    emptyText: {
      error:
        "Quiet today. Rankings will appear when there’s something worth showing.",
      noRanking: "No Rankings Yet.",
      noRankingDesc:
        "We’ll start the rankings when the season starts. Check in later.",
    },
    netFlow: "Net Flow",
    percentagePicked: "% Picked",
    assetClass: "Asset Class",
    region: "Region",
    theme: "Theme",
    character: "Character",
    rankFund: "Rank Fund",
    streakCount: "Streak Count",
    return: "Return",
  },
  bottomSheetFeeInfo: {
    header: "ค่าธรรมเนียมกองทุน",
    howFeeCollected: "ค่าธรรมเนียมจัดเก็บอย่างไร?",
    content1: "ค่าธรรมเนียมกองทุนมีอยู่ 2 ประเภท ได้แก่: ",
    content2: "ค่าธรรมเนียมที่เรียกเก็บจากกองทุนรวม: ",
    content3:
      "เช่น ค่าธรรมเนียมการจัดการ ค่าธรรมเนียมผู้ดูแลผลประโยชน์ ค่าธรรมเนียมนายทะเบียน และอื่น ๆ",
    content4:
      "โดยจะแสดงเป็นอัตราร้อยละของมูลค่ากองทุนในแต่ละปี คุณจะไม่ได้จ่ายค่าธรรมเนียมเหล่านี้โดยตรง แต่จะถูกหักจากผลตอบแทนของกองทุนโดยอัตโนมัติ",
    content5: "ค่าธรรมเนียมที่เรียกเก็บจากผู้ถือหน่วย: ",
    content6:
      "ค่าธรรมเนียมที่เรียกเก็บจากผู้ถือหน่วยรายครั้ง เมื่อทำธุรกรรม ซื้อ ขาย และ/หรือ สับเปลี่ยนกองทุนรวม",
  },
  bottomSheetAssetAllocation: {
    header: "สัดส่วนการลงทุนอาจเกิน 100%",
    content:
      "อาจมาจากการปัดทศนิยม มีรายการค้างรับ/ค้างจ่าย หรือหนี้สินอื่นๆ รวมถึงมีการใช้ตราสาร อนุพันธ์ หรืออนุพันธ์ในการลงทุน",
  },

  about: {
    header: "About",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    versionApp: "Version {{version}}",
  },
};

export default th;
