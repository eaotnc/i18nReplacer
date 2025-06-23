const th: Translations = {
  common: {
    ok: "OK!",
    cancel: "ยกเลิก",
    back: "Back",
    logOut: "Log Out",
    filter: "Filter",
    none: "ไม่กำหนด",
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
      next: "ถัดไป",
      send: "Send",
      login: "Log In",
    },
    period: {
      "1M": "1M",
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
    fundList: "กองทุน",
    placeholderSearch: "Search Funds, Allocated Stocks, Investment Themes.",
    discoverFunds: "กองทุนที่น่าสนใจ",
    topPerformingCategories: "ธีมกองทุนที่กำลังมาแรง",
    PersonalQuiz: {
      skipForNow: "ข้ามไปก่อน",
      completeQuiz: "ทำแบบสอบถามเสร็จแล้ว",
      titleIntro: "ปรับแต่งฟีเจอร์ “ค้นหากองทุน” ให้ตรงใจคุณ",
      subTitleIntro:
        "A quick personality quiz helps us fine-tune fund collections to match your style.",
      letsGo: "Let’s go!",
      chooseMoreThanOne: "เลือกได้มากกว่าหนึ่งอย่าง",
      calibratingYourResults: "Calibrating your results",
    },
  },
  FundHome: {
    textSearchPlaceholder: "Search Mutual Funds, Filters, Investment Themes..",
    buttonSeeAll: "ดูทั้งหมด",
    buttonMore: "ดูเพิ่มเติม",
    watchlist: "รายการติดตาม",
    funds: "กองทุน",
    announcements: "ข่าวสาร",
    fundCode: "กองทุน",
    return1D: "Return (1D)",
    addFund: "เพิ่มกองทุน",
    noNewsYet: "ยังไม่มีข่าวสาร",
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
      payment: "วันจ่ายเงินปันผล",
      thbUnit: "THB/หน่วย",
    },
  },
  FundSearchScreen: {
    textSearchButtonPlaceholder: "Try searching for “NVDA”",
    textOtherStockSearchButtonPlaceholder: "ค้นหาชื่อหรือรหัสหุ้น",
    textSearchPlaceholder: "ค้นหา",
    recentlySearch: "การค้นหาล่าสุด",
    popularSearch: "คำค้นหายอดนิยม",
    more: "ดูเพิ่มเติม",
    less: "ดูน้อยลง",
    searchNotFound: "ไม่พบผลลัพธ์การค้นหา กรุณาลองใหม่อีกครั้ง",
    searchNotFoundDetail:
      "It looks like we couldn't find what you're \nsearching for. Please try a different search term",
    tryAgain: "กรุณาลองใหม่อีกครั้ง",
    noInternet: "ไม่มีสัญญาณอินเทอร์เน็ต",
    pleaseCheckInternet: "กรุณาตรวจสอบสัญญาณอินเทอร์เน็ตอีกครั้ง",
    refresh: "รีเฟรชข้อมูล",
    others: "อื่นๆ",
    deleteHistory: "ลบประวัติการค้นหา",
    modal: {
      titleModalDel: "ลบประวัติการค้นหาหรือไม่",
      messageModalDel: "การดำเนินการนี้จะลบประวัติการค้นหาทั้งหมดอย่างถาวร",
      cancelText: "ยกเลิก",
      confirmText: "ลบ",
    },
    sellAll: "ดูทั้งหมด",
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
  filters: {
    title: "ตัวกรองค้นหากองทุน",
    shortcuts: {
      Search: "ค้นหา",
      AssetClass: "ประเภทสินทรัพย์",
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
        ipo: "IPO",
        fundHolidays: "วันหยุดกองทุน",
        buySellSuspension: "ประกาศหยุดรับการซื้อ ขายคืนหน่วยลงทุน",
        dividend: "จ่ายเงินปันผล",
        holdingsOverOneThird: "ข้อมูลการถือหน่วยลงทุนเกิน 1 ใน 3",
        lmts: "ประกาศการใช้เครื่องมือบริหารสภาพคล่อง",
        promotions: "โปรโมชั่น",
        others: "อื่นๆ",
      },
      TaxSaving: {
        title: "สิทธิประโยชน์ทางภาษี",
      },
      AMC: {
        title: "บริษัทหลักทรัพย์จัดการกองทุน (บลจ.)",
        ABERDEEN: "ABERDEEN",
        ASSETFUND: "ASSETFUND",
        AXA: "แอกซ่า",
        BBLAM: "BBLAM",
        BCAP: "BCAP",
        DAOLINV: "DAOLINV",
        EASTSPRING: "EASTSPRING",
        KASSET: "KASSET",
        KKPAM: "KKPAM",
        KSAM: "KSAM",
        KTAM: "KTAM",
        KWIAM: "KWIAM",
        LHFUND: "LHFUND",
        MFC: "MFC",
        ONEAM: "ONEAM",
        PAMC: "PAMC",
        PRINCIPAL: "PRINCIPAL",
        SCBAM: "SCBAM",
        SAWAKAMI: "ซาวาคามิ",
        TALISAM: "TALISAM",
        TISCOASSET: "TISCOASSET",
        UOBAM: "UOBAM",
        XSpringAM: "XSPRINGAM",
      },
      Tags: {
        title: "แท็ก",
        InWatchlist: "กำลังติดตาม",
        Reccommend: "แนะนำ",
        Popular: "ยอดนิยม",
        TopReturn: "ผลตอบแทนดี",
        Promotion: "โปรโมชัน",
      },
      TaxSavingsType: {
        title: "สิทธิประโยชน์ทางภาษี",
        Nontax: "ไม่มีสิทธิประโยชน์ทางภาษี",
        SSFSSFX: "SSF/SSFX",
        ThaiESG: "ThaiESG",
        TESGTESGX: "TESG/TESGX",
        RMF: "RMF",
        LTF: "LTF",
      },
      AssetClass: {
        title: "ประเภทสินทรัพย์",
        MoneyMarket: "ตลาดเงิน",
        FixedIncome: "ตราสารหนี้",
        Mixed: "สินทรัพย์ผสม",
        Equity: "ตราสารทุน",
        Alternative: "สินทรัพย์ทางเลือก",
      },
      ManagementStyle: {
        title: "กลยุทธ์การบริหารกองทุน",
        Any: "ไม่กำหนด",
        Active: "เชิงรุก",
        Passive: "เชิงรับ",
      },
      GrowthStyle: {
        title: "สไตล์การเติบโต",
        Any: "ไม่กำหนด",
        Accumulated: "สะสมมูลค่า",
        Dividend: "จ่ายเงินปันผล",
      },
      InvestmentStrategy: {
        title: "กลยุทธ์การลงทุน",
        Any: "ไม่กำหนด",
        DirectInvestment: "ลงทุนโดยตรง",
        FeederFund: "ผ่าน Feeder Fund",
        FundOfFunds: "ผ่าน Fund of Funds",
      },
      SpecialFundType: {
        title: "กองทุนประเภทพิเศษ",
        IPO: "IPO",
        TermFund: "กำหนดอายุ",
        AutoRedemption: "ขายคืนอัตโนมัติ",
        ComplexFund: "ซับซ้อน",
      },
      Geography: {
        title: "ภูมิศาสตร์",
        Country: {
          title: "ประเทศ",
          Thailand: "ไทย",
          USA: "อเมริกา",
          ChinaASharesMainland: "จีน - แผ่นดินใหญ่",
          ChinaHSharesHK: "จีน - ฮ่องกง",
          ChinaAllShares: "จีน - รวมทุกตลาด",
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
        title: "ธีมการลงทุน",
        Blockchain: "บล็อกเชน",
        Cannabis: "กัญชา",
        Cybersecurity: "Cybersecurity",
        EliteBrands: "อีลิทแบรนด์",
        Brands: "แบรนด์",
        ESG: "ESG",
        EV: "EV",
        HealthcareBiotech: "สุขภาพ",
        LeisureLifestyle: "ไลฟ์สไตล์",
        PlanetFriendlySustainability: "ความยั่งยืน",
        RoboticsAI: "หุ่นยนต์และ AI",
        Semiconductor: "เซมิคอนดักเตอร์",
        TechnologyDisruptiveInnovation: "เทคโนโลยี",
        Gold: "ทองคำ",
        Energy: "พลังงาน",
        PropertyInfra: "อสังหาและโครงสร้างพื้นฐาน",
      },
      AssetManagementCompany: {
        title: "บริษัทหลักทรัพย์จัดการกองทุน",
        ABERDEEN: "ABERDEEN",
        ASSETFUND: "ASSETFUND",
        AXA: "แอกซ่า",
        BBLAM: "BBLAM",
        BCAP: "BCAP",
        DAOLINV: "DAOLINV",
        EASTSPRING: "EASTSPRING",
        KASSET: "KASSET",
        KKPAM: "KKPAM",
        KSAM: "KSAM",
        KTAM: "KTAM",
        KWIAM: "KWIAM",
        LHFUND: "LHFUND",
        MFC: "MFC",
        ONEAM: "ONEAM",
        PAMC: "PAMC",
        PRINCIPAL: "PRINCIPAL",
        SCBAM: "SCBAM",
        SAWAKAMI: "ซาวาคามิ",
        TALISAM: "TALISAM",
        TISCOASSET: "TISCOASSET",
        UOBAM: "UOBAM",
        XSpringAM: "XSPRINGAM",
      },
      Risk: {
        title: "ความเสี่ยง",
      },
      HedgingPolicy: {
        title: "นโยบายเฮดจิ้ง",
        Unhedged: "ไม่ป้องกัน",
        Partial: "บางส่วน",
        Discretion: "ดุลยพินิจ",
        AllAlmost: "ทั้งหมด/เกือบทั้งหมด",
      },
      DividendPolicy: {
        title: "นโยบายปันผล",
        Any: "ไม่กำหนด",
        No: "ไม่จ่าย",
        Yes: "จ่าย",
      },
      MinimumBuy: {
        title: "ยอดลงทุนขั้นต่ำ",
        Any: "ไม่กำหนด",
        thb1: "≤ 1 บาท",
        thb100: "≤ 100 THB",
        thb500: "≤ 500 THB",
        thb1000: "≤ 1000 บาท",
      },
      SettlementDate: {
        title: "ระยะเวลารับเงินค่าขายคืน",
      },
    },
    button: {
      apply: "นำไปใช้",
      reset: "ล้างค่า",
    },
  },
  viewFundBy: {
    button: {
      viewTotalReturn: "ดู: ผลตอบแทนรวม",
      viewAnnualized: "ดู: ผลตอบแทนรวมต่อปี",
      viewNetFlow: "View : Net Flow",
      viewAllocated: "View : Percent Allocated",
      topTotalReturn: "กองทุนที่ให้ผลตอบแทนสูงสุด",
      topNetFlow: "กองทุนที่มีเงินลงทุนสุทธิมากที่สุด",
    },
    title: "เลือกดูกองทุนตาม",
    options: {
      totalReturn: {
        title: "ผลตอบแทนรวม",
        detail: "รวมกองทุนที่ให้ผลตอบแทนโดดเด่นที่สุด",
      },
      annualizedTotalReturn: {
        title: "ผลตอบแทนรวมเฉลี่ยต่อปี",
        detail: "รวมกองทุนที่ทำผลตอบแทนเฉลี่ยต่อปีได้อย่างน่าประทับใจ",
      },
      netflow: {
        title: "เงินลงทุนสุทธิ",
        detail:
          "ดูทิศทางการไหลของเงิน เพื่อจับสัญญาณตลาดและความเชื่อมั่นของนักลงทุน",
      },
      allocated: {
        title: "สัดส่วนการลงทุน (%)",
        detail:
          "ดูสัดส่วนหุ้นที่แต่ละกองทุนถือครองอยู่ เพื่อเข้าใจภาพรวมของการถือครองได้ชัดเจนยิ่งขึ้น",
      },
    },
  },
  OtherFundListItem: {
    tag: {
      ALLOCATED_STOCK: "หุ้น",
      MASTER_FUND: "กองทุนหลัก",
      FILTER: "Filter",
    },
  },
  banner: {
    title: "ค้นหาหุ้นที่สนใจได้ที่นี่เลย",
    detail: "ค้นหาชื่อหรือรหัสหุ้น เพื่อดูว่ามีกองทุนไหนที่ลงทุนในหุ้นนั้นบ้าง",
  },
  toolsButton: {
    compare: "เปรียบเทียบ",
    priceAlert: "แจ้งเตือน",
    watchlist: "รายการติดตาม",
  },
  fundInfo: {
    actualValue: "*Actual Value",
    perYear: "*Per Year",
    options: {
      createPriceAlert: "สร้างการแจ้งเตือนราคา",
      managePriceAlert: "Manage Price Alerts",
    },
    button: {
      addToWatchlist: "เพิ่มเข้ารายการติดตาม",
      removeFromWatchlist: "ลบจากรายการติดตาม",
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
      fundFactSheet: "หนังสือชี้ชวนกองทุน",
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
      annualOperatingExpenses: "ค่าใช้จ่ายในการดำเนินงานต่อปี",
      managementFee: "ค่าธรรมเนียมการจัดการ",
      totalFee: "ค่าธรรมเนียมรวม",
      peer: "Peers",
      fund: "Fund",
      transactionFee: "ค่าธรรมเนียมการทำรายการ",
      frontEnd: "การขายหน่วยลงทุน",
      backEnd: "การรับซื้อคืนหน่วยลงทุน",
      switchingOut: "การสับเปลี่ยนหน่วยลงทุนออก",
      switchingIn: "การสับเปลี่ยนหน่วยลงทุนเข้า",
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
        title: "ยังไม่มีข่าวสาร",
        detail:
          "Stay tuned! Check back later or add this\nfund to your watchlist to get updates.",
      },
    },
    bottomSheet: {
      filter: {
        title: "ตัวกรองประกาศกองทุน",
      },
    },
  },
  viewReturnBy: {
    button: {
      calendarYear: "ผลตอบแทนรายปี",
      trailing: "ผลตอบแทนรวม",
    },
    title: "แสดงผลตอบแทนตาม",
    options: {
      calendarYear: {
        title: "ผลตอบแทนรายปี",
      },
      trailing: {
        title: "ผลตอบแทนรวม",
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
    title: "แจ้งเตือน",
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
        "ขอบคุณที่ช่วยเราพัฒนา! ความคิดเห็นของคุณมีความสำคัญสำหรับเรามาก",
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
      createProfile: "สร้างโปรไฟล์ของคุณเลย!",
      login: "Have an account? Login",
    },
  },
  blurBoxUnlock: {
    title: "ปลดล็อกเครื่องมืออัจฉริยะ เพื่อการลงทุนที่ดีกว่าเดิม",
    description: "สร้างโปรไฟล์ตอนนี้ เพื่อใช้งานทุกฟีเจอร์ได้แบบไม่จำกัด",
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
      totalReturn: "ผลตอบแทน (1Y)",
      netFlow: "เงินลงทุนสุทธิ (1Y)",
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
      next: "ถัดไป",
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
      createProfile: "สร้างโปรไฟล์ของคุณเลย!",
    },
    error: "Incorrect username or password. Please Try again.",
  },
  FundSwipe: {
    tutorial: {
      step1: {
        title: "ปัดขึ้นเพื่อดูเพิ่มเติม!",
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
      swipeUp: "ปัดขึ้น",
    },
    cardFront: {
      region: "ภูมิภาค",
      theme: "ธีมการลงทุน",
      style: "รูปแบบการลงทุน",
      strategy: "กลยุทธ์การลงทุน",
      hedgingPolicy: "นโยบายเฮดจิ้ง",
      dividend: "จ่ายเงินปันผล",
    },
    cardBack: {
      goToFundInfo: "ไปที่ข้อมูลกองทุน",
      notInterested: "ไม่สนใจ",
      fundSummary: "สรุปข้อมูลกองทุน",
    },
    bottomSheetDislike: {
      modalTitle: "Why didn’t you like this summary?",
      tellUsMore: "ช่วยบอกเรา",
      tellUsMoreTitle: "เราสามารถทำอะไรให้ดีขึ้นเพื่อคุณได้บ้าง?",
      tellUsMoreReasonPlaceholder:
        "Tell us the reason you didn’t like the AI Summary...",
      unhelpful: "Unhelpful / Not relevant",
      incorrectSummary: "ข้อมูลไม่ถูกต้อง",
    },
    toast: {
      notInterested: "เราจะแสดงกองทุนที่คล้ายกันให้คุณน้อยลง",
      feedbackSuccess:
        "ขอบคุณที่ช่วยเราพัฒนา! ความคิดเห็นของคุณมีความสำคัญสำหรับเรามาก",
      cardDeletedFromMyCollection: "Card deleted from ‘My Collection’.",
      reachCollectionLimit: "คุณมีกองทุนเกินกว่าที่กำหนด 100 กองทุนแล้ว",
      imageSavedSuccessFully: "บันทึกรูปภาพ สำเร็จแล้ว",
      linkCopied: "คัดลอกลิงก์ สำเร็จแล้ว",
      imageSavedFailed: "บันทึกรูปภาพ ไม่สำเร็จ",
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
      watchList: "รายการติดตาม",
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
        label: "กำหนดอายุ",
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
      totalReturn: "ผลตอบแทนรวม",
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
    netFlow: "เงินลงทุนสุทธิ",
    percentagePicked: "% Picked",
    assetClass: "ประเภทสินทรัพย์",
    region: "ภูมิภาค",
    theme: "ธีมการลงทุน",
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
      "อาจมาจากการปัดทศนิยม มีรายการค้างรับ/\nค้างจ่าย หรือหนี้สินอื่นๆ รวมถึงมีการใช้ตราสาร อนุพันธ์ หรืออนุพันธ์ในการลงทุน",
  },
  about: {
    header: "About",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    versionApp: "Version {{version}}",
  },
};

export default th;
