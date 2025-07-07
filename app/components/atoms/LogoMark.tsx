import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement> & {
    children: React.ReactNode;
}

export const LogoMark: React.FC<Props> = ({ children }) => (
    <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {children}
    </svg>
)