'use client';
import { useEffect, useState } from 'react';
import dbdata from '../../data/expense-data.json';

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
        width: `10rem`,
        height: `10rem`,
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
                    <div>
                        {/* Code to generate chart */}
                        <div
                            style={styles()}
                            className=' w-[10rem] h-[10rem] rounded-[20rem] flex items-center 
                            justify-center'
                        >
                            <div className='bg-[#FFF] w-[8rem] h-[8rem] rounded-[20rem]'></div>
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        {categories.map((categoryItem, index) => {
                            return <div key={index}>{categoryItem}</div>;
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}
