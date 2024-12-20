

const day1 = [
    {name: 'Pembukaan', time: '08.00', description: 'Acara dimulai dengan pembukaan oleh MC.'},
    {name: 'Sambutan Ketua Pelaksana', time: '08.15', description: 'Sambutan dari ketua pelaksana pameran.'},
    {name: 'Sambutan Dekan', time: '08.30', description: 'Sambutan dari Dekan Fakultas Seni Rupa dan Desain.'},
    {name: 'Presentasi Proyek DKV 1', time: '09.00', description: 'Presentasi karya mahasiswa semester awal.'},
    {name: 'Diskusi Panel', time: '10.00', description: 'Diskusi bersama panelis tentang tren desain grafis.'},
    {name: 'Penutupan', time: '16.00', description: 'Hari pertama pameran ditutup dengan pengumuman kegiatan hari berikutnya.'}
];

const day2 = [
    {name: 'Pembukaan', time: '13.00', description: 'Hari kedua dimulai dengan pembukaan oleh MC.'},
    {name: 'Workshop Fotografi', time: '13.30', description: 'Workshop tentang teknik fotografi dalam desain.'},
    {name: 'Presentasi Proyek DKV 2', time: '14.30', description: 'Presentasi karya mahasiswa semester menengah.'},
    {name: 'Live Art Performance', time: '15.30', description: 'Pertunjukan seni langsung oleh mahasiswa.'},
    {name: 'Talkshow Alumni', time: '16.30', description: 'Talkshow dengan alumni sukses di industri kreatif.'},
    {name: 'Penutupan', time: '17.00', description: 'Hari kedua pameran ditutup dengan apresiasi karya.'}
];

const day3 = [
    {name: 'Pembukaan', time: '13.00', description: 'Hari terakhir dimulai dengan pembukaan oleh MC.'},
    {name: 'Pameran Karya Akhir', time: '13.30', description: 'Mahasiswa semester akhir memamerkan karya terbaik mereka.'},
    {name: 'Seminar Desain Masa Depan', time: '14.30', description: 'Seminar tentang tren desain masa depan.'},
    {name: 'Presentasi Proyek Kolaborasi', time: '15.30', description: 'Mahasiswa mempresentasikan proyek kolaborasi mereka.'},
    {name: 'Pengumuman Penghargaan', time: '16.30', description: 'Pengumuman pemenang penghargaan karya terbaik.'},
    {name: 'Penutupan', time: '17.00', description: 'Acara pameran ditutup dengan ucapan terima kasih dan harapan.'}
];



export default function Timeline (){
    return (
        <section className="overflow-clip md:w-full w-screen relative flex flex-col md:px-20 px-5 pt-40 md:pt-44 text-breakWhite mb-20">
            {/* day1 */}
            <div className="w-full mb-32">
                <div className="w-full relative md:mb-0 mb-10">
                    <div className="w-full -z-30 absolute -bottom-7 text-center font-extrabold bg-gradient-to-b from-lightRed to-background bg-clip-text text-transparent text-[100px]">DAY 1</div>
                    <div className="bg-gradient-to-t from-background to-transparent absolute h-14 bottom-2 -z-30 w-full"/>
                    <div className="w-full text-center z-20">EXHIBITION DAY 1</div>
                </div>
                <div className="w-full flex flex-col md:gap-0 gap-5">
                    {day1.map((items,index)=>(
                        <div key={index} className="w-full md:border-none md:bg-background md:bg-none bg-gradient-to-t from-background to-gray rounded-lg border border-breakWhite flex md:flex-row flex-col justify-end items-center py-2 md:py-5">
                            <div className="text-end flex justify-end items-end md:pr-5 font-bold text-lightRed text-[16px]">
                                {items.name}
                            </div>
                            <div className="text-end text-[24px] font-bold w-full md:w-[250px] md:pr-10 relative flex justify-center items-center">
                                <div className={`${items.name == 'Penutupan' && "md:hidden"} md:flex hidden absolute w-[1px] h-24 bg-breakWhite z-0 top-6`}/>
                                <div className="md:bg-background md:py-5 z-10 md:my-0 my-2">{items.time}</div>
                            </div>
                            <p className="md:w-2/5 w-full md:border-none border-t border-white/50 text-sm md:px-0 p-3 md:p-0 text-center md:text-start text-white/70 font-light md:text-white/100">
                                {items.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* EXHIBITION DAY 2 */}
            <div className="w-full mb-32">
                <div className="w-full relative md:mb-0 mb-10">
                    <div className="w-full -z-30 absolute -bottom-7 text-center font-extrabold bg-gradient-to-b from-lightRed to-background bg-clip-text text-transparent text-[100px]">DAY 2</div>
                    <div className="bg-gradient-to-t from-background to-transparent absolute h-14 bottom-2 -z-30 w-full"/>
                    <div className="w-full text-center z-20">EXHIBITION DAY 2</div>
                </div>
                <div className="w-full flex flex-col md:gap-0 gap-5">
                    {day2.map((items,index)=>(
                        <div key={index} className="w-full md:border-none md:bg-background md:bg-none bg-gradient-to-t from-background to-gray rounded-lg border border-breakWhite flex md:flex-row flex-col justify-end items-center py-2 md:py-5">
                            <div className="text-end flex justify-end items-end md:pr-5 font-bold text-lightRed text-[16px]">
                                {items.name}
                            </div>
                            <div className="text-end text-[24px] font-bold w-full md:w-[250px] md:pr-10 relative flex justify-center items-center">
                                <div className={`${items.name == 'Penutupan' && "md:hidden"} md:flex hidden absolute w-[1px] h-24 bg-breakWhite z-0 top-6`}/>
                                <div className="md:bg-background md:py-5 z-10 md:my-0 my-2">{items.time}</div>
                            </div>
                            <p className="md:w-2/5 w-full md:border-none border-t border-white/50 text-sm md:px-0 p-3 md:p-0 text-center md:text-start text-white/70 font-light md:text-white/100">
                                {items.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* EXHIBITION DAY 3 */}
            <div className="w-full mb-32">
                <div className="w-full relative md:mb-0 mb-10">
                    <div className="w-full -z-30 absolute -bottom-7 text-center font-extrabold bg-gradient-to-b from-lightRed to-background bg-clip-text text-transparent text-[100px]">DAY 3</div>
                    <div className="bg-gradient-to-t from-background to-transparent absolute h-14 bottom-2 -z-30 w-full"/>
                    <div className="w-full text-center z-20">EXHIBITION DAY 3</div>
                </div>
                <div className="w-full flex flex-col md:gap-0 gap-5">
                    {day3.map((items,index)=>(
                        <div key={index} className="w-full md:border-none md:bg-background md:bg-none bg-gradient-to-t from-background to-gray rounded-lg border border-breakWhite flex md:flex-row flex-col justify-end items-center py-2 md:py-5">
                            <div className="text-end flex justify-end items-end md:pr-5 font-bold text-lightRed text-[16px]">
                                {items.name}
                            </div>
                            <div className="text-end text-[24px] font-bold w-full md:w-[250px] md:pr-10 relative flex justify-center items-center">
                                <div className={`${items.name == 'Penutupan' && "md:hidden"} md:flex hidden absolute w-[1px] h-24 bg-breakWhite z-0 top-6`}/>
                                <div className="md:bg-background md:py-5 z-10 md:my-0 my-2">{items.time}</div>
                            </div>
                            <p className="md:w-2/5 w-full md:border-none border-t border-white/50 text-sm md:px-0 p-3 md:p-0 text-center md:text-start text-white/70 font-light md:text-white/100">
                                {items.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}