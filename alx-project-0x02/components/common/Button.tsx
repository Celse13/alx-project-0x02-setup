import { ButtonProps } from '@/interfaces';

const Button = ({ size, shape, children, onClick }: ButtonProps) => {
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-600 transition-colors`}
    >
      {children}
    </button>
  );
};

export default Button;