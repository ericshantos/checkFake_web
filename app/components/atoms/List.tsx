import { ListType, LIST_TYPE } from "@constants";
import { JSX } from "react";

interface Props {
    children: React.ReactNode;
    as?: ListType;
    className?: string;
}

export const List: React.FC<Props> = ({ 
    children, 
    as = LIST_TYPE.UL, 
    className = '',
    ...rest
}) => {

    const Tag = `${as}` as keyof JSX.IntrinsicElements;

    return <Tag className={className} {...rest}>{children}</Tag>
}