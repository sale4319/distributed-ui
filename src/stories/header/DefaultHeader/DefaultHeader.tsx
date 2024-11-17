import React from "react";
import { DefaultButton } from "../../buttons/DefaultButton";
import acme from "../../assets/acme.svg";

import styles from "./DefaultHeader.module.css";

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const DefaultHeader = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <header>
    <div className={styles.storybookHeader}>
      <div>
        <img src={acme} alt="acme-logo" />
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className={styles.welcome}>
              Welcome, <b>{user.name}</b>!
            </span>
            <DefaultButton size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <DefaultButton size="small" onClick={onLogin} label="Log in" />
            <DefaultButton
              primary
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
            />
          </>
        )}
      </div>
    </div>
  </header>
);
