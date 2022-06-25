export interface ListItem {
    id: number;
    title: string;
    image: string;
    url: string;
}

export interface ListItemDto {
    stories: {
        id: number;
        title: string;
        images: string[];
        url: string;
    }[],
    top_stories: ListItem[];
}