import { siteMeta } from "@/lib/en/constants";
const { siteTitle, siteDesc, siteUrl, siteLang, siteLocale, siteType, siteIcon } = siteMeta;

export const baseMetadata = {
    metadataBase: new URL(siteUrl),
    alternates: {
        en: new URL(`${siteUrl}/en/`),
        ja: new URL(`${siteUrl}/ja/`)
    },
    title: {
        template: `%s | ${siteTitle}`,
        default: siteTitle,
    },
    description: siteDesc,
    icons: {
        icon: siteIcon,
        apple: siteIcon,
    },
}

export const openGraphMetadata = {
    title: siteTitle,
    description: siteDesc,
    url: siteUrl,
    images: [
        {
            url: siteIcon,
            width: 32,
            height: 32,
            alt: siteTitle,
        },
    ],
    locale: siteLocale,
    type: siteType,
}

export const twitterMetadata = {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDesc,
    image: [siteIcon],
}

export const viewport = {
    width: "device-width",
    initialscale: 1,
    maximumscale: 1,
}