'use client';
import { useEffect, useState } from 'react';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const [data, setData] = useState([]);
    const navItems = ['1M', '6M', '1Y', 'all time'];
    const categories = ['Personal', 'Shopping', 'Phone', 'Other'];

    const getData = () => {
        fetch('expense-data.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }).then((res) => {
            res.json().then((allData) => {
                setData(allData);
            });
        });
    };

    useEffect(() => {
        getData();
    }, []);

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
        <main
            className=' bg-[#430099] flex min-h-screen flex-col items-center justify-between p-24 
            font-helvetica_neue '
        >
            <div className='flex flex-col items-center justify-between  '>
                {/* Title */}
                <h1 className='text-[#FFF] text-[2.625rem] font-[700] mb-[2.13rem]'>
                    Expense Chart
                </h1>

                {/* Card */}
                <div
                    className=' bg-[#FFF] w-[35.06rem] h-[34.06rem] rounded-[2.5rem] flex flex-col
                    items-center'
                >
                    {/* Card Title */}
                    <p className='text-[#1F1F23] text-[1.5rem] font-[700] mb-[2.62rem] mt-[2rem]'>
                        Expenses
                    </p>

                    {/* Filter Nav */}
                    <div
                        className='bg-[#F5F6FA] rounded-[1.875rem] gap-[0.75rem] 
                        flex w-[18.1875rem] h-[3.5rem] items-center justify-center 
                        mb-[1.58rem]'
                    >
                        {navItems.map((item, index) => {
                            return (
                                <div
                                    className='text-[#373B47] text-[0.75rem] font-[400] leading-[1rem]
                                    uppercase px-[0.5rem] py-[0.62rem]'
                                    key={index}
                                >
                                    {item}
                                </div>
                            );
                        })}
                    </div>

                    {/* Chart */}
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

                    {/* Categories */}
                    <div className='flex gap-[1.37rem]'>
                        {categories.map((categoryItem, index) => {
                            return (
                                <div key={index} className='flex gap-[0.81rem]'>
                                    <span> color </span>
                                    <p>{categoryItem}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}
