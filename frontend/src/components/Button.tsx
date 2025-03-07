interface ButtonProps extends React.PropsWithChildren {
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
}

export const Button = ({ onClick, disabled, loading, children }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className="relative py-2 px-3 rounded-lg font-medium text-sm
                     bg-gradient-to-tr from-blue-900 to-emerald-500
                     shadow-[0_0_12px_#0ea5e9] 
                     hover:opacity-90 transition-opacity
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <div className="absolute inset-0">
                <div className="border border-white/20 absolute inset-0 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="border border-white/40 absolute inset-0 rounded-lg [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute rounded-lg inset-0 shadow-[0_0_10px_rgba(14,165,233,0.7)_inset]"></div>
            </div>
            <span>{loading ? 'Loading...' : children}</span>
        </button>
    );
};