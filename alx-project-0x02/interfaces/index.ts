export interface CardProps {
    title: string;
    content: string;
    children?: React.ReactNode;
  }
  
  export interface ButtonProps {
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
  }
  
  export interface PostProps {
    id?: number;
    title: string;
    content: string;
    userId?: number;
  }
  
  export interface UserProps {
    id: number;
    name: string;
    email: string;
    address: {
      street: string;
      city: string;
      zipcode: string;
    };
  }