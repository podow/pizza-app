import React from 'react';
import Link from 'next/link';

import { Container } from '../container';

import { FooterWrapper, FooterContent, SocialLinks } from './style';

const Footer: React.FC<{}> = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <Link href={{ pathname: '/' }}>
            <a className="footer-logo">
              <img src="/static/images/logo.png" alt="Footer logo" />
            </a>
          </Link>

          <div className="links">
            <ul>
              <li>
                <Link href={{ pathname: '/' }}>
                  <a>lorem</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/' }}>
                  <a>lorem</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/' }}>
                  <a>lorem</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/' }}>
                  <a>lorem</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/' }}>
                  <a>lorem</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/' }}>
                  <a>lorem</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/' }}>
                  <a>lorem</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/' }}>
                  <a>lorem</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <SocialLinks>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/static/images/icons/facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/static/images/icons/instagram.svg"
                    alt="Instagram"
                  />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/static/images/icons/youtube.svg" alt="Youtube" />
                </a>
              </li>
            </SocialLinks>
          </div>
        </FooterContent>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
