export type Filters = {
    name : string;
}

export type Contact = {
    id: string;
    birth_date : string;
    cellphone_number : string;
    created_at: Date;
    description: string;
    job : string;
    name : string;
    profile_photo: string;
    average_response_time: string;
    email: string;
}

export type createContactType = {
    birth_date : string;
    cellphone_number : string;
    description: string;
    job : string;
    name : string;
    profile_photo: string;
    average_response_time: string;
    email: string;
}

export type comment = {
    id: string;
    date: Date;
    name: string;
    content: string;
}

export type createComment = {
    name: string;
    content: string;
}