import { ExternalLink, List } from "@components/atoms";

interface Props {
    className?: string;
}

interface ItemProps {
    href: string;
    content: string;
}

const navItem: ItemProps[] = [{
    href: process.env.NEXT_PUBLIC_GITHUB_LINK as string,
    content: "GitHub"
}]

export const NavBar: React.FC<Props> = ({ className = '' }) => (
    <nav className={className}>
        <List className="flex flex-col gap-10">
            {navItem.map(({ href, content }, index) => (
                <li key={index}>
                    <ExternalLink href={href}>
                        {content}
                    </ExternalLink>
                </li>
            ))}
        </List>
    </nav>
)