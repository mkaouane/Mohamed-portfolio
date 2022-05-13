import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/jinflow.PNG'
import IMG3 from '../../assets/gain.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
    return (
        <section id={"portfolio"}>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className={"container portfolio__container"}>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG1} alt={''}/>
                    </div>
                    <h3>Dashboard CRUD</h3>
                    <div className={"portfolio__item-cta"}>
                        {/* <a href={"https://github.com"} className={'btn'} target={'_blank'}>Github</a> */}
                        <a href={"https://magenta-boba-744a40.netlify.app/"} className={'btn btn-primary'} target={"_blank"}>Live Demo</a>
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG2} alt={''}/>
                    </div>
                    <h3>Jinflow</h3>
                    <div className={"portfolio__item-cta"}>
                        {/* <a href={"https://github.com"} className={'btn'} target={'_blank'}>Github</a> */}
                        <a href={"jinflow.com"} className={'btn btn-primary'} target={"_blank"}>Live Demo</a>
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG3} alt={''}/>
                    </div>
                    <h3>Gain Angel Investor</h3>
                    <div className={"portfolio__item-cta"}>
                        {/* <a href={"https://github.com"} className={'btn'} target={'_blank'}>Github</a> */}
                        <a href={"https://www.gainangelinvestor.com/"} className={'btn btn-primary'} target={"_blank"}>Live Demo</a>
                    </div>
                </article>

            </div>

        </section>
    )
}

export default Portfolio