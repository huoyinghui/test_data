#### 记录隐身模式下gp detail页面变动


#### 1.will AF_mapping_key has change ?
```bash
AF_initDataKeys
AF_dataServiceRequests
```


#### 2.how to change you self mapping ?

```bash
const MAPPINGS = {
    // FIXME add appId
    title: ['ds:3', 0, 0, 0],
    descriptionHTML: ['ds:3', 0, 10, 0, 1],
    summary: ['ds:3', 0, 10, 1, 1],
    installs: ['ds:3', 0, 12, 9, 0],
    inAppProducts: ['ds:3', 0, 12, 12, 0],
    minInstalls: {
        path: ['ds:3', 0, 12, 9, 0],
        fun: cleanInt
    },
    score: ['ds:10', 0, 0, 1],
    scoreText: ['ds:10', 0, 0, 0],
    ratings: ['ds:10', 0, 2, 1],
    reviews: ['ds:10', 0, 3, 1],
    histogram: {
        path: ['ds:10', 0, 1],
        fun: buildHistogram
    },
    price: {
        path: ['ds:8', 0, 2, 0, 0, 0, 1, 0, 0],
        fun: (val) => val / 1000000 || 0
    },
    free: {
        path: ['ds:8', 0, 2, 0, 0, 0, 1, 0, 0],
        // considered free only if prize is exactly zero
        fun: (val) => val === 0
    },
    currency: ['ds:8', 0, 2, 0, 0, 0, 1, 0, 1],
    priceText: ['ds:8', 0, 2, 0, 0, 0, 1, 0, 2],
    offersIAP: {
        path: ['ds:3', 0, 12, 12, 0],
        fun: Boolean
    },
    size: ['ds:5', 0],
    androidVersion: {
        path: ['ds:5', 2],
        fun: normalizeAndroidVersion
    },
    androidVersionText: ['ds:5', 2],
    developer: ['ds:3', 0, 12, 5, 1],
    // developerId: {
    //     path: ['ds:3', 0, 12, 5, 5, 4, 2],
    //     fun: (devUrl) => devUrl.split('id=')[1]
    // },
    developerId: ['ds:3', 0, 12, 5, 0, 0],
    developerEmail: ['ds:3', 0, 12, 5, 2, 0],
    developerWebsite: ['ds:3', 0, 12, 5, 3, 5, 2],
    developerAddress: ['ds:3', 0, 12, 5, 4, 0],
    genre: ['ds:3', 0, 12, 13, 0, 0],
    //类别
    genreId: ['ds:3', 0, 12, 13, 0, 2],
    familyGenre: ['ds:3', 0, 12, 13, 1, 0],
    familyGenreId: ['ds:3', 0, 12, 13, 1, 2],
    icon: ['ds:3', 0, 12, 1, 3, 2],
    headerImage: ['ds:3', 0, 12, 2, 3, 2],
    screenshots: {
        path: ['ds:3', 0, 12, 0],
        fun: R.map(R.path([3, 2]))
    },
    video: ['ds:3', 0, 12, 3, 0, 3, 2],
    videoImage: ['ds:3', 0, 12, 3, 1, 3, 2],
    // contentRating: ['ds:3', 0, 12, 4, 0],
    contentRating: {
        path: ['ds:3', 0, 12, 4], 
        fun: getContentRating,
    },
    contentRatingDescription: ['ds:3', 0, 12, 4, 2, 1],
    adSupported: {
        path: ['ds:3', 0, 12, 14, 0],
        fun: Boolean
    },
    updated: {
        path: ['ds:3', 0, 12, 8, 0],
        fun: (ts) => ts * 1000
    },
    version: ['ds:5', 1],
    recentChanges: ['ds:3', 0, 12, 6, 1],
    comments: {
        path: ['ds:13', 0],
        fun: extractComments
    },
    //add 互动元素
    interactiveElements: {
        path: ['ds:3', 0, 12, 4, 3, 1],
        fun: getInteractiveElements,
    },
    //add 翻译
    descriptionTranslation: ['ds:3', 0, 19, 0, 0, 1],
    description: ['ds:3', 0, 10, 0, 1],
    // 短描述
    descriptionShort: ['ds:3', 0, 10, 1, 1],
    //banner property="og:image"
    banner: ['ds:3', 0, 12, 2, 3, 2],
};
```