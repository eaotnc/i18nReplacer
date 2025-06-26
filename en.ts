const en = {
  common: {
    annualized: "Annualized",
    asOf: "As of",
    back: "Back",
    cancel: "Cancel",
    clear: "Clear",
    days: "Days",
    delete: "Delete",
    done: "done",
    filter: "Filter",
    filters: "Filters",
    graph: "Graph",
    logOut: "Log Out",
    more: "More",
    multiple: "Multiple",
    new: "New",
    none: "None",
    ok: "OK!",
    periodTab: "Period",
    save: "Save",
    source: "Source",
    table: "Table",
    thbUnit: "THB/Unit",
    total: "Total",
    undo: "Undo",
    updatedOn: "Updated on",
    item: {
      zero: "items",
      one: "item",
      other: "items",
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
      "1M": "1M",
    },
    chartNodata: "NAV Line chart is not yet available for this fund.",
  },
  error: {
    toast: {
      somethingWentWrong: "Something went wrong. Please try again.",
    },
  },
  bestOfYourCollection: {
    title: "Best of Your Collection",
    description:
      "Discover the top-performing funds in your collection. Swipe up to explore and learn more.",
    emptyCollection: {
      title: "No Fund Cards in Your Collection",
      description:
        "Start exploring and add fund cards to build your collection.",
      button: "Discover",
    },
  },
  feed: {
    title: "Feed",
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
    fundList: "Fund List",
    placeholderSearch: "Search Funds, Allocated Stocks, Investment Themes.",
    discoverFunds: "Discover Funds",
    topPerformingCategories: "Top Performing Categories",
    exploreByStocks: "Explore by Stocks",
    PersonalQuiz: {
      skipForNow: "Skip for now",
      completeQuiz: "Complete Quiz",
      titleIntro: "Personalize your Discover experience.",
      subTitleIntro:
        "A quick personality quiz helps us fine-tune fund collections to match your style.",
      letsGo: "Let’s go!",
      chooseMoreThanOne: "You can choose more than one",
      calibratingYourResults: "Calibrating your results",
      findingYourMatches: "Finding your matches",
      preparingYourCollection: "Preparing your collection",
    },
  },
  FundHome: {
    textSearchPlaceholder: "Search Mutual Funds, Filters, Investment Themes..",
    buttonSeeAll: "See All",
    buttonMore: "More",
    watchlist: "Watchlist",
    funds: "Funds",
    announcements: "Announcements",
    fundCode: "Fund Code",
    return1D: "Return (1D)",
    addFund: "Add Fund",
    noNewsYet: "No News Yet",
    GlobalMarketUpdate: {
      title: "Global Market Update",
      indices: "Indices",
      indexes: "Indexes",
      stocks: "Stocks",
      alternatives: "Alternatives",
      currencies: "Currencies",
      dailyMarketSummary: {
        title: "Daily Market Summary",
        aiAnalyzed: "AI-Analyzed",
      },
    },
    portfolio: {
      portEmpty: {
        title: "Let’s build your portfolio.",
        detail:
          "Add funds to start tracking your portfolio’s value and top performer.",
        button: "Start now.",
      },
    },
    upcomingDividend: {
      title: "Upcoming: Dividend Payout",
      payment: "Payment",
      thbUnit: "THB/Unit",
    },
  },
  FundSearchScreen: {
    textSearchButtonPlaceholder: "Try searching for “NVDA”",
    textOtherStockSearchButtonPlaceholder: "Search for stock names or codes",
    textSearchPlaceholder: "Search",
    recentlySearch: "Recently Searched",
    popularSearch: "Popular Searches",
    more: "Show more",
    less: "Show less",
    searchNotFound: "We Couldn't Find Any Matches",
    searchNotFoundDetail:
      "It looks like we couldn't find what you're \nsearching for. Please try a different search term",
    tryAgain: "Please try again",
    noInternet: "No Network",
    pleaseCheckInternet: "Please recheck internet signal",
    refresh: "Refresh",
    others: "Other",
    deleteHistory: "Delete History",
    modal: {
      titleModalDel: "Delete Search History?",
      messageModalDel: "This will permanently delete all search history.",
      cancelText: "Cancel",
      confirmText: "Delete",
    },
    sellAll: "See All",
    cancel: "Cancel",
  },
  fundiiNavigator: {
    homeTab: "Home",
    discoverTab: "Discover",
    socialTradeTab: "Social Trade",
    AmcTab: "AMC",
    MeTab: "Me",
    toolTab: "Tools",
    portfolio: "Portfolio",
    settings: "Settings",
    fantasy: "Fantasy",
  },
  FundCard: {
    tag: {
      Risk: "Risk",
      Recommended: "Recommend",
      Popular: "Popular",
      TopReturn: "Top Return",
      Promo: "Promo",
      RMF: "RMF",
      SSF: "SSF",
      SSFX: "SSFX",
      ThaiESG: "ThaiESG",
      TESGTESGX: "TESG/TESGX",
      LTF: "LTF",
    },
  },
  // FundList Screen
  filters: {
    title: "Filter Funds",
    shortcuts: {
      Search: "Search",
      AssetClass: "Asset Class",
      Geography: "Geography",
      Theme: "Theme",
      TaxSaving: "Tax saving",
      AMC: "AMC",
    },
    category: {
      Announcements: {
        scheme: "Scheme Amendment",
        autoRedemption: "Auto Redemption",
        fees: "Fees",
        termination: "Termination",
        ipo: "IPO",
        fundHolidays: "Fund Holidays",
        buySellSuspension: "Buy/Sell Suspension",
        dividend: "Dividend",
        holdingsOverOneThird: "Holdings over One-Third",
        lmts: "LMTs",
        promotions: "Promotions",
        others: "Others",
      },
      TaxSaving: { title: "Tax Saving Type" },
      AMC: {
        title: "Asset Management Company (AMC)",
        ABERDEEN: "ABERDEEN",
        ASSETFUND: "ASSETFUND",
        AXA: "AXA",
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
        SAWAKAMI: "SAWAKAMI",
        TALISAM: "TALISAM",
        TISCOASSET: "TISCOASSET",
        UOBAM: "UOBAM",
        XSpringAM: "XSPRINGAM",
      },
      Tags: {
        title: "Tags",
        InWatchlist: "In Watchlist",
        Reccommend: "Reccommend",
        Popular: "Popular",
        TopReturn: "Top Return",
        Promotion: "Promotion",
      },
      TaxSavingsType: {
        title: "Tax Savings Type",
        Nontax: "Non-tax",
        SSFSSFX: "SSF/SSFX",
        ThaiESG: "ThaiESG",
        TESGTESGX: "TESG/TESGX",
        RMF: "RMF",
        LTF: "LTF",
      },
      AssetClass: {
        title: "Asset Class",
        MoneyMarket: "Money Market",
        FixedIncome: "Fixed Income",
        Mixed: "Mixed",
        Equity: "Equity",
        Alternative: "Alternative",
      },
      ManagementStyle: {
        title: "Management Style",
        Any: "Any",
        Active: "Active",
        Passive: "Passive",
      },
      GrowthStyle: {
        title: "Growth Style",
        Any: "Any",
        Accumulated: "Accumulated",
        Dividend: "Dividend",
      },
      InvestmentStrategy: {
        title: "Investment Strategy",
        Any: "Any",
        DirectInvestment: "Direct Investment",
        FeederFund: "Feeder Fund",
        FundOfFunds: "Fund of Funds",
      },
      SpecialFundType: {
        title: "Special Fund Type",
        IPO: "IPO",
        TermFund: "Term Fund",
        AutoRedemption: "Auto Redemption",
        ComplexFund: "Complex Fund",
      },
      Geography: {
        title: "Geography",
        Country: {
          title: "Country",
          Thailand: "Thailand",
          USA: "USA",
          ChinaASharesMainland: "China A-shares (Mainland)",
          ChinaHSharesHK: "China H-shares (HK)",
          ChinaAllShares: "China All-shares",
          India: "India",
          Vietnam: "Vietnam",
          Indonesia: "Indonesia",
          Japan: "Japan",
          SouthKorea: "South Korea",
          Germany: "Germany",
        },
        Regions: {
          title: "Regions",
          Global: "Global",
          Europe: "Europe",
          EmergingMarket: "Emerging Market",
          Asia: "Asia",
          ASEAN: "ASEAN",
        },
      },
      Theme: {
        title: "Theme",
        Blockchain: "Blockchain",
        Cannabis: "Cannabis",
        Cybersecurity: "Cybersecurity",
        EliteBrands: "Elite Brands",
        Brands: "Brands",
        ESG: "ESG",
        EV: "EV",
        HealthcareBiotech: "Healthcare & Biotech",
        LeisureLifestyle: "Leisure & Lifestyle",
        PlanetFriendlySustainability: "Planet-friendly & Sustainability",
        RoboticsAI: "Robotics & AI",
        Semiconductor: "Semiconductor",
        TechnologyDisruptiveInnovation: "Technology & Disruptive Innovation",
        Gold: "Gold",
        Energy: "Energy",
        PropertyInfra: "Property & Infra",
      },
      AssetManagementCompany: {
        title: "Asset Management Company",
        ABERDEEN: "ABERDEEN",
        ASSETFUND: "ASSETFUND",
        AXA: "AXA",
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
        SAWAKAMI: "SAWAKAMI",
        TALISAM: "TALISAM",
        TISCOASSET: "TISCOASSET",
        UOBAM: "UOBAM",
        XSpringAM: "XSPRINGAM",
      },
      Risk: {
        title: "Risk",
      },
      HedgingPolicy: {
        title: "Hedging Policy",
        Unhedged: "Unhedged",
        Partial: "Partial",
        Discretion: "Discretion",
        AllAlmost: "All/Almost",
      },
      DividendPolicy: {
        title: "Dividend Policy",
        Any: "Any",
        No: "No",
        Yes: "Yes",
      },
      MinimumBuy: {
        title: "Minimum Buy",
        Any: "Any",
        thb1: "≤ 1 THB",
        thb100: "≤ 100 THB",
        thb500: "≤ 500 THB",
        thb1000: "≤ 1000 THB",
      },
      SettlementDate: {
        title: "Settlement Date",
      },
    },
    button: {
      apply: "Apply",
      reset: "Reset",
    },
  },
  viewFundBy: {
    button: {
      viewTotalReturn: "View: Total Return",
      viewAnnualized: "View: Annualized Total Return",
      viewNetFlow: "View: Net Flow",
      viewAllocated: "View: Percent Allocated",
      topTotalReturn: "Top Total Return",
      topNetFlow: "Top Net Flow",
    },
    title: "View Funds By",
    options: {
      totalReturn: {
        title: "Total Return",
        detail: "Highlighting the funds with the best performance gains",
      },
      annualizedTotalReturn: {
        title: "Annualized Total Return",
        detail: "Discover funds with impressive average yearly performance",
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
  toolsButton: {
    compare: "Compare",
    priceAlert: "Price Alert",
    watchlist: "Watchlist",
  },
  fundInfo: {
    info: "Info",
    lineChart: "Line Chart",
    performanceMatrix: "Performance Matrix",
    actualValue: "*Actual Value",
    perYear: "*Per Year",
    trailinNotAvailable:
      "Trailing Total Return is not yet available for this fund.",
    options: {
      createPriceAlert: "Create Price Alert",
      managePriceAlert: "Manage Price Alerts",
    },
    button: {
      addToCompare: "Add to Compare",
      addToWatchlist: "Add to Watchlist",
      removeFromWatchlist: "Remove from Watchlist",
    },
    bookClosing: "Book Closing",
    subHeader: {
      risk: "Risk: {{risk}}",
    },
    YTD: "YTD",
    buy: "Buy",
    sell: "Sell",
    fundSummary: {
      summary: "Summary",
      masterFund: "Master Fund",
      inceptionDate: "Inception Date",
      aum: "AUM",
      risk: "Risk",
      hedgingPolicy: "Hedging Policy",
      dividendPolicy: "Dividend Policy",
      settlementDay: "Settlement Day",
      minimumBuy: "Minimum Buy",
      frontEndFee: "Front-end Fee",
      totalFee: "Total Fee",
      fundFactSheet: "Fund Factsheet",
      ai: "AI-Generated",
    },
    fundAssetAllocation: {
      assetAllocation: "Asset Allocation",
      noAssetAllocation: "Asset Allocation is not yet available for\nthis fund",
    },

    fundTopHolding: {
      topHolding: "Top Holdings",
      noData: "Top Holdings is not yet available for\nthis fund",
    },
    fundDividend: {
      dividendHistory: "Dividend History",
      bookClosing: "Book Closing",
      payment: "Payment",
      THBUnit: "THB/Unit",
    },
    fundFee: {
      fee: "Fees",
      annualOperatingExpenses: "Annual Operating Expenses",
      managementFee: "Management Fee",
      totalFee: "Total Fee",
      peer: "Peers",
      fund: "Fund",
      transactionFee: "Transaction Fees",
      peerAverage: "Peer Average",
      frontEnd: "Front-end",
      backEnd: "Back-end",
      switchingOut: "Switching Out",
      switchingIn: "Switching In",
    },
    transactionCondition: {
      transactionCondition: "Transaction Conditions",
      buyCutoffTime: "Buy Cut-off Time",
      sellCutoffTime: "Sell Cut-off Time",
      minimumBuy: "Minimum Buy",
      firstTime: "First-time",
      nextTime: "Next-time",
      minimumSell: "Minimum Sell",
      value: "Value",
      unit: "Units",
      minimumBalance: "Minimum Balance",
      settlementDay: "Settlement Day",
    },
    announcements: {
      title: "Announcements",
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
  // Watchlist Screen
  watchlist: {
    title: "Watchlist",
    removedFromWatchlist: "Removed from Watchlist.",
    addedToWatchlist: "Added to Watchlist.",
    buttonOptions: {
      edit: "Edit",
      settings: "Settings",
    },
    emptyList: {
      title: "Time to Build Your Watchlist",
      detail:
        "Start adding funds you’re interested in and\nkeep an eye on their performance.",
    },
    emptyNews: {
      title: "No News Yet",
      detail:
        "Stay tuned! Add funds to your watchlist or\ncheck back later for updates.",
    },
    button: {
      addfund: "Add Fund",
      delete: "Delete",
    },
    updated: "Updated",
    taps: {
      funds: "funds",
      announcements: "Announcements",
    },
    card: {
      today: "Today",
      earlier: "Earlier",
    },
    toast: {
      watchlistLimit: "You’ve reached the 30 fund watchlist limit.",
    },
  },
  // Price Alert
  priceAlert: {
    title: "Price Alert",
    nav: "NAV/Unit",
    fundCode: "Fund Code",
    current: "Current",
    target: "Target",
    setPriceAlert: "Set Price Alert",
    editPriceAlert: "Edit Price Alert",
    manangePriceAlert: { targetNavUnit: "Target NAV/Unit" },
    button: {
      create: "Create Alert",
      delete: "Delete",
      setAlert: "Set Alert",
    },
    emptyList: {
      title: "No Price Alerts Yet",
      detail: "Set up alerts to stay informed when\nprices change.",
    },
    toast: {
      saved: "Alert set. We’ll notify you at your target NAV/Unit.",
      deleted: "Alert deleted.",
      error: "Error: Unable to save changes. Please try again.",
    },
    alert: {
      inputNavUnit: "Alert me when NAV/Unit crosses",
      inputNavChange: "NAV/Unit Change",
    },
  },
  // compare
  compare: {
    title: "Compare",
    header: "Compare List",
    button: {
      create: "Add Fund",
    },
    emptyList: {
      title: "No Funds to Compare Yet",
      detail: "Add two or more funds to get started.",
    },
    result: {
      summary: "Summary",
      data: "Data",
      assetAllication: "Asset Allocation",
      topHoldings: "Top Holdings",
      dividend: "Dividend History",
      settlementDay: "T+{{days}}",
      days: "Days",
      transactionConditions: "Transaction Conditions",
      minimumBuy: "Minimum Buy",
      minimumSell: "Minimum Sell",
      minimumBalance: "Minimum Balance",
    },
    bottomSheetRadar: {
      headline: "Understanding the Radar Chart",
      subHeadline:
        "A bigger shaded area means a better fund—higher returns, lower risk, stronger protection, and fewer costs.",
      body: "Components of the Radar Chart",
      bodySubHeadline1:
        "Return: How much money the fund has made over time. Higher is better!",
      bodySubHeadline2:
        "Risk: How much the fund’s value goes up and down. Lower means steadier.",
      bodySubHeadline3:
        "Return/Risk: How much profit the fund makes for each bit of risk. Higher is better.",
      bodySubHeadline4:
        "Preservation: How well the fund protects your money in bad times. Better preservation means safer.",
      bodySubHeadline5:
        "Transaction Fee: The cost of buying and selling the fund. Lower fees mean you keep more money!",
    },
  },
  compareFeeChart: {
    fontendFee: "Front-end Fee",
    backEndFee: "Back-end Fee",
    totalFee: "Total Fee",
  },
  compareFeeBarChart: {
    fontendFee: "Front-end\nFee",
    backEndFee: "Back-end\nFee",
    totalFee: "Total\nFee",
  },
  compareSearch: {
    fromYourPortfolioAndSaves: "From Your Portfolio and Saves",
    toast: {
      reach10limit: "You have reached the 10 fund limit.",
    },
  },
  // Me
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
        main: "Manage",
        account: "Account",
        privacyAndData: "Privacy & Data",
        nofications: "Notifications",
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
  // Feedback
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
  // Language
  language: {
    language: "Language",
  },
  // loginWall
  loginWall: {
    title: "Unlock Smart Tools for Smarter Investing!",
    description:
      "Create a FUNDii profile to get unlimited access to even more smart features.",
    button: {
      createProfile: "Create Profile",
      login: "Have an account? Login",
    },
  },
  blurBoxUnlock: {
    title: "Unlock Smart Tools for Smarter Investing.",
    description:
      "Create a profile now to get unlimited access to powerful features.",
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
  // Top Return
  topReturn: {
    headerTable: {
      fund: "Fund",
      totalReturn: "Return (1Y)",
      netFlow: "Net Flow (1Y)",
    },
  },
  // Create Profile
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
  // OTP
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
  // Verify Email Phone
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

  // login
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
    shareWith: "Share with",
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
      hedgingPolicy: "Hedging Policy",
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
    period: "Trailing Performance (Period)",
    annualized: "Trailing Performance (Annualized)",
    calendar: "Calendar Year Return",
    calendarNoData:
      "Calendar Year Total Return is not yet available for\nthis fund",
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
        cancel: "Cancel",
        delete: "Delete",
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
      cancel: "Cancel",
      compare: "Compare",
      battle: "Fund Battle",
    },
  },
  CompareList: {
    compareItem: {
      zero: "Compare {{count}} items`",
      one: "Compare {{count}} item",
      other: "Compare {{count}} items",
    },
    change: "Change",
    addFund: "Add Fund",
    item: "items",
    toast: {
      added: "Fund added.",
      deleted: "Fund deleted.",
      duplicated: "Fund code is duplicated.",
    },
  },
  CompareListEdit: {
    button: {
      selectAll: "Select All",
      clearAll: "Clear All",
    },
  },
  CompareGraph: {
    nodata:
      "Line charts cannot be displayed for comparison or visualization from the funds you selected.",
  },
  Notification: {
    filterTab: {
      all: "All",
      fundiiUpdates: "fundii Updates",
      recommendations: "Recommendations",
      market: "Daily Market",
      stock: "Stock",
      newsFeed: "Newsfeed",
      ipo: "IPO",
      priceAlert: "Price Alerts",
      watchList: "Watchlist",
      collection: "Collection",
    },
    emptyNotification: {
      title: "No notifications yet",
      detail: "We’ll let you know when there’s something new.",
    },
    today: "Today",
    earlier: "Earlier",
  },
  NotificationSetting: {
    title: "Notifications",
    fundiiSection: {
      header: "fundii",
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
      header: "Tools",
      priceAlerts: {
        label: "Price Alerts",
      },
      watchlist: {
        label: "Watchlist",
      },
      priceUpdates: {
        label: "Price Updates",
        detail:
          "We’ll notify you of any NAV/Unit updates for your watchlisted funds",
      },
      newHighsAndLows: {
        label: "New Highs and Lows",
        detail:
          "Stay updated on all-time and 52-week highs and lows at a glance",
      },
      significantPriceChange: {
        label: "Significant Price Change",
      },
      fundPromotions: {
        label: "Fund Promotions",
      },
      announcementsUpdates: {
        label: "Announcements Updates",
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
    title: "Watchlist Settings",
    allNotificationTopics: { label: "All Notification Topics" },
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
      detail: `Enter now for your chance to win\nexciting prizes up to 200,000 baht!!`,
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
      save: "Save",
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
    newJoiner: {
      noRankingYet: "No Rankings Yet.",
      noRankingDescription:
        "We’ll start the rankings when this challenge starts. Check in later",
      newComerTitle: "This Challenge’s Newcomers",
    },
    toast: {
      noMatch: "Can’t add fund: asset type doesn’t match",
    },
  },
  leaderboard: {
    number1: "1st",
    number2: "2nd",
    number3: "3rd",
    rank: "Rank",
    player: "Player",
    return: "Return",
    pending: "Pending",
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
    header: "Fee Information",
    howFeeCollected: "How are Fees Collected?",
    content1: "There are two types of fees that are collected: ",
    content2: 'Annual Fund Operating Expenses:" "',
    content3:
      "Ongoing fees paid by the fund to cover management, accounting, legal, and similar costs.",
    content4:
      "They're shown as a percentage of the fund’s value each year. While you don’t pay these fees directly, they do reduce the fund’s returns.",
    content5: 'Transaction Fees:" "',
    content6:
      "One-time costs, including sales commissions, when buying, selling, and/or switching mutual funds.",
  },
  bottomSheetAssetAllocation: {
    header: "Investment allocations might exceed 100%",
    content:
      "This may be due to rounding, accrued receivables/payables, other liabilities, or the use of derivatives in investment.",
  },
  profileRadar: {
    return: "Return",
    preservation: "Preservation",
    transactionFee: "Transaction Fee",
    risk: "Risk",
    returnRisk: "Return/Risk",
  },
  ipo: {
    topHolding: "Top Holdings",
    ipo: "IPO",
    min: "Min",
    expectedReturn: "Expected Return (p.a.)",
  },
  about: {
    header: "About",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    versionApp: "Version {{version}}",
  },
};

export default en;
export type Translations = typeof en;
