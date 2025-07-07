interface Props {
    children: React.ReactNode;
    className?: string;
}

export const BodyText: React.FC<Props> = ({ children, className = '' }) => (
    <p className={className}>
        {children}
    </p>
)