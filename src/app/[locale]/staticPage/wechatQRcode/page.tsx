import Image from 'next/image';
import { img } from '@/public/assets';

export default function WechatQRcodePage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-xl p-4">
        <Image
          src={img.wechatQRcode}
          alt="WeChat QR Code"
          width={300}
          height={300}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
