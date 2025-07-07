interface Props {
    children: React.ReactNode;
    className?: string;
}

export const Badge: React.FC<Props> = ({ children, className = '', ...rest }) => (
    <span className={className} {...rest}>
        {children}
    </span>
)