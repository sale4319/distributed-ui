import React from "react";

import { Header } from "../header";
import styles from "./Page.module.css";

type User = {
  name: string;
};

interface PageProps {
  children?: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
  const [user, setUser] = React.useState<User>();

  return (
    <>
      <article>
        <Header
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
