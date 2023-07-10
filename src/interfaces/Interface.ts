export interface Project {
    id_project?: number;
    name: string;
    label: string;
    type: string;
    journey: string;
    s3_image_key: string;
    s3_video_key: string;
    date: string;
    place?: string;
    credit?: string;
    is_highlight: number
}

export interface FeedType {
    id_feed?: number;
    name: string;
    resume: string;
    date: number;
    is_instagram: number;
    is_facebook: number;
    link_instagram?: string;
    link_facebook?: string;
    s3_image_key: string;
}

export interface PartnerType {
    id_partner: number,
    name: string;
    s3_image_key: string;
}