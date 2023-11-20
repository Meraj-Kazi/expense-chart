export default function Home() {
    const navItems = ['1M', '6M', '1Y', 'all time'];
    const categories = ['Personal', 'Shopping', 'Phone', 'Other'];
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
                        flex w-[18.1875rem] h-[3.5rem] items-center justify-center'
                    >
                        {navItems.map((item, index) => {
                            return <div key={index}>{item}</div>;
                        })}
                    </div>

                    {/* Chart */}
                    <div>{/* Code to generate chart */}</div>

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
