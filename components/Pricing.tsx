import React, { useState } from 'react';
import styles from '../styles/Pricing.module.scss'
import { FaCheck } from 'react-icons/fa'


export interface Plans{
    
        monthly:[
            {
                description:string,
                id:number,
                mostPopular:boolean,
                name:string,
                perks:string[]
            }
        ],
        yearly:string
    
}

type Props={
    // plans:Plans
    plans:Plans
}



function Pricing({plans}:Props) {

    const [newObject, setNewObject] = useState<Plans>({
        
        monthly:[
            {
                description:"Hello",
                id:1,
                mostPopular:true,
                name:"Posi",
                perks:[
                    "Hello"
                ]
            }
        ],
        yearly:""
    
    })
    
    
    const [activeBtn, setActiveBtn] = useState('monthly')
    console.log(plans);
    
    return (
        <section className={styles.pricingSection}>
            
            
            <div className='container'>
                <div className={styles.content}>

                    <div className={styles.headerSection}>
                        <h3>Simple, transparent pricing</h3>

                        <p>No contracts. No surprise fees.</p>
                        <div className={styles.buttonContainer}>
                            <button className={`${activeBtn === 'monthly' ? styles.active : ''}`} onClick={() => setActiveBtn('monthly')}>MONTHLY</button>
                            <button className={`${activeBtn === 'yearly' ? styles.active : ''}`} onClick={() => setActiveBtn('yearly')}>YEARLY</button>
                        </div>
                    </div>
                    <div className={styles.cardSection}>
                        <div className={styles.card}>
                            {/* <span className={styles.popularityFlag}>
                                MOST POPULAR
                            </span> */}
                            <p className={styles.planPrice}>
                                <span className={styles.amount}>$100</span>
                                <span> /month</span>
                            </p>
                            <div className={styles.planPerks}>
                                <span className={styles.header}>
                                    Pro
                                </span>
                                <p>For most business that want to optimize web queries</p>
                                <ul>
                                    <li><i><FaCheck /></i><span>All limited links</span></li>
                                    <li><i><FaCheck /></i><span>Own analytics platform</span></li>
                                    <li><i><FaCheck /></i><span>Chat support</span></li>
                                    <li><i><FaCheck /></i><span>Optimize hashtags</span></li>
                                    <li><i><FaCheck /></i><span>Unlimited users</span></li>

                                </ul>
                            </div>
                            <button>Choose plan</button>
                        </div>

                        <div className={styles.card}>
                            {/* <span className={styles.popularityFlag}>
                                MOST POPULAR
                            </span> */}
                            <p className={styles.planPrice}>
                                <span className={styles.amount}>$100</span>
                                <span> /month</span>
                            </p>
                            <div className={styles.planPerks}>
                                <span className={styles.header}>
                                    Pro
                                </span>
                                <p>For most business that want to optimize web queries</p>
                                <ul>
                                    <li><i><FaCheck /></i><span>All limited links</span></li>
                                    <li><i><FaCheck /></i><span>Own analytics platform</span></li>
                                    <li><i><FaCheck /></i><span>Chat support</span></li>
                                    <li><i><FaCheck /></i><span>Optimize hashtags</span></li>
                                    <li><i><FaCheck /></i><span>Unlimited users</span></li>
                                </ul>
                            </div>
                            <button>Choose plan</button>
                        </div>
                        <div className={styles.card}>
                            <span className={styles.popularityFlag}>
                                MOST POPULAR
                            </span>
                            <p className={styles.planPrice}>
                                <span className={styles.amount}>$100</span>
                                <span> /month</span>
                            </p>
                            <div className={styles.planPerks}>
                                <span className={styles.header}>
                                    Pro
                                </span>
                                <p>For most business that want to optimize web queries</p>
                                <ul>
                                    <li><i><FaCheck /></i><span>All limited links</span></li>
                                    <li><i><FaCheck /></i><span>Own analytics platform</span></li>
                                    <li><i><FaCheck /></i><span>Chat support</span></li>
                                    <li><i><FaCheck /></i><span>Optimize hashtags</span></li>
                                    <li><i><FaCheck /></i><span>Unlimited users</span></li>
                                </ul>
                            </div>
                            <button>Choose plan</button>
                        </div>
                        <div className={styles.card}>
                            {/* <span className={styles.popularityFlag}>
                                MOST POPULAR
                            </span> */}
                            <p className={styles.planPrice}>
                                <span className={styles.amount}>$100</span>
                                <span> /month</span>
                            </p>
                            <div className={styles.planPerks}>
                                <span className={styles.header}>
                                    Pro
                                </span>
                                <p>For most business that want to optimize web queries</p>
                                <ul>
                                    <li><i><FaCheck /></i><span>All limited links</span></li>
                                    <li><i><FaCheck /></i><span>Own analytics platform</span></li>
                                    <li><i><FaCheck /></i><span>Chat support</span></li>
                                    <li><i><FaCheck /></i><span>Optimize hashtags</span></li>
                                    <li><i><FaCheck /></i><span>Unlimited users</span></li>
                                </ul>
                            </div>
                            <button>Choose plan</button>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Pricing;

// const getStaticProps=async({})=>{
//     const data = await fetch()
//     const res = await data.json()
//     return {
//         data{
            
//         }
//     }
// }

// export const getStaticProps:GetStaticProps =async (context)=>{
//     const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//     const plans: Plans = await data.json()

//     return {
//         props:{
//             plans:"John"
//         }
//     }
// }



