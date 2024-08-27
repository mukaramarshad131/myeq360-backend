import { App } from 'antd';
import { useState } from 'react';

type CopiedValue = string | null;

type CopyFn = (text: string) => Promise<boolean>;

type ReturnType = {
  copyFn: CopyFn;
  copiedText: CopiedValue;
};

export function useCopyToClipboard(): ReturnType {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);
  const { notification } = App.useApp();

  const copyFn: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      notification.success({
        message: 'Copied!',
      });
      return true;
    } catch (error) {
      setCopiedText(null);
      return false;
    }
  };

  return { copiedText, copyFn };
}
