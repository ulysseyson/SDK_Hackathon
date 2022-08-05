export const getServerSideProps = async() => {
    LikedCards = {
        "card":[
            {}
        ]
    }
}

const leaderBoard = ({results}) => {
    
    return (
        <div className="container">
            <div>

            </div>
            <style jsx>{`
                .container {
                    display : grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .deck {
                    cursor : pointer;
                }
                .card img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .card:hover img {
                    transform: scale(1.05) translateY(-10px);
                }
                .card h4 {
                    font-size: 18px;
                    text-align: center;
                }
            `}</style>
        </div>
    )
}