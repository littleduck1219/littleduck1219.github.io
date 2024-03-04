import React from 'react';
import { iconComponents } from './IconComponents';
import * as style from './style.LinkButton';

interface LinkButtonProps {
  to: string;
  iconName: string;
  onClick?: React.MouseEventHandler;
}

export default function LinkButton({ to, iconName, onClick }: LinkButtonProps) {
  const Icon = iconComponents[iconName];
  return (
    <style.StyledLinkButton to={to} onClick={onClick}>
      <Icon size={20} />
    </style.StyledLinkButton>
  );
}
