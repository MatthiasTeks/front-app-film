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