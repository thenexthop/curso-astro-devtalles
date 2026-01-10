import type { APIRoute } from "astro"
import { getCollection } from "astro:content"
import rss from "@astrojs/rss"

import sanitizeHtml from 'sanitize-html'
import MarkdownIt from "markdown-it"

const parser = new MarkdownIt()

export const GET: APIRoute = async ({ params, request, site }) => {
    const blogPosts = await getCollection("blog")

    return rss({
        //stylesheet: '/styles/rss.xsl',
        // `<title>` field in output xml
        title: 'Tenexthop’s Blog',

        xmlns: {
            media: 'http://search.yahoo.com/mrss/',
        },

        // `<description>` field in output xml
        description: 'Un blog simple de ejemplo para aprender a trabajar con el framework Astro',
        // Pull in your project "site" from the endpoint context
        // https://docs.astro.build/en/reference/api-reference/#site
        site: site ?? '',

        // Array of `<item>`s in output xml
        // See "Generating items" section for examples using content collections and glob imports
        items: blogPosts.map(({ slug, data, body }) => ({
            title: data.title,
            description: data.description,
            pubDate: data.date,
            link: `/posts/${slug}`,

            content: sanitizeHtml(parser.render(body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
            }),

            customData: `<media:content
                type="image/${data.image.format === 'jpg' ? 'jpeg' : 'png'}"
                width="${data.image.width}"
                height="${data.image.height}"
                medium="image"
                url="${site + data.image.src}" />
            `,

        })),
        // (optional) inject custom xml
        customData: `<language>es-mx</language>`,
    })
}