import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ShareLinkWrapper } from '../styled/Shared.styled';

const ShareLink = () => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin);
      setCopied(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      alert('Не удалось скопировать ссылку. Попробуйте еще раз.');
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ShareLinkWrapper onClick={handleCopy} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && handleCopy()}>
        <img
          src="/icons/share.svg"
          alt="share"
          width={15}
          height={15}
          style={{ opacity: 0.4 }}
          aria-hidden="true"
        />
        <p>поделиться ссылкой</p>
      </ShareLinkWrapper>
      {copied && <span style={{ marginLeft: 8, fontSize: '15px' }}>Скопировано!</span>}
    </div>
  );
};

export default React.memo(ShareLink);