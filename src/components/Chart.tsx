import React, { useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Chart = ({ values }: { values: any }) => {
    const total =
        values.personal + values.shopping + values.phone + values.other;
    const intTotal = parseInt(total).toLocaleString();
    const decimalTotal = (total - parseInt(total)).toFixed(2).split('.')[1];

    // Calculate percentage value for css styling
    const otherPercentage = (values.other * 360) / total;
    const shoppingPercentage =
        otherPercentage + (values.shopping * 360) / total;
    const personalPercentage =
        shoppingPercentage + (values.personal * 360) / total;
    const phonePercentage = personalPercentage + (values.phone * 360) / total;

    const styles = () => ({
        width: `16.5rem`,
        height: `16.5rem`,
        background: `conic-gradient( 
            #141197 ${otherPercentage}deg,
            #9d9bf4 ${otherPercentage}deg ${shoppingPercentage}deg,
            #4c49ed ${shoppingPercentage}deg ${personalPercentage}deg,
            #4fd18b ${personalPercentage}deg ${phonePercentage}deg
    )`,
    });
    return (
        <div
            style={styles()}
            className=' rounded-[20rem] flex items-center justify-center mb-[2.94rem] rotate-180'
        >
            <div
                className='bg-[#FFF] w-[13.25rem] h-[13.25rem] rounded-[20rem]
                            flex items-center justify-center rotate-180'
            >
                <p className=' text-[#111] text-[2.5rem] font-[700] '>
                    ${intTotal}
                    <span
                        className={`${inter.className} font-[800] text-[#AFADFE] text-[1.1875rem]`}
                    >
                        .{decimalTotal}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Chart;
