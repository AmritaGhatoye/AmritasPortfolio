'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const DarkVeilContent = dynamic(
  () => import('./DarkVeilContent'),
  {
    ssr: false,
    loading: () => <div className="darkveil-canvas" />
  }
);

type Props = {
  hueShift?: number;
  noiseIntensity?: number;
  scanlineIntensity?: number;
  speed?: number;
  scanlineFrequency?: number;
  warpAmount?: number;
  resolutionScale?: number;
};

export default function DarkVeil(props: Props) {
  return (
    <Suspense fallback= {< div className = "darkveil-canvas" />}>
      <DarkVeilContent { ...props } />
      </Suspense>
  );
}
