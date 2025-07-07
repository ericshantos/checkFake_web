import { Block, Heading, BodyText } from "../atoms";
import { HEADINNG_LEVEL } from "@constants";

interface ItemProps {
    children: React.ReactNode;
    title: string;
    classText?: string;
    classHeading?: string;
    className?: string;
}

export const CreditsItem: React.FC<ItemProps> = ({ 
    children, 
    title, 
    classHeading = "text-lg font-medium text-gray-900", 
    classText = "mt-1 text-gray-600",
    className = ''
}) => (
    <Block className={className}>
        <Heading level={HEADINNG_LEVEL.H3} className={classHeading}>{title}</Heading>
        <BodyText className={classText}>{children}</BodyText>
    </Block>
)