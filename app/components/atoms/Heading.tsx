import React, { JSX } from "react"
import { HEADINNG_LEVEL, HeadingLevel } from "@constants";

type Props = {
    level?: HeadingLevel,
    children: React.ReactNode,
    className?: string
}

export const Heading: React.FC<Props> = ({ level = HEADINNG_LEVEL.H1, children, className = '', ...rest }) => {

    const Tag = `${level}` as keyof JSX.IntrinsicElements;

    return <Tag className={className} {...rest}>{children}</Tag>
}