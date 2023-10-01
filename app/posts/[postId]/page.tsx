import Link from "next/link";

import getFormattedDate from "@/lib/getFormattedDate";
import {getSortedPostsData, getPostData} from "@/lib/posts_lib";
import {notFound} from "next/navigation";

export function generateMetadata({params}: {params: {postId: string}}) {
    const posts = getSortedPostsData(); // Deduped
    const {postId} = params;

    const post = posts.find((post) => post.id === postId);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
    };
}

export default async function Post({params}: {params: {postId: string}}) {
    const posts = getSortedPostsData(); // Deduped
    const {postId} = params;

    if (!posts.find((post) => post.id === postId)) {
        return notFound();
    }

    const {title, date, contentHTML} = await getPostData(postId);
    const formattedDate = getFormattedDate(date);

    return (
        <main className="px-6 prose prose-xl prose-slate prose-invert mx-auto">
            <h2 className="text-3xl mt-4 mb-0">{title}</h2>
            <p className="mt-0">{formattedDate}</p>
            <article>
                <section dangerouslySetInnerHTML={{__html: contentHTML}} />

                <p>
                    <Link href="/">Back to home</Link>
                </p>
            </article>
        </main>
    );
}
