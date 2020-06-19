import styled from 'styled-components';
import { device } from '../../breakpoints';

export const FooterWrapper = styled.footer`
  background-color: #272727;
  position: relative;
  @media ${device.mobileS} {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  @media ${device.tablet} {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;

  .footer-logo {
    display: block;
    height: 100%;
  }

  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
  .links {
    display: flex;
    a {
      color: #ffffff;
    }
    ul {
      columns: 2;
      @media ${device.mobileS} {
        display: flex;
        flex-direction: column;
        padding-top: 30px;
      }
      @media ${device.tablet} {
        display: block;
        padding-top: 0px;
      }
      li {
        a {
          transition: 0.5s all;
        }
        a:hover {
          color: #be6c2f;
          /* cursor: pointer; */
        }
        @media ${device.mobileS} {
          padding-bottom: 20px;
        }
        @media ${device.tablet} {
          padding-bottom: 30px;
        }
      }
    }
  }
  .phone {
    font-size: 36px;
    font-family: 'Rubik-Medium', sans-serif;
    @media ${device.mobileS} {
      display: none;
    }
    @media ${device.tablet} {
      display: block;
    }
  }
  .phone-mobile {
    display: none;
    @media ${device.mobileS} {
      display: block;
      padding-top: 20px;
      padding-bottom: 20px;
      position: absolute;
      top: 15px;
      right: 15px;
      img {
        width: 100%;
      }
      p {
        font-size: 10px;
      }
    }
    @media ${device.tablet} {
      display: none;
    }
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 20px;
  a {
    display: block;
    margin-right: 30px;
  }
  img {
    width: 47px;
  }
`;
