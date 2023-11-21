'use client';
import Chart from '@/components/Chart';
import { useEffect, useState } from 'react';

export default function Home() {
    const [data, setData] = useState([]);
    const navItems = ['1M', '6M', '1Y', 'all time'];
    const categories = [
        { name: 'Personal', color: `bg-[#4C49ED]` },
        { name: 'Shopping', color: `bg-[#9D9BF4]` },
        { name: 'Phone', color: `bg-[#4FD18B]` },
        { name: 'Other', color: `bg-[#141197]` },
    ];

    const getData = () => {
        fetch('expense-data.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((res) => {
                res.json().then((allData) => {
                    setData(allData);
                });
            })
            .catch((err) => {
                return err.message;
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <main
            className=' bg-[#430099] flex min-h-screen  flex-col items-center justify-between p-24 
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
                    {data.length > 0 && <Chart values={data[0]} />}

                    {/* Categories */}
                    <div className='flex gap-[1.37rem]'>
                        {categories.map((categoryItem, index) => {
                            return (
                                <div
                                    key={index}
                                    className='flex items-center gap-[0.81rem]'
                                >
                                    <span
                                        className={`w-[2.3125rem] h-[0.8125rem] ${categoryItem.color}
                                        rounded-[2.0625rem]`}
                                    ></span>
                                    <p
                                        className='text-[#938FA3] text-[1rem] font-[500] 
                                         tracking-[-0.02rem]'
                                    >
                                        {categoryItem.name}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}
