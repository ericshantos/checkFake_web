interface TabProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  className?: string;
}

export const TabButton: React.FC<TabProps> = ({ 
  children, 
  active, 
  onClick,
  className = '' 
}) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 text-sm font-medium whitespace-nowrap ${active ? 
      'text-blue-600 border-b-2 border-blue-600' : 
      'text-gray-500 hover:text-gray-700'} ${className}`}
  >
    {children}
  </button>
);