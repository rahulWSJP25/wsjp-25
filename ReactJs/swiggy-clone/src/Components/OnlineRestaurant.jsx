import React from 'react';
import Container from './Container';

export default function OnlineRestaurant() {
    const imageCollections = [
        "e0839ff574213e6f35b3899ebf1fc597.jpeg",
        "f58obho1lhwgkx1spsib.jpeg",
        "f01666ac73626461d7455d9c24005cd4.jpeg",
        "fhfxyzgefeqfujyygxl6.jpeg",
        "gc6wtm41htv3j9qxinjl.jpeg",
        "gkl6tlinwduika8knzdb.jpeg",
        "gmrkxnqwas1aqclkdeei.jpeg",
        "gxep2ec9b9li5ejnqbk0.jpeg",
        "i3kgdqqrmcqqvbska88g.jpeg",
        "igynbxeggu4dexnrlxxd.jpeg",
        "imkwqogwe0v3mq18j8am.jpeg",
        "jhskcgxnvo5shdlajyfv.jpeg",
        "jopdgt9qeojd26rn0atj.jpeg",
        "kuoie9gfgkequslotzrr.jpeg",
        "l8nk3hwqji6sjqzzmz9w.jpeg",
        "mwxhhhmz9gdap5zrcojj.jpeg",
        "nqonyzcb1qbrphpoy49y.jpeg",
        "ognqaol6oyuyo5cls4r3.jpeg",
        "oyqnalvxz57bq0a88lfv.jpeg",
        "pyvwsgydunlgtcw7k3fw.jpeg",
        "s0yrbbamifu7ilbmam8a.jpeg",
        "u4o3qt6bbtqrzdvzz4kp.jpeg",
        "ube3t21gqmn0clnsp2h4.jpeg",
        "vhjrxtatkpnufllaxj59.jpeg",
        "xwji4tweqhyifzz3qi5y.jpeg",
        "y8xhvzf61t0zatbefstk.jpeg",
        "zbyytv7xsvhxeqqhes7n.jpeg",
        "zhjtcoelnlo5gpv99glf.jpeg",
        "2b4f62d606d1b2bfba9ba9e5386fabb7.jpeg",
        "0e5afac5bef81cd2bde8edb824939c40.jpeg",
        "falahaar.avif",
        "36.avif",
        "37.avif",
        "38.avif",
        "39.avif",
        "40.avif",
        "41.avif",
        "42.avif",
        "43.avif",
        "44.avif",
        "45.avif",
        "46.avif",
        "47.avif",
        "48.avif",
        "49.avif",
        "50.avif",
        "51.avif",
        "52.avif",


    ]
    return (
        <Container>
            <div className='font-bold text-3xl mt-4'>Restaurants with online food delivery in Jaipur</div>
            <div className='mt-7'>
                <div className='flex justify-between flex-wrap gap-3'>
                    {
                        imageCollections.map(
                            (IMG, index) => {
                                return <div key={index} className='w-[273px] hover:scale-[1.1]'>
                                    <img src={`images/${IMG}`} className='w-full rounded-lg h-[182px]' alt="" />
                                    <div className='absolute top-[145px] left-[30px] text-white'>
                                        <div className='font-bold text-3xl text-[22px]'>20% OFF UPTO ₹50</div>
                                    </div>
                                    <div className='mt-4'>
                                        <div className='font-bold'>Domino's Pizza</div>
                                        <div className='flex items-center gap-2'>
                                            <div>
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    role="img"
                                                    aria-hidden="true"
                                                    strokecolor="rgba(2, 6, 12, 0.92)"
                                                    fillcolor="rgba(2, 6, 12, 0.92)"
                                                >
                                                    <circle
                                                        cx={10}
                                                        cy={10}
                                                        r={9}
                                                        fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                                                    />
                                                    <path
                                                        d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                                                        fill="white"
                                                    />
                                                    <defs>
                                                        <linearGradient
                                                            id="StoreRating20_svg__paint0_linear_32982_71567"
                                                            x1={10}
                                                            y1={1}
                                                            x2={10}
                                                            y2={19}
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#21973B" />
                                                            <stop offset={1} stopColor="#128540" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>

                                            </div>
                                            <div className='text-sm font-bold'>4.2 • 35 mins</div>
                                        </div>
                                        <div className='text-sm font-thin'>
                                            Pizzas, Italian, Pastas, Desserts
                                            <br />
                                            Jhotwara
                                        </div>
                                    </div>
                                </div>
                            }
                        )
                    }
                </div>

            </div>

        </Container>

    )
}
