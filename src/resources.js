import React from "react"

import './font.css'


const Resources = () => {

    const articles = [{ name: 'Financial Independence 🎆', link: 'https://www.investopedia.com/articles/personal-finance/112015/these-10-habits-will-help-you-reach-financial-freedom.asp' },
    { name: 'Guide to Budgeting 📚', link: 'https://www.nerdwallet.com/article/finance/how-to-budget' },
    { name: 'Personal Bank Accounts 🏦', link: 'https://www.nerdwallet.com/article/banking/how-to-open-a-bank-account-what-you-need' },
    { name: 'Signs of Financial Abuse ', link: 'https://www.joinonelove.org/learn/what-is-financial-abuse-these-are-the-signs/' },
    { name: 'Prenuptial Agreements 💍', link: 'https://www.brides.com/guide-to-prenups-5094310' }]


    return <>
        <div className="mainContainer">
            <h1> Resources </h1>
            <div className="tableContainer">

                <ul>
                    {articles.map((particle) => (
                        <li key={particle.name}>
                            <a href={particle.link}>{particle.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>

}


export default Resources