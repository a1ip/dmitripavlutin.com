import Link from 'gatsby-link';
import * as React from 'react';

import { TO_ABOUT, TO_ALL_POSTS, TO_INDEX } from 'routes/path';
import styles from './index.module.scss';

const year = new Date().getFullYear();

interface FooterProps {
  authorInfo: AuthorInfo;
}

export default function LayoutFooter({ authorInfo: { profiles, name } }: FooterProps) {
  return (
    <footer>
      <div className={styles.footerContent}>
        <div className={styles.copyright}>
          © {year} {name}
        </div>
        <div className={styles.links}>
          <div className={styles.footerNavigation}>
            <Link to={TO_INDEX()}>Home</Link>
            <Link to={TO_ALL_POSTS()}>All posts</Link>
            <Link to={TO_ABOUT()}>About</Link>
          </div>
          <div className={styles.follow}>
            <a href={profiles.twitter} title={`${name}'s Twitter profile`}>
              <img alt={`${name}'s Twitter profile`} src="/twitter.svg" />
            </a>
            <a href={profiles.github} title={`${name}'s Github profile`}>
              <img alt={`${name}'s Github profile`} src="/github.svg" />
            </a>
            <a href={profiles.stackoverflow} title={`${name}'s Stackoverflow profile`}>
              <img alt={`${name}'s Stackoverflow profile`} src="/stackoverflow.svg" />
            </a>
            <a href={profiles.linkedin} title={`${name}'s LinkedIn profile`}>
              <img alt={`${name}'s LinkedIn profile`} src="/linkedin.svg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
