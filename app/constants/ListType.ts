export const LIST_TYPE = {
    UL: "ul",
    OL: "ol",
    DL: "dl"
} as const;

export type ListType = (typeof LIST_TYPE)[keyof typeof LIST_TYPE];