import { HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode
    href: string;
    className?: string;
}


export const ExternalLink: React.FC<Props> = ({ 
    children, 
    href, 
    className = '', 
    ...rest
}) => (
    <a href={href} className={className} {...rest}>
        {children}
    </a>
)

