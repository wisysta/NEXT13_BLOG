import { DUMMY_POSTS } from "@/DUMMY_DATA";
import CTACard from "@/components/elements/cta-card";
import PaddingContainer from "@/components/layout/padding-container";
import PostCard from "@/components/post/post-card";
import PostList from "@/components/post/post-list";
import directus from "@/lib/directus";
import { notFound } from "next/navigation";

export default async function Home() {
    const getAllPosts = async () => {
        try {
            const posts = await directus.items("post").readByQuery({
                fields: [
                    "*",
                    "author.id",
                    "author.first_name",
                    "author.last_name",
                    "category.id",
                    "category.title",
                ],
            });

            return posts.data;
        } catch (error) {
            console.log(error);
            throw new Error("error data fetched");
        }
    };

    const posts = await getAllPosts();

    if (!posts) {
        notFound();
    }

    return (
        <PaddingContainer>
            <main className="h-auto space-y-10">
                <PostCard post={posts[0]} />
                <PostList
                    layout="vertical"
                    posts={posts.filter((_, index) => index > 0 && index < 3)}
                />
                <CTACard />
                <PostCard post={posts[3]} reverse={true} />
                <PostList
                    layout="vertical"
                    posts={posts.filter((_, index) => index > 3 && index < 6)}
                />
            </main>
        </PaddingContainer>
    );
}
