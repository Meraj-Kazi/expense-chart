export default function Home() {
    const navItems = ['1M', '6M', '1Y', 'all time'];
    const categories = ['Personal', 'Shopping', 'Phone', 'Other'];
    return (
        <main className=' bg-[#430099] flex min-h-screen flex-col items-center justify-between p-24'>
            <div className='flex flex-col items-center justify-between  '>
                {/* Title */}
                <h1>Expense Chart</h1>

                {/* Card */}
                <div className=' bg-[#FFF]'>
                    {/* Card Title */}
                    <p>Expenses</p>

                    {/* Filter Nav */}
                    <div>
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
