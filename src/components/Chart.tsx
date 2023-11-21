import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Chart = () => {
    const styles = () => ({
        width: `16.5rem`,
        height: `16.5rem`,
        background: `conic-gradient( #9d9bf4 60deg,
        #4c49ed 60deg 150deg,
        #4fd18b 150deg 200deg,
        #141197 200deg 360deg
    )`,
    });
    return (
        <div
            style={styles()}
            className=' rounded-[20rem] flex items-center justify-center mb-[2.94rem]'
        >
            <div
                className='bg-[#FFF] w-[13.25rem] h-[13.25rem] rounded-[20rem]
                            flex items-center justify-center'
            >
                <p className=' text-[#111] text-[2.5rem] font-[700]'>
                    $ 5,485
                    <span
                        className={`${inter.className} font-[800] text-[#AFADFE] text-[1.1875rem]`}
                    >
                        .00
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Chart;
