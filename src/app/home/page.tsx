import Image from "next/image"


const Home = () => {
    return (
        <div className="herosection">
            <div className="left side">
                <h1>Hi I am iqra khan</h1>
                <p>i am front-end developer </p>
                
            </div>
            <div className="rightside">
                <Image src="/bg.jpg" alt="mypic" width={200} height={200}>
                </Image>
            </div>
        </div>
    )
}

export default Home