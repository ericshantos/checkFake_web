interface TabProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

export const TabButton: React.FC<TabProps> = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 font-medium ${active ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
  >
    {children}
  </button>
);
