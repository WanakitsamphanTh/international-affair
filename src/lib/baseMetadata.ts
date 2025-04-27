export const siteMeta = {
  siteTitle: "International Affairs Section",
  siteDesc: "International related information of Sendai KOSEN",
  siteUrl: "https://www.sendai-nct.ac.jp/common/international/",
  siteLang: "ja",
  siteLocale: "ja_JP",
  siteType: "website",
  siteIcon: "https://www.sendai-nct.ac.jp/wp/wp-content/uploads/2024/02/cropped-favicon-32x32.png",
  siteIconApple: "https://www.sendai-nct.ac.jp/wp/wp-content/uploads/2024/02/cropped-favicon-180x180.png"
}

export const baseMetadata = {
    metadataBase: new URL(siteMeta.siteUrl),
    alternates: {
        en: new URL(`${siteMeta.siteUrl}/en/`),
        ja: new URL(`${siteMeta.siteUrl}/ja/`)
    },
    title: {
        template: `%s | ${siteMeta.siteTitle}`,
        default: siteMeta.siteTitle,
    },
    description: siteMeta.siteDesc,
    icons: {
        icon: siteMeta.siteIcon,
        apple: siteMeta.siteIconApple,
    },
}

export const openGraphMetadata = {
    title: siteMeta.siteTitle,
    description: siteMeta.siteDesc,
    url: siteMeta.siteUrl,
    images: [
        {
            url: siteMeta.siteIcon,
            width: 32,
            height: 32,
            alt: siteMeta.siteTitle,
        },
    ],
    locale: siteMeta.siteLocale,
    type: siteMeta.siteType,
}

export const twitterMetadata = {
    card: "summary_large_image",
    title: siteMeta.siteTitle,
    description: siteMeta.siteDesc,
    image: [siteMeta.siteIcon],
}

export const viewport = {
    width: "device-width",
    initialscale: 1,
    maximumscale: 1,
}