'use client';

import React from 'react';
import Countdown from 'react-countdown';

// Set the target date to 2 days from now
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 2);

// Counter for each time unit
const TimeUnit = ({ value, unit }: { value: string, unit: string }) => {
  // Split the value into digits to display individually
  const digits = value.toString().padStart(2, '0').split('');

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-1">
        {digits.map((digit, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-10 h-14 bg-zinc-800 rounded border border-zinc-700 relative overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{digit}</span>
            </div>
            <div className="w-full h-px bg-zinc-700 absolute top-1/2"></div>
          </div>
        ))}
      </div>
      <span className="text-xs mt-1 text-zinc-400">{unit}</span>
    </div>
  );
};

// Renderer for the countdown
const renderer = ({ days, hours, minutes, seconds }: any) => {
  return (
    <div className="flex justify-center space-x-4 py-2">
      <TimeUnit value={days.toString()} unit="Días" />
      <TimeUnit value={hours.toString()} unit="Horas" />
      <TimeUnit value={minutes.toString()} unit="Minutos" />
      <TimeUnit value={seconds.toString()} unit="Segundos" />
    </div>
  );
};

export const CountdownTimer = () => {
  return (
    <div className="w-full flex justify-center">
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};
