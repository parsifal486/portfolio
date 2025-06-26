import Image from 'next/image';
import { img } from '@/public/assets';
export const WechatQRcode = () => {
  return (
    <div>
      <Image src={img.wechatQRcode} alt="wechatQRcode" />
    </div>
  );
};
