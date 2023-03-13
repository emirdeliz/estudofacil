import React from 'react';
import { ColorsProps } from '@/theme';
import * as S from './Icon.style';

export interface IconOptions {
  alert?: boolean;
  arrowBack?: boolean;
  bank?: boolean;
  calendar?: boolean;
  close?: boolean;
  check?: boolean;
  down?: boolean;
  download?: boolean;
  downOpen?: boolean;
  email?: boolean;
  leftOpen?: boolean;
  maintenance?: boolean;
  pdfDouble?: boolean;
  power?: boolean;
  rightOpen?: boolean;
  search?: boolean;
  settingsOutline?: boolean;
  tooltipMessage?: boolean;
  up?: boolean;
  upload?: boolean;
  upOpen?: boolean;
}

export interface IconProps extends IconOptions, ColorsProps {
  circled?: boolean;
  bordered?: boolean;
  bgColored?: boolean;
  xs?: boolean;
  sm?: boolean;
  nm?: boolean;
  xxxLg?: boolean;
  rotate90?: boolean;
  transactions?: boolean;
  barcode?: boolean;
  bgColor?: string;
  infoCircle?: boolean;
}

const getIcon = ({
  alert,
  arrowBack,
  bank,
  barcode,
  calendar,
  close,
  check,
  down,
  download,
  downOpen,
  email,
  maintenance,
  power,
  leftOpen,
  infoCircle,
  pdfDouble,
  rightOpen,
  search,
  settingsOutline,
  tooltipMessage,
  upload,
  upOpen,
  up,
  transactions,
}: IconProps) => {
  switch (true) {
    case alert:
      return 'alert';
    case arrowBack:
      return 'arrow-back';
    case bank:
      return 'bank';
    case barcode:
      return 'barcode';
    case calendar:
      return 'calendar';
    case close:
      return 'close';
    case check:
      return 'check';
    case down:
      return 'down';
    case download:
      return 'download';
    case downOpen:
      return 'down-open';
    case email:
      return 'email';
    case leftOpen:
      return 'left-open';
    case infoCircle:
      return 'info-circle';
    case maintenance:
      return 'maintenance';
    case pdfDouble:
      return 'pdf-double';
    case power:
      return 'power';
    case rightOpen:
      return 'right-open';
    case search:
      return 'search';
    case settingsOutline:
      return 'settings-outline';
    case tooltipMessage:
      return 'tooltip-message';
    case transactions:
      return 'transactions';
    case upload:
      return 'upload';
    case up:
      return 'up';
    case upOpen:
      return 'up-open';
  }
  return 'power';
};

export const Icon = (props: IconProps) => {
  const icon = getIcon(props);
  return <S.Icon data-testid="icon" className={`icon-${icon}`} {...props} />;
};

Icon.Alert = (props: IconProps) => <Icon {...props} alert />;
Icon.ArrowBack = (props: IconProps) => <Icon {...props} arrowBack />;
Icon.Bank = (props: IconProps) => <Icon {...props} bank />;
Icon.Barcode = (props: IconProps) => <Icon {...props} barcode />;
Icon.Calendar = (props: IconProps) => <Icon {...props} calendar />;
Icon.Close = (props: IconProps) => <Icon {...props} close />;
Icon.Check = (props: IconProps) => <Icon {...props} check />;
Icon.Down = (props: IconProps) => <Icon {...props} upOpen />;
Icon.Download = (props: IconProps) => <Icon {...props} download />;
Icon.DownOpen = (props: IconProps) => <Icon {...props} downOpen />;
Icon.Email = (props: IconProps) => <Icon {...props} email />;
Icon.LeftOpen = (props: IconProps) => <Icon {...props} leftOpen />;
Icon.InfoCircle = (props: IconProps) => <Icon {...props} infoCircle />;
Icon.Maintenance = (props: IconProps) => <Icon {...props} maintenance />;
Icon.PdfDouble = (props: IconProps) => <Icon {...props} pdfDouble />;
Icon.Power = (props: IconProps) => <Icon {...props} power />;
Icon.RightOpen = (props: IconProps) => <Icon {...props} rightOpen />;
Icon.Search = (props: IconProps) => <Icon {...props} search />;
Icon.Settings = (props: IconProps) => <Icon {...props} settingsOutline />;
Icon.TooltipMessage = (props: IconProps) => <Icon {...props} tooltipMessage />;
Icon.Upload = (props: IconProps) => <Icon {...props} upload />;
Icon.Up = (props: IconProps) => <Icon {...props} upload />;
Icon.UpOpen = (props: IconProps) => <Icon {...props} upOpen />;
Icon.Transactions = (props: IconProps) => <Icon {...props} transactions />;
