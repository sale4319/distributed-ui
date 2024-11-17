import React from "react";

import { DefaultHeader } from "../../header/DefaultHeader";
import styles from "./DefaultPage.module.css";

type User = {
  name: string;
};

interface PageProps {
  children?: React.ReactNode;
}

export const DefaultPage = ({ children }: PageProps) => {
  const [user, setUser] = React.useState<User>();

  return (
    <>
      <article>
        <DefaultHeader
          user={user}
          onLogin={() => setUser({ name: "Jane Doe" })}
          onLogout={() => setUser(undefined)}
          onCreateAccount={() => setUser({ name: "Jane Doe" })}
        />
        <section className={styles.storybookPage}>{children}</section>
      </article>
    </>
  );
};
