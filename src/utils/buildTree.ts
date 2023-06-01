import type { CollectionEntry } from "astro:content";

export interface TreeNode {
    label: string;
    slug: string;
    children?: TreeNode[];
}

export function buildTree(posts: CollectionEntry<"wiki">[]): TreeNode[] {
    const tree: TreeNode[] = [];

    // Helper function to recursively build the tree
    function addToTree(
        post: CollectionEntry<"wiki">,
        slugParts: string[],
        parent: TreeNode | null
    ): void {
        const currentSlug = slugParts.shift();
        const slugPath = parent ? `${parent.slug}/${currentSlug}` : currentSlug;
        const currentNode = parent
            ? parent.children?.find((node) => node.slug === slugPath)
            : tree.find((node) => node.slug === slugPath);

        if (currentNode) {
            addToTree(post, slugParts, currentNode);
        } else {
            const newNode: TreeNode = {
                label: post.data.title,
                slug: slugPath!,
            };

            if (parent) {
                parent.children = parent.children || [];
                parent.children.push(newNode);
            } else {
                tree.push(newNode);
            }

            if (slugParts.length > 0) {
                addToTree(post, slugParts, newNode);
            }
        }
    }

    for (const post of posts) {
        const slugParts = post.slug.split("/");
        addToTree(post, slugParts, null);
    }

    return tree;
}
