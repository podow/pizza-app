import React, { memo, useState } from 'react';

import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton
} from 'react-share';

import {
  ShareBlock,
  ShareBlockTitle,
  ShareBlockIcons,
  ShareBlockCopy
} from './style';

const Share: React.FC<{}> = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const getPageURL = () => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }

    return '';
  };

  const copyLink = e => {
    e.preventDefault();
    navigator.clipboard
      .writeText(document.location.href)
      .then(() => {
        setCopied(true);
      })
      .catch(e => console.error(e));
  };

  return (
    <ShareBlock>
      <ShareBlockTitle>Поделитесь полезной информацией</ShareBlockTitle>
      <ShareBlockIcons>
        <ShareBlockCopy onClick={copyLink}>
          {!copied && <p>Скопировать URL</p>}
          {copied && <p>Скопировано!</p>}
        </ShareBlockCopy>
        <FacebookShareButton url={getPageURL()}>
          <a href="#">
            <img src="/static/images/icons/facebook-share.svg" alt="Facebook" />
          </a>
        </FacebookShareButton>
        <TwitterShareButton url={getPageURL()}>
          <a href="#">
            <img src="/static/images/icons/twitter-share.svg" alt="Twitter" />
          </a>
        </TwitterShareButton>
        <TelegramShareButton url={getPageURL()}>
          <a href="#">
            <img src="/static/images/icons/telegram-share.svg" alt="Telegram" />
          </a>
        </TelegramShareButton>
      </ShareBlockIcons>
    </ShareBlock>
  );
};

export default memo(Share);
