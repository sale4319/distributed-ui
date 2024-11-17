import React from 'react';

interface ButtonProps$1 {
    label: string;
    action: () => void;
}
declare const Button$1: ({ label, action }: ButtonProps$1) => React.JSX.Element;

interface ButtonProps {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** How large should the button be? */
    size?: "small" | "medium" | "large";
    /** Button contents */
    label: string;
    /** Optional click handler */
    onClick?: () => void;
}
/** Primary UI component for user interaction */
declare function Button({ primary, size, backgroundColor, label, ...props }: ButtonProps): React.JSX.Element;

type User = {
    name: string;
};
interface HeaderProps {
    user?: User;
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccount?: () => void;
}
declare const Header: ({ user, onLogin, onLogout, onCreateAccount, }: HeaderProps) => React.JSX.Element;

interface PageProps {
    children?: React.ReactNode;
}
declare const Page: ({ children }: PageProps) => React.JSX.Element;

export { Button$1 as Button, Header, Page, Button as StoryButton };
