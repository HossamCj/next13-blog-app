import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "blogposts");

export function getSortedPostsData() {
    // Get file name under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" fromfile name to get id
        const id = fileName.replace(/\.md$/, "");

        // Read mardown files as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // User gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
        };

        // Combine the data with the id
        return blogPost;
    });

    // Sort posts by data
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
