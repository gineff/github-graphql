// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ButtonPropsVariantOverrides } from '@mui/material/Button';

declare module '@mui/material/styles' {
  interface Mixins {
    centred: {
      display: string;
      flexDirection: string;
      justifyContent: string;
      alignItems: string;
    };
  }
}
