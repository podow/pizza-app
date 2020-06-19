import React from 'react';
import Link from 'next/link';

import {
  SubHeaderWrapper,
  WithDropDown,
  WithDropDownContent,
  WithDropDownLink
} from './style';

import { Container } from '../container';

const SubHeader: React.FC = () => (
  <SubHeaderWrapper>
    <Container>
      <ul className="sub-header-menu">
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
        <WithDropDown>
          <WithDropDownLink>lorem</WithDropDownLink>
          <WithDropDownContent>
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
          </WithDropDownContent>
        </WithDropDown>
        <WithDropDown>
          <WithDropDownLink>lorem</WithDropDownLink>
          <WithDropDownContent>
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
          </WithDropDownContent>
        </WithDropDown>
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
    </Container>
  </SubHeaderWrapper>
);

export default SubHeader;
