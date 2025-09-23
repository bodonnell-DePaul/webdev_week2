export interface GreetingProps {
  name: string;        // Required: component MUST receive a name
  age?: number;        // Optional: the ? means this prop is optional
  isVip?: boolean;     // Optional: defaults to false if not provided
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

//export default User {id=001,name='brian', email='bodonne3@depaul.edu' }

export interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
  onDelete?: (userId: number) => void;
  showActions?: boolean;
}

