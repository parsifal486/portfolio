'use client';

import Image from 'next/image';
import { img } from '@/public/assets';
import { useTranslations } from 'next-intl';

export default function YjyjQRcodePage() {
    const t = useTranslations('qrcode');

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <div className="rounded-xl p-4">
                <Image
                    src={img.yjyjQRcode}
                    alt="WeChat QR Code"
                    width={300}
                    height={300}
                    className="rounded-xl"
                />
            </div>
            <div className="text-font-emphasize font-inter text-xl">{t('scanToTry')}</div>
        </div>
    );
}
