import "../Home/Home.scss"
import {motion, useAnimation} from "framer-motion";


const Home = () => {
    // animations for the home-banner text

    const container = {
        hidden: { x:"5vw", opacity: 0 },
           
        show: {  
            x:"0vw",
          opacity: 1,
          transition: {
            delay: 2,
            type:'easeIn',
            duration:1.5,
          }
        },
        show2: {
            x:"0vw",
          opacity: 1,
          transition: {
            delay: 2,
            type:'easeIn',
            duration:1.75,
          }
      },
      show3: {
        x:"0vw",
      opacity: 1,
      transition: {
        delay: 2,
        type:'easeIn',
        duration:2,
      }
  },
      
    }
    return (
        <main>
            <section className="home-banner">
                <div className="home-content row">
                    <div className="home-text">
                        <motion.div className="main-text row" 
                        variants={container}
                        initial="hidden"
                        animate="show"
                        // transition={{delay:4, duration:1.5, type:'easeIn', stiffness:120}}
                        >
                            <h3>Business Support and Advice</h3>
                            <h2>Delivering Results <br/> Together</h2>
                        </motion.div>

                        <motion.div className="home-paragraph row"
                            variants={container}
                            initial="hidden"
                            animate="show2"
                        >
                            <p>We are a leading Cumbrian provider of <b>business support</b> and advice, offering a range of solutions from HR and people management, through business strategy and growth, to training, quality management systems and project management.</p>
                            <p>With a strong client base within Cumbria and the North-West of England, we also work with clients across the UK.</p>

                        </motion.div>
                    </div>
                    <motion.div className="home-button"
                       variants={container}
                       initial="hidden"
                       animate="show3" 
                        >
                        <a href="/about" className="service">Our Service</a>
                        <a href="#" className="contact">Contact Us</a>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}


export default Home;