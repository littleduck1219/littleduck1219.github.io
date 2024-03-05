import React from 'react';
import { iconComponents } from './IconComponents';
import * as style from './style.LinkButton';

interface LinkButtonProps {
  href: string;
  iconName: string;
  onClick?: React.MouseEventHandler;
}

export default function LinkButton({
  href,
  iconName,
  onClick,
}: LinkButtonProps) {
  const Icon = iconComponents[iconName];
  return (
    <style.StyledLinkButton href={href} onClick={onClick}>
      <Icon size={20} />
    </style.StyledLinkButton>
  );
}
