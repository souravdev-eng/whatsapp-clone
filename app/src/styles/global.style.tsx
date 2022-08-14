import styled from 'styled-components/native';
import {theme} from '../constant';

const {fonts_Family, fonts_Size, colors} = theme;

export const WhatsappText = styled.Text`
  font-size: ${fonts_Size.h2}px;
  font-family: ${fonts_Family.SourceSansPro_SemiBold};
  color: ${colors.green};
  margin-top: 10px;
`;

export const AppTextLight = styled.Text`
  font-size: ${fonts_Size.body}px;
  font-family: ${fonts_Family.SourceSansPro_Light};
  color: ${colors.black};
`;

export const AppText = styled.Text`
  font-size: ${fonts_Size.body}px;
  font-family: ${fonts_Family.SourceSansPro_Regular};
  color: ${colors.black};
`;

export const AppTextBold = styled.Text`
  font-size: ${fonts_Size.body}px;
  font-family: ${fonts_Family.SourceSansPro_Bold};
  color: ${colors.black};
`;

export const AppTextSemiBold = styled.Text`
  font-size: ${fonts_Size.body}px;
  font-family: ${fonts_Family.SourceSansPro_SemiBold};
  color: ${colors.black};
`;
