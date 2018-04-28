const MAPPINGS = {
    //id: 1.59150235E8
    title: ['ds:4', 0, 0, 0],
    descriptionHTML: ['ds:4', 0, 10, 0, 1],
    developer: ['ds:4', 0, 12, 5, 1],
    recentChanges: ['ds:4', 0, 12, 6, 1],
    developerId: ['ds:4', 0, 12, 5, 0, 0],
    developerEmail: ['ds:4', 0, 12, 5, 2, 0],
    developerWebsite: ['ds:4', 0, 12, 5, 3, 5, 2],
    developerAddress: ['ds:4', 0, 12, 5, 4, 0],
    offersIAP: {
        path: ['ds:4', 0, 12, 12, 0],
        fun: Boolean
    },
    //add 互动元素
    interactiveElements: {
        path: ['ds:4', 0, 12, 4, 3, 1],
        fun: getInteractiveElements,
    },
    //add 翻译
    descriptionTranslation: ['ds:4', 0, 19, 0, 0, 1],
    description: ['ds:4', 0, 10, 0, 1],
    // 短描述
    descriptionShort: ['ds:4', 0, 10, 1, 1],
    //banner property="og:image"
    banner: ['ds:4', 0, 12, 2, 3, 2],
    genre: ['ds:4', 0, 12, 13, 0, 0],
    //类别
    genreId: ['ds:4', 0, 12, 13, 0, 2],
    familyGenre: ['ds:4', 0, 12, 13, 1, 0],
    familyGenreId: ['ds:4', 0, 12, 13, 1, 2],
    icon: ['ds:4', 0, 12, 1, 3, 2],
    headerImage: ['ds:4', 0, 12, 2, 3, 2],
    screenshots: {
        path: ['ds:4', 0, 12, 0],
        fun: R.map(R.path([3, 2]))
    },
    video: ['ds:4', 0, 12, 3, 0, 3, 2],
    videoImage: ['ds:4', 0, 12, 3, 1, 3, 2],
    // contentRating: ['ds:4', 0, 12, 4, 0],
    contentRating: {
        path: ['ds:4', 0, 12, 4], 
        fun: getContentRating,
    },
    contentRatingDescription: ['ds:4', 0, 12, 4, 2, 1],
    adSupported: {
        path: ['ds:4', 0, 12, 14, 0],
        fun: Boolean
    },
    updated: {
        path: ['ds:4', 0, 12, 8, 0],
        fun: (ts) => ts * 1000
    },
    summary: ['ds:4', 0, 10, 1, 1],
    installs: ['ds:4', 0, 12, 9, 0],
    inAppProducts: ['ds:4', 0, 12, 12, 0],
    minInstalls: {
        path: ['ds:4', 0, 12, 9, 0],
        fun: cleanInt
    },
    //id: 1.42707228E8
    score: ['ds:6', 0, 0, 1],
    scoreText: ['ds:6', 0, 0, 0],
    ratings: ['ds:6', 0, 2, 1],
    reviews: ['ds:6', 0, 3, 1],
    histogram: {
        path: ['ds:6', 0, 1],
        fun: buildHistogram
    },
    //id: 1.63762857E8
    size: ['ds:7', 0],
    androidVersion: {
        path: ['ds:7', 2],
        fun: normalizeAndroidVersion
    },
    androidVersionText: ['ds:7', 2],
    version: ['ds:7', 1],
    //id: 1.4425375E8
    price: {
        path: ['ds:10', 0, 2, 0, 0, 0, 1, 0, 0],
        fun: (val) => val / 1000000 || 0
    },
    free: {
        path: ['ds:10', 0, 2, 0, 0, 0, 1, 0, 0],
        // considered free only if prize is exactly zero
        fun: (val) => val === 0
    },
    currency: ['ds:10', 0, 2, 0, 0, 0, 1, 0, 1],
    priceText: ['ds:10', 0, 2, 0, 0, 0, 1, 0, 2],
    // id:
    comments: {
        path: ['ds:21', 0],
        fun: extractComments
    },
};